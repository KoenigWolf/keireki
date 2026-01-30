"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/experience";
import { GITHUB_USER } from "@/lib/github";
import { content } from "@/data/content";
import { ease, duration, stagger, viewportMargin, sectionHeader } from "@/data/motion";
import { IconGithub, IconExternalLink } from "@/components/Icons";

// 言語 → グラデーション背景のマッピング
const langGradient: Record<string, string> = {
  TypeScript: "from-sky-500/80 to-blue-600/80",
  JavaScript: "from-amber-400/80 to-yellow-500/80",
  Python: "from-emerald-500/80 to-teal-600/80",
  Astro: "from-orange-500/80 to-rose-500/80",
  Go: "from-cyan-400/80 to-sky-500/80",
  Rust: "from-orange-600/80 to-red-600/80",
  Ruby: "from-red-500/80 to-pink-500/80",
};
const defaultGradient = "from-primary/60 to-accent/60";

// 言語 → ドットカラー
const langDot: Record<string, string> = {
  TypeScript: "bg-sky-400",
  JavaScript: "bg-amber-400",
  Python: "bg-emerald-400",
  Astro: "bg-orange-400",
  Go: "bg-cyan-400",
  Rust: "bg-orange-500",
  Ruby: "bg-red-400",
};
const defaultDot = "bg-primary";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin.block });

  const lang = project.technologies[0] ?? "";
  const gradient = langGradient[lang] || defaultGradient;
  const dot = langDot[lang] || defaultDot;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration.slow, delay: index * stagger.wide, ease: ease.smooth }}
      className="group relative"
    >
      <div className="card-glow" />

      <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden card-shine hover:border-primary/30 transition-all duration-300 flex flex-col">
        {/* Visual header */}
        <div className={`relative h-36 bg-gradient-to-br ${gradient} overflow-hidden`}>
          {/* Pattern overlay */}
          <div className="absolute inset-0 dot-pattern opacity-[0.12]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Project name */}
          <div className="absolute inset-0 flex items-center justify-center p-5">
            <span className="text-lg sm:text-xl font-bold text-white text-center leading-snug drop-shadow-md">
              {project.title}
            </span>
          </div>

          {/* Language badge */}
          {lang && (
            <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-white text-[11px] font-medium">
              <span className={`w-2 h-2 rounded-full ${dot}`} />
              {lang}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {project.description && (
            <p className="typo-body text-muted-foreground mb-4 flex-1 line-clamp-2">
              {project.description}
            </p>
          )}
          {!project.description && <div className="flex-1" />}

          {/* Tags */}
          {project.technologies.length > 1 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(1).map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 bg-primary/5 text-primary rounded-md font-medium border border-primary/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 pt-3 border-t border-border">
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

export default function Projects({ projects }: { projects: Project[] }) {
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

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.normal, ease: ease.smooth }}
          className="mt-12 text-center"
        >
          <a
            href={`https://github.com/${GITHUB_USER}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl glass hover:glow transition-all duration-300 group"
          >
            <IconGithub className="w-4 h-4" />
            View all on GitHub
            <IconExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
