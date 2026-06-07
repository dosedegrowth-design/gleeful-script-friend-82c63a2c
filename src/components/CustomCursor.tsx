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
        className="fixed top-0 left-0 w-4 h-4 text-gold pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0)`,
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100 10 L130 40 L160 10 L190 40 L160 70 L190 100 L160 130 L190 160 L160 190 L130 160 L100 190 L70 160 L40 190 L10 160 L40 130 L10 100 L40 70 L10 40 L40 10 L70 40 Z" stroke="currentColor" strokeWidth="8" fill="none"/>
          <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="8" fill="none"/>
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
