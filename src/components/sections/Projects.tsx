"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "API Gateway",
    tech: "Go, Gin, Fasthttp, JWT",
    status: "In Progress",
    description:
      "Modular API Gateway with middleware for JWT authentication, rate limiting (token bucket), and structured request logging.",
    features: [
      "JWT authentication middleware",
      "Rate limiting with token bucket algorithm",
      "Reverse proxying and route-based load balancing",
      "Targeting 90%+ test coverage with testify",
    ],
  },
  {
    title: "Library Management System",
    tech: "Go, Gin, GORM, PostgreSQL, JWT",
    status: "Completed",
    description:
      "RESTful backend for managing users, books, and loans with comprehensive authentication and authorization.",
    features: [
      "JWT authentication with role-based access control",
      "Unit tests for auth and domain logic",
      "GORM ORM with PostgreSQL for data persistence",
    ],
  },
  {
    title: "SACCO Management System",
    tech: "Java, Angular, PostgreSQL",
    status: "Production",
    description:
      "Comprehensive financial management platform for savings and credit cooperatives with full accounting capabilities.",
    features: [
      "Budgeting and reconciliation modules",
      "Dividend calculations and reinvestment workflows",
      "Real-time attendance tracking",
      "Member registration and share tracking",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary">Personal</span> Projects
      </motion.h2>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-background/50 border border-muted/20 rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Production"
                    ? "bg-accent/20 text-accent"
                    : project.status === "In Progress"
                      ? "bg-primary/20 text-primary"
                      : "bg-muted/20 text-muted"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm text-primary mb-3">{project.tech}</p>

            <p className="text-muted mb-4">{project.description}</p>

            <ul className="space-y-1">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span className="text-accent">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
