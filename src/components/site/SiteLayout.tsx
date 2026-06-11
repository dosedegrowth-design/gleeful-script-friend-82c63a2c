import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ChatAssistant } from "./ChatAssistant";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { motion } from "framer-motion";

function useMooviaTracking() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (typeof window === "undefined") return;
    let sid = localStorage.getItem("moovia_session");
    if (!sid) {
      sid = crypto.randomUUID();
      localStorage.setItem("moovia_session", sid);
    }
    const p = new URLSearchParams(window.location.search);
    if (p.get("utm_source")) {
      localStorage.setItem(
        "moovia_utm",
        JSON.stringify({
          source: p.get("utm_source"),
          medium: p.get("utm_medium"),
          campaign: p.get("utm_campaign"),
        }),
      );
    }
    const history = JSON.parse(localStorage.getItem("moovia_history") || "[]");
    history.push({ page: pathname, ts: Date.now(), ref: document.referrer });
    localStorage.setItem("moovia_history", JSON.stringify(history.slice(-20)));
  }, [pathname]);
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useMooviaTracking();

  return (
    <>
      <div className="grain" />
      
      {/* V4 BACKGROUND MESH — Global fallback */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-navy">
        <div 
          className="absolute top-0 right-0 w-[100vw] h-[100vh] opacity-100"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(173,137,87,0.12) 0%, transparent 100%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[100vw] h-[100vh] opacity-100"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 20% 80%, rgba(64,126,141,0.10) 0%, transparent 100%)',
          }}
        />
      </div>

      <Nav />
      <main className="relative z-10 overflow-x-hidden">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <ChatAssistant />
    </>
  );
}
