"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Etech SC",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2023 – Sep 2025",
    highlights: [
      "Developed comprehensive financial management platform (SACCO) for financial institutions",
      "Built modules for budgeting, reconciliation, and financial reporting",
      "Automated dividend calculations and real-time attendance tracking",
      "Mentored junior developers in Angular, Java, and PostgreSQL",
    ],
  },
  {
    title: "Backend Engineer",
    company: "Eaglelion System Technologies",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2023 – Sep 2025",
    highlights: [
      "Contributing to Dashen Super App backend modernization (Ethiopia's largest fintech ecosystem)",
      "Optimizing high-volume transaction workflows for improved throughput",
      "Refactoring legacy services and ensuring best-practice implementation",
      "Re-implementing unstable third-party integrations for improved reliability",
      "Enhancing database queries and transaction logic for scalability",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary">Work</span> Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-background/50 border border-muted/20 rounded-xl p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted">{exp.location}</p>
              </div>
              <p className="text-sm text-muted mt-2 md:mt-0 md:text-right">
                {exp.period}
              </p>
            </div>

            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-2 text-muted"
                >
                  <span className="text-accent mt-1">▸</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
