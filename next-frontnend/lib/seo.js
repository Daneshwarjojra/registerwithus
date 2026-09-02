import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/siteConfig";

function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function absoluteImage(image) {
  if (!image) return `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  if (image.startsWith("http")) return image;
  return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
  type = "website",
  keywords,
}) {
  const url = absoluteUrl(path);
  const ogImage = absoluteImage(image);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: type === "article" ? "article" : "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: ogImage, alt: title }],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
