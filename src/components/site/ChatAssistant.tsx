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

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        role: 'assistant',
        content: 'Olá! Seja bem-vindo à MOOVIA Portugal.\n\nAntes de tudo — como posso te chamar?',
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
          session_id: localStorage.getItem('moovia_session')
        }
      });

      if (error) throw error;

      if (data?.content?.[0]) {
        const reply = data.content[0].text.replace(/\[LEAD_CAPTURE\].*?\[\/LEAD_CAPTURE\]/s, '').trim();
        setMessages([...newMessages, { role: 'assistant', content: reply, timestamp: new Date() }]);
      }
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: 'Tive uma instabilidade. Pode repetir?', timestamp: new Date() }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[850] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="w-[calc(100vw-40px)] md:w-[380px] h-[560px] max-h-[calc(100vh-140px)] bg-navy-rich/95 backdrop-blur-xl border border-line-cool flex flex-col shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] mb-6 rounded-[20px] overflow-hidden"
          >
            <div className="p-6 border-b border-line-cool flex items-center justify-between bg-navy-deep/40">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy-raise flex items-center justify-center border border-line-gold/20">
                  <img src="/mooviagold.svg" alt="M" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h4 className="font-sora text-[13px] font-[300] text-off tracking-widest uppercase">MOOVIA</h4>
                  <p className="font-urbanist text-[11px] text-cobre uppercase tracking-widest">Assistente</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-mut hover:text-off transition-colors">
                <X size={20} weight="thin" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn("flex flex-col max-w-[85%]", msg.role === 'user' ? "ml-auto items-end" : "items-start")}
                >
                  <div className={cn(
                    "p-4 text-[14px] leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-cobre text-navy-deep rounded-2xl rounded-tr-none font-[500]" 
                      : "bg-navy-raise/60 text-mut rounded-2xl rounded-tl-none border border-line-cool"
                  )}>
                    {msg.content}
                  </div>
                  <span className="text-[10px] text-mut-2 mt-2 uppercase tracking-widest">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </motion.div>
              ))}
              {loading && (
                <div className="flex gap-2 p-4 bg-navy-raise/30 rounded-2xl border border-line-cool w-fit animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-cobre/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-cobre/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-cobre/40" />
                </div>
              )}
            </div>

            <form onSubmit={sendMessage} className="p-6 bg-navy-deep/30 border-t border-line-cool">
              <div className="relative">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escreva sua mensagem..."
                  className="w-full bg-navy-deep border border-line-cool p-4 pr-14 font-urbanist text-sm outline-none transition-all focus:border-cobre text-off rounded-xl placeholder:text-mut-2"
                />
                <button 
                  type="submit" 
                  disabled={loading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-all text-cobre hover:scale-110 disabled:opacity-30"
                >
                  {loading ? <CircleNotch size={20} className="animate-spin" /> : <PaperPlaneTilt size={20} weight="thin" />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-navy-rich border border-line-gold/40 rounded-full flex items-center justify-center shadow-2xl transition-colors hover:border-cobre relative group"
      >
        <div className="absolute inset-0 bg-cobre opacity-0 group-hover:opacity-10 rounded-full transition-opacity" />
        {isOpen ? (
          <X size={24} weight="thin" className="text-cobre" />
        ) : (
          <ChatCircleDots size={28} weight="thin" className="text-cobre" />
        )}
      </motion.button>
    </div>
  );
}
