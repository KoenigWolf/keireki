"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, qualifications } from "@/data/profile";
import { content } from "@/data/content";
import { ease, duration, stagger, viewportMargin, sectionHeader } from "@/data/motion";

function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[0];
  index: number;
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
        delay: index * stagger.base,
        ease: ease.smooth,
      }}
      className="relative group"
    >
      <div className="card-glow" />
      <div className="relative bg-card border border-border rounded-2xl p-4 sm:p-6 card-shine hover:border-primary/30 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zM12 14v7"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-card-foreground">
                {item.institution}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.degree}</p>
            </div>
          </div>
          <span className="typo-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20 whitespace-nowrap w-fit">
            {item.period}
          </span>
        </div>
        <p className="typo-body text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function QualificationItem({
  item,
  index,
}: {
  item: (typeof qualifications)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin.item });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: duration.base,
        delay: index * stagger.normal,
        ease: ease.smooth,
      }}
      className="flex items-center gap-4 py-3 border-b border-border last:border-0 group"
    >
      <span className="typo-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20 shrink-0">
        {item.year}
      </span>
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <svg
          className="w-4 h-4 text-accent shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <span className="text-sm text-card-foreground font-medium group-hover:text-primary transition-colors truncate">
          {item.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 px-6 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="section-line top-0" />
        <div className="section-line bottom-0" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          {...sectionHeader}
          className="mb-16"
        >
          <span className="inline-block typo-label text-primary mb-3">
            {content.education.label}
          </span>
          <h2 className="typo-section-heading text-foreground mb-4">
            {content.education.heading}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {content.education.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: viewportMargin.card }}
              transition={{
                duration: duration.normal,
                ease: ease.smooth,
              }}
              className="typo-sub-heading text-foreground mb-5"
            >
              {content.education.educationHeading}
            </motion.h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <EducationCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: viewportMargin.card }}
              transition={{
                duration: duration.normal,
                ease: ease.smooth,
              }}
              className="typo-sub-heading text-foreground mb-5"
            >
              {content.education.qualificationsHeading}
            </motion.h3>
            <div className="relative bg-card border border-border rounded-2xl p-5 sm:p-6 card-shine">
              {qualifications.map((item, index) => (
                <QualificationItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
