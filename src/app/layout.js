import "./globals.css";
import { Playfair_Display, Be_Vietnam_Pro, Great_Vibes } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import Reveal from "@/components/ui/Reveal";
import SmoothScroll from "@/components/fx/SmoothScroll";
import PageTransition from "@/components/fx/PageTransition";
import ScrollTop from "@/components/fx/ScrollTop";
import Preloader from "@/components/fx/Preloader";
import BookingModal from "@/components/booking/BookingModal";
import ExtensionErrorGuard from "@/components/fx/ExtensionErrorGuard";
import { siteConfig, photos } from "@/data/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://musebridal.vn";

const serif = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  // Tên thương hiệu luôn đứng trước: trang con chỉ khai báo phần riêng, template ghép thành "Muse Bridal | ..."
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  keywords: [
    "chụp ảnh cưới",
    "studio ảnh cưới TP.HCM",
    "chụp ảnh cưới phim trường",
    "chụp ảnh cưới ngoại cảnh Sài Gòn",
    "Muse Bridal",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "vi_VN",
    siteName: siteConfig.name,
    images: [{ url: photos.studioVeilCalla, width: 1365, height: 2048, alt: "Muse Bridal – ảnh cưới" }],
  },
  // Icon trang web: dùng đúng favicon.ico khách chuẩn bị (logo Muse Bridal, 16→256px)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F4EE",
};

// Dữ liệu có cấu trúc cho Google (LocalBusiness)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: SITE_URL,
  telephone: "+84" + siteConfig.phoneRaw.slice(1),
  image: SITE_URL + photos.studioVeilCalla,
  logo: SITE_URL + photos.logoPng,
  address: { "@type": "PostalAddress", addressLocality: "Hồ Chí Minh", addressCountry: "VN" },
  geo: { "@type": "GeoCoordinates", latitude: 10.8177222, longitude: 106.6937144 },
  hasMap: siteConfig.mapsLink,
  sameAs: [siteConfig.facebook],
  openingHours: "Mo-Su 09:00-20:00",
  priceRange: "5.590.000đ - 8.900.000đ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <head>
        <ExtensionErrorGuard />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Preloader />
        <SmoothScroll />
        <PageTransition />
        <Reveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <ScrollTop />
        <BookingModal />
      </body>
    </html>
  );
}
