export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    period: "2021 - 現在",
    title: "フルスタックエンジニア",
    company: "東京",
    description:
      "React/Next.jsを用いたフロントエンド開発、Node.jsによるバックエンドAPI構築、データベース設計・運用まで幅広く担当。アジャイル開発チームのメンバーとして、プロダクトの企画段階から参画。",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    period: "2019 - 2021",
    title: "Webエンジニア",
    company: "Web開発企業",
    description:
      "フロントエンド開発を中心に、Vue.jsやReactを使用したSPA開発に従事。バックエンドとの連携やAPI設計にも携わり、フルスタックへの足がかりを築く。",
    technologies: ["Vue.js", "React", "JavaScript", "Ruby on Rails", "MySQL"],
  },
  {
    period: "2017 - 2019",
    title: "サポートエンジニア",
    company: "IT企業",
    description:
      "技術サポートとして顧客対応を担当。トラブルシューティングを通じて幅広い技術知識を習得。この経験がコミュニケーション力の基盤となる。",
    technologies: ["Linux", "ネットワーク", "カスタマーサポート"],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  url?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "ポートフォリオサイト",
    description:
      "Next.js 14 + TypeScript + Tailwind CSSで構築した本サイト。ダークモード対応、Framer Motionによるアニメーション実装。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/KoenigWolf/keireki",
  },
  {
    title: "タスク管理アプリ",
    description:
      "React + Node.js + PostgreSQLで構築したフルスタックタスク管理アプリケーション。REST API設計、JWT認証を実装。",
    technologies: ["React", "Node.js", "PostgreSQL", "REST API"],
    github: "https://github.com/KoenigWolf",
  },
  {
    title: "ECサイトUI",
    description:
      "Vue.js + Tailwind CSSで構築したECサイトのフロントエンド。レスポンシブデザイン、カート機能、決済フロー実装。",
    technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/KoenigWolf",
  },
];
