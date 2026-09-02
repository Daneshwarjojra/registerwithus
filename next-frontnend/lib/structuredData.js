import { DEFAULT_OG_IMAGE, ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/siteConfig";

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    url: SITE_URL,
    logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.telephone,
    address: {
      "@type": "PostalAddress",
      ...ORGANIZATION.address,
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function webpageSchema({ title, description, path }) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
    ],
  };
}

export function serviceSchema(service, slug) {
  const url = `${SITE_URL}/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      {
        "@type": "Service",
        name: service.metaTitle || service.service,
        description: service.metaDescription,
        url,
        areaServed: "IN",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: service.metaTitle || service.service,
            item: url,
          },
        ],
      },
    ],
  };
}

export function articleSchema(blog, description) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description,
    image: blog.image ? `${blog.image.startsWith("http") ? "" : process.env.NEXT_PUBLIC_API_BASE_URL || "https://registerwithus.in"}${blog.image}` : undefined,
    datePublished: blog.created_at,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: organizationSchema(),
  };
}

export const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Register With Us provide for startups and small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer all-in-one business compliance platform services including company formation, GST registration, FSSAI Licensing, trademark filings, tax returns, and more, entirely online.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply for multiple registrations and licenses through Register With Us?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can apply for licenses and compliance online, including PAN, TAN, GST, EPF, MSME, FSSAI, IEC, and more, from one dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Can I register my company online without visiting any government office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle the entire process digitally, from DSC to DIN, incorporation, and certification.",
      },
    },
  ],
};
