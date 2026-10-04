"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-8 md:px-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About</h2>

        <div className="space-y-6 text-muted text-lg leading-relaxed border-l-2 border-border pl-8">
          <p>
            I don&apos;t just build APIs—I design systems that handle failure gracefully.
            With experience in financial systems, payment processing, and banking integrations,
            I focus on what happens when things go wrong: timeouts, duplicates, partial states,
            and recovery.
          </p>

          <p>
            My path has been unusually practical: SACCO platforms, reconciliation, dividends,
            loan amortization, tenant databases, payments, and eventually a banking super-app.
            I learned to ask what the software is actually doing to money and business.
          </p>

          <p>
            That has pushed me from implementing backend features toward thinking in systems,
            failure modes, architecture, and ownership. My identity: backend/platform engineer
            for reliable, transaction-heavy distributed systems, with strong financial-domain
            and integration experience.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
