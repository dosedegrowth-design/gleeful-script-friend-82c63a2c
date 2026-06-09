import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
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

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
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
    <div className="fixed bottom-24 lg:bottom-8 right-8 lg:right-32 z-[850] flex flex-col items-end">
      {isOpen && (
        <div className="w-[calc(100vw-40px)] md:w-[380px] h-[560px] max-h-[calc(100vh-140px)] bg-black-2 border border-border flex flex-col shadow-2xl animate-[fadeUp_0.4s_ease_forwards] mb-6">
          {/* Header */}
          <div className="p-6 border-b border-border flex items-center justify-between bg-black-3">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 text-gold">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 10 L130 40 L160 10 L190 40 L160 70 L190 100 L160 130 L190 160 L160 190 L130 160 L100 190 L70 160 L40 190 L10 160 L40 130 L10 100 L40 70 L10 40 L40 10 L70 40 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h4 className="font-amotha text-lg text-white">Assistente MOOVIA</h4>
                <p className="font-urbanist text-[10px] uppercase tracking-widest text-gold-l">Online agora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white-4 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 font-urbanist text-sm">
            {messages.length === 0 && (
              <div className="text-center py-10">
                <p className="text-white-3 mb-6">Olá! Como posso ajudar na sua transição para Portugal?</p>
                <div className="flex flex-col gap-2">
                  {['Como funciona?', 'Quanto custa?', 'Agendar conversa'].map(q => (
                    <button 
                      key={q} 
                      onClick={() => { setInput(q); }}
                      className="p-3 border border-border text-white-4 hover:text-gold hover:border-gold transition-colors text-[12px] uppercase tracking-widest"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={cn("max-w-[85%] p-4 rounded-sm", m.role === 'user' ? "ml-auto bg-gold text-black font-medium" : "mr-auto bg-black-3 text-white-3 border border-border")}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto bg-black-3 p-4 border border-border text-gold animate-pulse">
                ...
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-4 border-t border-border bg-black-3 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-black border border-border text-white px-4 py-3 font-urbanist text-sm outline-none focus:border-gold"
            />
            <button type="submit" className="bg-gold text-black p-3 hover:bg-gold-xl transition-colors disabled:opacity-50">
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            </button>
          </form>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black-3 border border-border rounded-full flex items-center justify-center text-gold shadow-2xl hover:scale-110 transition-transform group"
      >
        {isOpen ? <X size={24} /> : (
          <div className="w-8 h-8">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 10 L130 40 L160 10 L190 40 L160 70 L190 100 L160 130 L190 160 L160 190 L130 160 L100 190 L70 160 L40 190 L10 160 L40 130 L10 100 L40 70 L10 40 L40 10 L70 40 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        )}
      </button>
    </div>
  );
}
