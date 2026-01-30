"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/experience";
import { content } from "@/data/content";
import { ease, duration, stagger, viewportMargin, sectionHeader } from "@/data/motion";
import { IconCode, IconGithub, IconExternalLink } from "@/components/Icons";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin.block });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration.slow, delay: index * stagger.wide, ease: ease.smooth }}
      className="group relative"
    >
      {/* Glow */}
      <div className="card-glow" />

      <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden card-shine hover:border-primary/30 transition-all duration-300 flex flex-col">
        {/* Project visual */}
        <div className="relative h-44 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 dot-pattern opacity-20" />
          {/* Floating icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={isInView ? { y: [0, -8, 0] } : {}}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: index * 0.3 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 glass flex items-center justify-center"
            >
              <IconCode className="w-7 h-7" />
            </motion.div>
          </div>
          {/* Number indicator */}
          <span className="absolute top-4 right-4 typo-mono text-muted-foreground bg-background/60 backdrop-blur-sm px-2 py-1 rounded-md">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="typo-sub-heading text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="typo-body text-muted-foreground mb-5 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2 py-0.5 bg-primary/5 text-primary rounded-md font-medium border border-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-border">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
              >
                <IconGithub className="w-4 h-4" />
                <span>{content.projects.sourceLink}</span>
                <IconExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
              >
                <IconExternalLink className="w-4 h-4" />
                <span>{content.projects.demoLink}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="section-line top-0" />
        <div className="section-line bottom-0" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          {...sectionHeader}
          className="mb-16"
        >
          <span className="inline-block typo-label text-primary mb-3">
            {content.projects.label}
          </span>
          <h2 className="typo-section-heading text-foreground mb-4">
            {content.projects.heading}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {content.projects.description}
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
