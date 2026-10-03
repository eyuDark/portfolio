"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-border flex flex-col justify-between p-8 z-50">
      {/* Logo/Name */}
      <div>
        <motion.h1
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          Eyuel Tefera
        </motion.h1>
        <motion.p
          className="text-sm text-muted"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Backend / Platform Engineer
        </motion.p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex items-center">
        <ul className="space-y-4 w-full">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
            >
              <a
                href={item.href}
                onClick={() => setActiveSection(item.href.slice(1))}
                className={`block text-sm transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <motion.div
        className="flex gap-4 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <a
          href="https://github.com/eyuel-tefera"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/eyuel-tefera"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
      </motion.div>
    </aside>
  );
}
