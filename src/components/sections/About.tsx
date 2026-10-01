"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-primary">About</span> Me
        </h2>

        <div className="bg-background/50 border border-muted/20 rounded-xl p-6 md:p-8">
          <p className="text-muted leading-relaxed text-base md:text-lg">
            I don&apos;t just build APIs—I design systems that handle failure gracefully.
            With experience in financial systems, payment processing, and banking integrations,
            I focus on what happens when things go wrong: timeouts, duplicates, partial states,
            and recovery.
          </p>

          <p className="text-muted leading-relaxed text-base md:text-lg mt-4">
            A dedicated Full Stack Developer with hands-on experience building scalable web
            applications using Angular and Java (Vert.x). Skilled in API development,
            server-side logic, and performance optimization. Proficient in front-end and
            back-end technologies including Node.js, React, Java, Angular, Go, and PostgreSQL.
          </p>

          <p className="text-muted leading-relaxed text-base md:text-lg mt-4">
            Experienced in database management, cross-platform development, and integrating
            third-party APIs. Passionate about building secure, user-focused solutions and
            following best practices throughout the software development life cycle (SDLC).
          </p>
        </div>

        {/* Education */}
        <motion.div
          className="mt-8 bg-background/50 border border-muted/20 rounded-xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-foreground">Education</h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium text-foreground">Jimma University</p>
              <p className="text-muted">Jimma Institute of Technology (JIT)</p>
              <p className="text-sm text-muted mt-1">
                Bachelor&apos;s of Science, Computer Science
              </p>
            </div>
            <div className="mt-2 md:mt-0 md:text-right">
              <p className="text-primary font-medium">GPA: 3.32/4.00</p>
              <p className="text-sm text-muted">Exit Exam: 71/100</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
