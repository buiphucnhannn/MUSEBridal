import Image from "next/image";
import { cn } from "@/lib/utils";
import { photos } from "@/data/site";

// Logo thật của khách (public/images/logo.png — tách nền từ logo.jpg).
// light=true: chuyển sang trắng để đặt trên ảnh/nền tối.
export default function Logo({ className = "h-10", light = false }) {
  return (
    <span className={cn("relative inline-block aspect-[1279/623]", className)}>
      <Image
        src={photos.logoPng}
        alt="Muse Bridal"
        fill
        sizes="200px"
        priority
        className={cn("object-contain", light && "brightness-0 invert")}
      />
    </span>
  );
}
