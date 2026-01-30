"use client";

// Lucide アイコンで統一 — 洗練された細いラインスタイル
// 全コンポーネントのアイコンをここで一元管理

import {
  Download,
  Mail,
  MapPin,
  User,
  Users,
  CircleCheck,
  ArrowUpRight,
  Code,
  Camera,
  Store,
  FileText,
  Briefcase,
  Building2,
  Cpu,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconProps = Omit<LucideProps, "ref">;

export function IconDownload({ className = "w-5 h-5", ...props }: IconProps) {
  return <Download className={className} strokeWidth={1.5} {...props} />;
}

export function IconMail({ className = "w-5 h-5", ...props }: IconProps) {
  return <Mail className={className} strokeWidth={1.5} {...props} />;
}

export function IconMapPin({ className = "w-4 h-4 text-primary", ...props }: IconProps) {
  return <MapPin className={className} strokeWidth={1.5} {...props} />;
}

export function IconUser({ className = "w-3.5 h-3.5 text-primary", ...props }: IconProps) {
  return <User className={className} strokeWidth={2} {...props} />;
}

export function IconUserGroup({ className = "w-3.5 h-3.5 text-primary", ...props }: IconProps) {
  return <Users className={className} strokeWidth={2} {...props} />;
}

export function IconCheck({ className = "w-3.5 h-3.5", ...props }: IconProps) {
  return <CircleCheck className={className} strokeWidth={2} {...props} />;
}

export function IconExternalLink({ className = "w-3.5 h-3.5", ...props }: IconProps) {
  return <ArrowUpRight className={className} strokeWidth={2} {...props} />;
}

export function IconCode({ className = "w-7 h-7 text-primary", ...props }: IconProps) {
  return <Code className={className} strokeWidth={1.5} {...props} />;
}

export function IconCamera({ className = "w-6 h-6 text-primary", ...props }: IconProps) {
  return <Camera className={className} strokeWidth={1.5} {...props} />;
}

export function IconStore({ className = "w-6 h-6 text-primary", ...props }: IconProps) {
  return <Store className={className} strokeWidth={1.5} {...props} />;
}

export function IconDocument({ className = "w-6 h-6 text-primary", ...props }: IconProps) {
  return <FileText className={className} strokeWidth={1.5} {...props} />;
}

export function IconBriefcase({ className = "w-6 h-6 text-primary", ...props }: IconProps) {
  return <Briefcase className={className} strokeWidth={1.5} {...props} />;
}

export function IconBuildingOffice({ className = "w-5 h-5 text-primary", ...props }: IconProps) {
  return <Building2 className={className} strokeWidth={1.5} {...props} />;
}

export function IconCpuChip({ className = "w-5 h-5 text-primary", ...props }: IconProps) {
  return <Cpu className={className} strokeWidth={1.5} {...props} />;
}

export function IconGithub({ className = "w-5 h-5", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Hero ハイライト用（実務経験・業界・技術の順）
export const highlightIcons = [
  IconBriefcase,
  IconBuildingOffice,
  IconCpuChip,
] as const;

// Stories 用: icon キー → コンポーネント
export const storyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  camera: IconCamera,
  store: IconStore,
};
