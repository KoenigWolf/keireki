"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { otherExperiences } from "@/data/profile";
import { content } from "@/data/content";
import { ease, duration, stagger, viewportMargin, sectionHeader } from "@/data/motion";

const icons = {
  camera: (
    <svg
      className="w-6 h-6 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
      />
    </svg>
  ),
  store: (
    <svg
      className="w-6 h-6 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021.75 9.35m-18 0A2.995 2.995 0 006 12.12m-2.25-2.77L5.25 4.5h13.5l1.5 4.85"
      />
    </svg>
  ),
};

function StoryCard({
  story,
  index,
}: {
  story: (typeof otherExperiences)[0];
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
        delay: index * stagger.wider,
        ease: ease.smooth,
      }}
      className="relative group"
    >
      <div className="card-glow" />

      <div className="relative bg-card border border-border rounded-2xl p-5 sm:p-8 card-shine hover:border-primary/30 transition-all duration-300 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 shrink-0">
            {icons[story.icon]}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-card-foreground leading-snug">
            {story.title}
          </h3>
        </div>

        {/* Paragraphs */}
        <div className="space-y-3">
          {story.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Stories() {
  return (
    <section id="stories" className="relative py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          {...sectionHeader}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            {content.stories.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {content.stories.heading}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {content.stories.description}
          </p>
        </motion.div>

        {/* Story cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherExperiences.map((story, index) => (
            <StoryCard key={index} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
