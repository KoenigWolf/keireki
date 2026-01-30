"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";

function ExperienceCard({
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
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 card-shine hover:border-primary/30 transition-all duration-300">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
              <h3 className="text-xl font-bold text-card-foreground">
                {exp.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground ml-5">{exp.company}</p>
          </div>
          <span className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-medium text-primary bg-primary/10 rounded-lg border border-primary/20 w-fit whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 ml-5">
          {exp.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 ml-5">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-lg font-medium hover:text-foreground hover:bg-muted/80 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work History
          </h2>
          <p className="text-muted-foreground max-w-xl">
            サポートエンジニアからフルスタックエンジニアへ。
            着実にスキルを積み上げてきたキャリアの軌跡。
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
