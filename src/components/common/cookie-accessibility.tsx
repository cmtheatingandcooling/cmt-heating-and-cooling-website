import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type ColorMode = "default" | "contrast" | "grayscale";

const COOKIE_STORAGE_KEY = "template-cookie-consent";
const ACCESSIBILITY_STORAGE_KEY = "template-accessibility-preferences";

interface AccessibilityPreferences {
  colorMode: ColorMode;
  underlineLinks: boolean;
}

const DEFAULT_PREFERENCES: AccessibilityPreferences = {
  colorMode: "default",
  underlineLinks: false,
};

function readAccessibilityPreferences(): AccessibilityPreferences {
  if (typeof window === "undefined") {
    return DEFAULT_PREFERENCES;
  }

  const storedValue = window.localStorage.getItem(ACCESSIBILITY_STORAGE_KEY);

  if (!storedValue) {
    return DEFAULT_PREFERENCES;
  }

  try {
    const parsedValue = JSON.parse(storedValue) as Partial<AccessibilityPreferences>;

    return {
      colorMode:
        parsedValue.colorMode === "contrast" ||
        parsedValue.colorMode === "grayscale"
          ? parsedValue.colorMode
          : "default",
      underlineLinks: Boolean(parsedValue.underlineLinks),
    };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

function readCookieConsent(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(COOKIE_STORAGE_KEY) === "accepted";
}

export function CookieAccessibility() {
  const { t } = useTranslation();
  const [cookieAccepted, setCookieAccepted] = useState(readCookieConsent);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [cookieBannerHeight, setCookieBannerHeight] = useState(0);
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(
    readAccessibilityPreferences,
  );
  const cookieBannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.colorMode = preferences.colorMode;

    if (preferences.underlineLinks) {
      root.dataset.underlineLinks = "true";
    } else {
      delete root.dataset.underlineLinks;
    }

    window.localStorage.setItem(
      ACCESSIBILITY_STORAGE_KEY,
      JSON.stringify(preferences),
    );
  }, [preferences]);

  const handleCookieAccept = () => {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    setCookieAccepted(true);
  };

  const handleCookieSettings = () => {
    window.localStorage.removeItem(COOKIE_STORAGE_KEY);
    setCookieAccepted(false);
  };

  useEffect(() => {
    if (cookieAccepted || !cookieBannerRef.current) {
      setCookieBannerHeight(0);
      return;
    }

    const bannerElement = cookieBannerRef.current;

    const updateBannerHeight = () => {
      setCookieBannerHeight(bannerElement.getBoundingClientRect().height);
    };

    updateBannerHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateBannerHeight();
    });

    resizeObserver.observe(bannerElement);
    window.addEventListener("resize", updateBannerHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateBannerHeight);
    };
  }, [cookieAccepted]);

  const floatingOffset = cookieAccepted ? 16 : cookieBannerHeight + 24;
  const panelOffset = floatingOffset + 64;

  return (
    <>
      {!cookieAccepted && (
        <div
          ref={cookieBannerRef}
          className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-3xl rounded-[1.75rem] border border-(--color-border-light) bg-(--color-surface) p-5 shadow-[0_18px_45px_rgba(0,0,0,0.16)] md:inset-x-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
                {t("cookie_accessibility.cookie_badge")}
              </p>
              <h2 className="text-xl font-bold text-(--color-text-primary)">
                {t("cookie_accessibility.cookie_title")}
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-(--color-text-muted)">
                {t("cookie_accessibility.cookie_description")}
              </p>
            </div>

            <div className="flex flex-col gap-3 md:min-w-52">
              <button
                type="button"
                onClick={handleCookieAccept}
                className="w-full rounded-xl bg-(--color-primary) px-5 py-3 text-sm font-semibold text-(--color-text-inverse) transition-colors hover:bg-(--color-primary-hover)"
              >
                {t("cookie_accessibility.cookie_accept")}
              </button>
              <Link
                to="/privacy"
                className="text-center text-sm font-medium text-(--color-primary) underline-offset-4 hover:underline"
              >
                {t("cookie_accessibility.cookie_more")}
              </Link>
            </div>
          </div>
        </div>
      )}

      {cookieAccepted && (
        <button
          type="button"
          onClick={handleCookieSettings}
          className="fixed bottom-24 right-4 z-[60] rounded-full border border-(--color-border-light) bg-(--color-surface) px-4 py-2 text-xs font-bold text-(--color-text-primary) shadow-lg transition hover:border-(--color-primary) hover:text-(--color-primary)"
          aria-label={t("cookie_accessibility.cookie_settings")}
        >
          {t("cookie_accessibility.cookie_settings")}
        </button>
      )}

      <div
        className="fixed left-4 z-[60] md:left-6"
        style={{ bottom: `${floatingOffset}px` }}
      >
        <button
          type="button"
          onClick={() => setIsAccessibilityOpen((currentValue) => !currentValue)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-(--color-primary) text-(--color-text-inverse) shadow-[0_16px_35px_rgba(0,0,0,0.22)] transition-transform hover:scale-[1.03]"
          aria-expanded={isAccessibilityOpen}
          aria-controls="accessibility-panel"
          aria-label={t("cookie_accessibility.access_button")}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-6 4.5h12m-6 0v10.5m0 0l-3.75-3.75m3.75 3.75l3.75-3.75"
            />
          </svg>
        </button>
      </div>

      {isAccessibilityOpen && (
        <div
          id="accessibility-panel"
          className="fixed inset-x-4 z-[60] overflow-y-auto rounded-[1.75rem] border border-(--color-border-light) bg-(--color-surface) p-5 shadow-[0_18px_45px_rgba(0,0,0,0.16)] md:left-6 md:right-auto md:w-96"
          style={{
            bottom: `${panelOffset}px`,
            maxHeight: `min(36rem, calc(100vh - ${panelOffset + 16}px))`,
          }}
        >
          <div className="sticky top-[-1.25rem] z-10 -mx-5 -mt-5 mb-5 flex items-start justify-between gap-4 border-b border-(--color-border-light) bg-(--color-surface) px-5 pt-5 pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
                {t("cookie_accessibility.access_badge")}
              </p>
              <h2 className="text-xl font-bold text-(--color-text-primary)">
                {t("cookie_accessibility.access_title")}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsAccessibilityOpen(false)}
              className="rounded-full border border-(--color-border-light) bg-(--color-surface-strong) p-2 text-(--color-text-primary) transition-colors hover:bg-(--color-bg-light)"
              aria-label={t("cookie_accessibility.close")}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-(--color-text-muted)">
            {t("cookie_accessibility.access_description")}
          </p>

          <fieldset className="space-y-3">
            <legend className="mb-3 text-sm font-semibold text-(--color-text-primary)">
              {t("cookie_accessibility.color_mode_title")}
            </legend>

            {(["default", "contrast", "grayscale"] as const).map((mode) => (
              <label
                key={mode}
                className="flex cursor-pointer items-start gap-3 rounded-2xl border border-(--color-border-light) p-4 transition-colors hover:bg-(--color-bg-light)"
              >
                <input
                  type="radio"
                  name="color-mode"
                  value={mode}
                  checked={preferences.colorMode === mode}
                  onChange={() =>
                    setPreferences((currentValue) => ({
                      ...currentValue,
                      colorMode: mode,
                    }))
                  }
                  className="mt-1"
                />
                <span className="block">
                  <span className="block text-sm font-semibold text-(--color-text-primary)">
                    {t(`cookie_accessibility.color_mode_${mode}_label`)}
                  </span>
                  <span className="block text-sm text-(--color-text-muted)">
                    {t(`cookie_accessibility.color_mode_${mode}_description`)}
                  </span>
                </span>
              </label>
            ))}
          </fieldset>

          <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-(--color-border-light) p-4 transition-colors hover:bg-(--color-bg-light)">
            <input
              type="checkbox"
              checked={preferences.underlineLinks}
              onChange={(event) =>
                setPreferences((currentValue) => ({
                  ...currentValue,
                  underlineLinks: event.target.checked,
                }))
              }
              className="mt-1"
            />
            <span className="block">
              <span className="block text-sm font-semibold text-(--color-text-primary)">
                {t("cookie_accessibility.underline_links_label")}
              </span>
              <span className="block text-sm text-(--color-text-muted)">
                {t("cookie_accessibility.underline_links_description")}
              </span>
            </span>
          </label>
        </div>
      )}
    </>
  );
}
