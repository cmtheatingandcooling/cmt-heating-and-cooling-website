# CMT Heating & Cooling Redesign Design

## Goal

Redesign the existing CMT Heating & Cooling homepage into a conversion-first HVAC landing page inspired by the information hierarchy of Rolando's HVAC while preserving the existing React/Vite architecture, routes, bilingual support, accessibility controls, and supplied brand assets.

## Visual direction

- White and cool-gray foundation with CMT's saturated red and blue as the primary action colors.
- Bold condensed sans-serif display treatment for the hero and section headings, paired with a neutral sans-serif for body copy and navigation.
- Strong full-bleed hero image treatment with a readable dark gradient only where needed for text contrast.
- Compact rounded buttons, restrained shadows, thin borders, and clear section separators.
- Layout rhythm: utility bar -> header -> hero -> trust proof -> services -> about/service area -> FAQ -> contact CTA -> footer.

## Homepage sections

1. Utility bar with phone, service-area messaging, Spanish support, and quick contact action.
2. Header with full CMT logo, responsive navigation, language toggle, and Request Service CTA.
3. Hero with HVAC service headline, supplied work image, phone/request buttons, and proof points.
4. Trust strip with clear service promises and small visual marks.
5. Services grid using the supplied insulation, duct, and cleaning images.
6. About/service-area split section using the supplied carousel preview image and real business positioning.
7. FAQ accordion with the existing FAQ route and home content preserved.
8. Final conversion banner with phone and contact CTA.
9. Existing footer, updated to match the new palette and brand hierarchy.

## Interaction and accessibility requirements

- Desktop navigation links remain routed through React Router.
- Mobile menu opens and closes with a labeled button and closes after navigation.
- FAQ items remain keyboard-accessible and expose expanded state.
- Phone and WhatsApp links use real anchor semantics.
- Respect reduced-motion preferences and preserve existing accessibility settings.
- No new external data, authentication, persistence, or invented business claims.

## Asset rules

- Reuse `public/assets/images/work-insulation-BB-laQIo.jpg`, `work-duct-CBUnaCB0.jpg`, `work-cleaning-DMcr-y_T.jpg`, and `carousel-preview.jpg`.
- Copy the attached CMT logo into the public image set if it is not already available locally.
- Do not hotlink assets from the reference site.

## Acceptance criteria

- Homepage no longer presents template placeholder content.
- First viewport clearly communicates CMT Heating & Cooling and presents a phone/request action.
- Supplied imagery is used purposefully and has responsive cropping.
- Desktop and mobile layouts are readable without overlap or clipped content.
- Build completes successfully.
- Main interaction path works: open site -> open mobile menu (mobile) -> open services/FAQ/contact controls -> follow contact CTA.
