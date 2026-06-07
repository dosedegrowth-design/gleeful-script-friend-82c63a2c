import { useState } from 'react';
import { cn } from '@/lib/utils';

export const FormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="bg-black-2 py-[120px] px-8">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="font-sora font-extralight text-5xl text-gold-l mb-8">
            Recebemos o seu caso, {formData.nome.split(' ')[0]}.
          </h2>
          <p className="font-urbanist font-light text-lg text-white/35 max-w-xl mx-auto mb-12">
            O Frederico vai analisar o seu perfil e entrar em contacto pessoalmente.
            Enquanto isso, pode agendar diretamente a sua Conversa Gratuita:
          </p>
          
          <div className="max-w-4xl mx-auto bg-black-3 border border-border h-[600px] mb-12">
            {/* Calendly placeholder */}
            <div className="flex items-center justify-center h-full text-white/10 font-urbanist uppercase tracking-[0.3em]">
              Calendly Embed
            </div>
          </div>
          
          <a href="#" className="font-urbanist font-normal text-gold-l hover:text-gold transition-colors">
            Prefere WhatsApp? →
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="bg-black-2 py-[120px] px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="font-urbanist font-normal text-[11px] uppercase tracking-[0.32em] text-gold mb-8 reveal">
            O primeiro passo
          </div>
          <h2 className="font-sora font-extralight text-5xl text-white mb-8 reveal">A conversa certa.</h2>
          <p className="font-urbanist font-light text-lg text-white/35 mb-12 max-w-md leading-relaxed reveal">
            Não é um formulário de contato. É o início de um diagnóstico.
            Quanto mais você nos contar, mais preciso será o nosso retorno.
          </p>
          
          <div className="border-l-2 border-gold bg-gold/05 p-6 italic font-urbanist font-light text-white/70 reveal">
            "Cada contato é respondido pessoalmente pelo Frederico,
            sem chatbot, sem script."
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-urbanist text-[11px] uppercase tracking-widest text-white/35">Qual o seu objetivo?</label>
              <select className="w-full bg-black-3 border border-border px-4 py-3 font-urbanist font-light text-sm text-white/70 focus:border-gold outline-none transition-all">
                <option>Trabalhar em Portugal</option>
                <option>Estudar</option>
                <option>Mudar com a família</option>
                <option>Investir</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-urbanist text-[11px] uppercase tracking-widest text-white/35">Quando pretende mudar?</label>
              <select className="w-full bg-black-3 border border-border px-4 py-3 font-urbanist font-light text-sm text-white/70 focus:border-gold outline-none transition-all">
                <option>Menos de 3 meses</option>
                <option>3 a 6 meses</option>
                <option>6 a 12 meses</option>
                <option>Ainda estou pesquisando</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-urbanist text-[11px] uppercase tracking-widest text-white/35">Quantas pessoas?</label>
              <select className="w-full bg-black-3 border border-border px-4 py-3 font-urbanist font-light text-sm text-white/70 focus:border-gold outline-none transition-all">
                <option>Apenas eu</option>
                <option>Casal</option>
                <option>Família com filhos</option>
                <option>Tenho animais de estimação</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-urbanist text-[11px] uppercase tracking-widest text-white/35">Em que fase está?</label>
              <select className="w-full bg-black-3 border border-border px-4 py-3 font-urbanist font-light text-sm text-white/70 focus:border-gold outline-none transition-all">
                <option>Apenas pesquisando</option>
                <option>Comparando alternativas</option>
                <option>Já tomei a decisão</option>
                <option>Já tenho proposta confirmada</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-urbanist text-[11px] uppercase tracking-widest text-white/35">Seu nome completo</label>
            <input 
              required
              type="text" 
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              className="w-full bg-black-3 border border-border px-4 py-3 font-urbanist font-light text-sm text-white/70 focus:border-gold outline-none transition-all"
              placeholder="Ex: João Silva"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-urbanist text-[11px] uppercase tracking-widest text-white/35">WhatsApp</label>
              <input 
                required
                type="tel" 
                className="w-full bg-black-3 border border-border px-4 py-3 font-urbanist font-light text-sm text-white/70 focus:border-gold outline-none transition-all"
                placeholder="+55 11 99999-9999"
              />
            </div>
            <div className="space-y-2">
              <label className="font-urbanist text-[11px] uppercase tracking-widest text-white/35">E-mail</label>
              <input 
                required
                type="email" 
                className="w-full bg-black-3 border border-border px-4 py-3 font-urbanist font-light text-sm text-white/70 focus:border-gold outline-none transition-all"
                placeholder="email@exemplo.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-urbanist text-[11px] uppercase tracking-widest text-white/35">Conte brevemente o seu caso (opcional)</label>
            <textarea 
              rows={3}
              className="w-full bg-black-3 border border-border px-4 py-3 font-urbanist font-light text-sm text-white/70 focus:border-gold outline-none transition-all resize-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full py-5 text-[13px] tracking-[0.22em]">
            Enviar e aguardar retorno
          </button>
        </form>
      </div>
    </section>
  );
};
