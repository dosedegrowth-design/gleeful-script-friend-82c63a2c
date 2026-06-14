import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

// Convert any css color string to rgb via offscreen canvas
function parseColor(color: string): [number, number, number] | null {
  try {
    const ctx = document.createElement('canvas').getContext('2d');
    if (!ctx) return null;
    ctx.fillStyle = color;
    const m = ctx.fillStyle.match(/^#([0-9a-f]{6})$/i);
    if (m) {
      const n = parseInt(m[1], 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    const rgb = ctx.fillStyle.match(/rgba?\(([^)]+)\)/);
    if (rgb) {
      const parts = rgb[1].split(',').map((s) => parseFloat(s.trim()));
      return [parts[0], parts[1], parts[2]];
    }
  } catch {}
  return null;
}

function luminance(rgb: [number, number, number]) {
  const [r, g, b] = rgb.map((v) => v / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function readBgUnder(el: HTMLElement | null): 'dark' | 'light' {
  let node: HTMLElement | null = el;
  while (node) {
    const bg = window.getComputedStyle(node).backgroundColor;
    const rgb = parseColor(bg);
    if (rgb && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      return luminance(rgb) > 0.55 ? 'light' : 'dark';
    }
    node = node.parentElement;
  }
  return 'dark';
}

// Filters to recolor the gold PNG. Source is gold/warm; we overwrite with hue-rotate + saturate.
const FILTER_DARK_BG = 'none'; // keep brand gold on dark surfaces
const FILTER_LIGHT_BG =
  'brightness(0) saturate(100%) invert(11%) sepia(45%) saturate(2400%) hue-rotate(195deg) brightness(60%) contrast(110%)'; // deep navy on light bg
const FILTER_HOVER_DARK =
  'brightness(0) saturate(100%) invert(14%) sepia(70%) saturate(2200%) hue-rotate(205deg) brightness(70%) contrast(110%)'; // deep navy on hover (dark bg)
const FILTER_HOVER_LIGHT =
  'brightness(0) saturate(100%) invert(38%) sepia(70%) saturate(900%) hue-rotate(180deg) brightness(95%) contrast(105%)'; // brighter blue on hover (light bg)

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [bgMode, setBgMode] = useState<'dark' | 'light'>('dark');

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isInteractive);
      setBgMode(readBgUnder(target));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const filter = isHovering
    ? bgMode === 'light'
      ? FILTER_HOVER_LIGHT
      : FILTER_HOVER_DARK
    : bgMode === 'light'
    ? FILTER_LIGHT_BG
    : FILTER_DARK_BG;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        pointerEvents: 'none',
        zIndex: 9999,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="hidden md:block"
    >
      <motion.img
        src="/mooviagold.png"
        alt="Cursor"
        className="w-8 h-8 object-contain drop-shadow-2xl"
        animate={{
          rotate: isHovering ? 360 : 0,
          scale: isHovering ? 1.2 : 1,
          filter,
        }}
        transition={{
          rotate: { duration: 1, repeat: isHovering ? Infinity : 0, ease: 'linear' },
          scale: { duration: 0.3 },
          filter: { duration: 0.25 },
        }}
      />
    </motion.div>
  );
}
