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
    period: "2025年11月 - 2026年1月",
    title: "フルスタックエンジニア",
    company: "TRASS",
    companyDescription: "Webプロダクト開発企業",
    employmentType: "業務委託",
    description:
      "Webプロダクト開発支援として参画し、アーキテクチャ設計、設計思想の明文化、実装ルールの策定、既存コードベースの構造改善を中心に担当。",
    projects: [
      {
        name: "Webプロダクト 設計・開発支援",
        period: "2025年11月 - 2026年1月",
        summary:
          "Next.js／React／TypeScriptを用いたモダンWeb開発において、実装速度と中長期的な保守性・拡張性の両立を重視し、プロダクト全体の技術的健全性向上に貢献。",
        role: "フルスタックエンジニア",
        teamSize: "-",
        responsibilities: [
          "Next.js（App Router）を前提としたページ構成・ルーティング設計",
          "Server Components / Client Components の責務分離を意識した設計・実装",
          "TypeScriptを用いた型安全な設計（Props / API Response / Domain Model の型定義）",
          "Atomic Designベースのコンポーネント設計と責務分離（Presentational / Container）",
          "DESIGN.mdの策定・設計思想の明文化による属人性排除",
          "肥大化したコンポーネントの責務分割とリファクタリング",
          "アクセシビリティを意識したマークアップ・インタラクション設計",
          "コードレビューを通じた設計・実装観点でのフィードバック",
        ],
        achievements: [
          "設計思想・ルールの言語化によりレビューコストを削減",
          "技術的負債の段階的解消とコードベース品質の向上",
          "AIコードレビュー前提を考慮した設計ガイドライン整備",
        ],
        technologies: ["Next.js", "React", "TypeScript"],
      },
    ],
  },
  {
    period: "2025年5月 - 2025年11月",
    title: "フロントエンドエンジニア",
    company: "アンファー株式会社",
    companyDescription:
      "ヘルスケアテック企業（全体約600名 / 単体約300名）",
    employmentType: "正社員",
    description:
      "オンライン診療プラットフォームを中心とした医療系Webサービスの開発・運用に従事。React／Next.js／TypeScriptを用い、UI/UX設計・アクセシビリティ・セキュリティの向上を重視。",
    projects: [
      {
        name: "オンライン診療プラットフォーム開発",
        period: "2025年5月 - 2025年11月",
        summary:
          "医療現場や患者双方の利便性と安全性を意識した設計・実装に加え、クラウドインフラやAPI連携、パフォーマンス最適化、テスト自動化、チーム開発など幅広く業務に携わる。",
        role: "フロントエンドエンジニア",
        teamSize: "-",
        responsibilities: [
          "オンライン診療、問診、電子カルテ連携、予約管理など医療業務に直結する機能の新規開発・改修",
          "UI/UXデザイン改善、アクセシビリティ向上（WAI-ARIA、キーボード操作対応等）、多言語化対応",
          "RESTful API / GraphQLを用いたバックエンド連携および設計支援",
          "セキュリティ要件の実装（認証・認可、個人情報保護、CSP対策等）",
          "テスト自動化（Jest、Testing Library等）とCI/CD導入",
          "パフォーマンス最適化、コードのモジュール化・リファクタリング",
          "コードレビュー・設計レビュー・スクラムイベント参加",
          "医師や医療現場スタッフ、デザイナー、他エンジニアとの連携・調整",
        ],
        achievements: [
          "プロダクトの品質・信頼性向上をユーザー視点とエンジニアリングの双方から実現",
        ],
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "GraphQL",
          "Jest",
          "Testing Library",
        ],
      },
    ],
  },
  {
    period: "2020年9月 - 2024年9月",
    title: "テクニカルサポートエンジニア",
    company: "日本コンセントリクス株式会社",
    companyDescription:
      "外資系BPO企業（グローバル約44万人 / 日本法人約3,500名 / 全国14拠点）",
    employmentType: "正社員",
    description:
      "Microsoftのサポートエンジニアとして、法人顧客が利用するMicrosoft製品の技術的な問題解決および運用支援に従事。顧客のIT環境とビジネスニーズを理解し、最適な製品活用方法やセキュリティ対策を提案。",
    projects: [
      {
        name: "Microsoft Azure セキュリティサポート",
        period: "2022年9月 - 2024年9月",
        summary:
          "Azure環境におけるセキュリティ管理、エンドポイント保護、ID管理、インシデント対応を担当。",
        role: "Azure サポートエンジニア",
        teamSize: "-",
        responsibilities: [
          "Microsoft Defender for Endpointを活用したリアルタイム脅威検知と自動修復ポリシー構築",
          "Microsoft Sentinel（SIEM）とKQLを用いた脅威ハンティング・インシデント分析",
          "Azure AD B2B/B2Cによる IDフェデレーションの設計と運用",
          "RBAC（ロールベースアクセス制御）による適切な権限管理",
          "CISベンチマークに基づくセキュリティコンプライアンス適用",
          "Compliance Managerによる国際基準（GDPR / ISO 27001）準拠確認",
        ],
        technologies: [
          "Microsoft Azure",
          "Microsoft Defender",
          "Microsoft Sentinel",
          "KQL",
          "Azure AD",
        ],
      },
      {
        name: "Microsoft Dynamics 365 サポート",
        period: "2022年2月 - 2022年9月",
        summary:
          "Dynamics 365 / Power Platformを活用した業務自動化・データ統合の支援。",
        role: "Dynamics 365 サポートエンジニア",
        teamSize: "-",
        responsibilities: [
          "Dataverseを活用した顧客データの統合管理支援",
          "Power Automateによる業務自動化（リードスコアリング、通知、問い合わせ管理等）",
          "Power Appsを活用したカスタムアプリの開発支援",
          "Teams / SharePoint / OneDriveとの連携によるリアルタイム通知・承認フロー自動化",
        ],
        technologies: [
          "Dynamics 365",
          "Dataverse",
          "Power Automate",
          "Power Apps",
          "SharePoint",
        ],
      },
      {
        name: "Microsoft 365 サポート",
        period: "2021年8月 - 2022年2月",
        summary:
          "SharePoint / OneDriveを中心とした情報管理・セキュリティ運用の支援。",
        role: "Microsoft 365 サポートエンジニア",
        teamSize: "-",
        responsibilities: [
          "Hubサイト構造の最適化と組織ニーズに応じたサイト階層設計",
          "コンテンツタイプ / メタデータ戦略の適用による情報管理の一貫性確保",
          "IRM（Information Rights Management）を活用した機密ドキュメントのアクセス制御強化",
          "条件付きアクセス（Conditional Access）による非管理デバイスからのアクセス制御強化",
          "リテンションポリシーの適用によるデータ損失リスク軽減",
        ],
        technologies: [
          "SharePoint Online",
          "OneDrive for Business",
          "Azure AD",
          "Microsoft 365",
        ],
      },
      {
        name: "Uber Eats カスタマーサポート",
        period: "2020年9月 - 2021年8月",
        summary:
          "高度な問題解決能力と冷静な判断力で、複雑な問い合わせ対応とオペレーション最適化に貢献。",
        role: "カスタマーサポート",
        teamSize: "-",
        responsibilities: [
          "支払い、注文、アカウント管理に関する問い合わせの迅速な処理と解決率向上",
          "難易度の高いケースのエスカレーションと根本的な解決策の提供",
          "問い合わせ傾向の分析に基づく対応フローの最適化提案",
          "CSAT（顧客満足度スコア）の高水準維持",
        ],
        technologies: [],
      },
    ],
  },
  {
    period: "2019年2月 - 2020年5月",
    title: "不動産仲介営業",
    company: "株式会社LogProstyle",
    companyDescription: "不動産仲介企業（全国250名以上）",
    employmentType: "正社員",
    description:
      "新築・中古マンションや戸建住宅の売買・仲介業務を担当。個人・法人の新規顧客開拓および既存顧客フォローに従事し、データ活用を軸とした営業戦略を実施。",
    projects: [
      {
        name: "不動産仲介営業",
        period: "2019年2月 - 2020年5月",
        summary:
          "個人・法人の新規顧客開拓および既存顧客フォローに従事し、データ活用を軸とした営業戦略を実施。",
        role: "営業職",
        teamSize: "-",
        responsibilities: [
          "市場調査・価格査定・販売戦略の策定",
          "新規顧客開拓（テレアポ、紹介、問い合わせ対応）",
          "交渉業務（価格調整、契約条件の交渉、トラブル対応）",
          "集客業務（広告運用、Webマーケティング、SNS活用）",
          "市場データ分析による価格戦略の最適化",
        ],
        achievements: [
          "B2B 不動産向けシステム営業成績全国1位を達成",
        ],
        technologies: [],
      },
    ],
  },
  {
    period: "2017年4月 - 2019年1月",
    title: "機械設計エンジニア",
    company: "株式会社メイテックフィルダーズ",
    companyDescription:
      "エンジニアリングアウトソーシング企業（全国3,000名以上）",
    employmentType: "正社員",
    description:
      "自動車、重工業向けに機械設計・電気電子設計を中心とした技術支援を担当。3D CADを活用した設計・品質評価に従事。",
    projects: [
      {
        name: "大手自動車部品メーカー 電装システム設計",
        period: "2017年4月 - 2018年4月",
        summary:
          "ワイヤーハーネス・コネクタ設計、電装回路の最適化、品質評価を担当。次世代の車載電装システムの開発を支援。",
        role: "機械設計エンジニア",
        teamSize: "-",
        responsibilities: [
          "CATIA V5を活用した電装システムのワイヤーハーネスレイアウト設計",
          "電流負荷・温度変動を考慮した最適なハーネス構造の選定",
          "回路設計のシミュレーション解析、動作最適化・電力損失の最小化",
          "耐熱試験・耐振動試験・防水試験の実施と長期耐久性の検証",
        ],
        technologies: ["CATIA V5"],
      },
      {
        name: "大手機械メーカー 構造設計",
        period: "2018年4月 - 2019年1月",
        summary:
          "トラクター・建設機械の機械構造設計を担当し、耐久性・強度解析を活用した高耐久な設計を推進。",
        role: "機械設計エンジニア",
        teamSize: "-",
        responsibilities: [
          "CATIA V5を用いた3Dモデリングによる部品設計とレイアウト最適化",
          "CAE解析（有限要素法 FEM）による応力分布・変形解析の実施",
          "試作品の組み立て評価と設計通りの性能検証",
          "振動試験、耐熱試験、耐久試験の実施",
        ],
        technologies: ["CATIA V5", "CAE / FEM"],
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
];
