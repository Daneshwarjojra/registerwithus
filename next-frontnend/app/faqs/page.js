import Faq from "@/components/Faq/Faq";
import JsonLd from "@/components/Common/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { FAQ_PAGE_SCHEMA, webpageSchema } from "@/lib/structuredData";

const title = "FAQs | Company Registration & Compliance Questions Answered";
const description =
  "Find answers to common questions about company registration, GST, FSSAI, trademarks, tax filings, and online compliance services in India.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/faqs",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={webpageSchema({ title, description, path: "/faqs" })} />
      <JsonLd data={FAQ_PAGE_SCHEMA} />
      <Faq />
    </>
  );
}
