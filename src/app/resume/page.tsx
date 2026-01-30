import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { profile, qualifications } from "@/data/profile";
import { content } from "@/data/content";
import {
  resumeProfile,
  educationHistory,
  employmentHistory,
  selfPR,
  resumeSkills,
  type HistoryEntry,
} from "@/data/resume";
import ResumeActions from "./ResumeActions";

export const metadata: Metadata = {
  title: content.resume.title,
  robots: { index: false, follow: false },
};

function formatDate(entry: HistoryEntry) {
  if (entry.year === null) return "";
  const y = String(entry.year);
  const m = entry.month !== null ? String(entry.month).padStart(2, "0") : "";
  return m ? `${y}.${m}` : y;
}

function TimelineRow({ entry, isLast }: { entry: HistoryEntry; isLast: boolean }) {
  const date = formatDate(entry);
  return (
    <div className="flex gap-4 sm:gap-6">
      {/* Date column */}
      <div className="w-16 sm:w-20 shrink-0 text-right">
        <span className="font-mono text-xs sm:text-sm text-muted-foreground tabular-nums">
          {date}
        </span>
      </div>

      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full border-2 border-primary bg-background shrink-0 mt-1.5" />
        {!isLast && <div className="w-px flex-1 bg-border" />}
      </div>

      {/* Content */}
      <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
        <p className="text-sm sm:text-base text-foreground leading-relaxed">
          {entry.entry}
        </p>
      </div>
    </div>
  );
}

export default function ResumePage() {
  const t = content.resume;

  return (
    <>
      {/* Top action bar */}
      <div className="sticky top-0 z-40 bg-background/60 backdrop-blur-2xl print:hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-3xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-1.5 -ml-3 hover:bg-muted/60 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            {t.backLink}
          </Link>
          <ResumeActions
            printLabel={t.print}
            downloadLabel={t.download}
            downloadUrl={profile.resumeUrl}
          />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
        {/* ── Profile header ── */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-10">
          {/* Avatar */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-border shrink-0">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="text-center sm:text-left">
            <p className="text-xs text-muted-foreground mb-0.5">
              {resumeProfile.furigana}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              {profile.name}
            </h1>
            <p className="text-sm text-muted-foreground mb-3">
              {profile.title}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <span>
                {resumeProfile.birthDate}生 / {resumeProfile.gender}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {resumeProfile.address}
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {resumeProfile.phone}
              </span>
              <span className="inline-flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {profile.email}
              </span>
            </div>
          </div>
        </section>

        <Separator className="mb-10" />

        {/* ── 学歴 ── */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              {t.sections.education}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {educationHistory.map((entry, i) => (
              <TimelineRow
                key={i}
                entry={entry}
                isLast={i === educationHistory.length - 1}
              />
            ))}
          </CardContent>
        </Card>

        {/* ── 職歴 ── */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              {t.sections.employment}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {employmentHistory.map((entry, i) => (
              <TimelineRow
                key={i}
                entry={entry}
                isLast={i === employmentHistory.length - 1}
              />
            ))}
          </CardContent>
        </Card>

        {/* ── 免許・資格 ── */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              {t.sections.qualifications}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {qualifications.map((q) => (
                <div
                  key={q.name}
                  className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 bg-muted/50"
                >
                  <span className="font-mono text-xs text-primary tabular-nums">
                    {q.year}
                  </span>
                  <span className="text-sm text-foreground">{q.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── 保有スキル ── */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              {t.sections.skills}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {resumeSkills.map((group) => (
              <div key={group.label}>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  {group.label}
                </h4>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item.category}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
                    >
                      <span className="text-xs font-medium text-muted-foreground w-32 shrink-0">
                        {item.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.split(", ").map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ── 自己PR ── */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              {t.sections.selfPR}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selfPR.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm sm:text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
