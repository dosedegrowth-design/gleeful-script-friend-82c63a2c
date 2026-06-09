import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e: React.FormEvent | string) => {
    if (typeof e !== 'string') e.preventDefault();
    
    const userMessage = typeof e === 'string' ? e : input.trim();
    if (!userMessage || loading) return;

    if (typeof e !== 'string') setInput('');
    const newMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { 
          messages: newMessages,
          session_id: localStorage.getItem('moovia_session')
        }
      });

      if (error) throw error;

      if (data && data.content && data.content[0]) {
        setMessages([...newMessages, { role: 'assistant', content: data.content[0].text }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Desculpe, tive um problema ao processar sua mensagem. Pode tentar novamente?' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[850] flex flex-col items-end">
      {isOpen && (
        <div className="w-[calc(100vw-40px)] md:w-[380px] h-[560px] max-h-[calc(100vh-140px)] bg-black/95 backdrop-blur-xl border border-border flex flex-col shadow-2xl animate-[fadeUp_0.4s_ease_forwards] mb-6">
          <div className="p-6 border-b border-border flex items-center justify-between bg-black-3/50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 text-gold">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M100 20 L115 35 H165 V85 L180 100 L165 115 V165 H115 L100 180 L85 165 H35 V115 L20 100 L35 85 V35 H85 L100 20 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1"/>
                  <path d="M100 20 L115 35 H165 V85 L180 100 L165 115 V165 H115 L100 180 L85 165 H35 V115 L20 100 L35 85 V35 H85 L100 20 Z" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                  <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                  <path d="M100 88 V112 M88 100 H112" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                  <circle cx="100" cy="20" r="1.5" fill="currentColor"/>
                  <circle cx="180" cy="100" r="1.5" fill="currentColor"/>
                  <circle cx="100" cy="180" r="1.5" fill="currentColor"/>
                  <circle cx="20" cy="100" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h4 className="font-amotha text-xl text-white tracking-tight">Assistente MOOVIA</h4>
                <p className="font-urbanist text-[10px] uppercase tracking-[0.2em] text-gold/60">Especialista em Coordenação</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 font-urbanist text-[14px]">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-white/40 mb-8 font-light italic leading-relaxed">Olá! Como posso ajudar na coordenação da sua transição para Portugal?</p>
                <div className="flex flex-col gap-3">
                  {['Como funciona?', 'Quanto custa?', 'Agendar conversa'].map(q => (
                    <button 
                      key={q} 
                      onClick={() => sendMessage(q)}
                      className="p-4 border border-border text-white/50 hover:text-gold hover:border-gold transition-all duration-300 text-[11px] uppercase tracking-[0.2em] bg-white/05"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={cn("max-w-[85%] p-4 leading-relaxed", m.role === 'user' ? "ml-auto bg-gold text-black font-medium" : "mr-auto bg-black-3 text-white/70 border border-border/50")}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto bg-black-3 p-4 border border-border/50 text-gold animate-pulse">
                ...
              </div>
            )}
          </div>

          <form onSubmit={sendMessage} className="p-4 border-t border-border bg-black-3/30 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Sua pergunta sobre a transição..."
              className="flex-1 bg-black/40 border border-border text-white px-4 py-3 font-urbanist text-sm outline-none focus:border-gold transition-colors placeholder:text-white/20"
            />
            <button type="submit" className="bg-gold text-black p-3 hover:bg-gold-xl transition-colors disabled:opacity-50">
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            </button>
          </form>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black/90 backdrop-blur-md border border-border/50 rounded-full flex items-center justify-center text-gold shadow-2xl hover:scale-105 transition-all duration-300 group relative"
      >
        <div className="absolute inset-0 rounded-full border border-gold/20 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        {isOpen ? <X size={24} /> : (
          <div className="w-10 h-10">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(173,137,87,0.3)]">
              <path d="M100 20 L115 35 H165 V85 L180 100 L165 115 V165 H115 L100 180 L85 165 H35 V115 L20 100 L35 85 V35 H85 L100 20 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1"/>
              <path d="M100 20 L115 35 H165 V85 L180 100 L165 115 V165 H115 L100 180 L85 165 H35 V115 L20 100 L35 85 V35 H85 L100 20 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M100 88 V112 M88 100 H112" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              <circle cx="100" cy="20" r="1.5" fill="currentColor"/>
              <circle cx="180" cy="100" r="1.5" fill="currentColor"/>
              <circle cx="100" cy="180" r="1.5" fill="currentColor"/>
              <circle cx="20" cy="100" r="1.5" fill="currentColor"/>
            </svg>
          </div>
        )}
      </button>
    </div>
  );
}
