// ─── アニメーション デザイントークン ───
// Framer Motion で使う値を一元管理。
// テーマの「動き」を変えたい時はこのファイルだけ編集する。

// ─── イージング ───
export const ease = {
  smooth: [0.22, 1, 0.36, 1],
} as const;

// ─── デュレーション (秒) ───
export const duration = {
  fast: 0.3,
  base: 0.4,
  normal: 0.5,
  slow: 0.6,
  hero: 0.8,
} as const;

// ─── スタッガー遅延倍率 (index * N) ───
export const stagger = {
  tight: 0.05,
  normal: 0.08,
  base: 0.1,
  wide: 0.12,
  wider: 0.15,
} as const;

// ─── Spring プリセット ───
export const spring = {
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
  pop: { type: "spring" as const, stiffness: 300 },
} as const;

// ─── Viewport マージン ───
export const viewportMargin = {
  section: "-80px",
  block: "-60px",
  card: "-40px",
  item: "-20px",
} as const;

// ─── 共通プリセット: セクションヘッダー ───
// About / Summary / Skills / Experience / Education / Stories / Projects 共通
export const sectionHeader = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: viewportMargin.section },
  transition: { duration: duration.slow, ease: ease.smooth },
} as const;
