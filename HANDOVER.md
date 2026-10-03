# Portfolio Project Handover & Context Dossier

**Target Audience:** Any engineer, designer, or AI agent taking over this repository with zero prior context.  
**Repository Location:** `/Users/eyud/Work/Personal/portfolio`  
**Current Active Branch:** `feature/minimal-matrix-design`  
**Status as of October 2026:** V2 implementation running locally on Next.js 14, undergoing final review and refinement.

---

## 1. Quick Start (How to Run Immediately)

```bash
cd /Users/eyud/Work/Personal/portfolio

# Ensure dependencies are installed (already installed in node_modules)
npm install

# Start local development server (runs on http://localhost:3000)
npm run dev

# Production build check
npm run build
```

---

## 2. Who Eyuel Tefera Is (Engineering Identity & Framing)

> **CRITICAL RULE:** Do NOT present Eyuel as a generic "junior/mid full-stack web developer" or a "React/Node CRUD builder." That completely misrepresents his actual capabilities and hurts his career positioning.

### Core Engineering Persona
Eyuel is a **Backend / Platform Engineer specializing in high-throughput, transaction-heavy distributed systems, banking integrations, and financial infrastructure**, rapidly evolving toward systems architecture and technical leadership.

### The Real Differentiator (From Production Experience & AI Insights)
1. **Domain + Systems Collision:** He understands both the code and the real-world financial mechanics: SACCO systems, reconciliation, dividends, interest, loan amortization, multi-tenant financial isolation, core banking (Flexcube/FCUBS), and payment gateways.
2. **Failure-First Thinking:** Most engineers only design for the happy path (`request -> 200 OK`). Eyuel naturally thinks about failure modes:
   - *"What happens when this request fails halfway?"*
   - *"What happens if this downstream service times out but already debited the account?"*
   - *"Should Redis `SETNX` be used here for distributed locking and request deduplication?"*
   - *"How do we enforce idempotency across slow or duplicate banking network calls?"*
   - *"What does the ledger / database look like after crash recovery?"*
3. **Operational & Observability Exposure:** He doesn't throw code over the fence. He inspects production logs (Pino, Loki), correlates transaction request IDs across distributed microservices, uses Grafana, and debugs real financial customer incidents.
4. **Pragmatic Architecture:** Prefers clean, functional, resilient patterns over unnecessary OOP bloat or excessive theoretical abstractions.

---

## 3. Verified Career Timeline & Work History

In early conversations, Eyuel's CV had overlapping/outdated dates. Through direct clarification with Eyuel, the **exact canonical timeline** is:

