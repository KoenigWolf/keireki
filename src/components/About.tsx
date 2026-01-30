"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/data/profile";

const sectionHeader = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-[auto_1fr] gap-6 sm:gap-8"
    >
      {/* Line + dot column */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 w-10 h-10 rounded-full bg-muted border-2 border-primary/40 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
            className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent"
          />
        </div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="w-px flex-1 bg-gradient-to-b from-primary/30 to-border origin-top"
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-md mb-3">
          {item.year}
        </span>
        <h3 className="text-lg font-bold text-foreground mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
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
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Career Path
          </h2>
          <p className="text-muted-foreground max-w-xl">
            兵庫出身のサポートエンジニアから、東京のフルスタックエンジニアへ。
            技術とビジネスの両面からプロダクトに貢献する道を歩んでいます。
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
