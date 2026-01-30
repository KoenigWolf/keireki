# Keireki

Next.js 14 (App Router) で構築したポートフォリオ / 履歴書サイト。

## Tech Stack

- **Framework** : Next.js 14 (App Router, Static Export)
- **Language** : TypeScript
- **Styling** : Tailwind CSS + CSS Variables (Dark / Light)
- **Animation** : Framer Motion
- **UI Parts** : shadcn/ui (Card, Badge, Button, Avatar, Separator)
- **Icons** : Lucide React + カスタム Brand SVG
- **Theme** : next-themes
- **Fonts** : Plus Jakarta Sans / Noto Sans JP / JetBrains Mono (next/font)

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Home (all sections)
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── globals.css         # Global styles + print CSS
│   ├── resume/page.tsx     # Resume page
│   ├── career/page.tsx     # Career sheet page
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── Header.tsx          # Navigation + theme toggle
│   ├── Hero.tsx            # Profile photo, highlights, CTA
│   ├── About.tsx           # Career timeline
│   ├── Summary.tsx         # Career summary + strengths
│   ├── Skills.tsx          # Tech stack (4 categories)
│   ├── Experience.tsx      # Work history + project details
│   ├── Education.tsx       # Education + qualifications
│   ├── Stories.tsx         # Personal experiences
│   ├── Projects.tsx        # GitHub projects showcase
│   ├── Documents.tsx       # PDF download section
│   ├── Contact.tsx         # Contact CTA
│   ├── Footer.tsx          # Footer
│   ├── JsonLd.tsx          # JSON-LD structured data
│   ├── BrandIcons.tsx      # Inline SVG brand icons
│   ├── Icons.tsx           # Custom SVG icons
│   └── ui/                 # shadcn/ui components
├── data/
│   ├── profile.ts          # Personal info, timeline, strengths
│   ├── content.ts          # All UI text (i18n-ready)
│   ├── experience.ts       # Work experience details
│   ├── resume.ts           # Resume-specific data
│   ├── skills.ts           # Skill categories + icons
│   └── motion.ts           # Animation config
└── lib/
    ├── github.ts           # GitHub API integration
    └── utils.ts            # cn() utility
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run check-all` | Lint + Build |

## Security

Production headers configured in `next.config.mjs`:

- **CSP** : strict Content-Security-Policy
- **HSTS** : 2 year max-age, includeSubDomains, preload
- **Frame** : X-Frame-Options DENY, frame-ancestors 'none'
- **MIME** : X-Content-Type-Options nosniff
- **Referrer** : strict-origin-when-cross-origin
- **COOP / CORP** : same-origin
- **Permissions-Policy** : all sensitive APIs disabled

## License

Private
