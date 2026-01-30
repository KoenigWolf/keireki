"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { content } from "@/data/content";
import { ease, duration, stagger, viewportMargin } from "@/data/motion";
import { IconMail, IconGithub, IconExternalLink, IconMapPin } from "@/components/Icons";

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
                <IconMail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{content.contact.emailCta}</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-foreground glass hover:glow transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <IconGithub className="w-5 h-5" />
                {content.common.github}
                <IconExternalLink className="w-3.5 h-3.5 opacity-50 group-hover/btn:translate-x-0.5 group-hover/btn:opacity-100 transition-all" />
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <IconMapPin className="w-4 h-4" />
              {profile.location}, {content.contact.locationSuffix}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
