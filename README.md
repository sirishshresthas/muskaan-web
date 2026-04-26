# Müskaan — Public Website

The marketing site for Müskaan, an AI-powered healthcare practice management platform. Built with Astro, React, and Tailwind CSS v4.

## What's here

- **Landing page** — hero, features, and calls to action
- **Contact form** — sends inquiry emails to the team via EmailJS
- **Blog** — markdown-based, ready for posts (listing and post pages not yet built)

## Getting started

```bash
npm install
cp .env.example .env   # fill in your keys
npm run dev            # http://localhost:4321
```

### Environment variables

| Variable | What it's for |
|---|---|
| `PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service (Gmail) |
| `PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS email template |
| `PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

All variables are prefixed `PUBLIC_` so Astro exposes them to client-side code. See `.env.example` for the full list.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at port 4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |

## Stack

- **[Astro 6](https://astro.build)** — static site generation, zero JS by default
- **[React 19](https://react.dev)** — interactive islands only (contact form, theme toggle, landing page)
- **[Tailwind CSS v4](https://tailwindcss.com)** — configured entirely in CSS via `@theme`, no JS config file
- **[Framer Motion](https://www.framer.com/motion/)** — page and element animations
- **[EmailJS](https://www.emailjs.com)** — contact form emails, no backend required

## Project structure

```
src/
  components/
    LandingPage.tsx         # Full landing page (React island)
    ContactForm.tsx         # Contact form — sends email via EmailJS
    MuskaaanLogo.tsx        # SVG wordmark
    MuskaaanDevanagari.tsx  # Devanagari watermark (मुस्कान)
    ThemeToggle.tsx         # Light/dark toggle, persisted in localStorage
    ui/
      BrandButton.tsx       # Primary CTA button
  layouts/
    Base.astro              # Root layout — nav, footer, fonts, theme
  pages/
    index.astro             # /
    contact.astro           # /contact
  content/
    blog/                   # Markdown blog posts go here
  content.config.ts         # Blog collection schema
  styles/
    global.css              # Tailwind v4 import + brand color tokens
```

## Brand tokens

Colors live in `src/styles/global.css` and are available as Tailwind classes throughout the project.

| Token | Value | Class |
|---|---|---|
| `--color-brand-primary` | `#112754` navy | `bg-brand-primary` |
| `--color-brand-secondary` | `#27aae1` blue | `bg-brand-secondary` |
| `--color-brand-accent` | `#f59e0b` amber | `bg-brand-accent` |

## Dark mode

Dark is the default. The `dark` class on `<html>` controls it, toggled by `ThemeToggle` and persisted in `localStorage`. An inline script in `Base.astro` applies the saved preference before first paint to prevent flash.

## Adding a blog post

Drop a `.md` or `.mdx` file into `src/content/blog/` with this frontmatter:

```yaml
---
title: Your post title
description: A short description
pubDate: 2026-01-15
author: Müskaan Team
tags: [healthcare, ai]
draft: false
---
```

The blog listing page (`/blog`) and individual post pages are not yet built — add them when the first posts are ready.
