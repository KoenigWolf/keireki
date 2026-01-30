import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MapPin, Mail, User, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { profile, careerSummary, strengths } from "@/data/profile";
import { experiences, type ProjectDetail } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { content } from "@/data/content";
import CareerActions from "./CareerActions";

export const metadata: Metadata = {
  title: content.career.title,
  robots: { index: false, follow: false },
};

function ProjectCard({ project }: { project: ProjectDetail }) {
  const t = content.career;

  return (
    <div className="rounded-lg border border-border bg-muted/30 p-4 sm:p-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div className="flex-1 min-w-0">
          <h5 className="text-sm sm:text-base font-bold text-foreground">
            {project.name}
          </h5>
          <p className="text-xs text-muted-foreground mt-0.5">
            {project.summary}
          </p>
        </div>
        <span className="font-mono text-xs text-primary tabular-nums whitespace-nowrap shrink-0">
          {project.period}
        </span>
      </div>

      {/* Role & team */}
      <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <User className="w-3 h-3" />
          {project.role}
        </span>
        {project.teamSize !== "-" && (
          <span className="inline-flex items-center gap-1">
            <Users className="w-3 h-3" />
            {project.teamSize}
          </span>
        )}
      </div>

      {/* Responsibilities */}
      <div className="mb-3">
        <h6 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
          {t.responsibilities}
        </h6>
        <ul className="space-y-1">
          {project.responsibilities.map((r, i) => (
            <li
              key={i}
              className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      {project.achievements && project.achievements.length > 0 && (
        <div className="mb-3">
          <h6 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            {t.achievements}
          </h6>
          <ul className="space-y-1">
            {project.achievements.map((a, i) => (
              <li
                key={i}
                className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 flex items-start gap-2"
              >
                <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-[10px] sm:text-xs font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CareerPage() {
  const t = content.career;

  return (
    <>
      {/* Top action bar */}
      <div className="sticky top-0 z-40 bg-background/60 backdrop-blur-2xl print:hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-4xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-1.5 -ml-3 hover:bg-muted/60 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            {t.backLink}
          </Link>
          <CareerActions
            printLabel={t.print}
            downloadLabel={t.download}
            downloadUrl={profile.careerUrl}
          />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        {/* ── Profile header ── */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-10">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-border shrink-0">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              {profile.name}
            </h1>
            <p className="text-sm text-muted-foreground mb-2">
              {profile.title}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {profile.email}
              </span>
            </div>
          </div>
        </section>

        <Separator className="mb-10" />

        {/* ── 職務要約 ── */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              {t.sections.summary}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {careerSummary.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm sm:text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* ── 職務経歴 ── */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-foreground mb-5 px-1">
            {t.sections.experience}
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <Card key={idx}>
                <CardHeader>
                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg font-bold">
                        {exp.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant="secondary" className="text-xs font-normal">
                        {exp.employmentType}
                      </Badge>
                      <span className="font-mono text-xs text-primary tabular-nums">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {exp.companyDescription}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Projects */}
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {t.projectDetails}
                    </h4>
                    <div className="space-y-4">
                      {exp.projects.map((project, pi) => (
                        <ProjectCard key={pi} project={project} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ── テクニカルスキル ── */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              {t.sections.skills}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillCategories.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    {cat.category}
                  </h4>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {cat.skills.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ── 自己PR・強み ── */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              {t.sections.strengths}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {strengths.map((s, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 text-primary text-xs font-bold">
                    {i + 1}
                  </span>
                  <h4 className="text-sm font-bold text-foreground">
                    {s.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground pl-8">
                  {s.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
