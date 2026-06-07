import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/351912345678" // Example PT number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[800] w-[52px] h-[52px] bg-gold rounded-full flex items-center justify-center text-black shadow-[0_8px_32px_rgba(173,137,87,0.3)] transition-all duration-300 hover:scale-110 hover:bg-gold-l group"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="absolute right-full mr-4 bg-black-3 border border-border px-4 py-2 rounded-sm text-xs font-urbanist text-white opacity-0 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 whitespace-nowrap">
        Falar com Frederico
      </span>
    </a>
  );
};
