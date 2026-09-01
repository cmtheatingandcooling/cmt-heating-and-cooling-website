import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CONTACT_INFO } from "@/config/constants";

export const SocialFab: React.FC = () => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Social links from env
  const { SOCIAL, WHATSAPP_URL, WHATSAPP_DISPLAY } = CONTACT_INFO;

  return (
    <>
      {/* Social Media Buttons - Right side vertical */}
      <div className="fixed right-4 top-1/2 z-50 flex flex-col items-center gap-3 -translate-y-1/2 sm:right-6">
        {/* Instagram */}
        {SOCIAL.INSTAGRAM && (
          <a
            href={SOCIAL.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group social-instagram-gradient w-12 h-12 md:w-14 md:h-14 rounded-full text-(--color-text-inverse) flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
            title={t("floating.instagram")}
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        )}

        {/* Facebook */}
        {SOCIAL.FACEBOOK && (
          <a
            href={SOCIAL.FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-(--color-social-facebook) text-(--color-text-inverse) flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Facebook"
            title={t("floating.facebook")}
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
          </a>
        )}

        {/* Google */}
        {SOCIAL.GOOGLE && (
          <a
            href={SOCIAL.GOOGLE}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-(--color-surface) flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-(--color-border-light)"
            aria-label="Google"
            title={t("floating.google")}
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-(--color-primary)"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-13.5v4.5h4.5"
              />
            </svg>
          </a>
        )}

        {/* WhatsApp */}
        {WHATSAPP_DISPLAY && (
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-(--color-social-whatsapp) text-(--color-text-inverse) flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
            title={t("floating.whatsapp")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </a>
        )}
      </div>

      {/* Scroll to Top Button - Bottom right */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-14 h-14 bg-(--color-primary) hover:bg-(--color-primary-hover) text-(--color-text-inverse) rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50 transform hover:-translate-y-1"
          title={t("floating.scroll_top")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};
