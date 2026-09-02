import PrivacyHead from "@/components/Privacy/PrivacyHead";
import PrivacyPolicy from "@/components/Privacy/PrivacyPolicy";
import JsonLd from "@/components/Common/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webpageSchema } from "@/lib/structuredData";

const title = "Privacy Policy | Your Data & Privacy Protection";
const description =
  "Read our Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and trust are our top priorities.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webpageSchema({ title, description, path: "/privacy" })} />
      <PrivacyHead />
      <PrivacyPolicy />
    </>
  );
}
