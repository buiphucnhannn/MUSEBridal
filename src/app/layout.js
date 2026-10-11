import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: siteConfig.name + " — " + siteConfig.tagline,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
