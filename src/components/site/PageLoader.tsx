import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#06091a]"
        >
          <motion.img
            src="/mooviagold.png"
            alt="MOOVIA"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
            style={{ filter: "drop-shadow(0 0 24px rgba(173,137,87,0.55)) drop-shadow(0 0 60px rgba(173,137,87,0.25))" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
