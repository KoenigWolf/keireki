"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { content } from "@/data/content";
import { ease, duration, stagger, spring } from "@/data/motion";

const navLinks = content.nav;
const docLinks = content.navDocuments;

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [docOpen, setDocOpen] = useState(false);
  const docRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close dropdown on outside click
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (docRef.current && !docRef.current.contains(e.target as Node)) {
      setDocOpen(false);
    }
  }, []);

  useEffect(() => {
    if (docOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [docOpen, handleClickOutside]);

  const isDocActive = docLinks.items.some((d) => pathname === d.href);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: duration.slow, ease: ease.smooth }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-sm" : ""
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="relative group">
              <span className="text-xl font-bold gradient-text">{content.header.logoText}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = isHome && activeSection === link.href.slice(1);
                const href = isHome ? link.href : `/${link.href}`;

                return (
                  <a
                    key={link.href}
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        transition={spring.snappy}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}

              {/* Documents dropdown */}
              <div ref={docRef} className="relative">
                <button
                  type="button"
                  onClick={() => setDocOpen((v) => !v)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 inline-flex items-center gap-1 ${
                    isDocActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isDocActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={spring.snappy}
                    />
                  )}
                  <span className="relative z-10">{docLinks.label}</span>
                  <svg
                    className={`relative z-10 w-3.5 h-3.5 transition-transform duration-200 ${docOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {docOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: ease.smooth }}
                      className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-card shadow-lg overflow-hidden"
                    >
                      {docLinks.items.map((doc) => (
                        <Link
                          key={doc.href}
                          href={doc.href}
                          onClick={() => setDocOpen(false)}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            pathname === doc.href
                              ? "text-primary bg-primary/5"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {doc.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="ml-3 pl-3 border-l border-border">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-muted transition-colors"
                aria-label={content.common.menuLabel}
                aria-expanded={mobileOpen}
              >
                <div className="w-5 flex flex-col gap-[5px]">
                  <span
                    className={`block h-[1.5px] bg-foreground transition-all duration-300 origin-center ${
                      mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-foreground transition-all duration-300 ${
                      mobileOpen ? "opacity-0 scale-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-foreground transition-all duration-300 origin-center ${
                      mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: duration.fast, ease: ease.smooth }}
              className="relative pt-24 px-8 flex flex-col gap-2"
            >
              {navLinks.map((link, i) => {
                const isActive = isHome && activeSection === link.href.slice(1);
                const href = isHome ? link.href : `/${link.href}`;

                return (
                  <motion.a
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * stagger.tight }}
                    className={`text-2xl font-semibold py-3 border-b border-border transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              {/* Documents group */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * stagger.tight }}
                className="pt-4"
              >
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {docLinks.label}
                </span>
                <div className="flex flex-col gap-2 mt-2">
                  {docLinks.items.map((doc, i) => (
                    <motion.div
                      key={doc.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + 1 + i) * stagger.tight }}
                    >
                      <Link
                        href={doc.href}
                        onClick={() => setMobileOpen(false)}
                        className={`text-xl font-semibold py-2 block transition-colors ${
                          pathname === doc.href ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {doc.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
