"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    href: "mailto:eyuel.tefera01@gmail.com",
    value: "eyuel.tefera01@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/eyuel-tefera",
    value: "linkedin.com/in/eyuel-tefera",
  },
  {
    label: "GitHub",
    href: "https://github.com/eyuel-tefera",
    value: "github.com/eyuel-tefera",
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/eyuel-tefera",
    value: "gitlab.com/eyuel-tefera",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 px-8 md:px-16 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let&apos;s Build Something Reliable
        </h2>

        <p className="text-lg text-muted max-w-2xl mb-12">
          Whether you need a backend system that handles millions of transactions,
          or an integration that survives unreliable third parties—I&apos;m interested.
        </p>

        <div className="space-y-6">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-l-2 border-border pl-6 hover:border-foreground transition-colors"
            >
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="text-sm text-muted mb-1">{link.label}</div>
                <div className="text-foreground group-hover:underline">
                  {link.value}
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-24 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Eyuel Tefera
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
