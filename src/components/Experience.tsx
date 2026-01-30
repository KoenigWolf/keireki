"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, type ProjectDetail } from "@/data/experience";
import { content } from "@/data/content";
import { ease, duration, stagger, viewportMargin, sectionHeader } from "@/data/motion";
import { IconUser, IconUserGroup, IconCheck } from "@/components/Icons";

function ProjectCard({
  project,
  delay,
}: {
  project: ProjectDetail;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin.card });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: duration.normal,
        delay,
        ease: ease.smooth,
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
          <IconUser />
          {project.role}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <IconUserGroup />
          {project.teamSize}
        </span>
      </div>

      {/* Responsibilities */}
      <div className="mb-4">
        <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          {content.experience.responsibilities}
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
            {content.experience.achievements}
          </h5>
          <ul className="space-y-1.5">
            {project.achievements.map((a, i) => (
              <li
                key={i}
                className="text-xs sm:text-sm text-success flex items-start gap-2"
              >
                <IconCheck className="w-3.5 h-3.5 mt-0.5 text-success" />
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
  const isInView = useInView(ref, { once: true, margin: viewportMargin.block });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: duration.slow,
        delay: index * stagger.base,
        ease: ease.smooth,
      }}
      className="relative group"
    >
      {/* Card glow */}
      <div className="card-glow" />

      <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 card-shine hover:border-primary/30 transition-all duration-300">
        {/* Company header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
              <h3 className="text-lg sm:text-xl font-bold text-card-foreground">
                {exp.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground ml-0 sm:ml-5">
              {exp.company}
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-medium text-primary bg-primary/10 rounded-lg border border-primary/20 w-fit whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        {/* Company meta */}
        <div className="flex flex-wrap gap-3 ml-0 sm:ml-5 mb-4 text-xs text-muted-foreground">
          <span>{exp.companyDescription}</span>
          <span className="text-border">|</span>
          <span>{exp.employmentType}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 ml-0 sm:ml-5">
          {exp.description}
        </p>

        {/* Projects */}
        <div className="ml-0 sm:ml-5 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {content.experience.projectDetails}
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
          {...sectionHeader}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            {content.experience.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {content.experience.heading}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {content.experience.description}
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
