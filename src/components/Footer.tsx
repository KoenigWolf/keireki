"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { content } from "@/data/content";
import { IconGithub, IconMail } from "@/components/Icons";

const sectionLinks = content.nav;
const docLinks = content.navDocuments;

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main row */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold gradient-text">
              {profile.nickname}
            </span>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xs">
              {profile.catchphrase}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={content.common.github}
              >
                <IconGithub className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={content.common.email}
              >
                <IconMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              {docLinks.label}
            </h4>
            <ul className="space-y-2.5">
              {docLinks.items.map((doc) => (
                <li key={doc.href}>
                  <Link
                    href={doc.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {doc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {content.footer.builtWith}{" "}
            {content.footer.techStack.map((tech, i) => (
              <span key={tech}>
                <span className="text-foreground/60 font-medium">{tech}</span>
                {i < content.footer.techStack.length - 1 && (
                  <span className="mx-1 text-border">&middot;</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
