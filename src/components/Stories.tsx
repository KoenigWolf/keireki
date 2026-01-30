"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { otherExperiences } from "@/data/profile";
import { content } from "@/data/content";
import { ease, duration, stagger, viewportMargin, sectionHeader } from "@/data/motion";
import { storyIcons } from "@/components/Icons";

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
            {(() => {
              const Icon = storyIcons[story.icon];
              return Icon ? <Icon className="w-6 h-6" /> : null;
            })()}
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
              className="typo-body text-muted-foreground"
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
          <span className="inline-block typo-label text-primary mb-3">
            {content.stories.label}
          </span>
          <h2 className="typo-section-heading text-foreground mb-4">
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
