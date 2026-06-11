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
      
      {/* V4 BACKGROUND MESH */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-navy-deep">
        <div 
          className="absolute top-0 right-0 w-[80vw] h-[80vh] opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(173,137,87,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[60vw] h-[60vh] opacity-15"
          style={{
            background: 'radial-gradient(circle at center, rgba(64,126,141,0.10) 0%, transparent 70%)',
            filter: 'blur(60px)'
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
