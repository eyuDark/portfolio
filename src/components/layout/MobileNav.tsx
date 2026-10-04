"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav({
  open,
  setNavOpen,
}: {
  open: boolean;
  setNavOpen: (v: boolean) => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onScroll = () => setNavOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, setNavOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setNavOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }, 350);
  };

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#home" onClick={(e) => navigate(e, "home")} className="font-bold text-sm tracking-tight">
            Eyuel Tefera
          </a>
          <button
            onClick={() => setNavOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="relative w-8 h-8 flex items-center justify-center"
          >
            <div className="relative w-5 h-3.5">
              <motion.span
                className="absolute left-0 top-0 w-full h-0.5 bg-foreground block"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-1.5 w-full h-0.5 bg-foreground block"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 top-3 w-full h-0.5 bg-foreground block"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setNavOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-black/90 backdrop-blur-xl border-l border-border flex flex-col"
            >
              <div className="flex-1 flex flex-col justify-center px-8">
                <nav>
                  <ul className="space-y-2">
                    {navItems.map((item, i) => {
                      const id = item.href.slice(1);
                      return (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                        >
                          <a
                            href={item.href}
                            onClick={(e) => navigate(e, id)}
                            className="group flex items-baseline gap-3 py-3 border-b border-border/50"
                          >
                            <span className="text-[10px] font-mono text-muted/50 group-hover:text-foreground transition-colors">
                              0{i + 1}
                            </span>
                            <span className="text-2xl font-bold text-muted group-hover:text-foreground transition-colors">
                              {item.label}
                            </span>
                          </a>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="px-8 pb-10">
                <div className="border-t border-border pt-6 flex flex-col gap-4">
                  <a
                    href="/cv.pdf"
                    download="Eyuel_Tefera_CV.pdf"
                    className="flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors"
                  >
                    <span className="text-[10px] font-mono text-muted/50">↓</span>
                    Download CV
                  </a>
                  <div className="flex gap-6 text-xs text-muted">
                    <a href="https://github.com/eyuel-tefera" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/eyuel-tefera" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
