import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { ChatAssistant } from "./ChatAssistant";
import { CustomCursor } from "../ui/CustomCursor";

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="grain" />
      <CustomCursor />
      <Nav />
      <main className="relative z-10 overflow-x-hidden">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <ChatAssistant />
    </>
  );
}


