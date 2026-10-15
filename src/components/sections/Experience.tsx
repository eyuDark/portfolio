"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Backend Engineer / Team Lead",
    company: "Eaglelion System Technologies",
    type: "Full-time",
    location: "Addis Ababa, Ethiopia",
    period: "October 2024 – Present",
    domain: "FinTech · Dashen Bank Super App",
    highlights: [
      "Contribute to the backend modernization and development of a large fintech platform supporting payments, bank transfers, account services, and third-party integrations",
      "Contribute to the architecture and refactoring of services across more than 50 projects, improving consistency, maintainability, and adherence to engineering standards",
      "Implement transaction-processing safeguards, including idempotency and duplicate-request handling, to improve reliability in financial workflows",
      "Design and optimize database schemas, queries, indexes, and data-access patterns across PostgreSQL and MongoDB",
      "Apply Redis caching and deduplication strategies where appropriate, balancing performance with data consistency and transaction correctness",
      "Integrate banking and third-party systems for interbank transfers, foreign-currency transactions, utility payments, postpaid services, and card-related workflows",
      "Improve asynchronous processing and notification workflows using Redis-backed queues and background jobs",
      "Contribute to high-level and low-level technical designs, code reviews, and technical decisions while coordinating implementation and supporting other engineers",
      "Investigate production issues using structured logging and observability tools, collaborating with QA teams to validate fixes and performance improvements",
    ],
  },
  {
    title: "Full Stack Developer / Backend Engineer",
    company: "Etech SC",
    type: "Contract",
    location: "Addis Ababa, Ethiopia",
    period: "December 2023 – September 2024",
    domain: "FinTech · SACCO & Share Management Systems",
    highlights: [
      "Developed backend services for a financial management platform supporting savings, loans, budgeting, reconciliation, and financial reporting",
      "Implemented financial calculation workflows for loan amortization, interest, penalties, dividends, and member-related financial operations",
      "Designed REST APIs and PostgreSQL data models to support financial records, reporting, and business workflows",
      "Developed background processing and notification workflows for computationally intensive operations, including dividend calculations",
      "Contributed to database and tenant-management patterns supporting multiple SACCO organizations",
      "Implemented dividend calculation and reinvestment workflows for member shares, member registration, and share distribution",
      "Mentored junior developers in Java, Angular, and PostgreSQL, conducted code reviews, and contributed to shared reusable components",
    ],
  },
];

const education = {
  institution: "Jimma University — Jimma Institute of Technology",
  degree: "Bachelor of Science in Computer Science",
  metrics: "GPA: 3.32/4.00 · Exit Examination: 71/100",
};

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-24 px-8 md:px-16 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company || exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-2 border-border pl-8"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-lg text-foreground">
                  {exp.company} · {exp.type}
                </p>
                <p className="text-sm text-muted">
                  {exp.location} · {exp.period}
                  {exp.domain && ` · ${exp.domain}`}
                </p>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted flex items-start gap-2">
                    <span className="text-foreground">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-16 border-t border-border pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="border border-border p-6">
            <h4 className="text-lg font-semibold text-foreground mb-1">{education.institution}</h4>
            <p className="text-sm text-muted mb-2">{education.degree}</p>
            <p className="text-xs font-mono text-muted">{education.metrics}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
