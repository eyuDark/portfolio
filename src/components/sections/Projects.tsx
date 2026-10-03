"use client";

import { motion } from "framer-motion";

const realProjects = [
  {
    title: "Dashen Super App Backend Modernization",
    category: "Fintech Platform",
    company: "EagleLion",
    tech: "Node.js, TypeScript, PostgreSQL, Redis, Kubernetes",
    description:
      "Modernized backend infrastructure for one of Ethiopia's largest fintech ecosystems. Refactored 50+ services, implemented transaction consistency patterns, and established platform observability.",
    highlights: [
      "Architected core transaction platform handling multi-bank transfers and IPS integration",
      "Built multi-currency payment workflows (FCY) with core banking integration (FCUBS)",
      "Implemented telecom billing & settlement integrations (Ethio Telecom, Safaricom)",
      "Designed transaction aggregator service with data normalization across sources",
      "Established idempotency mechanisms and Redis-based request deduplication",
    ],
  },
  {
    title: "SACCO Financial Management Platform",
    category: "Financial System",
    company: "eTech S.C.",
    tech: "Java, Vert.x, Angular, PostgreSQL",
    description:
      "Enterprise financial management platform tailored for savings and credit cooperatives with multi-tenant architecture serving 12 tenants and 50–120 users per tenant.",
    highlights: [
      "Master/tenant database architecture with strict data isolation",
      "Full financial suite: budgeting, reconciliation, and automated reporting",
      "Loan management with amortization schedules and penalty calculation engines",
      "Asynchronous background processing for heavy financial calculations",
    ],
  },
  {
    title: "Share Management System",
    category: "Financial System",
    company: "eTech S.C.",
    tech: "Java, Vert.x, PostgreSQL, REST APIs",
    description:
      "Dedicated platform for managing shareholder records, automated dividend distribution workflows, and real-time stakeholder attendance tracking.",
    highlights: [
      "Automated dividend calculation and reinvestment workflows",
      "Real-time attendance tracking engine for stakeholder assemblies",
      "Member registration, share tracking, and dividend distribution via RESTful services",
    ],
  },
  {
    title: "API Gateway",
    category: "Personal Project",
    company: "Personal",
    tech: "Go, Gin, Fasthttp, JWT",
    status: "In Progress",
    description:
      "High-performance modular API Gateway designed for microservices architectures with custom middleware, rate limiting, and request proxying.",
    highlights: [
      "JWT authentication and token bucket rate limiting middleware",
      "Reverse proxying and route-based load balancing using fasthttp",
      "Structured request logging and correlation ID propagation",
      "Targeting 90%+ test coverage using testify",
    ],
  },
  {
    title: "Library Management System",
    category: "Personal Project",
    company: "Personal",
    tech: "Go, Gin, GORM, PostgreSQL, JWT",
    status: "Completed",
    description:
      "RESTful backend service for managing users, catalog, and lending workflows with role-based access control.",
    highlights: [
      "Role-based access control (RBAC) with JWT authentication",
      "Relational data modeling and persistence using GORM and PostgreSQL",
      "Comprehensive unit test suite for auth and domain logic",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-8 md:px-16 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="text-muted mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Key platforms, systems, and open-source projects I&apos;ve built or contributed to.
        </motion.p>

        <div className="space-y-10">
          {realProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border p-6 hover:border-foreground transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-xs text-muted mb-2">
                    {project.company} · {project.category}
                  </p>
                </div>
                {project.status && (
                  <span className="text-xs border border-border px-2 py-0.5 text-muted">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-xs text-muted mb-3 font-mono">{project.tech}</p>

              <p className="text-sm text-muted mb-4 leading-relaxed">{project.description}</p>

              <ul className="space-y-1.5 border-t border-border/50 pt-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-xs text-muted flex items-start gap-2">
                    <span className="text-foreground">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
