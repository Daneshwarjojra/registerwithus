import RefundHead from "@/components/Refund/RefundHead";
import RefundPolicy from "@/components/Refund/RefundPolicy";
import JsonLd from "@/components/Common/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webpageSchema } from "@/lib/structuredData";

const title = "Refund Policy | Easy Returns & Money Back Guarantee";
const description =
  "Read our Refund Policy to understand how you can return products or request a refund. We ensure a hassle-free process and customer satisfaction.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/refund",
});

export default function RefundPage() {
  return (
    <>
      <JsonLd data={webpageSchema({ title, description, path: "/refund" })} />
      <RefundHead />
      <RefundPolicy />
    </>
  );
}
