"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/data/profile";
import { content } from "@/data/content";
import { ease, duration, stagger, spring, viewportMargin, sectionHeader } from "@/data/motion";

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof timeline)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin.block });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration.slow, delay: index * stagger.base, ease: ease.smooth }}
      className="relative grid grid-cols-[auto_1fr] gap-6 sm:gap-8"
    >
      {/* Line + dot column */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 w-10 h-10 rounded-full bg-muted border-2 border-primary/40 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * stagger.base + 0.3, ...spring.pop }}
            className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent"
          />
        </div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: duration.normal, delay: index * stagger.base + 0.2 }}
            className="w-px flex-1 bg-gradient-to-b from-primary/30 to-border origin-top"
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-md mb-3">
          {item.year}
        </span>
        <h3 className="typo-sub-heading text-foreground mb-2">
          {item.title}
        </h3>
        <p className="typo-body text-muted-foreground max-w-lg">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div {...sectionHeader} className="mb-16">
          <span className="inline-block typo-label text-primary mb-3">
            {content.about.label}
          </span>
          <h2 className="typo-section-heading text-foreground mb-4">
            {content.about.heading}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {content.about.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="ml-1">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
