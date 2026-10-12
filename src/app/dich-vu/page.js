import ServicesHero from "@/components/services/ServicesHero";
import Journey from "@/components/services/Journey";
import ServiceList from "@/components/services/ServiceList";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/services/Faq";
import ServicesCta from "@/components/services/ServicesCta";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Dịch vụ & gói chụp ảnh cưới",
  description:
    "Dịch vụ của Muse Bridal: chụp ảnh cưới phim trường Muse Basic, ngoại cảnh Sài Gòn Basic, váy cưới thiết kế độc quyền & veston, makeup – styling theo concept, album và sản phẩm ảnh cưới.",
};

/**
 * Trang Dịch vụ riêng:
 * Hero (chữ + 3 ảnh so le) → Hành trình 4 bước (accordion ảnh, nền nâu) → 5 dịch vụ (zig-zag)
 * → Bảng giá 2 gói (dùng lại component, có id #goi-chup) → FAQ → CTA.
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Journey />
      <ServiceList />
      <div id="goi-chup">
        <Pricing compact />
      </div>
      <Faq />
      <ServicesCta />
    </>
  );
}
