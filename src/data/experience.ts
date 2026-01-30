// ─── 職務経歴（プロジェクト詳細付き） ───

export interface ProjectDetail {
  name: string;
  period: string;
  summary: string;
  role: string;
  teamSize: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  companyDescription: string;
  employmentType: string;
  description: string;
  projects: ProjectDetail[];
}

export const experiences: Experience[] = [
  {
    period: "2021年4月 - 現在",
    title: "フルスタックエンジニア",
    company: "株式会社〇〇（東京）",
    companyDescription: "自社プロダクト開発を行うスタートアップ企業",
    employmentType: "正社員",
    description:
      "React/Next.js を用いたフロントエンド開発を中心に、バックエンド API 構築、DB設計、CI/CD 構築まで幅広く担当。アジャイル開発チームの中核メンバーとして、企画段階から参画。",
    projects: [
      {
        name: "BtoB SaaS 管理ダッシュボード開発",
        period: "2023年1月 - 現在",
        summary:
          "企業向け業務管理SaaSのフロントエンド全面リニューアル。レガシーなjQuery実装からNext.js (App Router) + TypeScript への移行プロジェクト。",
        role: "フロントエンドリード",
        teamSize: "5名（FE2名, BE2名, デザイナー1名）",
        responsibilities: [
          "Next.js App Router を採用した新アーキテクチャの設計・技術選定",
          "コンポーネント設計（Atomic Design ベース）・共通UIライブラリの構築",
          "Server Components / Client Components の設計判断",
          "Tanstack Query によるデータフェッチ戦略の策定",
          "Tailwind CSS によるデザインシステムの構築",
          "コードレビュー・ペアプログラミングの実施",
        ],
        achievements: [
          "ページ読み込み速度を40%改善（Lighthouse スコア: 58→92）",
          "フロントエンドのバンドルサイズを35%削減",
          "コンポーネントの再利用率を向上させ、開発速度が1.5倍に",
        ],
        technologies: [
          "Next.js 14",
          "TypeScript",
          "Tailwind CSS",
          "Tanstack Query",
          "Zustand",
          "Vitest",
          "Storybook",
        ],
      },
      {
        name: "社内向けリアルタイム通知基盤の構築",
        period: "2022年6月 - 2022年12月",
        summary:
          "WebSocket を活用したリアルタイム通知システムの設計・実装。既存のポーリング方式からの移行。",
        role: "バックエンド担当",
        teamSize: "3名（BE2名, FE1名）",
        responsibilities: [
          "Node.js + Socket.io によるWebSocketサーバーの構築",
          "Redis Pub/Sub を活用したスケーラブルな通知配信",
          "PostgreSQL による通知履歴のデータモデル設計",
          "REST API の設計・実装（Express.js）",
        ],
        achievements: [
          "通知遅延を平均3秒→0.2秒に短縮",
          "サーバー負荷を60%削減（ポーリング廃止）",
        ],
        technologies: [
          "Node.js",
          "Express",
          "Socket.io",
          "Redis",
          "PostgreSQL",
          "Docker",
        ],
      },
      {
        name: "顧客向けランディングページの構築",
        period: "2021年4月 - 2022年5月",
        summary:
          "マーケティングチームと連携し、複数のLP制作・A/Bテスト運用を担当。",
        role: "フロントエンド担当",
        teamSize: "2名（FE1名, デザイナー1名）",
        responsibilities: [
          "Next.js (SSG) + Tailwind CSS によるLP実装",
          "Google Analytics / GTM の導入・イベント計測設計",
          "Core Web Vitals の改善・パフォーマンスチューニング",
          "レスポンシブデザインの実装",
        ],
        achievements: [
          "LP経由のCVRを15%向上（A/Bテスト運用の結果）",
          "Lighthouse パフォーマンススコア 95以上を安定的に達成",
        ],
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Vercel",
        ],
      },
    ],
  },
  {
    period: "2019年4月 - 2021年3月",
    title: "Webエンジニア",
    company: "株式会社△△",
    companyDescription: "受託開発を中心としたWeb制作会社",
    employmentType: "正社員",
    description:
      "フロントエンド開発を中心に、Vue.js や React を使用した SPA 開発に従事。バックエンドとの連携や API 設計にも携わり、フルスタックへの足がかりを築く。",
    projects: [
      {
        name: "ECサイト フロントエンドリニューアル",
        period: "2020年6月 - 2021年3月",
        summary:
          "アパレル系ECサイトのフロントエンドをjQueryからVue.js (Nuxt.js) へリニューアル。",
        role: "フロントエンド担当",
        teamSize: "4名（FE2名, BE1名, PM1名）",
        responsibilities: [
          "Nuxt.js (SSR) による新フロントエンドの設計・実装",
          "Vuex による状態管理設計",
          "Ruby on Rails API との連携実装",
          "カート機能・決済フローのUI実装",
          "レスポンシブ対応（モバイルファースト）",
        ],
        achievements: [
          "モバイルでのCVRが20%向上",
          "ページ読み込み時間を2.5秒短縮",
        ],
        technologies: [
          "Vue.js",
          "Nuxt.js",
          "Vuex",
          "Ruby on Rails",
          "MySQL",
          "SCSS",
        ],
      },
      {
        name: "企業向けCMS管理画面の開発",
        period: "2019年4月 - 2020年5月",
        summary:
          "コーポレートサイト向けCMSの管理画面をReactで新規構築。",
        role: "フロントエンド担当",
        teamSize: "3名（FE1名, BE1名, PM1名）",
        responsibilities: [
          "React + Material UI による管理画面の設計・実装",
          "REST API との CRUD 操作の実装",
          "リッチテキストエディタ・画像アップロード機能の実装",
          "ユーザー認証（JWT）のフロントエンド実装",
        ],
        technologies: [
          "React",
          "JavaScript",
          "Material UI",
          "Ruby on Rails",
          "MySQL",
        ],
      },
    ],
  },
  {
    period: "2017年4月 - 2019年3月",
    title: "サポートエンジニア",
    company: "株式会社□□",
    companyDescription: "ITインフラ・ネットワークサービスを提供する企業",
    employmentType: "正社員",
    description:
      "法人顧客向けの技術サポートを担当。サーバー・ネットワーク関連のトラブルシューティングを通じて幅広い技術知識を習得。",
    projects: [
      {
        name: "法人顧客テクニカルサポート",
        period: "2017年4月 - 2019年3月",
        summary:
          "法人顧客向けITインフラのテクニカルサポート業務。障害対応・問い合わせ対応を一次〜三次対応まで担当。",
        role: "テクニカルサポート",
        teamSize: "8名チーム",
        responsibilities: [
          "サーバー・ネットワーク障害の原因調査・復旧対応",
          "Linux (CentOS/Ubuntu) サーバーの運用・保守",
          "顧客向け障害報告書の作成・説明",
          "社内ナレッジベースの整備・FAQ作成",
          "新人教育・OJTの実施",
        ],
        achievements: [
          "月間対応件数チームトップ（平均120件/月）",
          "顧客満足度調査で部門内1位を2期連続獲得",
        ],
        technologies: [
          "Linux",
          "Windows Server",
          "ネットワーク (TCP/IP)",
          "VMware",
          "Active Directory",
        ],
      },
    ],
  },
];

// ─── 個人プロジェクト ───

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: "ポートフォリオサイト",
    description:
      "Next.js 14 + TypeScript + Tailwind CSS で構築した本サイト。ダークモード対応、Framer Motion によるアニメーション、レスポンシブデザインを実装。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/KoenigWolf/keireki",
  },
  {
    title: "タスク管理アプリ",
    description:
      "React + Node.js + PostgreSQL で構築したフルスタック タスク管理アプリ。REST API設計、JWT認証、リアルタイム更新を実装。",
    technologies: ["React", "Node.js", "PostgreSQL", "REST API"],
    github: "https://github.com/KoenigWolf",
  },
  {
    title: "ECサイトUI",
    description:
      "Vue.js + Tailwind CSS で構築したECサイトのフロントエンド。レスポンシブデザイン、カート機能、決済フローを実装。",
    technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/KoenigWolf",
  },
];
