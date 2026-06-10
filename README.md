# MaterialCalc.com

Free construction calculators for homeowners, DIYers, and contractors.

## Tech Stack

- **Next.js 15** (App Router, static export)
- **TypeScript** (strict mode)
- **Tailwind CSS 3.4**
- **Inter** (self-hosted via next/font)
- **Vercel** or any static host

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Static export to ./out/
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com), import the repo
3. Vercel auto-detects Next.js — click Deploy
4. Add custom domain: `thematerialcalc.com`

## Project Structure

```
src/
├── app/                          11 pages (App Router)
│   ├── layout.tsx                Root layout + favicon metadata
│   ├── page.tsx                  Homepage / Concrete Calculator
│   ├── not-found.tsx             Custom 404
│   ├── about/                    E-E-A-T optimized About page
│   ├── contact/                  Contact form
│   ├── concrete-slab-calculator/
│   ├── concrete-cost-calculator/
│   ├── concrete-footing-calculator/
│   ├── concrete-bags-calculator/
│   ├── privacy-policy/
│   └── terms-of-service/
├── components/
│   ├── layout/                   Header, Footer, Breadcrumb
│   ├── ui/                       Logo, FAQ, ToolCard
│   ├── calculators/              5 calculator components
│   ├── pages/                    ContactForm (client)
│   └── seo/                      SchemaMarkup (JSON-LD)
├── lib/
│   ├── constants.ts              Site config, presets
│   └── calculations.ts           All concrete formulas
└── styles/
    └── globals.css               Tailwind + components

public/
├── favicon.svg                   SVG favicon (modern browsers)
├── favicon.ico                   ICO favicon (legacy)
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png          iOS home screen (180×180)
├── site.webmanifest              PWA manifest
├── robots.txt
├── sitemap.xml
└── images/
    ├── logo-icon.svg             Full-size logo (512px)
    ├── logo-192.png              PWA icon
    ├── logo-512.png              PWA icon
    └── og-default.png            Open Graph image (1200×630)
```

## Brand

- **Navy:** `#1B365D`
- **Orange:** `#E8862A`
- **Founder:** Rehan Ilahi
- **Email:** materialcalcsite@gmail.com
