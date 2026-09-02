import Bloghead from "@/components/Blogs/Bloghead";
import Blogmain from "@/components/Blogs/Blogmain";
import JsonLd from "@/components/Common/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webpageSchema } from "@/lib/structuredData";

const title = "Blogs | Business Tips, Compliance Updates & Startup Guides";
const description =
  "Explore our latest blogs covering business registration, GST, compliance tips, startup advice, and more to help you grow your business legally and efficiently.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/blogs",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={webpageSchema({ title, description, path: "/blogs" })} />
      <Bloghead />
      <Blogmain />
    </>
  );
}
