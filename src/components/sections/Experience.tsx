"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Back End Developer",
    company: "EagleLion System Technology",
    type: "Full-time",
    location: "Addis Ababa, Ethiopia · On-site",
    period: "Oct 2025 – Present",
    domain: "FinTech",
    highlights: [
      "Contributing to Dashen Super App backend modernization across 50+ services",
      "Optimizing high-volume transaction workflows, idempotency, and deduplication",
      "Designed idempotent transaction paths with Redis SETNX-based deduplication to survive retries, timeouts, and partial provider failures",
      "Core banking integrations (Flexcube/FCUBS) and multi-currency (FCY) payments",
      "External financial network integrations: IPS, Telecom Postpaid, Mastercard MPGS",
      "Platform engineering: Transaction Aggregator, Notification services, Fee engine",
      "Led HLD/LLD decisions and service refactoring across a 50+ service ecosystem; improved log/request traceability",
    ],
  },
  {
    title: "eTech S.C.",
    type: "Full-time",
    period: "Jan 2024 – Sep 2025 · 1 yr 9 mos",
    roles: [
      {
        title: "Software Engineer",
        period: "Aug 2024 – Sep 2025 · 1 yr 2 mos",
        skills: "Angular, Java (Vert.x), PostgreSQL, REST APIs",
        highlights: [
          "Developed multi-tenant SACCO management platform serving 12 tenants",
          "Built financial suite: budgeting, reconciliation, reporting, and loan amortization",
          "Automated dividend calculations and real-time attendance tracking",
          "Mentored junior developers and led code reviews",
        ],
      },
      {
        title: "Junior Software Developer",
        period: "Jan 2024 – Aug 2024 · 8 mos",
        location: "Addis Ababa, Ethiopia · On-site",
        skills: "HTML5, CSS, JavaScript, PostgreSQL",
        highlights: [
          "Contributed to frontend and backend components for enterprise platforms",
          "Built server-side functionality for inventory and asset management",
          "Assisted in internal common library development for code reuse",
        ],
      },
    ],
  },
  {
    title: "Full Stack Developer (Internship)",
    company: "Irak technologies",
    type: "Internship",
    location: "Addis Ababa",
    period: "Jan 2024 – Mar 2024 · 3 mos",
    skills: "React.js, Node.js",
    highlights: [
      "Built web applications using React.js and Node.js",
      "Collaborated on full-stack feature development and API integrations",
    ],
  },
];

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
              {/* Single Role Company */}
              {exp.company && (
                <>
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-lg text-foreground">{exp.company} · {exp.type}</p>
                    <p className="text-sm text-muted">
                      {exp.location} · {exp.period}
                      {exp.domain && ` · ${exp.domain}`}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights?.map((highlight, i) => (
                      <li key={i} className="text-muted flex items-start gap-2">
                        <span className="text-foreground">—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Multi-Role Company (eTech) */}
              {exp.roles && (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-sm text-muted">{exp.period}</p>
                  </div>

                  <div className="space-y-6">
                    {exp.roles.map((role, rIndex) => (
                      <div key={rIndex} className="border-l border-border/50 pl-4">
                        <div className="mb-2">
                          <h4 className="text-lg font-medium">{role.title}</h4>
                          <p className="text-xs text-muted">{role.period}</p>
                          {role.skills && (
                            <p className="text-xs text-muted mt-1">Skills: {role.skills}</p>
                          )}
                        </div>

                        <ul className="space-y-1">
                          {role.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-muted flex items-start gap-2">
                              <span className="text-foreground">—</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
