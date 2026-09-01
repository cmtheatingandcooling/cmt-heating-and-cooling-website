/**
 * Reusable constants and environmental variables access layer.
 * This is a reusable template for bilingual service landing pages.
 *
 * CENTRALIZED CONFIGURATION: Edit this file to update business info,
 * contact details, services, and SEO metadata across the entire site.
 *
 * ⚠️ CRITICAL: All "TODO" values below MUST be updated before deployment.
 * Use information.md for reference data.
 */

const TEMPLATE_PLACEHOLDER_IMAGE = "/assets/images/template-mock.svg";
const TEMPLATE_PLACEHOLDER_NAME = "Your Business Name";
const TEMPLATE_PLACEHOLDER_TAGLINE = "Service Landing Template";
const TEMPLATE_PLACEHOLDER_DESCRIPTION =
  "Editable landing page template for service businesses. Replace the copy, contact data, imagery, and service details before publishing.";
const TEMPLATE_PLACEHOLDER_URL = "https://example.com";
const TEMPLATE_PLACEHOLDER_PHONE = "(555) 555-5555";
const TEMPLATE_PLACEHOLDER_EMAIL = "hello@example.com";
const TEMPLATE_PLACEHOLDER_LOCATION =
  "Your service area";
const TEMPLATE_PLACEHOLDER_HOURS = "Business hours";

type TranslateFn = (key: string) => string;

const resolveLocalizedTemplateValue = (
  value: string,
  placeholder: string,
  t: TranslateFn,
  fallbackKey: string,
) => (value === placeholder ? t(fallbackKey) : value);

// ============================================
// BUSINESS INFORMATION
// ============================================
export const BUSINESS_INFO = {
  /** TODO: Update with actual business name from information.md */
  NAME: "CMT Heating & Cooling",

  /** TODO: Update with actual tagline */
  TAGLINE: "Heating & Cooling",

  /** TODO: Update with actual business description from information.md */
  DESCRIPTION:
    "CMT Heating & Cooling provides AC repair, replacement, ductwork, Rotobrush duct cleaning, indoor air quality, insulation, commercial HVAC, and new construction across Tampa Bay.",

  /** TODO: Replace with actual logo - place image in src/assets/images/ */
  LOGO: "/assets/images/cmt-logo.png",

  /** TODO: Replace with actual hero image - place image in src/assets/images/ */
  HERO_IMAGE: "/assets/images/generated/hero-hvac.png",

  /** TODO: Update with production domain (no trailing slash) - affects canonical URLs! */
  URL: "https://www.cmtheatingandcooling.com",

  /** Copyright year (auto-updates) */
  get COPYRIGHT_YEAR() {
    return new Date().getFullYear();
  },
} as const;

// ============================================
// SEO DEFAULTS
// ============================================
export const SEO_DEFAULTS = {
  /** Default page title template: `{page} | {site}` */
  TITLE_TEMPLATE: (pageTitle: string) => `${pageTitle} | ${BUSINESS_INFO.NAME}`,

  /** Default meta description (overridden per page via SEOHead) */
  DESCRIPTION: BUSINESS_INFO.DESCRIPTION,

  /** Default OG/Twitter image */
  IMAGE: BUSINESS_INFO.HERO_IMAGE,

  /** TODO: Update with business-specific keywords */
  KEYWORDS:
    "HVAC Tampa Bay, AC repair, ductwork, duct cleaning, blown-in insulation, CMT Heating & Cooling",

  /** Author meta tag */
  AUTHOR: BUSINESS_INFO.NAME,
} as const;

// ============================================
// CONTACT INFORMATION
// ============================================
/** TODO: Update with actual phone number (without +1 prefix for WhatsApp) */
const phoneRaw = "(813) 345-7663";

/** TODO: Update with actual WhatsApp number (digits only) */
const whatsappRaw = "18133457663";

const phoneLink = phoneRaw.replace(/[^\d+]/g, "");
const whatsappDigits = whatsappRaw.replace(/[^\d]/g, "");

export const CONTACT_INFO = {
  /** TODO: Update with actual business email */
  EMAIL: "cmtairconditioning@gmail.com",

  // Phone
  PHONE_DISPLAY: phoneRaw,
  PHONE_CALL: phoneLink ? `tel:${phoneLink}` : "",

  // WhatsApp
  WHATSAPP_DISPLAY: whatsappRaw,
  WHATSAPP_URL: whatsappDigits ? `https://wa.me/${whatsappDigits}` : "",

  // Social Media URLs
  /** TODO: Update with actual social media handles/URLs */
  SOCIAL: {
    INSTAGRAM: "https://www.instagram.com/cmt_heating_cooling_inc",
    FACEBOOK: "https://www.facebook.com/CMT.heating.cooling.inc/",
    GOOGLE: "https://www.google.com/maps/place/CMT+heating+%26+cooling+inc/@28.046795,-82.547087,10z/data=!3m1!4b1!4m6!3m5!1s0x88c2c39f0afbcffb:0xd2881e628d81572c!8m2!3d28.046795!4d-82.547087!16s%2Fg%2F11jwhr1r82?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
  },

  MAP_EMBED_URL:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450722.4948507227!2d-82.54708699999999!3d28.046795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c39f0afbcffb%3A0xd2881e628d81572c!2sCMT%20heating%20%26%20cooling%20inc!5e0!3m2!1sen!2sus!4v1787667983151!5m2!1sen!2sus",

  /** TODO: Update with actual business address */
  LOCATION: "Tampa Bay and surrounding communities",

  /** TODO: Update with actual business hours */
  HOURS: "Call or text for service and estimates",

  // Supported Languages
  LANGUAGES: ["English", "Spanish"] as const,

  // Marketing Agency
  AGENCY_URL: "https://crescendodigitalmarketingagency.com/en/",
  AGENCY_NAME: "CDM Marketing",
} as const;

