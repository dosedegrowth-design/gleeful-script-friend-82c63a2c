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
import { AirplaneScene } from "@/components/AirplaneScene";


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
      { name: "twitter:title", content: "MOOVIA Portugal" },
      { name: "twitter:description", content: "Coordenação Internacional de Vida e Património" },
      { property: "og:image", content: "/mooviagold.svg" },
      { name: "twitter:image", content: "/mooviagold.svg" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/mooviagold.svg" },
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
    if (window.innerWidth < 1024) {
      document.body.style.cursor = 'auto';
      return;
    }
    
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    
    document.addEventListener('mousemove', onMouseMove, { passive: true });

    const animateCursor = () => {
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
      ring.style.borderColor = 'rgba(206,173,132,0.8)';
      dot.style.transform = 'translate(-50%,-50%) scale(1.5)';
      dot.classList.add('cursor-hover');
    };
    const onMouseLeave = () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(206,173,132,0.4)';
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
      dot.classList.remove('cursor-hover');
    };

    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .interactive, .cursor-pointer');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
      return interactiveElements;
    };

    let elements = updateInteractiveElements();

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
        <div id="cursor-dot" className="hidden lg:block fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[transform_0.6s_cubic-bezier(0.4,0,0.2,1),opacity_0.2s]">
          <img 
            src="/mooviagold.svg" 
            alt="Cursor" 
            className="w-full h-full drop-shadow-[0_0_8px_rgba(173,137,87,0.4)]"
          />
        </div>
        <div id="cursor-ring" className="hidden lg:block fixed top-0 left-0 w-9 h-9 border border-[#cead84]/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[transform_0.2s_ease,width_0.25s,height_0.25s,opacity_0.2s]" />
        <AirplaneScene />
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