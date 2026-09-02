import Contactbanner from "@/components/ContactUs/Contactbanner";
import Contactus from "@/components/ContactUs/Contactus";
import JsonLd from "@/components/Common/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webpageSchema } from "@/lib/structuredData";

const title = "Contact Us | Get in Touch with Our Business Experts";
const description =
  "Have questions or need help starting your business? Contact us today for expert assistance with company registration, compliance, GST, and other legal services in India.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webpageSchema({ title, description, path: "/contact" })} />
      <Contactbanner />
      <Contactus />
    </>
  );
}
