"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, type ProjectDetail } from "@/data/experience";

function ProjectCard({
  project,
  delay,
}: {
  project: ProjectDetail;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="relative bg-muted/50 border border-border rounded-xl p-5 sm:p-6 hover:border-primary/20 transition-all duration-300"
    >
      {/* Project header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div className="flex-1">
          <h4 className="text-base font-bold text-card-foreground mb-1">
            {project.name}
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {project.summary}
          </p>
        </div>
        <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20 whitespace-nowrap w-fit">
          {project.period}
        </span>
      </div>

      {/* Role & team */}
      <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          {project.role}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {project.teamSize}
        </span>
      </div>

      {/* Responsibilities */}
      <div className="mb-4">
        <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          担当業務
        </h5>
        <ul className="space-y-1.5">
          {project.responsibilities.map((r, i) => (
            <li
              key={i}
              className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      {project.achievements && project.achievements.length > 0 && (
        <div className="mb-4">
          <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            成果
          </h5>
          <ul className="space-y-1.5">
            {project.achievements.map((a, i) => (
              <li
                key={i}
                className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 flex items-start gap-2"
              >
                <svg
                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-[10px] sm:text-xs px-2 py-0.5 bg-background text-muted-foreground rounded-md font-medium border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ExperienceSection({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="relative group"
    >
      {/* Card glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 card-shine hover:border-primary/30 transition-all duration-300">
        {/* Company header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
              <h3 className="text-xl font-bold text-card-foreground">
                {exp.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground ml-5">
              {exp.company}
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-medium text-primary bg-primary/10 rounded-lg border border-primary/20 w-fit whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        {/* Company meta */}
        <div className="flex flex-wrap gap-3 ml-5 mb-4 text-xs text-muted-foreground">
          <span>{exp.companyDescription}</span>
          <span className="text-border">|</span>
          <span>{exp.employmentType}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 ml-5">
          {exp.description}
        </p>

        {/* Projects */}
        <div className="ml-5 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            プロジェクト詳細
          </h4>
          {exp.projects.map((project, pi) => (
            <ProjectCard
              key={pi}
              project={project}
              delay={index * 0.05 + pi * 0.08}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            職務経歴
          </h2>
          <p className="text-muted-foreground max-w-xl">
            サポートエンジニアからフルスタックエンジニアへ。
            着実にスキルを積み上げてきたキャリアの軌跡。
          </p>
        </motion.div>

        {/* Experience sections */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceSection key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
