import TermConditionHead from "@/components/TermConditions/TermConditionsHead";
import TermConditionPolicy from "@/components/TermConditions/TermConditionsPolicy";
import JsonLd from "@/components/Common/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webpageSchema } from "@/lib/structuredData";

const title = "Terms & Conditions | Rules & Policies for Using Our Services";
const description =
  "Read our Terms & Conditions to understand the rules, guidelines, and policies for using our website and services. Stay informed and compliant.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/termconditions",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webpageSchema({ title, description, path: "/termconditions" })} />
      <TermConditionHead />
      <TermConditionPolicy />
    </>
  );
}
