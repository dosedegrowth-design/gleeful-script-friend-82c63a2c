'use client'

import { useState, useRef, useEffect } from 'react';
import { X, PaperPlaneTilt, CircleNotch, ChatCircleDots } from '@phosphor-icons/react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('moovia_chat_session');
  if (!id) {
    id = (crypto as any).randomUUID ? (crypto as any).randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('moovia_chat_session', id as string);
  }
  return id as string;
}

const LEAD_RE = /\[LEAD_CAPTURE\]([\s\S]*?)\[\/LEAD_CAPTURE\]/;

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionIdRef = useRef<string>('');
  const startedAtRef = useRef<number>(Date.now());
  const leadCapturedRef = useRef<boolean>(false);
  const leadIdRef = useRef<string | null>(null);

  useEffect(() => {
    sessionIdRef.current = getSessionId();
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        role: 'assistant',
        content: 'Olá! Seja bem-vindo à MOOVIA Portugal.\n\nComo posso ajudar na sua transição internacional?',
        timestamp: new Date()
      }
      setTimeout(() => setMessages([greeting]), 400)
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function persistConversation(allMessages: Message[]) {
    try {
      const duration = Math.floor((Date.now() - startedAtRef.current) / 1000);
      await supabase.from('chat_logs').insert({
        session_id: sessionIdRef.current,
        messages: allMessages.map(m => ({ role: m.role, content: m.content, timestamp: m.timestamp })),
        lead_captured: leadCapturedRef.current,
        lead_id: leadIdRef.current,
        page_url: typeof window !== 'undefined' ? window.location.href.slice(0, 2000) : null,
        duration_secs: Math.min(duration, 86400),
      });
    } catch (err) {
      console.error('persist chat_logs failed', err);
    }
  }

  async function maybeCaptureLead(rawReply: string) {
    const match = rawReply.match(LEAD_RE);
    if (!match || leadCapturedRef.current) return;
    try {
      const parsed = JSON.parse(match[1]);
      if (!parsed?.name && !parsed?.email && !parsed?.whatsapp) return;
      const { data, error } = await supabase
        .from('leads')
        .insert({
          name: parsed.name || null,
          email: parsed.email || null,
          whatsapp: parsed.whatsapp || null,
          objective: parsed.objective || null,
          timing: parsed.timing || null,
          notes: parsed.notes || null,
          source: 'chat',
          session_id: sessionIdRef.current,
          status: 'novo',
        })
        .select('id')
        .maybeSingle();
      if (error) throw error;
      leadCapturedRef.current = true;
      leadIdRef.current = data?.id || null;
    } catch (err) {
      console.error('lead capture failed', err);
    }
  }

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text, timestamp: new Date() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { 
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }
      });

      if (error) throw error;

      if (data?.content?.[0]) {
        const raw = data.content[0].text.trim();
        await maybeCaptureLead(raw);
        const cleaned = raw.replace(LEAD_RE, '').trim();
        const finalMessages: Message[] = [...newMessages, { role: 'assistant', content: cleaned, timestamp: new Date() }];
        setMessages(finalMessages);
        await persistConversation(finalMessages);
      } else {
        await persistConversation(newMessages);
      }
    } catch (err) {
      const errored: Message[] = [...newMessages, { role: 'assistant', content: 'Tive uma instabilidade. Pode repetir?', timestamp: new Date() }];
      setMessages(errored);
      await persistConversation(errored);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-28 z-[800] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[calc(100vw-40px)] md:w-[380px] h-[560px] max-h-[calc(100vh-140px)] bg-black-3/95 backdrop-blur-xl border border-b35 flex flex-col shadow-2xl mb-6 rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-b35 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-b18 overflow-hidden group-hover:border-gold transition-colors duration-500">
                   <img src="/mooviagold.png" alt="MOOVIA" className="w-6 h-6 object-contain group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out" />
                </div>
                <div>
                  <h4 className="font-sora text-[13px] font-[500] text-white tracking-widest uppercase">MOOVIA</h4>
                  <p className="font-body text-[11px] text-gold uppercase tracking-widest">Assistente</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-w35 hover:text-white transition-colors">
                <X size={20} weight="thin" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg, i) => (
                <div 
                  key={i}
                  className={cn("flex flex-col max-w-[85%]", msg.role === 'user' ? "ml-auto items-end" : "items-start")}
                >
                  <div className={cn(
                    "p-4 text-[14px] leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-b18 text-white rounded-2xl rounded-tr-none" 
                      : "bg-black-3 text-white/70 rounded-2xl rounded-tl-none border border-b35 border-l-2 border-l-gold"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={sendMessage} className="p-6 bg-black-2 border-t border-b35">
              <div className="relative">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escreva sua mensagem..."
                  className="w-full bg-black-3 border border-b18 p-4 pr-14 font-body text-sm outline-none focus:border-gold text-white rounded-xl"
                />
                <button 
                  type="submit" 
                  disabled={loading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-all text-gold hover:scale-110 disabled:opacity-30"
                >
                  {loading ? <CircleNotch size={20} className="animate-spin" /> : <PaperPlaneTilt size={20} weight="thin" />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex items-center gap-4">

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-black-3 border border-b35 rounded-full flex items-center justify-center shadow-2xl transition-all hover:border-gold group relative shrink-0"
        >
          {isOpen ? (
            <X size={24} weight="thin" className="text-gold" />
          ) : (
            <img src="/mooviagold.png" alt="MOOVIA" className="w-7 h-7 object-contain transition-transform duration-700 group-hover:rotate-[360deg]" />
          )}
        </button>
      </div>
    </div>
  );
}
