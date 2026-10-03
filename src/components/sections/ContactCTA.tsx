"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ContactCTA() {
  useEffect(() => {
    console.log("📢 ContactCTA (Option A) is rendering");
  }, []);

  return (
    <section id="contact" className="min-h-screen py-24 px-8 md:px-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            className="inline-block px-4 py-2 border border-border mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-sm text-muted">Open to opportunities</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Let&apos;s Build Something
            <br />
            <span className="text-muted">Reliable</span>
          </h2>

          <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
            Whether you need a backend system that handles millions of transactions,
            or an integration that survives unreliable third parties.
          </p>

          {/* Main Email CTA */}
          <motion.a
            href="mailto:eyuel.tefera01@gmail.com"
            className="inline-block text-2xl md:text-3xl font-medium mb-16 hover:text-muted transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            eyuel.tefera01@gmail.com
          </motion.a>

          {/* Social Links */}
          <motion.div
            className="flex gap-8 justify-center text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://linkedin.com/in/eyuel-tefera"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/eyuel-tefera"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://gitlab.com/eyuel-tefera"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitLab
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-24 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Eyuel Tefera
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
