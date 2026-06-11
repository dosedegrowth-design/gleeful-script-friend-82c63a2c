'use client'

import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface LeadData {
  name?: string
  whatsapp?: string
  email?: string
  objective?: string
  timing?: string
  notes?: string
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>({});
  const [leadSaved, setLeadSaved] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [sessionStart] = useState(Date.now());
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Saudação inicial ao abrir
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        role: 'assistant',
        content: 'Olá! Seja bem-vindo à MOOVIA Portugal.\n\nAntes de tudo — como posso te chamar?',
        timestamp: new Date()
      }
      setMessages([greeting])
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Extrai e limpa o JSON de captura de lead da resposta
  function extractLeadCapture(text: string): { clean: string; data: LeadData | null } {
    const match = text.match(/\[LEAD_CAPTURE\](.*?)\[\/LEAD_CAPTURE\]/s)
    if (!match) return { clean: text, data: null }

    try {
      const data = JSON.parse(match[1])
      const clean = text.replace(/\[LEAD_CAPTURE\].*?\[\/LEAD_CAPTURE\]/s, '').trim()
      return { clean, data }
    } catch {
      return { clean: text, data: null }
    }
  }

  // Salva lead no Supabase
  async function saveLead(data: LeadData) {
    if (leadSaved) return
    
    const { error } = await supabase.from('leads').insert({
      name:         data.name,
      whatsapp:     data.whatsapp,
      email:        data.email,
      objective:    data.objective,
      timing:       data.timing,
      message:      data.notes,
      source:       'chat',
      status:       'novo',
      page_history: JSON.parse(localStorage.getItem('moovia_history') || '[]'),
      session_id:   localStorage.getItem('moovia_session'),
      utm_source:   JSON.parse(localStorage.getItem('moovia_utm') || '{}').source,
      utm_medium:   JSON.parse(localStorage.getItem('moovia_utm') || '{}').medium,
      utm_campaign: JSON.parse(localStorage.getItem('moovia_utm') || '{}').campaign,
    })
    
    if (!error) {
      setLeadSaved(true)
      console.log('[MOOVIA] Lead salvo:', data.name)
    }
  }

  // Salva conversa no Supabase ao fechar ou sair
  async function saveConversation(msgs: Message[], currentLead: LeadData) {
    if (msgs.length === 0) return;

    await supabase.from('chat_logs').insert({
      session_id:    localStorage.getItem('moovia_session'),
      messages:      msgs.map(m => ({
        role:      m.role,
        content:   m.content,
        timestamp: m.timestamp.toISOString()
      })),
      lead_captured: !!currentLead.whatsapp,
      page_url:      window.location.href,
      duration_secs: Math.floor((Date.now() - sessionStart) / 1000)
    })
  }

  // Validação básica de telefone
  function isValidPhone(phone: string): boolean {
    const digits = phone.replace(/\D/g, '')
    return digits.length >= 10 && (phone.startsWith('+') || digits.length >= 11)
  }

  function looksLikePhone(text: string): boolean {
    return /[\d\s\-\+\(\)]{8,}/.test(text) && text.replace(/\D/g, '').length >= 8
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setInput(val)
    setPhoneError('')

    if (looksLikePhone(val) && val.length > 8) {
      if (!val.startsWith('+')) {
        setPhoneError('Inclua o código do país: +55 para Brasil, +351 para Portugal')
      } else if (!isValidPhone(val)) {
        setPhoneError('Número incompleto')
      }
    }
  }

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const text = input.trim();
    if (!text || loading || (phoneError && looksLikePhone(text))) return;

    const userMsg: Message = { role: 'user' as const, content: text, timestamp: new Date() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setPhoneError('');
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { 
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          session_id: localStorage.getItem('moovia_session')
        }
      });

      if (error) throw error;

      if (data && data.content && data.content[0]) {
        const raw = data.content[0].text;
        const { clean, data: captured } = extractLeadCapture(raw);

        if (captured) {
          const updated = { ...leadData, ...captured };
          setLeadData(updated);
          await saveLead(updated);
        }

        setMessages([...newMessages, { 
          role: 'assistant', 
          content: clean,
          timestamp: new Date() 
        }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: 'Tive uma instabilidade aqui. Pode repetir a sua mensagem?',
        timestamp: new Date() 
      }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  useEffect(() => {
    const handleUnload = () => {
      saveConversation(messages, leadData);
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      if (messages.length > 0) handleUnload();
    };
  }, [messages, leadData]);

  const MooviaIsotipo = ({ size }: { size: number }) => (
    <img src="/mooviagold.svg" alt="MOOVIA" style={{ width: size, height: size }} className="object-contain" />
  );

  return (
    <div className="fixed bottom-8 right-8 z-[850] flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="w-[calc(100vw-40px)] md:w-[380px] h-[560px] max-h-[calc(100vh-140px)] bg-[#12141a] border border-gold/20 flex flex-col shadow-2xl animate-[fadeUp_0.4s_ease_forwards] mb-6 pointer-events-auto">
          <div className="p-4 border-b border-gold/15 flex items-center justify-between bg-black-3/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold/12 border border-gold/30 flex items-center justify-center">
                <img src="/mooviagold.svg" alt="MOOVIA" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h4 className="font-sora text-[13px] font-normal text-[#f9f5ec]">MOOVIA</h4>
                <p className="font-urbanist text-[11px] text-white/35 uppercase tracking-[0.12em]">
                  {leadData.name ? `Olá, ${leadData.name}` : 'Assistente'}
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/35 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-3 font-urbanist text-[14px]">
            {messages.map((msg, i) => (
              <div key={i} className={cn(
                "max-w-[82%] p-3 leading-relaxed", 
                msg.role === 'user' 
                  ? "ml-auto bg-gold/15 text-[#f9f5ec] font-normal" 
                  : "mr-auto bg-black-3 text-white/80 border-l-2 border-l-gold"
              )}>
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="flex gap-1 p-3">
                {[0,1,2].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            )}
          </div>

          <form onSubmit={sendMessage} className="p-4 border-t border-gold/15 bg-black-3/30">
            {phoneError && (
              <p className="font-urbanist text-[11px] color-gold mb-2 tracking-[0.06em] text-gold">
                ⚠ {phoneError}
              </p>
            )}
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Digite sua mensagem..."
                className={cn(
                  "flex-1 bg-[#0e0f12] border p-3 font-urbanist text-sm outline-none transition-colors text-[#f9f5ec]",
                  phoneError ? "border-gold" : "border-gold/20 focus:border-gold"
                )}
              />
              <button 
                type="submit" 
                disabled={loading || !input.trim() || !!phoneError}
                className={cn(
                  "w-10 flex items-center justify-center transition-all font-bold",
                  input.trim() && !phoneError ? "bg-gold text-[#0e0f12]" : "bg-gold/20 text-[#0e0f12] cursor-not-allowed"
                )}
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(173,137,87,0.35)] hover:scale-105 transition-all duration-300"
      >
        {isOpen ? <X size={24} className="text-[#0e0f12]" /> : <img src="/mooviagold.svg" alt="MOOVIA" className="w-7 h-7 object-contain" />}
      </button>
    </div>
  );
}
