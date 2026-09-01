import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { FAQSection } from "@/components/sections";
import { SEOHead } from "@/components/common";

export default function FAQPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead
        title={t("faq.seo_title")}
        description={t("faq.seo_description")}
        pathname="/faq"
      />
      <FAQSection titleAs="h1" />
    </Layout>
  );
}
