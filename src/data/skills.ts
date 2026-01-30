import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiRubyonrails,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: IconType;
  color: string; // brand color for hover
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    description: "UIの設計・構築",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    category: "Backend",
    description: "サーバーサイド・API",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Rails", icon: SiRubyonrails, color: "#D30001" },
      { name: "REST API", icon: TbApi, color: "#6366F1" },
    ],
  },
  {
    category: "Database",
    description: "データ基盤",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
    ],
  },
  {
    category: "DevOps / Tools",
    description: "開発環境・運用",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];
