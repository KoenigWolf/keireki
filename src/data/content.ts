// ─── UI テキスト集中管理 ───
// すべてのコンポーネントで使う表示テキストをここで一元管理する。
// 将来的な多言語対応（i18n）にも対応しやすい構造。

export const content = {
  // ─── 共通 ───
  common: {
    skipLink: "メインコンテンツへスキップ",
    menuLabel: "メニュー",
    github: "GitHub",
    email: "Email",
    pdfDownload: "PDF ダウンロード",
  },

  // ─── ナビゲーション ───
  nav: [
    { href: "#about", label: "About" },
    { href: "#summary", label: "Summary" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#stories", label: "Stories" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],

  // ─── Hero ───
  hero: {
    downloadCta: "職務経歴書ダウンロード",
  },

  // ─── About ───
  about: {
    label: "About",
    heading: "Career Path",
    description:
      "兵庫出身のサポートエンジニアから、東京のフルスタックエンジニアへ。技術とビジネスの両面からプロダクトに貢献する道を歩んでいます。",
  },

  // ─── Summary ───
  summary: {
    label: "Summary",
    heading: "職務要約",
    description: "これまでのキャリアの歩みと、技術者としての強み。",
    strengthsHeading: "強み・自己PR",
  },

  // ─── Skills ───
  skills: {
    label: "Skills",
    heading: "Tech Stack",
    description:
      "フロントエンドからバックエンド、インフラまで。モダンな技術スタックを活用したプロダクト開発が強みです。",
  },

  // ─── Experience ───
  experience: {
    label: "Experience",
    heading: "職務経歴",
    description:
      "サポートエンジニアからフルスタックエンジニアへ。着実にスキルを積み上げてきたキャリアの軌跡。",
    projectDetails: "プロジェクト詳細",
    responsibilities: "担当業務",
    achievements: "成果",
  },

  // ─── Education ───
  education: {
    label: "Education & Qualifications",
    heading: "学歴・資格",
    description: "学術的な基盤と、継続的なスキルアップの証。",
    educationHeading: "学歴",
    qualificationsHeading: "資格・認定",
  },

  // ─── Stories ───
  stories: {
    label: "Stories",
    heading: "その他の経験",
    description:
      "職歴だけでは伝わらない、人との関わりと仕組みづくりの原体験。",
  },

  // ─── Projects ───
  projects: {
    label: "Projects",
    heading: "Selected Works",
    description: "個人プロジェクトから実務まで。技術力を証明する成果物。",
    sourceLink: "Source",
    demoLink: "Demo",
  },

  // ─── Documents ───
  documents: {
    label: "Documents",
    heading: "Download",
    description: "採用に関する書類をダウンロードいただけます。",
    items: [
      {
        title: "履歴書",
        subtitle: "Resume",
        description: "基本情報・学歴・資格など",
        iconPath:
          "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      },
      {
        title: "職務経歴書",
        subtitle: "Career Sheet",
        description: "業務経験・プロジェクト実績",
        iconPath:
          "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
      },
    ],
  },

  // ─── Contact ───
  contact: {
    label: "Contact",
    heading: "Get in Touch",
    description: "お仕事のご依頼やご相談など、お気軽にお問い合わせください。",
    emailCta: "メールで連絡",
    locationSuffix: "Japan",
  },

  // ─── Footer ───
  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },

  // ─── Error ───
  error: {
    heading: "エラーが発生しました",
    description:
      "ページの表示中にエラーが発生しました。再読み込みをお試しください。",
    reloadButton: "再読み込み",
  },

  // ─── Not Found ───
  notFound: {
    code: "404",
    heading: "ページが見つかりません",
    description:
      "お探しのページは存在しないか、移動した可能性があります。",
    backLink: "トップへ戻る",
  },
} as const;
