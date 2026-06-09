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

    // Set initial state without causing layout thrashing before observer
    const initialTransform = {
      up: `translate3d(0, ${distance}px, 0)`,
      down: `translate3d(0, -${distance}px, 0)`,
      left: `translate3d(${distance}px, 0, 0)`,
      right: `translate3d(-${distance}px, 0, 0)`
    }[direction];

    el.style.opacity = "0";
    el.style.transform = initialTransform;
    el.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transitionDelay = `${delay}ms`;
    el.style.willChange = "opacity, transform";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            el.style.opacity = "1";
            el.style.transform = "translate3d(0, 0, 0)";
            
            // Clean up will-change after transition to free up resources
            setTimeout(() => {
              if (el) el.style.willChange = "auto";
            }, 1000 + delay);
          });
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
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
