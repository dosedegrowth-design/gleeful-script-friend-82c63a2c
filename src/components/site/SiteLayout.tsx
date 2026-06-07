import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-0">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
