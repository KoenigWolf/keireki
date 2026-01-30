"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile, highlights } from "@/data/profile";
import { ease, duration } from "@/data/motion";
import { highlightIcons } from "@/components/Icons";

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
        <motion.div {...fadeUp(0.1)} className="mb-8 sm:mb-10 flex justify-center">
          <div className="relative group">
            {/* Glow ring */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-lg group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full border-2 border-background overflow-hidden">
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

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.3)}
          className="typo-hero mb-6 sm:mb-8"
        >
          <span className="gradient-text glow-text">{profile.catchphrase}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.4)}
          className="typo-hero-sub text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          {profile.description}
        </motion.p>

        {/* Highlight stats */}
        <motion.div
          {...fadeUp(0.5)}
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

      </div>

    </section>
  );
}
