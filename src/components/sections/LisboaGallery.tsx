import { motion } from "framer-motion";
import { RotatingLogo } from "@/components/ui/RotatingLogo";
import { ImageMarquee } from "@/components/ui/ImageMarquee";
import hero from "@/assets/hero-lisboa-editorial.jpg";
import problem from "@/assets/problem-lisboa-planning.jpg";
import process from "@/assets/process-relocation-documents.jpg";
import fiscal from "@/assets/blog-fiscal-lisboa.jpg";
import habit from "@/assets/blog-habitacao-lisboa.jpg";
import visto from "@/assets/blog-visto-lisboa.jpg";

const TOP_ROW = [hero, problem, process, fiscal, habit, visto];
const BOTTOM_ROW = [visto, habit, fiscal, process, problem, hero];

export function LisboaGallery() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <RotatingLogo size="min(80vw,1000px)" opacity={0.025} duration={200} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 mb-20 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
        >
          Editorial · Portugal
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(28px,4.5vw,60px)] font-[200] text-white leading-[0.95] tracking-[-0.04em] max-w-[800px]"
        >
          Uma vida em Portugal,
          <span className="block text-gold italic font-[300]">vista por dentro.</span>
        </motion.h2>
      </div>

      <div className="space-y-6 relative z-10">
        <ImageMarquee images={TOP_ROW} speed={30} />
        <ImageMarquee images={BOTTOM_ROW} speed={36} reverse height="h-[220px] md:h-[300px]" />
      </div>
    </section>
  );
}
