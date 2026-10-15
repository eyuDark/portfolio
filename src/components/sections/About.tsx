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
            I specialize in building and modernizing financial platforms, payment engines, and
            distributed banking integrations. At eTech S.C., I developed multi-tenant SACCO management
            and share tracking systems, implementing financial workflows for loan amortization, dividend
            distribution, and reconciliation.
          </p>

          <p>
            Currently at Eaglelion System Technologies, I serve as Backend Engineer and Team Lead
            contributing to the Dashen Bank Super App backend modernization across 50+ services. My work
            focuses on mission-critical payment workflows, core banking integrations (FCUBS, IPS, FCY),
            and transaction reliability through idempotency and Redis deduplication.
          </p>

          <p>
            Dealing with real financial transactions drives my passion for system architecture, failure-mode
            resilience, and engineering clean, high-performance distributed backends.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
