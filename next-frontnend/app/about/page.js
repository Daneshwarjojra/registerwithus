import Abouthero from "@/components/About/Abouthero";
import Aboutmain from "@/components/About/Aboutmain";
import OurApproach from "@/components/About/OurApproach";
import Missionvision from "@/components/About/Missionvision";
import WhoWeServe from "@/components/About/WhoWeServe";
import CompanyHighlights from "@/components/About/CompanyHighlights";
import JsonLd from "@/components/Common/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webpageSchema } from "@/lib/structuredData";

const title = "About Us | Learn More About Our Mission, Vision & Team";
const description =
  "Discover who we are, our mission, vision, and the passionate team behind our success. Learn why businesses trust us as their compliance and registration partner in India.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webpageSchema({ title, description, path: "/about" })} />
      <Abouthero />
      <Aboutmain />
      <OurApproach />
      <Missionvision />
      <WhoWeServe />
      <CompanyHighlights />
    </>
  );
}
