import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const number = "351000000000";
  const msg = encodeURIComponent("Olá! Vim pelo site da MOOVIA Portugal e gostaria de saber mais.");
  return (
    <a
      href={`https://wa.me/${number}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105"
      style={{ background: "var(--copper)", color: "var(--ivory)", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
    >
      <MessageCircle size={22} />
    </a>
  );
}
