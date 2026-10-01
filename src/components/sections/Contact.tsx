"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    href: "mailto:eyuel.tefera01@gmail.com",
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/eyuel-tefera",
    icon: "💼",
  },
  {
    label: "GitHub",
    href: "https://github.com/eyuel-tefera",
    icon: "🐙",
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/eyuel-tefera",
    icon: "🦊",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-primary">Let's Build</span> Something Reliable
        </h2>

        <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
          Whether you need a backend system that handles millions of transactions,
          or an integration that survives unreliable third parties—I&apos;m interested.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-background/50 border border-muted/20 rounded-lg text-muted hover:border-primary/50 hover:text-foreground transition-all"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-muted/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Eyuel Tefera. Built with Next.js, Three.js & Framer Motion.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
