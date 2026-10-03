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
            A dedicated Full Stack Developer with hands-on experience building scalable web
            applications using Angular and Java (Vert.x). Skilled in API development,
            server-side logic, and performance optimization.
          </p>

          <p>
            Experienced in database management, cross-platform development, and integrating
            third-party APIs. Passionate about building secure, user-focused solutions and
            following best practices throughout the software development life cycle.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
