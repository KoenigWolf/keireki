"use client";

import { profile } from "@/data/profile";
import { content } from "@/data/content";
import { IconGithub, IconMail } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-sm font-bold gradient-text">
              {profile.nickname}
            </span>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {profile.name}. {content.footer.copyright}
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={content.common.github}
            >
              <IconGithub className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={content.common.email}
            >
              <IconMail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            {content.footer.builtWith}{" "}
            {content.footer.techStack.map((tech, i) => (
              <span key={tech}>
                <span className="text-primary">{tech}</span>
                {i < content.footer.techStack.length - 1 && " + "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
