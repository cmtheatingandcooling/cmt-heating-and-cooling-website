# CMT Heating & Cooling Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder homepage experience with a branded, responsive CMT Heating & Cooling landing page inspired by the conversion structure of the reference HVAC site.

**Architecture:** Keep the existing React Router pages and shared layout. Refactor the home sections and shared header/footer around a small set of CSS tokens and data-driven service content, while preserving bilingual translations and accessibility state.

**Tech Stack:** React 18, TypeScript, Vite, React Router, Tailwind CSS v4 utilities, react-i18next, react-icons.

**Spec:** `docs/superpowers/specs/2026-08-20-cmt-cooling-redesign-design.md`

## Global Constraints

- Preserve the existing Vite/React architecture and package manager.
- Use only local supplied assets; do not hotlink reference-site assets.
- Preserve existing routes, bilingual language toggle, accessibility controls, and SEO helpers.
- Do not invent specific pricing, certifications, reviews, licenses, or service-area claims not present in project content.
- Keep phone/email/WhatsApp values centralized in `src/config/constants.ts`.

---

### Task 1: Brand data and asset wiring

**Files:**
- Modify: `src/config/constants.ts`
- Modify: `src/locales/en.json`
- Modify: `src/locales/es.json`
- Modify: `index.html`
- Create: `public/assets/images/cmt-logo.png` if the attached logo is available to copy

**Interfaces:**
- `BUSINESS_INFO` supplies logo, hero image, name, tagline, description, and URL to all shared components.
- `APP_SERVICES` supplies three local image paths and service keys used by the homepage and service routes.

- [ ] Replace placeholder business identity and image paths with CMT-specific values and supplied assets.
- [ ] Replace the homepage and shared navigation placeholder strings in English and Spanish with CMT-specific service copy.
- [ ] Point the document favicon and title metadata at the CMT brand.
- [ ] Check that no template placeholder phrase remains in visible homepage content.

### Task 2: Header, hero, and conversion shell

**Files:**
- Modify: `src/components/layout/header.tsx`
- Modify: `src/components/layout/layout.tsx`
- Modify: `src/components/sections/hero-section.tsx`
- Create or modify: `src/components/sections/trust-strip.tsx`
- Modify: `src/pages/home.tsx`

**Interfaces:**
- Header renders responsive navigation and uses existing `getNavLinks`, `getServiceLinks`, and `CONTACT_INFO` APIs.
- Hero renders primary headline, supplied hero image, phone link, request link, and proof points from translation keys.

- [ ] Add the utility strip and simplify the top header hierarchy around the full logo and primary CTA.
- [ ] Build the new hero with responsive image treatment and accessible phone/request links.
- [ ] Add a trust strip using only non-quantified, supported promises such as fast response, clear communication, and heating/cooling service.
- [ ] Verify menu state and dropdown state remain keyboard- and touch-usable.

### Task 3: Services, story, FAQ, and final CTA sections

**Files:**
- Modify: `src/components/sections/services-section.tsx`
- Modify: `src/components/sections/faq-section.tsx`
- Modify: `src/components/sections/contact-section.tsx`
- Modify: `src/pages/home.tsx`

**Interfaces:**
- Services section maps `APP_SERVICES` to local images and translated content.
- FAQ section preserves existing accordion semantics.
- Contact section preserves existing form behavior and phone/email links.

- [ ] Convert services into a three-card responsive grid using the supplied work images.
- [ ] Add a split story/service-area section using `carousel-preview.jpg` without inventing unsupported location details.
- [ ] Keep the FAQ accordion and style it to match the new visual system.
- [ ] Add a high-contrast final contact CTA that routes to `/contact` and uses the phone link.

### Task 4: Global styling and responsive polish

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/layout/footer.tsx`
- Modify: `src/components/common/social-fab.tsx` if needed

- [ ] Replace the warm template palette with the CMT red/blue/neutral token system.
- [ ] Add typography, spacing, border, shadow, and animation utilities needed by the redesigned sections.
- [ ] Confirm mobile breakpoints prevent horizontal overflow and preserve readable CTA sizes.
- [ ] Keep contrast/grayscale accessibility modes functional.

### Task 5: Verification

**Files:**
- Modify: none unless fixes are required
- Temporary evidence: outside repository when possible

- [ ] Run `pnpm build` and resolve compilation errors.
- [ ] Start the Vite app and verify the home page at desktop and mobile widths.
- [ ] Verify the mobile menu, service links, FAQ accordion, language toggle, and contact CTA.
- [ ] Check console errors and missing image requests.
- [ ] Compare the rendered page against the approved concept/reference and fix visible layout defects.
