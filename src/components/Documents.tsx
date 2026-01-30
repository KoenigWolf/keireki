"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { content } from "@/data/content";
import { ease, duration, stagger, viewportMargin } from "@/data/motion";
import { IconDocument, IconDownload } from "@/components/Icons";

const urls = [profile.resumeUrl, profile.careerUrl];
const documents = content.documents.items.map((item, i) => ({
  ...item,
  url: urls[i],
}));

export default function Documents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin.section });

  return (
    <section id="documents" className="relative py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: duration.slow, ease: ease.smooth }}
          className="mb-16"
        >
          <span className="inline-block typo-label text-primary mb-3">
            {content.documents.label}
          </span>
          <h2 className="typo-section-heading text-foreground mb-4">
            {content.documents.heading}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {content.documents.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <motion.a
              key={index}
              href={doc.url}
              download
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: duration.slow,
                delay: index * stagger.wide,
                ease: ease.smooth,
              }}
              className="relative group block"
            >
              {/* Glow */}
              <div className="card-glow" />

              <div className="relative bg-card border border-border rounded-2xl p-6 card-shine hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconDocument className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {doc.title}
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">
                        {doc.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {doc.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium group-hover:gap-2.5 transition-all">
                      <IconDownload className="w-4 h-4" />
                      {content.common.pdfDownload}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
