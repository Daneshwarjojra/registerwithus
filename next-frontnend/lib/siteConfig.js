export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.registerwithus.in"
).replace(/\/$/, "");

export const SITE_NAME = "Register With Us";

export const DEFAULT_OG_IMAGE = "/img/Register-With-Us-02.png";

export const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
  { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/refund", priority: 0.3, changeFrequency: "yearly" },
  { path: "/termconditions", priority: 0.3, changeFrequency: "yearly" },
];

export const ORGANIZATION = {
  name: SITE_NAME,
  email: "info@registerwithus.in",
  telephone: "+91-9643981247",
  address: {
    streetAddress: "944, Block-C, Sushant Lok Phase-1",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
};
