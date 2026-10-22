"use client";

import { motion } from "framer-motion";

const realProjects = [
  {
    title: "Dashen Bank Super App Backend Modernization",
    category: "Fintech Platform",
    company: "Eaglelion",
    tech: "Node.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker, Kubernetes",
    description:
      "Modernized backend infrastructure for one of Ethiopia's largest fintech platforms. Refactored 50+ services, implemented transaction consistency patterns, and established platform observability.",
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
    title: "SkillCraft — AI Agent Skills Compiler & CLI Engine",
    category: "Personal Project",
    company: "Personal",
    tech: "TypeScript, Node.js, Commander.js, Zod, Vitest",
    status: "Completed",
    description:
      "Production-grade CLI tool and multi-target compiler engine that transforms structured AI agent specifications (SkillSpec IR) into portable artifacts for Claude Code and Cursor.",
    highlights: [
      "Engineered a robust Zod-based Abstract Syntax Tree (AST) schema and static linter enforcing trigger clarity and scope boundaries",
      "Implemented multi-target transpilation with smart glob inference, atomic staging, and static security auditing",
      "Authored a comprehensive test suite using Vitest covering unit schema validation, authoring fixtures, compiler pipelines, and CLI smoke tests",
    ],
  },
  {
    title: "lazyALARM — Full-Stack IoT & Smart Alarm Platform",
    category: "Personal Project",
    company: "Personal",
    tech: "TypeScript, Express, Prisma ORM, PostgreSQL, Zod, Vitest, OpenAPI",
    status: "In Progress",
    github: "https://github.com/eyuDark/lazyALARM-express",
    description:
      "A smart scheduling and alarm platform engineered for multi-device synchronization and progressive wake-up routines. Fully tested backend API with complete UI/UX design ready.",
    highlights: [
      "Layered backend structure (routes, controllers, domain services) enforcing strict resource ownership and data isolation",
      "Robust runtime request validation using Zod and automated OpenAPI 3.0 documentation via Swagger UI",
      "Comprehensive automated test suite with Vitest and Supertest covering authentication, middleware, and domain logic",
      "Multi-device registration supporting push notification tokens and timezone offset normalization",
    ],
  },
  {
    title: "SACCO SaaS — Multi-Tenant Core Banking MVP",
    category: "Personal Project",
    company: "Personal",
    tech: "TypeScript, Express, PostgreSQL (RLS), Redis, BullMQ, Docker, Zod, Vitest",
    status: "In Progress",
    description:
      "Multi-tenant core banking engine for Savings & Credit Cooperatives (SACCOs), enforcing database-level data isolation via PostgreSQL Row-Level Security (RLS).",
    highlights: [
      "Strict database-level data isolation across tenants using native PostgreSQL Row-Level Security (RLS)",
      "Immutable double-entry accounting ledger with transaction atomicity, balanced debit/credit validation, and idempotency deduplication",
      "Comprehensive Member Management and KYC modules with deterministic member numbering and audit logging",
      "Savings and Shares subsystem handling account lifecycles, deposits, withdrawals, share transfers, and interest calculations",
      "Asynchronous job pipelines via Redis and BullMQ for scheduled interest compounding and batch reconciliation, backed by 44 passing tests",
    ],
  },
  {
    title: "agent-hitl-telegram — Distributed Human-in-the-Loop Engine",
    category: "Personal Project",
    company: "Personal",
    tech: "TypeScript, Fastify, PostgreSQL, Prisma, Redis, BullMQ, Telegram Bot API, MCP",
    status: "Completed",
    github: "https://github.com/eyuDark/agent-hitl-telegram",
    description:
      "Distributed authorization engine that intercepts privileged tool calls from AI agents (LangGraph, Vercel AI SDK, Claude Code, Cursor) and routes interactive approval requests to Telegram.",
    highlights: [
      "Atomic state transitions for approvals using Redis 7 and custom Lua scripts to prevent double-taps and race conditions",
      "Asynchronous job pipelines via BullMQ for delayed TTL expirations, retries, and secure callback resumption with HMAC signatures",
      "Model Context Protocol (MCP) server enabling seamless integration across local and cloud AI environments with argument redaction",
      "Append-only PostgreSQL audit ledger recording all sensitive tool executions and administrative decisions",
    ],
  },
  {
    title: "API Gateway",
    category: "Personal Project",
    company: "Personal",
    tech: "Go, Gin, Fasthttp, JWT",
    status: "In Progress",
    github: "https://github.com/eyuDark/goApiGateway",
    description:
      "High-performance modular API Gateway designed for microservices architectures with custom middleware, rate limiting, and request proxying.",
    highlights: [
      "JWT authentication and token bucket rate limiting middleware",
      "Reverse proxying and route-based load balancing using fasthttp",
      "Structured request logging and correlation ID propagation",
      "Developing automated tests for middleware and core gateway functionality",
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
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs border border-border px-2 py-0.5 text-muted hover:text-foreground hover:border-foreground transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.status && (
                    <span className="text-xs border border-border px-2 py-0.5 text-muted">
                      {project.status}
                    </span>
                  )}
                </div>
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
