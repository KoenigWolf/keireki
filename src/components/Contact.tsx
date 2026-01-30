"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { content } from "@/data/content";
import { ease, duration, viewportMargin } from "@/data/motion";
import { IconMail, IconGithub, IconExternalLink, IconMapPin } from "@/components/Icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin.section });

  return (
    <section id="contact" className="relative py-32 sm:py-40 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px]" />
        <div className="section-line top-0" />
      </div>

      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: duration.normal, ease: ease.smooth }}
          className="inline-block typo-label text-primary mb-6"
        >
          {content.contact.label}
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: duration.slow, delay: 0.1, ease: ease.smooth }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
        >
          {content.contact.heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: duration.normal, delay: 0.2, ease: ease.smooth }}
          className="text-muted-foreground text-lg leading-relaxed mb-12"
        >
          {content.contact.description}
        </motion.p>

        {/* Email — primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: duration.normal, delay: 0.3, ease: ease.smooth }}
          className="mb-10"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium text-primary-foreground overflow-hidden transition-shadow hover:shadow-xl hover:shadow-primary/20"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient" />
            <IconMail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{content.contact.emailCta}</span>
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: duration.slow, delay: 0.4, ease: ease.smooth }}
          className="w-16 h-px bg-border mx-auto mb-10"
        />

        {/* Secondary links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: duration.normal, delay: 0.5, ease: ease.smooth }}
          className="flex items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors group"
          >
            <IconGithub className="w-4 h-4" />
            GitHub
            <IconExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>

          <span className="inline-flex items-center gap-1.5">
            <IconMapPin className="w-4 h-4" />
            {profile.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
