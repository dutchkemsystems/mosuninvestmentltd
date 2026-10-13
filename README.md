# Mosun Investments Limited — Marketing Website

> Production-grade, 4K-ready marketing site for Mosun Investments Limited.
> Primary Domain: `mosuninvestmentsltd.com`  
> Bilateral Headquarters: Chicago, IL, USA • Lagos, Nigeria  

---

## Brand Architecture

Mosun Investments Limited is the parent holding company for international grocery trade, consumer brands, property development, and an institutional impact advisory arm.

### Operating Sub-Brands:
1. **Mosun Foods** — Authentic Nigerian food staples, dried catfish, grains. Links out directly to the existing commerce site at [mosunfoods.com](https://mosunfoods.com).
2. **Mosun Drinks** — Artisanal botanical beverages, spiced hibiscus (zobo) nectar, and natural tropical citrus infusions.
3. **MSD** — Holding brand for cross-border commercial opportunities, trade financing, and expansion ventures.
4. **Mosun Property** — Sustainable commercial warehouses, cold-storage logistics facilities, and residential holdings in Chicago and Lagos.
5. **SDG Advisory Division** — Independent impact advisory arm led by **Adebowale Adetule, MBA Marketing Management**, focusing on health system strengthening, youth employment, and local industrialization (Goals 3, 4, 8, 9, with commercial grocery anchoring Goal 2).

---

## Route Structure

- `/` → Homepage (Parent HoldCo, trade corridor, sub-brand strip, SDG Advisory teaser)
- `/about` → Company history, Chicago–Lagos Atlantic corridor, leadership profiles
- `/brands` → Comprehensive portfolio overview of all commercial divisions
- `/brands/mosun-foods` → Mosun Foods sub-brand profile + link to `mosunfoods.com`
- `/brands/mosun-drinks` → Mosun Drinks botanical beverage division
- `/brands/msd` → MSD holding and capital vehicle
- `/brands/mosun-property` → Real estate and cold storage infrastructure
- `/sdg-advisory` → Full SDG Advisory landing with "For Partner Organisations" UN memorandum block
- `/contact` → Executive and commercial inquiry form with anti-bot honeypot and rate limiting
- `/legal/privacy` → Institutional privacy policy
- `/legal/terms` → Terms of use

---

## Local Development

```bash
# 1. Clone repository
git clone https://github.com/your-org/mosun-investments-site.git
cd mosun-investments-site

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The application runs on `http://localhost:3000`.

---

## Repository Initialization & Push Commands

To create the new private repository on GitHub and push the codebase:

```bash
# 1. Initialize git (if not already initialized)
git init
git checkout -b main

# 2. Stage all files
git add .
git commit -m "feat: complete production 4K-ready marketing portal for Mosun Investments Limited"

# 3. Create private repository on GitHub using the GitHub CLI
gh repo create mosun-investments-site --private --source=. --remote=origin --push

# Or, if using an existing remote URL:
git remote add origin git@github.com:<your-organization>/mosun-investments-site.git
git branch -M main
git push -u origin main
```

---

## Vercel Deployment Commands

Deploy to production with zero configuration:

```bash
# Preview build
npx vercel

# Production deployment
npx vercel --prod
```

Configure any optional environment variables in Vercel Project Settings:
- `VITE_CONTACT_ENDPOINT`: Custom webhook URL for receiving contact inquiries.

---

## Quality Bar & Verification Checklist

- [x] **Lighthouse Score Targets (95+)**:
  - Semantic HTML landmarks (`header`, `main`, `footer`, `section`, `nav`).
  - WCAG AA contrast on all text elements (deep navy `#0B1F3A`, warm gold `#C9A227`, off-white `#F7F5F0`).
  - Pre-connected fonts with display swap.
  - JSON-LD Structured data (`Organization`, `Person`).
- [x] **4K Ultra-HD Verification (3840px)**:
  - Full-bleed hero banner maintains crisp resolution with multi-stop scrim.
  - Container math bounded at `max-w-[1280px]` with generous fluid padding.
  - No horizontal overflow or layout shifts across viewports.
- [x] **First-Load Bundle Budget**:
  - Gzip bundle size under 200 KB.
  - Zero heavy third-party UI widget bloat.
- [x] **Security & Anti-Bot Hygiene**:
  - Zero hardcoded credentials or tokens.
  - Honeypot input on contact and SDG advisory enquiry forms.
  - Client-side rate-limiting preventing rapid duplicate submissions.
