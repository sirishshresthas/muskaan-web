# müskaan-web — Claude Code Context

## Project Overview
Astro-based public website for Müskaan — an AI-powered **healthcare** practice management platform (not dental-specific). Includes the landing page, contact form, and blog. Fully separate from the main app (`dental-ai` repo).

## Commands
```bash
npm run dev      # Start dev server (port 4321)
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
npm run astro    # Run Astro CLI directly
```

## Tech Stack
- **Framework**: Astro 6 (SSG — static generation)
- **UI**: React 19 (islands only — interactive components)
- **Styling**: Tailwind CSS v4 (Vite plugin — no JS config file)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Firebase Firestore (contact form only — `contactInquiries` collection)
- **Fonts**: Manrope (body), Quicksand + Dosis (logo) — loaded via Google Fonts in `Base.astro`

## Brand Identity

### Name
- Product name: **Müskaan** (umlaut on ü — always write it correctly)
- Platform scope: AI-powered **healthcare** practice management — not dental-only

### Colors
Defined in `src/styles/global.css` via Tailwind v4 `@theme`:

| Token | Hex | Tailwind class | Usage |
|---|---|---|---|
| `--color-brand-primary` | `#112754` navy | `bg-brand-primary` | Button base, logo on dark, glow |
| `--color-brand-secondary` | `#27aae1` müskaan blue | `bg-brand-secondary` | Button hover, input focus border |
| `--color-brand-accent` | `#f59e0b` amber | `bg-brand-accent` | Devanagari dots, button ring/glow |

### Typography
- Font: **Manrope** — body text
- Logo fonts: **Quicksand** (m, skaan) + **Dosis** (ü) — referenced by name in SVG, loaded via Google Fonts

### Background Glows
- Dark mode: `bg-brand-primary/30`, `w-[700px] h-[500px]`, `blur-[130px]`, centered
- Light mode: `bg-gradient-to-b from-brand-primary/[0.04] to-transparent`
- Never use generic `blue-*` or `cyan-*` Tailwind colors for glow elements

### UI Component Conventions
- **Glass cards**: `rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-brand-primary/[0.18] dark:backdrop-blur-md`
- **Buttons**: always use `BrandButton` (`src/components/ui/BrandButton.tsx`)
  - Base: `rounded-full bg-brand-primary ring-1 ring-brand-accent/30 dark:ring-brand-accent/40`
  - Hover: `hover:bg-brand-secondary hover:shadow-[0_0_28px_#f59e0b40] dark:hover:shadow-[0_0_32px_#f59e0b59]`
  - Uses plain `<a>` for links (no Next.js Link)
- **Inputs**: border-bottom only (`border-b-2`), focus: `border-brand-secondary` + `shadow-[0_4px_12px_-2px_#27aae133]`
- **Devanagari watermark**: `MuskaaanDevanagari` SVG — `मु` in `#27aae1` at 0.22 opacity, `स्कान` in `currentColor` at 0.06 opacity

## Project Structure
```
src/
  components/
    MuskaaanLogo.tsx        # SVG wordmark — no font dependency, uses Google Fonts by name
    MuskaaanDevanagari.tsx  # Devanagari watermark SVG
    ThemeToggle.tsx         # Light/dark toggle — localStorage only (no Firebase)
    LandingPage.tsx         # Full landing page as a React island
    ContactForm.tsx         # Contact form React island — writes to Firestore
    ui/
      BrandButton.tsx       # Primary CTA button
  layouts/
    Base.astro              # Root layout — nav, footer, fonts, theme flash prevention
  pages/
    index.astro             # / → LandingPage island
    contact.astro           # /contact → ContactForm island
  content/
    blog/                   # Markdown/MDX blog posts go here
  content.config.ts         # Blog collection schema (Astro 6 format with glob loader)
  styles/
    global.css              # Tailwind v4 import + @theme brand tokens + @variant dark
  lib/
    firebase.ts             # Firebase init — reads PUBLIC_ env vars
```

## Tailwind v4 Key Differences from v3
- No `tailwind.config.js` — colors defined in CSS via `@theme { --color-brand-primary: #112754; }`
- Dark mode: `@variant dark (&:is(.dark, .dark *));` in CSS (replaces `darkMode: ['class']`)
- Import: `@import "tailwindcss"` (replaces `@tailwind base/components/utilities`)
- Opacity modifiers (`bg-brand-primary/20`) work automatically for `@theme` colors
- Arbitrary shadow colors use hex+alpha: `shadow-[0_0_32px_#f59e0b59]`

## Dark Mode
- Toggled by adding/removing `dark` class on `<html>`
- Default: dark (set in `Base.astro` + flash-prevention inline script)
- Persisted in `localStorage` by `ThemeToggle`

## Astro Islands Pattern
React components only hydrate where needed:
- `client:load` — hydrates immediately (ThemeToggle, LandingPage, ContactForm)
- Static components (MuskaaanLogo in nav/footer) render as plain HTML — no JS

## Environment Variables
Copy `.env.example` → `.env` and fill in Firebase values (same project as the main app):
```
PUBLIC_FIREBASE_API_KEY
PUBLIC_FIREBASE_AUTH_DOMAIN
PUBLIC_FIREBASE_PROJECT_ID
PUBLIC_FIREBASE_STORAGE_BUCKET
PUBLIC_FIREBASE_MESSAGING_SENDER_ID
PUBLIC_FIREBASE_APP_ID
```
All must be prefixed `PUBLIC_` for Astro to expose them to client-side code.

## Blog
Posts live in `src/content/blog/` as `.md` or `.mdx` files. Frontmatter schema:
```yaml
---
title: string
description: string
pubDate: date
author: string        # default: "Müskaan Team"
tags: string[]        # default: []
draft: boolean        # default: false
image:                # optional
  src: string
  alt: string
---
```
Pages for listing (`/blog`) and individual posts (`/blog/[slug]`) are not yet built — add them when ready.