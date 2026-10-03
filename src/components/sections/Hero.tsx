"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MatrixRain = dynamic(() => import("@/components/three/MatrixRain"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Matrix Background */}
      <MatrixRain />

      {/* Content */}
      <div className="relative z-10 px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Reliable
            <br />
            <span className="text-muted">Distributed Systems</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Backend/Platform Engineer specializing in transaction-heavy systems
            with strong financial-domain and integration experience.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-foreground text-background font-medium transition-transform hover:scale-105"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-foreground text-foreground font-medium transition-transform hover:scale-105"
            >
              View work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
