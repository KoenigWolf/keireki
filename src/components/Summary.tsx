"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { careerSummary, strengths } from "@/data/profile";
import { content } from "@/data/content";

function StrengthCard({
  strength,
  index,
}: {
  strength: (typeof strengths)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="relative group"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="relative bg-card border border-border rounded-2xl p-6 card-shine hover:border-primary/30 transition-all duration-300 h-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base font-bold text-card-foreground">
            {strength.title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {strength.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Summary() {
  return (
    <section id="summary" className="relative py-24 sm:py-32 px-6 lg:px-8">
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
            {content.summary.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {content.summary.heading}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {content.summary.description}
          </p>
        </motion.div>

        {/* Career summary paragraphs */}
        <div className="mb-16 space-y-4">
          {careerSummary.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Strengths heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            {content.summary.strengthsHeading}
          </h3>
        </motion.div>

        {/* Strength cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {strengths.map((strength, index) => (
            <StrengthCard key={index} strength={strength} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