const normalizedBusinessUrl = BUSINESS_INFO.URL.replace(/\/+$/, "");

const hasTemplatePlaceholders = [
  BUSINESS_INFO.NAME === TEMPLATE_PLACEHOLDER_NAME,
  BUSINESS_INFO.TAGLINE === TEMPLATE_PLACEHOLDER_TAGLINE,
  BUSINESS_INFO.DESCRIPTION === TEMPLATE_PLACEHOLDER_DESCRIPTION,
  normalizedBusinessUrl === TEMPLATE_PLACEHOLDER_URL,
  CONTACT_INFO.EMAIL === TEMPLATE_PLACEHOLDER_EMAIL,
  CONTACT_INFO.PHONE_DISPLAY === TEMPLATE_PLACEHOLDER_PHONE,
  CONTACT_INFO.LOCATION === TEMPLATE_PLACEHOLDER_LOCATION,
  CONTACT_INFO.HOURS === TEMPLATE_PLACEHOLDER_HOURS,
].some(Boolean);

export const TEMPLATE_STATUS = {
  hasTemplatePlaceholders,
  shouldIndex: !hasTemplatePlaceholders,
} as const;

export const getResolvedSiteUrl = () => {
  if (normalizedBusinessUrl !== TEMPLATE_PLACEHOLDER_URL) {
    return normalizedBusinessUrl;
  }

  if (typeof window !== "undefined") {
    return window.location.origin.replace(/\/+$/, "");
  }

  return "";
};

export const getLocalizedBusinessName = (t: TranslateFn) =>
  resolveLocalizedTemplateValue(
    BUSINESS_INFO.NAME,
    TEMPLATE_PLACEHOLDER_NAME,
    t,
    "template.placeholders.business_name",
  );

export const getLocalizedBusinessTagline = (t: TranslateFn) =>
  resolveLocalizedTemplateValue(
    BUSINESS_INFO.TAGLINE,
    TEMPLATE_PLACEHOLDER_TAGLINE,
    t,
    "template.placeholders.tagline",
  );

export const getLocalizedBusinessDescription = (t: TranslateFn) =>
  resolveLocalizedTemplateValue(
    BUSINESS_INFO.DESCRIPTION,
    TEMPLATE_PLACEHOLDER_DESCRIPTION,
    t,
    "template.placeholders.description",
  );

export const getLocalizedContactLocation = (t: TranslateFn) =>
  resolveLocalizedTemplateValue(
    CONTACT_INFO.LOCATION,
    TEMPLATE_PLACEHOLDER_LOCATION,
    t,
    "contact.info.location",
  );

export const getLocalizedContactHours = (t: TranslateFn) =>
  resolveLocalizedTemplateValue(
    CONTACT_INFO.HOURS,
    TEMPLATE_PLACEHOLDER_HOURS,
    t,
    "contact.info.hours",
  );

// ============================================
// SERVICES CONFIGURATION
// ============================================
export interface ServiceConfig {
  key: string;
  image: string;
  /** Optional: override icon for service cards */
  icon?: string;
}

export const APP_SERVICES: ServiceConfig[] = [
  { key: "ac-repair-replacement", image: "/assets/images/generated/ac-repair-replacement.png" },
  { key: "ductwork", image: "/assets/images/generated/ductwork.png" },
  { key: "rotobrush-duct-cleaning", image: "/assets/images/generated/rotobrush-duct-cleaning.png" },
  { key: "blown-in-insulation", image: "/assets/images/generated/blown-in-insulation.png" },
  { key: "commercial-hvac", image: "/assets/images/generated/commercial-hvac.png" },
  { key: "new-construction", image: "/assets/images/generated/new-construction.png" },
] as const;

export const getServicePath = (serviceKey: string) => `/services/${serviceKey}`;

export const getPrimaryServicePath = () =>
  APP_SERVICES.length > 0 ? getServicePath(APP_SERVICES[0].key) : "/";

// ============================================
// NAVIGATION CONFIGURATION
// ============================================
export const NAV_LINKS = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "about", path: "/about" },
  { key: "faq", path: "/faq" },
  { key: "contact", path: "/contact" },
] as const;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get service options for contact form select
 * Includes all services + "General Contact" + "Other"
 */
export const getServiceOptions = (t: (key: string) => string) => [
  ...APP_SERVICES.map((s) => ({
    value: s.key,
    label: t(`services.${s.key}.title`),
  })),
  { value: "info", label: t("contact.form.service_info") },
  { value: "other", label: t("contact.form.service_other") },
];

/**
 * Get navigation links with translated labels
 */
export const getNavLinks = (t: (key: string) => string) =>
  NAV_LINKS.map((link) => ({
    ...link,
    path: link.key === "services" ? getPrimaryServicePath() : link.path,
    label: t(`common.${link.key}`),
  }));

export const getServiceLinks = (t: (key: string) => string) =>
  APP_SERVICES.map((service) => ({
    key: service.key,
    label: t(`services.${service.key}.title`),
    path: getServicePath(service.key),
  }));

export { TEMPLATE_PLACEHOLDER_IMAGE };
