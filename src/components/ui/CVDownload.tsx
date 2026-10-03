"use client";

import { motion } from "framer-motion";

export default function CVDownload() {
  return (
    <motion.a
      href="/cv.pdf"
      download="Eyuel_Tefera_CV.pdf"
      className="fixed bottom-8 right-8 z-50 px-6 py-3 bg-foreground text-background font-medium border-2 border-foreground hover:bg-background hover:text-foreground transition-colors"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Download CV
    </motion.a>
  );
}
