"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Go"],
  },
  {
    title: "Backend",
    skills: ["Angular", "Express.js", "Vert.x", "Spring Boot", "Gin"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Argo"],
  },
  {
    title: "Observability",
    skills: ["Grafana", "Loki", "Pino", "Prometheus"],
  },
  {
    title: "Practices",
    skills: ["REST APIs", "CI/CD", "Idempotency", "Distributed Systems", "Agile"],
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", status: "Completed" },
  { name: "AWS Solutions Architect", status: "In Progress" },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-24 px-8 md:px-16 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <h3 className="text-sm font-semibold mb-3 text-foreground">
              {category.title}
            </h3>
            <ul className="space-y-1">
              {category.skills.map((skill) => (
                <li key={skill} className="text-muted text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        className="mt-16 border border-border p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4">Certifications</h3>
        <div className="space-y-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-center justify-between">
              <span className="text-muted">{cert.name}</span>
              <span className="text-sm text-foreground">{cert.status}</span>
            </div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
}
