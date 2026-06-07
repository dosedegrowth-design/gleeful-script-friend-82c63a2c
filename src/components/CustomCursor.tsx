import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useSpring(0, { damping: 20, stiffness: 250 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-8 h-8 text-gold pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100 10 L130 40 L160 10 L190 40 L160 70 L190 100 L160 130 L190 160 L160 190 L130 160 L100 190 L70 160 L40 190 L10 160 L40 130 L10 100 L40 70 L10 40 L40 10 L70 40 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path d="M100 30 L120 50 L140 30 L160 50 L140 70 L160 100 L140 130 L160 150 L140 170 L120 150 L100 170 L80 150 L60 170 L40 150 L60 130 L40 100 L60 70 L40 50 L60 30 L80 50 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <circle cx="100" cy="100" r="16" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path d="M100 72 L100 128 M72 100 L128 100 M79 79 L121 121 M121 79 L79 121" stroke="currentColor" strokeWidth="0.3"/>
          <path d="M100 10 L100 30 M100 170 L100 190 M10 100 L30 100 M170 100 L190 100" stroke="currentColor" strokeWidth="0.8"/>
          <circle cx="100" cy="10" r="3" fill="currentColor"/>
          <circle cx="100" cy="190" r="3" fill="currentColor"/>
          <circle cx="10" cy="100" r="3" fill="currentColor"/>
          <circle cx="190" cy="100" r="3" fill="currentColor"/>
          <circle cx="40" cy="40" r="2" fill="currentColor" opacity=".6"/>
          <circle cx="160" cy="40" r="2" fill="currentColor" opacity=".6"/>
          <circle cx="40" cy="160" r="2" fill="currentColor" opacity=".6"/>
          <circle cx="160" cy="160" r="2" fill="currentColor" opacity=".6"/>
        </svg>
      </div>
      <motion.div
        className="fixed top-0 left-0 border border-gold rounded-full pointer-events-none z-[9998]"
        animate={{
          width: isHovering ? 56 : 36,
          height: isHovering ? 56 : 36,
          x: position.x - (isHovering ? 28 : 18),
          y: position.y - (isHovering ? 28 : 18),
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
    </>
  );
};
