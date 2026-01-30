"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories, type Skill } from "@/data/skills";
import { content } from "@/data/content";

function SkillIcon({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group/skill flex flex-col items-center gap-2.5"
    >
      <div
        className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-muted border border-border flex items-center justify-center transition-all duration-300 group-hover/skill:border-transparent group-hover/skill:scale-110 group-hover/skill:shadow-lg"
        style={
          { "--skill-color": skill.color } as React.CSSProperties
        }
      >
        {/* Hover glow ring */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${skill.color}40, transparent, ${skill.color}20)`,
          }}
        />
        {/* Icon */}
        <Icon
          className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover/skill:scale-110"
          style={{ color: skill.color }}
        />
      </div>
      <span className="text-[11px] sm:text-xs font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategorySection({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
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
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 card-shine hover:border-primary/30 transition-all duration-300">
        {/* Category header */}
        <div className="flex items-baseline justify-between mb-5 sm:mb-8">
          <div>
            <h3 className="text-lg font-bold text-card-foreground">
              {category.category}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {category.description}
            </p>
          </div>
          <span className="text-xs font-mono text-muted-foreground tabular-nums">
            {category.skills.length}
          </span>
        </div>

        {/* Skill icons grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-5 place-items-center">
          {category.skills.map((skill, i) => (
            <SkillIcon
              key={skill.name}
              skill={skill}
              delay={index * 0.08 + i * 0.06}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            {content.skills.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {content.skills.heading}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {content.skills.description}
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <CategorySection
              key={category.category}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
