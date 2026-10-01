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
    skills: ["REST APIs", "CI/CD", "Unit Testing", "SDLC", "Agile"],
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", status: "Completed" },
  { name: "AWS Solutions Architect", status: "In Progress" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary">Tech</span> Stack
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background/50 border border-muted/20 rounded-xl p-4 md:p-6 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-primary mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                  className="px-3 py-1 bg-muted/10 text-muted-foreground text-sm rounded-full border border-muted/20 hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        className="mt-12 bg-background/50 border border-muted/20 rounded-xl p-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Certifications
        </h3>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <span className="text-muted">{cert.name}</span>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  cert.status === "Completed"
                    ? "bg-accent/20 text-accent"
                    : "bg-primary/20 text-primary"
                }`}
              >
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
