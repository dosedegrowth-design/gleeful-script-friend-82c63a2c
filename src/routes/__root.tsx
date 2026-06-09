import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-amotha font-extralight">404</h1>
        <h2 className="mt-4 text-xl font-urbanist font-light uppercase tracking-widest text-gold">Page not found</h2>
        <p className="mt-2 text-sm text-white/40 font-urbanist">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gold px-8 py-3 text-sm font-semibold text-black uppercase tracking-widest transition-colors hover:bg-gold-xl"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-amotha font-light tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-white/40 font-urbanist">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-gold px-8 py-3 text-sm font-semibold text-black uppercase tracking-widest transition-colors hover:bg-gold-xl"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-border px-8 py-3 text-sm font-urbanist font-light text-white uppercase tracking-widest transition-colors hover:border-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MOOVIA Portugal" },
      { name: "description", content: "Coordenação Internacional de Vida e Património" },
      { name: "author", content: "MOOVIA" },
      { property: "og:title", content: "MOOVIA Portugal" },
      { property: "og:description", content: "Coordenação Internacional de Vida e Património" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@MOOVIA" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const handleUnhandledError = (event: ErrorEvent) => {
      console.error("Caught unhandled error:", event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Caught unhandled promise rejection:", event.reason);
    };

    window.addEventListener("error", handleUnhandledError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleUnhandledError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    
    document.addEventListener('mousemove', onMouseMove);

    const animateCursor = () => {
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateCursor);
    };
    const rafId = requestAnimationFrame(animateCursor);

    const onMouseEnter = () => {
      ring.style.width = '64px';
      ring.style.height = '64px';
      ring.style.borderColor = 'rgba(173,137,87,0.8)';
      dot.style.transform = 'translate(-50%,-50%) scale(1.5)';
    };
    const onMouseLeave = () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(173,137,87,0.4)';
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
    };

    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, select, input, textarea, .interactive');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
      return interactiveElements;
    };

    let elements = updateInteractiveElements();

    // Re-bind on route change
    const observer = new MutationObserver(() => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      elements = updateInteractiveElements();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      observer.disconnect();
    };
  }, []);


  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="cursor-dot" className="hidden lg:block fixed top-0 left-0 w-8 h-8 text-gold pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[transform_0.15s_ease,opacity_0.2s]">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(173,137,87,0.4)]">
            <path d="M100 20 L115 35 H165 V85 L180 100 L165 115 V165 H115 L100 180 L85 165 H35 V115 L20 100 L35 85 V35 H85 L100 20 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1"/>
            <path d="M100 20 L115 35 H165 V85 L180 100 L165 115 V165 H115 L100 180 L85 165 H35 V115 L20 100 L35 85 V35 H85 L100 20 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <path d="M100 88 V112 M88 100 H112" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
            <circle cx="100" cy="20" r="1.5" fill="currentColor"/>
            <circle cx="180" cy="100" r="1.5" fill="currentColor"/>
            <circle cx="100" cy="180" r="1.5" fill="currentColor"/>
            <circle cx="20" cy="100" r="1.5" fill="currentColor"/>
          </svg>
        </div>
        <div id="cursor-ring" className="hidden lg:block fixed top-0 left-0 w-9 h-9 border border-gold/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[transform_0.2s_ease,width_0.25s,height_0.25s,opacity_0.2s]" />
        {children}
        <Toaster position="top-right" richColors />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}