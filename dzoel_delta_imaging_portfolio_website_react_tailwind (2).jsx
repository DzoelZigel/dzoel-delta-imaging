import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export default function DzoelDeltaImaging() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <div ref={ref} className="min-h-screen bg-neutral-900 text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 tracking-wide relative z-10"
        >
          Visual That Speaks
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{ y: y2 }}
          className="text-lg max-w-2xl text-gray-300 mb-8 relative z-10"
        >
          Professional Cinematic Storytelling by Dzoel Delta Imaging — turning ideas into powerful visuals that connect, inspire, and leave a lasting impression.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="relative z-10">
          <Button className="bg-white text-neutral-900 font-semibold px-6 py-3 rounded-2xl hover:bg-gray-200 transition-all">
            Explore Portfolio
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 inline-block pb-2">
          About Dzoel Delta Imaging
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Dzoel Delta Imaging adalah studio kreatif yang berfokus pada produksi video dan konten visual dengan sentuhan sinematik. Kami membantu brand, bisnis, dan individu membangun citra yang kuat melalui visual yang memikat, autentik, dan berkarakter.
          <br /><br />
          Dengan pengalaman di dunia videografi, storytelling, dan digital content, kami percaya setiap ide memiliki cerita unik yang layak disampaikan dengan gaya dan emosi yang tepat.
          <br /><br />
          Dari konsep hingga hasil akhir, setiap detail kami garap dengan pendekatan artistik dan profesional — menghadirkan karya yang bukan hanya indah dilihat, tapi juga bermakna, menginspirasi, dan meninggalkan kesan mendalam.
        </p>
      </section>
    </div>
  );
}
