import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ChatAssistant } from "./ChatAssistant";


function useMooviaTracking() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Session id
    let sid = localStorage.getItem("moovia_session");
    if (!sid) {
      sid = crypto.randomUUID();
      localStorage.setItem("moovia_session", sid);
    }
    // UTM capture
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
    // History
    const history = JSON.parse(localStorage.getItem("moovia_history") || "[]");
    history.push({ page: pathname, ts: Date.now(), ref: document.referrer });
    localStorage.setItem("moovia_history", JSON.stringify(history.slice(-20)));
  }, [pathname]);
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useMooviaTracking();
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <ChatAssistant />
    </>
  );
}