### 1. EagleLion System Technology (Addis Ababa, Ethiopia · On-site)
* **Title:** Back End Developer (Full-time)
* **Period:** Oct 2025 – Present (~1 yr+; user noted joining around Oct / currently ongoing)
* **Industry:** FinTech / Banking Infrastructure
* **Core Responsibilities:**
  - Modernizing backend architecture for the **Dashen Super App** (Ethiopia's largest fintech ecosystem, 50+ services).
  - High-volume transaction workflows, idempotency, and Redis request deduplication.
  - Core banking integrations: Oracle Flexcube (FCUBS XML flows, account lookup, transaction creation, account classification).
  - External financial networks: IPS (Instant Payment System), MPGS (Mastercard Payment Gateway Services) remittance, Ethio Telecom Postpaid, Safaricom Postpaid.
  - Platform services: Transaction Aggregator service, Notification monorepo, HQ dynamic fee calculation engine.

### 2. eTech S.C. (Addis Ababa, Ethiopia · On-site)
* **Total Tenure:** Jan 2024 – Sep 2025 (1 yr 9 mos)
* **Role 1 — Software Engineer (Aug 2024 – Sep 2025 · 1 yr 2 mos):**
  - Architected and built the **SACCO (Savings and Credit Cooperative) Platform** with a multi-tenant master/tenant database model serving 12 institutions and 50–120 users per tenant.
  - Built financial modules: budgeting, automated reconciliation, regulatory financial reporting, loan management with amortization & bulk penalties.
  - Built the **Share Management System**: shareholder equity tracking, automated dividend calculation, reinvestment, and real-time assembly attendance.
  - Mentored junior engineers, ran code reviews, contributed to internal common utility libraries.
* **Role 2 — Junior Software Developer (Jan 2024 – Aug 2024 · 8 mos):**
  - Full-stack development using Java (Vert.x), Angular, PostgreSQL.
  - Inventory & asset management server logic (later adapted for ERP workflows).

### 3. Irak Technologies (Addis Ababa, Ethiopia)
* **Title:** Full Stack Developer (Internship)
* **Period:** Jan 2024 – Mar 2024 (3 mos)
* **Tech:** React.js, Node.js

### 4. Education
* **Institution:** Jimma University — Jimma Institute of Technology (JIT)
* **Degree:** Bachelor of Science in Computer Science (GPA: 3.32/4.00, Exit Exam: 71/100)
* **Decision Note:** Removed from the visible website layout per Eyuel's explicit decision, but preserved in the downloadable CV.

---

## 4. History of Design Iterations & Decisions in this Session

### Inspiration Origin
Eyuel wanted a portfolio with the clean, modern engineering feel of [meareg.tech](https://meareg.tech/) (minimalist, 3D elements, dark theme, smooth motion).

### Iteration 1 (Killed / Scrapped)
* **Branch:** `feature/initial-implementation`
* **Style:** Colorful dark blue/emerald theme (`#0a0a0f`), 3D floating wireframe meshes (cube, sphere, torus, octahedron) via React Three Fiber, standard one-page vertical scroll.
* **Eyuel's Feedback:** Rejected it. *"i dont like this version create another branch and lets go with another design decision and the color combo and everything"*.

### Iteration 2 (Current Active Implementation)
* **Branch:** `feature/minimal-matrix-design`
* Eyuel selected the following architectural recipe:
  1. **Hero 3D/Visual:** `D` -> Matrix code rain canvas effect (subtle monochrome falling characters).
  2. **Color Palette:** `B` -> Pure minimal monochrome (pitch black `#000000`, white `#ffffff`, gray `#666666`, border lines `#222222`).
  3. **Layout:** `A + C` -> Combination of single-page scroll with a **fixed left sidebar** (`Sidebar.tsx`, 256px wide) and scrollable main content.
  4. **Animations:** `A` -> Subtle, minimal, fast Framer Motion transitions (no dizzying parallax or long delays).

### Key Explicit Directives Given by Eyuel:
1. **Background Scope:** Asked if matrix background should be everywhere. **Decision:** Absolutely NOT. Matrix rain is strictly scoped to the Hero section to preserve performance, readability, and a mature aesthetic. Sections below have a clean pitch-black background.
2. **Layout Centering:** Eyuel demanded *"and lets center the contents"* and *"center all pages not just the contact page"*. Every section is vertically and horizontally centered using `flex items-center justify-center` with a contained `max-w-3xl` or `max-w-4xl` inner wrapper.
3. **Contact Section Showdown:** We built two competing prototypes:
   - *Option A:* Large bold minimalist CTA (`ContactCTA.tsx`).
   - *Option D:* Interactive terminal window with typed output (`ContactTerminal.tsx`).
   - Rendered both stacked so Eyuel could compare live.
   - **Eyuel's Decision:** Selected Option D (Terminal). Removed Option A from the view.
4. **Education Section Removal:** Eyuel instructed to remove education as a standalone section. Instead, created a floating CV download button (`src/components/ui/CVDownload.tsx`) anchored at bottom-right (`Option D`).
5. **Projects Reality Check:** Eyuel noted that previous versions listed minor features as "projects" (e.g., fee engine, school fees). He instructed to elevate only major platforms and standalone systems:
   - *Dashen Super App Backend Modernization* (Fintech Platform)
   - *SACCO Financial Management Platform* (Multi-tenant Financial System)
   - *Share Management System* (Financial Governance)
   - *API Gateway in Go* (Personal Distributed Systems Project)
   - *Library Management System in Go* (Personal Go/GORM Project)

---

## 5. Repository & Architecture Map

```
/Users/eyud/Work/Personal/portfolio/
├── public/
│   └── cv.pdf                       <-- [ACTION REQUIRED] Place Eyuel's real PDF here
├── src/
│   ├── app/
│   │   ├── globals.css              <-- Pitch-black background (#000), custom sleek scrollbar
│   │   ├── layout.tsx               <-- Metadata, Inter font configuration
│   │   └── page.tsx                 <-- Main page orchestrator (Sidebar + Sections + CV button)
│   ├── components/
│   │   ├── layout/
│   │   │   └── Sidebar.tsx          <-- Fixed left nav (w-64) with active states and socials
│   │   ├── sections/
│   │   │   ├── Hero.tsx             <-- Fullscreen hero with MatrixRain canvas background
│   │   │   ├── About.tsx            <-- Concise systems-first bio (Education removed)
│   │   │   ├── Experience.tsx       <-- Detailed multi-role timeline (EagleLion, eTech, Irak)
│   │   │   ├── Projects.tsx         <-- Refined high-impact project list with tech stacks
│   │   │   ├── Skills.tsx           <-- Categorized competencies & AWS certifications
│   │   │   ├── ContactTerminal.tsx  <-- [ACTIVE] Terminal window styling with command output
│   │   │   └── ContactCTA.tsx       <-- [INACTIVE] Alternative CTA prototype (kept for reference)
│   │   ├── three/
│   │   │   ├── MatrixRain.tsx       <-- Vanilla Canvas 2D falling matrix rain script
│   │   │   ├── FloatingShapes.tsx   <-- (V1 legacy R3F meshes, currently unused)
│   │   │   ├── ParticleField.tsx    <-- (V1 legacy R3F points, currently unused)
│   │   │   └── Scene.tsx            <-- (V1 legacy R3F Canvas container)
│   │   └── ui/
│   │       └── CVDownload.tsx       <-- Floating bottom-right "Download CV" trigger
│   └── lib/
├── tailwind.config.ts               <-- Monochrome theme tokens (background: #000, border: #222)
├── tsconfig.json
├── package.json                     <-- Next 14.2.5, React 18, Three, Framer Motion, Tailwind
└── HANDOVER.md                      <-- This file
```

---

## 6. Current Git State & Active Work

Run `git status` inside `/Users/eyud/Work/Personal/portfolio`:
* **Current branch:** `feature/minimal-matrix-design`
* **Unstaged modified files:**
  - `src/app/globals.css`
  - `src/app/page.tsx`
  - `src/components/sections/About.tsx`
  - `src/components/sections/Contact.tsx`
  - `src/components/sections/Experience.tsx`
  - `src/components/sections/Hero.tsx`
  - `src/components/sections/Projects.tsx`
  - `src/components/sections/Skills.tsx`
  - `tailwind.config.ts`
* **Untracked files:**
  - `src/components/layout/` (`Sidebar.tsx`)
  - `src/components/sections/ContactCTA.tsx`
  - `src/components/sections/ContactTerminal.tsx`
  - `src/components/three/MatrixRain.tsx`
  - `src/components/ui/` (`CVDownload.tsx`)
  - `HANDOVER.md`

---

## 7. Immediate Next Steps for the Next Engineer / Agent

1. **Verify Local App:**
   - Run `npm run dev` and navigate to `http://localhost:3000`.
   - Ensure the server compiles cleanly with 0 errors.
2. **Add `cv.pdf` Asset:**
   - Drop Eyuel's up-to-date CV file into `/Users/eyud/Work/Personal/portfolio/public/cv.pdf` so the download button works cleanly.
3. **Mobile Responsiveness Polish (Known Technical Debt):**
   - The current sidebar is `fixed w-64` and the main body has `ml-64`. On mobile screens (`< 768px`), this needs a mobile top-bar or slide-out drawer so content isn't clipped or squished.
4. **Clean Up Unused Files:**
   - `ContactCTA.tsx` can be archived or deleted if Eyuel is completely satisfied with `ContactTerminal.tsx`.
   - V1 Three.js files in `src/components/three/` (`FloatingShapes.tsx`, `ParticleField.tsx`, `Scene.tsx`) can be removed or kept if 3D elements are reintroduced later.
5. **Git Commit & Push:**
   - Stage all current work: `git add .`
   - Commit cleanly with clear message:
     ```bash
     git commit -m "feat: complete minimal monochrome design with matrix hero, terminal contact, and real project inventory"
     ```
   - Connect remote when ready and push `feature/minimal-matrix-design`.
6. **Vercel Deployment:**
   - Deploy only after Eyuel reviews and approves the local layout completely (per user's explicit rule: *"vercel for now but this is strictly after running it locally and i check everything out"*).

---
*Document prepared for seamless handoff. All decisions and constraints recorded directly from session history.*
