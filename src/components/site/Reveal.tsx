import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function Reveal({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  distance = 40
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial state based on direction
    const transforms: Record<string, string> = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`
    };

    el.style.opacity = "0";
    el.style.transform = transforms[direction];
    el.style.transition = "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0, 0)";
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    
    io.observe(el);
    return () => io.disconnect();
  }, [delay, direction, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
