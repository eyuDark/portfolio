"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function CVDownload({ hidden }: { hidden: boolean }) {
  return (
    <AnimatePresence>
      {!hidden && (
        <motion.a
          href="/cv.pdf"
          download="Eyuel_Tefera_CV.pdf"
          className="fixed bottom-6 right-6 z-50 px-4 py-2 text-xs font-mono text-foreground border border-border bg-black/80 hover:bg-foreground hover:text-background transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CV ↓
        </motion.a>
      )}
    </AnimatePresence>
  );
}
