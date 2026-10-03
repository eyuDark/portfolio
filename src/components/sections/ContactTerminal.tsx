"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const commands = [
  { label: "email", value: "eyuel.tefera01@gmail.com", href: "mailto:eyuel.tefera01@gmail.com" },
  { label: "linkedin", value: "linkedin.com/in/eyuel-tefera", href: "https://linkedin.com/in/eyuel-tefera" },
  { label: "github", value: "github.com/eyuel-tefera", href: "https://github.com/eyuel-tefera" },
  { label: "gitlab", value: "gitlab.com/eyuel-tefera", href: "https://gitlab.com/eyuel-tefera" },
  { label: "location", value: "Addis Ababa, Ethiopia", href: null },
];

export default function ContactTerminal() {
  const [typedIndex, setTypedIndex] = useState(-1);

  useEffect(() => {
    console.log("🖥️ ContactTerminal (Option D) is rendering");
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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contact</h2>

        {/* Terminal Window */}
        <div className="border border-border bg-black font-mono text-sm">
          {/* Terminal Header */}
          <div className="border-b border-border px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full border border-border"></div>
              <div className="w-3 h-3 rounded-full border border-border"></div>
              <div className="w-3 h-3 rounded-full border border-border"></div>
            </div>
            <span className="text-muted ml-2">eyuel@portfolio ~ contact</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-muted"
            >
              <span className="text-foreground">$</span> cat contact.info
            </motion.div>

            {commands.map((cmd, index) => (
              <motion.div
                key={cmd.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                onViewportEnter={() => setTypedIndex(index)}
                className="flex items-start"
              >
                <span className="text-foreground mr-2">&gt;</span>
                <span className="text-muted mr-2 min-w-[80px]">{cmd.label}:</span>
                {cmd.href ? (
                  <a
                    href={cmd.href}
                    target={cmd.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    {cmd.value}
                  </a>
                ) : (
                  <span className="text-foreground">{cmd.value}</span>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="pt-4"
            >
              <span className="text-foreground">$</span>
              <span className="ml-2 animate-pulse">_</span>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Eyuel Tefera
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
