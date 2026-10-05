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
            I started out building front-end and back-end pieces at Irak technologies,
            then moved to eTech S.C. where I worked on a multi-tenant SACCO platform
            handling reconciliation, dividends, loan amortization and attendance tracking.
          </p>

          <p>
            From there I joined EagleLion System Technology, where I&apos;ve been contributing
            to the Dashen Super App backend modernization across 50+ services. Most of that
            work has been around banking and payment integrations, transaction flows, and
            making them resilient to retries, timeouts and duplicate requests.
          </p>

          <p>
            Along the way, dealing with real financial transactions pushed me to think more
            about how systems behave when they fail, and how to design for those cases.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
