"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile, highlights } from "@/data/profile";
import { content } from "@/data/content";
import { ease, duration } from "@/data/motion";
import { IconDownload, IconGithub, IconExternalLink, highlightIcons } from "@/components/Icons";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.hero, delay, ease: ease.smooth },
});

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[128px] animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 dot-pattern opacity-30 fade-edge-b" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Profile photo */}
        <motion.div {...fadeUp(0.1)} className="mb-6 flex justify-center">
          <div className="relative group">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-md group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-background overflow-hidden">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Name + title */}
        <motion.div {...fadeUp(0.3)}>
          <p className="text-base sm:text-lg text-muted-foreground font-medium tracking-wide mb-1">
            {profile.name}
            <span className="mx-2 text-border">|</span>
            <span className="text-primary">{profile.nickname}</span>
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            {profile.title} / {profile.location}
            <span className="mx-1.5 text-border">·</span>
            {profile.origin}
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.45)}
          className="typo-hero mb-6 sm:mb-8"
        >
          <span className="gradient-text glow-text">{profile.catchphrase}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.55)}
          className="typo-hero-sub text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          {profile.description}
        </motion.p>

        {/* Highlight stats */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex items-center justify-center gap-4 sm:gap-10 mb-10 sm:mb-12"
        >
          {highlights.map((h, i) => {
            const HighlightIcon = highlightIcons[i];
            return (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-1.5">
                  {HighlightIcon && (
                    <HighlightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  )}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                  {h.value}
                  <span className="text-lg sm:text-xl ml-0.5">{h.unit}</span>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {h.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.75)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href={profile.careerUrl}
            className="group relative inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-medium text-primary-foreground overflow-hidden transition-shadow hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient" />
            <IconDownload className="w-4 h-4 relative z-10" />
            <span className="relative z-10">
              {content.hero.downloadCta}
            </span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-medium text-foreground glass hover:glow transition-all duration-300"
          >
            <IconGithub className="w-5 h-5" />
            {content.common.github}
            <IconExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all" />
          </a>
        </motion.div>
      </div>

    </section>
  );
}
