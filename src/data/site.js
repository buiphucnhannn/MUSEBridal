export const siteConfig = {
  name: "MUSE Bridal",
  tagline: "Váy cưới thiết kế riêng",
  description:
    "MUSE Bridal — studio váy cưới thiết kế riêng: tư vấn 1-1, may đo theo số đo, chỉnh sửa không giới hạn trước ngày cưới.",
  phone: "0900 000 000",
  email: "hello@musebridal.vn",
  address: "123 Nguyễn Huệ, Quận 1, TP. HCM",
  nav: [
    { label: "Bộ sưu tập", href: "#gallery" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Cảm nhận", href: "#testimonials" },
    { label: "Liên hệ", href: "#contact" },
  ],
};

export const services = [
  {
    title: "May đo bespoke",
    desc: "Lên mẫu riêng theo vóc dáng, may đo 3 lần fitting để ôm chuẩn từng cm.",
    icon: "✂️",
  },
  {
    title: "Thuê váy cao cấp",
    desc: "Hơn 120 mẫu satin, ren Pháp, voan tơ — giặt hấp & chỉnh size miễn phí.",
    icon: "👗",
  },
  {
    title: "Makeup & Photo",
    desc: "Combo makeup cô dâu + chụp pre-wedding trong studio ánh sáng tự nhiên.",
    icon: "📸",
  },
];

export const galleryItems = [
  { src: "/images/dress-1.jpg", alt: "Váy cưới satin tối giản" },
  { src: "/images/dress-2.jpg", alt: "Váy cưới ren cổ điển" },
  { src: "/images/dress-3.jpg", alt: "Váy cưới đuôi cá" },
];

export const pricings = [
  {
    name: "Thuê",
    price: "5.9tr",
    features: ["Thuê 3 ngày", "Chỉnh size miễn phí", "Vệ sinh sau thuê"],
    highlight: false,
  },
  {
    name: "May đo",
    price: "14.9tr",
    features: ["Thiết kế riêng", "3 lần fitting", "Bảo hành 12 tháng"],
    highlight: true,
  },
  {
    name: "Trọn gói",
    price: "29.9tr",
    features: ["Váy + makeup", "Chụp pre-wedding", "Xe hoa & hoa cưới"],
    highlight: false,
  },
];

export const testimonials = [
  {
    name: "Linh & Quân",
    quote: "Váy ôm vừa khít, team fitting rất có tâm. Ảnh cưới ai cũng khen.",
  },
  {
    name: "Thảo Anh",
    quote: "Mình đổi 2 lần dáng váy mà studio vẫn vui vẻ hỗ trợ tới cùng.",
  },
];
