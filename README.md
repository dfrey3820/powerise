# Powerise Solutions — Website

A modern, animated Next.js 15 rebuild of [powerise.co.ke](https://powerise.co.ke).

## Stack

- **Next.js 15** (App Router, React 19, Turbopack)
- **Tailwind CSS v4** (CSS-first configuration)
- **Framer Motion 12** for cinematic animations
- **Lucide Icons**
- **TypeScript**

## Getting Started

```bash
pnpm install       # or npm / yarn / bun
pnpm dev           # http://localhost:3000
pnpm build         # production build
pnpm start         # start production server
```

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + fonts + metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind v4 + design tokens + custom CSS3
│   ├── about/              # About page
│   ├── services/           # Services overview + 3 sub-pages
│   ├── industries/         # Industries served
│   ├── blog/               # Insights hub
│   └── contact/            # Contact form + map
├── components/             # Reusable UI (Navbar, Footer, Hero, ...)
└── lib/                    # Data + helpers
```

## Notes

- Inner pages use original, illustrative copy written for the rebuild.
- Facts kept from the original: company name, address, phone, hours, three service pillars.
