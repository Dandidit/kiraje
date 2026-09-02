# kiraje
Tools online yang senang. Kira, convert, generate — semua kat sini.
=======
# KiraJe

KiraJe is a Malaysia-focused calculator and online tools website.

## Run locally

Requirements:
- Node.js 20+

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build
npm start
```

## Deploy to Vercel

Push this folder to GitHub, import the repository into Vercel, and deploy.

Before production:
- Replace `https://kiraje.my` in `app/layout.tsx`, `app/sitemap.ts`, and `public/robots.txt` if the final domain differs.
- Verify calculator formulas against current Malaysian official rules before presenting them as exact.
- Add About, Contact, Privacy Policy and Terms pages before applying for an advertising network.
- Add Google Search Console and submit the sitemap.
- Add an ad network only after the site has useful content and complies with the network's policies.
