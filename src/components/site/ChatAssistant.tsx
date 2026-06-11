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
        const reply = data.content[0].text.trim();
        setMessages([...newMessages, { role: 'assistant', content: reply, timestamp: new Date() }]);
      }
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: 'Tive uma instabilidade. Pode repetir?', timestamp: new Date() }]);
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
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-b18">
                   <span className="text-gold font-sora text-sm">M</span>
                </div>
                <div>
                  <h4 className="font-sora text-[13px] font-[500] text-white tracking-widest uppercase">MOOVIA</h4>
                  <p className="font-urbanist text-[11px] text-gold uppercase tracking-widest">Assistente</p>
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
                  className="w-full bg-black-3 border border-b18 p-4 pr-14 font-urbanist text-sm outline-none focus:border-gold text-white rounded-xl"
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
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 1 }}
              className="bg-black-3/90 backdrop-blur-md border border-b35 px-4 py-2 rounded-full mb-0 shadow-xl pointer-events-none"
            >
              <p className="font-urbanist text-[11px] text-white/80 uppercase tracking-widest whitespace-nowrap">
                Convidando para iniciar uma conversa
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-black-3 border border-b35 rounded-full flex items-center justify-center shadow-2xl transition-all hover:border-gold group relative shrink-0"
        >
          {isOpen ? (
            <X size={24} weight="thin" className="text-gold" />
          ) : (
            <ChatCircleDots size={28} weight="thin" className="text-gold" />
          )}
        </button>
      </div>
    </div>
  );
}
