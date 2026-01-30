"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { content } from "@/data/content";
import { ease, duration, stagger, viewportMargin } from "@/data/motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin.section });

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="section-line top-0" />
      </div>

      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: duration.slow, ease: ease.smooth }}
          className="mb-12"
        >
          <span className="inline-block typo-label text-primary mb-3">
            {content.contact.label}
          </span>
          <h2 className="typo-section-heading text-foreground mb-4">
            {content.contact.heading}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {content.contact.description}
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: duration.slow, delay: stagger.wider, ease: ease.smooth }}
          className="relative group"
        >
          <div className="card-glow" />

          <div className="relative bg-card border border-border rounded-2xl p-8 sm:p-12 card-shine">
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="group/btn relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-primary-foreground overflow-hidden transition-shadow hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto justify-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient" />
                <svg
                  className="w-5 h-5 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="relative z-10">{content.contact.emailCta}</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-foreground glass hover:glow transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {content.common.github}
                <svg
                  className="w-3.5 h-3.5 opacity-50 group-hover/btn:translate-x-0.5 group-hover/btn:opacity-100 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {profile.location}, {content.contact.locationSuffix}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
