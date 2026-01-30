"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile, highlights } from "@/data/profile";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
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
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-background overflow-hidden">
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
          <h2 className="text-base sm:text-lg text-muted-foreground font-medium tracking-wide mb-1">
            {profile.name}
            <span className="mx-2 text-border">|</span>
            <span className="text-primary">{profile.nickname}</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            {profile.title} / {profile.location}
            <span className="mx-1.5 text-border">·</span>
            {profile.origin}
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.45)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          <span className="gradient-text glow-text">{profile.catchphrase}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.55)}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {profile.description}
        </motion.p>

        {/* Highlight stats */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex items-center justify-center gap-6 sm:gap-10 mb-12"
        >
          {highlights.map((h, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                {h.value}
                <span className="text-lg sm:text-xl ml-0.5">{h.unit}</span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                {h.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.75)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={profile.careerUrl}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-primary-foreground overflow-hidden transition-shadow hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient" />
            <svg
              className="w-4 h-4 relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="relative z-10">
              職務経歴書ダウンロード
            </span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-foreground glass hover:glow transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
            <svg
              className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
