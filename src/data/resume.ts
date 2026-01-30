// ─── 履歴書固有データ ───
// profile.ts の基本情報に加え、履歴書でのみ必要な個人情報・経歴詳細を管理

export const resumeProfile = {
  furigana: "さくた としき",
  birthDate: "1990年7月24日",
  gender: "男性",
  postalCode: "〒112-0001",
  address: "東京都文京区白山３丁目３−４-5F",
  addressFurigana: "とうきょうとぶんきょうくはくさん",
  phone: "080-4560-1124",
};

// ─── 学歴 ───

export interface HistoryEntry {
  year: number | null;
  month: number | null;
  entry: string;
}

export const educationHistory: HistoryEntry[] = [
  { year: 2006, month: 4, entry: "兵庫県立洲本実業高等学校 機械科 入学" },
  { year: 2009, month: 3, entry: "兵庫県立洲本実業高等学校 機械科 卒業" },
  {
    year: 2009,
    month: 4,
    entry: "京都精華大学 デザイン学部 プロダクトデザイン学科 入学",
  },
  {
    year: 2012,
    month: 5,
    entry: "ブリティッシュコロンビア州ビクトリアに語学留学",
  },
  { year: 2013, month: 1, entry: "オンタリオ州トロントに語学留学" },
  {
    year: 2016,
    month: 3,
    entry: "京都精華大学 デザイン学部 プロダクトデザイン学科 卒業",
  },
];

// ─── 職歴 ───

export const employmentHistory: HistoryEntry[] = [
  { year: 2017, month: 4, entry: "株式会社メイテックフィルダーズ 入社" },
  { year: 2019, month: 1, entry: "一身上の都合により退職" },
  { year: 2019, month: 2, entry: "株式会社LogProstyle 入社" },
  { year: 2020, month: 5, entry: "会社都合により退職" },
  { year: 2020, month: 9, entry: "日本コンセントリクス株式会社 入社" },
  { year: 2024, month: 9, entry: "一身上の都合により退職" },
  { year: 2025, month: 5, entry: "アンファー株式会社 入社" },
  {
    year: null,
    month: null,
    entry: "エンジニアとして、Webサービスの開発・運用に従事（現在に至る）",
  },
];

// ─── 自己PR ───

export const selfPR = [
  "私は「技術」と「ホスピタリティ」の両軸から、チームと社会に本質的な価値を届けられるエンジニアを志向しています。",
  "プロダクトデザイン専攻の学生時代から、人間中心の設計やものづくりに関心を持ち、高校でC言語を学び、カナダ留学やラグジュアリーホテルでの接客を通じて\"相手に寄り添う力\"と多様な価値観を培いました。",
  "その後、メーカーでの設計業務や不動産営業、グローバル企業でのクラウドインフラ・セキュリティ運用など、幅広い業界・職種で実務を重ねてきました。各現場で課題発見から提案、改善・実装まで自ら動き、周囲と信頼関係を築くことで成果を上げてきた経験があります。",
  "現在は社会的インパクトの大きいヘルスケア領域のオンライン診療プラットフォーム開発に携わり、React、Next.js、TypeScriptなどモダンな技術を活用しながら、アクセシビリティやセキュリティ、UI/UX品質・設計の最適化にも注力。チーム開発・継続的な改善・コード公開を通じて技術力の研鑽を続けています。",
  "これからも多様なバックグラウンドを強みに、技術とホスピタリティの双方から、ユーザー・チーム・社会に持続的な価値を創出していきたいと考えています。",
];

// ─── 保有スキル ───

export interface SkillCategory {
  category: string;
  skills: string;
}

export interface SkillGroup {
  label: string;
  items: SkillCategory[];
}

export const resumeSkills: SkillGroup[] = [
  {
    label: "言語・フレームワーク等",
    items: [
      { category: "フロントエンド", skills: "React, TypeScript, JavaScript" },
      { category: "フレームワーク", skills: "Next.js App Router" },
      { category: "バックエンド", skills: "Node.js, Python" },
      { category: "データベース", skills: "PostgreSQL, MySQL" },
      { category: "デプロイ", skills: "Vercel, AWS" },
    ],
  },
  {
    label: "Microsoft 関連",
    items: [
      { category: "クラウド", skills: "Azure" },
      {
        category: "セキュリティ",
        skills: "Sentinel, Defender, Zero Trust",
      },
      {
        category: "インフラ管理",
        skills:
          "Windows Server, DNS, DHCP, グループポリシー, Hyper-V, VMware",
      },
      {
        category: "自動化・スクリプト",
        skills: "PowerShell, Bash, CLI",
      },
      { category: "業務効率化", skills: "Power Automate, Power Apps" },
      { category: "API・データ連携", skills: "REST API, Graph API" },
    ],
  },
];
