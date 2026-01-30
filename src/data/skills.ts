export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🖥",
    skills: [
      { name: "React / Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Vue.js", level: 3 },
      { name: "Tailwind CSS", level: 4 },
      { name: "HTML / CSS", level: 5 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Ruby on Rails", level: 3 },
      { name: "Python", level: 3 },
      { name: "REST API設計", level: 4 },
    ],
  },
  {
    category: "Database",
    icon: "🗄",
    skills: [
      { name: "PostgreSQL", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "Redis", level: 3 },
    ],
  },
  {
    category: "DevOps / Tools",
    icon: "🔧",
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "Docker", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "Vercel", level: 4 },
    ],
  },
];
