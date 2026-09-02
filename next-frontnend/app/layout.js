import { Montserrat } from "next/font/google";
import "@/styles/legacy-layout.css";
import "./globals.css";
import "@/components/legacy.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/fontawesome-fonts.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Common/Footer";
import GoToTop from "@/components/GoToTop/GoToTop";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/Common/JsonLd";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/siteConfig";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Start Your Business Legally in India | Trusted Compliance Partner",
  },
  description:
    "Start your business legally in India with expert-backed registration, government-recognized documentation, and fast compliance services from India's trusted partner.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  icons: {
    icon: "/img/Register-With-Us-02.png",
    apple: "/logo192.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport = {
  themeColor: "#061067",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={montserrat.variable}>
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [organizationSchema(), websiteSchema()],
          }}
        />
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
