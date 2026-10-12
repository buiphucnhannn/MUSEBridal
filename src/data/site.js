// ============================================================
// Toàn bộ nội dung text / ảnh / gói dịch vụ nằm ở đây.
// Sửa nội dung tại file này, không cần đụng vào component.
// ============================================================

const IMG = (file) => `/images/${file}`;

// ---------- Kho ảnh (đặt tên ngắn để dễ gọi) ----------
export const photos = {
  // Studio
  studioGown: IMG("822572029_122107457972492394_3742619426903276395_n.jpg"), // váy bồng, calla lily
  studioVeilKiss: IMG("830738081_122107790066492394_8409349243222169026_n.jpg"), // hôn qua voan
  studioVeilCalla: IMG("823698633_122107457834492394_5065081939164104617_n.jpg"), // voan phủ hai người
  studioToast: IMG("823196867_122107458410492394_7683686264871645779_n.jpg"), // cô dâu & ly champagne
  studioToastHands: IMG("825732532_122107458074492394_3014726952942336527_n.jpg"),
  studioRedFlowers: IMG("830569079_122107790570492394_8729030328926191314_n.jpg"),
  studioRedCollage: IMG("795557655_122107231406492394_8823840662195162767_n.jpg"),
  studioBlooming: IMG("830141247_122107789964492394_3973230877912289316_n.jpg"),
  studioLook: IMG("835304390_122108052152492394_6008675463896206786_n.jpg"), // trọn bộ look cưới
  studioCrew: IMG("833604201_122108052422492394_2526059811556000228_n.jpg"), // ekip đồng hành
  studioCurtain: IMG("833604199_122108052224492394_395498871315319196_n.jpg"), // trọn vẹn khoảnh khắc

  // Sài Gòn
  cityBitexco: IMG("840363835_122108258390492394_239059977482869609_n.jpg"),
  cityMagazine: IMG("839278641_122108292014492394_7704347180334923008_n.jpg"),
  cityCollage: IMG("839618189_122108257616492394_104522163110126302_n.jpg"),
  cityPoster: IMG("839651485_122108257610492394_1750056153307000076_n.jpg"),
  cityRooftop: IMG("825279835_122107624718492394_509376508528988107_n.jpg"),
  cityRooftopBride: IMG("825280389_122107625510492394_2550092476439867756_n.jpg"),
  cityDeliver: IMG("836637269_122108053094492394_494402340486020721_n.jpg"), // trọn bộ sản phẩm bàn giao
  cityPackage: IMG("836705568_122108053160492394_2788148281836810665_n.jpg"), // trọn gói ngoại cảnh
  cityLocation: IMG("837863576_122108053052492394_1176634676453985558_n.jpg"), // tự do chọn địa điểm

  // Garden
  gardenFlowers: IMG("813818008_122107012190492394_2594997911932760839_n.jpg"),
  gardenSerene: IMG("814651260_122107012136492394_1619877956933765725_n.jpg"),
  gardenToast: IMG("815734914_122107163030492394_1097838770037247288_n.jpg"),
  gardenTower: IMG("816123982_122107163288492394_610481923816742972_n.jpg"),
  gardenJourney: IMG("825279463_122107624640492394_5200765254843517729_n.jpg"),
  gardenSeason: IMG("834503601_122108052980492394_3080357480388568473_n.jpg"), // đặc quyền mùa cưới

  // Áo dài
  aodaiRedScreen: IMG("839050608_122108176754492394_4325243267273711907_n.jpg"),
  aodaiGiaiDuyen: IMG("831475189_122107929374492394_887573325257120275_n.jpg"),
  aodaiHyAn: IMG("838746750_122108176706492394_227566465881997665_n.jpg"),
  aodaiSeason: IMG("833763936_122108052086492394_5843423120306941857_n.jpg"), // đặc quyền mùa cưới
  aodaiMuseBasic: IMG("834419209_122108052092492394_1649181119315032652_n.jpg"), // giá Muse Basic

  // Khuyến mãi
  promoSaigonBasic: IMG("835363141_122108053010492394_8350613429763768450_n.jpg"),

  logo: IMG("logo.jpg"),
  logoPng: IMG("logo.png"), // bản tách nền từ logo.jpg
  logoAlt: IMG("764817902_122104654856492394_9131748052556768793_n.jpg"),
};

// ---------- Thông tin thương hiệu ----------
export const siteConfig = {
  name: "Muse Bridal",
  tagline: "Studio ảnh cưới phim trường & ngoại cảnh Sài Gòn",
  description:
    "Muse Bridal | Studio ảnh cưới tại TP.HCM: chụp ảnh cưới phim trường Muse Basic, ngoại cảnh Sài Gòn Basic, váy cưới thiết kế độc quyền, veston, makeup & styling theo concept. Ưu đãi mùa cưới số lượng có hạn.",
  phone: "089 926 69 77",
  phoneRaw: "0899266977",
  zalo: "https://zalo.me/0899266977",
  messenger: "https://m.me/musebridalsaigon",
  facebook: "https://www.facebook.com/musebridalsaigon",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
  youtube: "https://www.youtube.com/",
  mapsLink: "https://maps.app.goo.gl/MizrwTo5fFDjJJct9",
  // Toạ độ lấy từ link Google Maps khách cung cấp
  // Nhúng Google Maps theo mã địa điểm (CID 0x7ecc94d516c5b65 trong link khách gửi) → hiện đúng thẻ "MUSE Bridal",
  // kéo/zoom/bấm "Chỉ đường" được. Không cần API key.
  mapsEmbed: "https://maps.google.com/maps?cid=571052586684930917&z=16&hl=vi&output=embed",
  addressShort: "Muse Bridal Saigon",
  address: "TP. Hồ Chí Minh (xem địa chỉ chi tiết trên Google Maps)",
  openHours: "09:00 – 20:00, Thứ 2 – Chủ nhật",
  // Thứ tự theo đúng dòng chảy trang chủ: Về Muse → Bộ sưu tập → Dịch vụ → Bảng giá → Liên hệ
  nav: [
    { label: "Về Muse", href: "/#about" },
    { label: "Bộ sưu tập", href: "/bo-suu-tap" },
    { label: "Dịch vụ", href: "/dich-vu" },
    { label: "Bảng giá", href: "/#pricing" },
    { label: "Liên hệ", href: "/#contact" },
  ],
};

// ---------- 5 sản phẩm / dịch vụ chính (theo brief) ----------
export const services = [
  { title: "Chụp ảnh cưới phim trường – Muse Basic", desc: "Không gian studio tối giản, ánh sáng mềm, concept riêng cho hai bạn." },
  { title: "Chụp ảnh cưới ngoại cảnh Sài Gòn – Sài Gòn Basic", desc: "Tự do chọn địa điểm ngoại cảnh trong thành phố, tặng phí xe di chuyển." },
  { title: "Trang phục cưới: váy cưới thiết kế độc quyền & veston", desc: "Đa dạng phong cách, kèm phụ kiện và hoa lụa cầm tay." },
  { title: "Makeup, làm tóc & styling theo concept", desc: "Makeup Artist và Stylist đồng hành, tôn lên nét riêng của bạn." },
  { title: "Album ảnh cưới, ảnh cổng, ảnh lụa để bàn & slide tiệc cưới", desc: "Trọn bộ sản phẩm bàn giao sau buổi chụp." },
];

// ---------- Trang Dịch vụ (/dich-vu) ----------
export const servicesPage = {
  hero: {
    eyebrow: "Dịch vụ của Muse",
    title: "Một buổi chụp",
    accent: "trọn vẹn mọi điều.",
    desc: "Từ trang phục, makeup đến ekip và sản phẩm bàn giao — Muse gói mọi thứ hai bạn cần cho một bộ ảnh cưới hoàn chỉnh trong một buổi chụp duy nhất.",
    images: [
      { src: photos.studioGown, alt: "Cặp đôi trong studio", pos: "center 15%" },
      { src: photos.cityRooftopBride, alt: "Cô dâu trên rooftop Sài Gòn", pos: "center 25%" },
      { src: photos.gardenToast, alt: "Nâng ly chúc mừng ngoài trời", pos: "center 20%" },
    ],
    stats: [
      { value: "01", label: "Buổi chụp duy nhất" },
      { value: "03", label: "Chuyên gia đồng hành" },
      { value: "02", label: "Gói chụp để chọn" },
    ],
  },
  // Hành trình 4 bước
  journey: {
    eyebrow: "Hành trình",
    title: "Bốn bước đến bộ ảnh của hai bạn.",
    steps: [
      { n: "01", title: "Tư vấn concept", desc: "Lắng nghe câu chuyện của hai bạn, gợi ý concept, địa điểm và gói chụp phù hợp.", image: photos.studioToastHands, pos: "center 30%" },
      { n: "02", title: "Chọn trang phục", desc: "Thử váy cưới thiết kế độc quyền và veston tại studio, phối phụ kiện và hoa lụa.", image: photos.studioLook, pos: "center 40%" },
      { n: "03", title: "Makeup & chụp", desc: "Makeup Artist, Stylist và Photographer đồng hành trọn buổi chụp.", image: photos.studioCrew, pos: "88% center" },
      { n: "04", title: "Bàn giao sản phẩm", desc: "Album, ảnh cổng, ảnh lụa để bàn và slide trình chiếu tiệc được chăm chút từng chi tiết.", image: photos.cityDeliver, pos: "center 40%" },
    ],
  },
  // 5 dịch vụ chính — xen kẽ ảnh/chữ
  services: [
    {
      n: "01", title: "Chụp ảnh cưới phim trường", sub: "Muse Basic", packageId: "muse-basic",
      desc: "Không gian studio tối giản với ánh sáng mềm, tôn lên đường nét và cảm xúc của hai bạn. Mỗi khung hình thanh lịch, vượt thời gian.",
      points: ["Phim trường Muse độc quyền", "02 váy cưới · 02 veston", "Makeup theo từng concept"],
      image: photos.studioVeilCalla, pos: "center 20%", collection: "muse-studio",
    },
    {
      n: "02", title: "Chụp ảnh cưới ngoại cảnh Sài Gòn", sub: "Sài Gòn Basic", packageId: "saigon-basic",
      desc: "Đưa câu chuyện tình yêu vào nhịp sống thành phố: góc phố, toà nhà, khoảng trời quen thuộc trở thành phông nền đầy năng lượng.",
      points: ["01 địa điểm tuỳ chọn tại Sài Gòn", "Tặng phí xe di chuyển", "01 váy cưới · 01 veston"],
      image: photos.cityBitexco, pos: "center 55%", collection: "saigon-street",
    },
    {
      n: "03", title: "Váy cưới thiết kế độc quyền & veston", sub: "Trang phục",
      desc: "Bộ sưu tập váy cưới do Muse thiết kế, đa dạng dáng và chất liệu, cùng veston cao cấp cho chú rể. Kèm phụ kiện và hoa lụa cầm tay.",
      points: ["Thiết kế độc quyền của Muse", "Phụ kiện & hoa lụa cầm tay", "Áo dài cho concept truyền thống"],
      image: photos.aodaiRedScreen, pos: "center 20%", collection: "giai-duyen",
    },
    {
      n: "04", title: "Makeup, làm tóc & styling", sub: "Diện mạo",
      desc: "Makeup Artist và Stylist đồng hành trọn buổi chụp, linh hoạt theo từng concept để tôn lên nét riêng của bạn.",
      points: ["Makeup linh hoạt theo concept", "Làm tóc & chỉnh trang liên tục", "Stylist riêng suốt buổi chụp"],
      image: photos.studioToast, pos: "center 22%",
    },
    {
      n: "05", title: "Album, ảnh cổng, ảnh lụa & slide tiệc", sub: "Sản phẩm bàn giao",
      desc: "Mọi khoảnh khắc được in thành album cao cấp, ảnh cổng ép gỗ, ảnh lụa để bàn và slide trình chiếu cho ngày tiệc.",
      points: ["Album cao cấp 20 trang", "Ảnh cổng ép gỗ · 05 ảnh lụa", "Slide trình chiếu tiệc cưới"],
      image: photos.studioCurtain, pos: "center 40%",
    },
  ],
  faq: {
    eyebrow: "Câu hỏi thường gặp",
    title: "Những điều hai bạn hay hỏi.",
    items: [
      { q: "Một buổi chụp kéo dài bao lâu?", a: "Thông thường từ 4–6 tiếng gồm makeup, thay trang phục và chụp. Với gói ngoại cảnh, thời gian có thể dài hơn tuỳ địa điểm." },
      { q: "Có được thử váy trước ngày chụp không?", a: "Có. Muse sắp lịch thử váy và veston tại studio trước buổi chụp để chọn dáng phù hợp nhất." },
      { q: "Bao lâu thì nhận được album?", a: "Ảnh chọn được bàn giao sau 7–10 ngày; album, ảnh cổng và ảnh lụa hoàn thiện trong 2–3 tuần kể từ khi duyệt ảnh." },
      { q: "Có thể đổi địa điểm ngoại cảnh khác không?", a: "Gói Sài Gòn Basic gồm 01 địa điểm tuỳ chọn trong thành phố. Địa điểm khác hoặc thêm điểm, Muse sẽ báo chi phí phát sinh trước." },
      { q: "Muse có hỗ trợ concept áo dài truyền thống?", a: "Có. Bộ sưu tập Giai Duyên với áo dài, bình phong và sắc đỏ là một trong những concept được yêu thích tại studio." },
    ],
  },
  cta: {
    title: "Sẵn sàng cho buổi chụp của hai bạn?",
    desc: "Để lại thông tin, Muse sẽ tư vấn concept và gói chụp phù hợp trong vòng 24h.",
    bg: [photos.gardenFlowers, photos.studioVeilKiss, photos.cityRooftopBride],
  },
};

// ---------- Hero ----------
export const hero = {
  eyebrow: "Muse Bridal · Wedding Studio Sài Gòn",
  title: "Every Love Has Its Own",
  titleAccent: "Beauty.",
  desc: "Lưu giữ câu chuyện tình yêu của hai bạn qua những khung hình vượt thời gian — phim trường tinh tế hay ngoại cảnh Sài Gòn đầy cảm xúc.",
  // 3 cột ảnh dọc (desktop). Mỗi cột xoay vòng các ảnh, lệch nhịp nhau.
  columns: [
    [
      { src: photos.studioGown, alt: "Cặp đôi trong studio – váy bồng & calla lily", pos: "center 15%" },
      { src: photos.cityBitexco, alt: "Ảnh cưới ngoại cảnh phố Sài Gòn", pos: "center 55%" },
      { src: photos.gardenToast, alt: "Nâng ly chúc mừng ngoài trời", pos: "center 20%" },
    ],
    [
      { src: photos.studioVeilCalla, alt: "Cô dâu chú rể dưới tấm voan", pos: "center 20%" },
      { src: photos.studioVeilKiss, alt: "Nụ hôn qua lớp voan", pos: "center 30%" },
      { src: photos.aodaiRedScreen, alt: "Cô dâu áo dài trắng trước bình phong đỏ", pos: "center 20%" },
    ],
    [
      { src: photos.cityRooftopBride, alt: "Cô dâu trên rooftop Sài Gòn", pos: "center 25%" },
      { src: photos.gardenFlowers, alt: "Ảnh cưới trong vườn hoa", pos: "center 45%" },
      { src: photos.studioToast, alt: "Cô dâu & ly champagne", pos: "center 20%" },
    ],
  ],
  badges: ["Photographer · Makeup Artist · Stylist", "Váy cưới thiết kế độc quyền", "Ưu đãi mùa cưới · số lượng có hạn"],
};

// ---------- About ----------
export const about = {
  eyebrow: "About Muse",
  title: "Mỗi tình yêu đều xứng đáng có một câu chuyện riêng.",
  paragraphs: [
    "Muse Bridal đồng hành cùng các cặp đôi lưu giữ khoảnh khắc đáng nhớ nhất, chăm chút từ trang phục, makeup đến từng khung hình.",
    "Phong cách hiện đại, sang trọng với đa dạng concept: phim trường tối giản, vườn hoa lãng mạn hay góc phố Sài Gòn.",
  ],
  main: { src: photos.studioGown, alt: "Cặp đôi trong studio Muse Bridal" },
  // câu tuyên ngôn với ảnh nhỏ chèn giữa chữ
  manifesto: [
    { text: "Mỗi tình yêu" },
    { text: "đều xứng đáng" },
    { text: "có một" },
    { text: "câu chuyện riêng.", accent: true },
  ],
  polaroids: [
    { src: photos.studioToastHands, alt: "Khoảnh khắc nâng ly", caption: "cheers to us" },
    { src: photos.gardenFlowers, alt: "Ảnh cưới ngoại cảnh vườn hoa", caption: "timeless" },
  ],
  highlights: [
    { value: "02", label: "Gói chụp trọn vẹn" },
    { value: "03", label: "Chuyên gia đồng hành" },
    { value: "100%", label: "Concept riêng cho hai bạn" },
  ],
};

// ---------- Bộ sưu tập ----------
export const collections = [
  {
    slug: "muse-studio",
    name: "Muse Studio",
    sub: "Studio Collection",
    concept: "Phim trường tối giản",
    desc: "Không gian phim trường tinh tế với ánh sáng mềm, tôn lên đường nét và cảm xúc của hai bạn. Mỗi khung hình đều thanh lịch, tối giản và vượt thời gian.",
    cover: photos.studioToast,
    coverPos: "center 25%",
    images: [
      photos.studioGown,
      photos.studioVeilCalla,
      photos.studioVeilKiss,
      photos.studioToast,
      photos.studioToastHands,
      photos.studioRedFlowers,
      photos.studioRedCollage,
      photos.studioBlooming,
      photos.studioLook,
    ],
  },
  {
    slug: "saigon-street",
    name: "Saigon Street",
    sub: "City Collection",
    concept: "Ngoại cảnh Sài Gòn",
    desc: "Đưa câu chuyện tình yêu vào nhịp sống thành phố: những góc phố, toà nhà và khoảng trời quen thuộc trở thành phông nền cho một bộ ảnh đầy năng lượng.",
    cover: photos.cityBitexco,
    coverPos: "center 55%",
    images: [
      photos.cityBitexco,
      photos.cityMagazine,
      photos.cityPoster,
      photos.cityCollage,
      photos.cityRooftop,
      photos.cityRooftopBride,
      photos.cityDeliver,
    ],
  },
  {
    slug: "secret-garden",
    name: "Secret Garden",
    sub: "Garden Collection",
    concept: "Vườn hoa lãng mạn",
    desc: "Sắc xanh của cây lá, những cụm hoa được sắp đặt tỉ mỉ và ánh nắng dịu nhẹ — bộ sưu tập dành cho các cặp đôi yêu sự lãng mạn, thơ mộng.",
    cover: photos.gardenTower,
    coverPos: "center 30%",
    images: [
      photos.gardenFlowers,
      photos.gardenSerene,
      photos.gardenToast,
      photos.gardenTower,
      photos.gardenJourney,
      photos.gardenSeason,
    ],
  },
  {
    slug: "giai-duyen",
    name: "Giai Duyên",
    sub: "Áo Dài Collection",
    concept: "Truyền thống hiện đại",
    desc: "Áo dài, bình phong và sắc đỏ may mắn được kể lại bằng ngôn ngữ hình ảnh hiện đại — dành cho những cặp đôi muốn giữ nét Việt trong ngày trọng đại.",
    cover: photos.aodaiRedScreen,
    coverPos: "center 20%",
    images: [
      photos.aodaiRedScreen,
      photos.aodaiGiaiDuyen,
      photos.aodaiHyAn,
      photos.aodaiSeason,
      photos.aodaiMuseBasic,
    ],
  },
];

export const getCollection = (slug) => collections.find((c) => c.slug === slug);

// ---------- Hai gói chụp ----------
export const packages = [
  {
    id: "muse-basic",
    index: "01",
    sub: "Studio Collection",
    name: "Muse Basic",
    desc: "Vẻ đẹp được chăm chút trong không gian phim trường, nơi từng góc sáng và đường nét tạo nên những khung hình tinh tế.",
    image: photos.studioRedFlowers,
    imagePos: "center 24%",
    // desktop: phóng nhẹ + dịch phải để cặp đôi (hơi lệch trái trong ảnh gốc) nằm giữa khung; mobile khung dọc không cần
    imageFx: "lg:scale-[1.16] lg:translate-x-[8%]",
    collectionSlug: "muse-studio",
  },
  {
    id: "saigon-basic",
    index: "02",
    sub: "City Collection",
    name: "Sài Gòn Basic",
    desc: "Đưa câu chuyện tình yêu vào nhịp sống thành phố, những góc phố và không gian ngoại cảnh giàu cảm xúc.",
    image: photos.cityRooftopBride,
    imagePos: "center 30%",
    collectionSlug: "saigon-street",
  },
];

// ---------- Trải nghiệm / dịch vụ ----------
export const experience = {
  eyebrow: "The Bridal Experience",
  title: "Từ diện mạo đầu tiên đến khung hình cuối cùng.",
  images: [
    { src: photos.studioRedCollage, alt: "Bộ ảnh studio hoa đỏ" },
    { src: photos.studioLook, alt: "Trọn bộ look cưới: váy cưới & veston" },
    { src: photos.studioCrew, alt: "Ekip Muse Bridal đồng hành" },
  ],
  services: [
    {
      icon: "dress",
      image: photos.studioGown,
      imagePos: "center 12%",
      title: "Váy cưới & veston",
      desc: "Thiết kế độc quyền, đa dạng phong cách — kèm phụ kiện và hoa lụa cầm tay.",
    },
    {
      icon: "brush",
      image: photos.studioToast,
      imagePos: "center 22%",
      title: "Makeup & styling",
      desc: "Makeup, làm tóc và styling linh hoạt theo từng concept, tôn lên nét riêng của bạn.",
    },
    {
      icon: "camera",
      image: photos.studioCrew,
      imagePos: "88% center",
      title: "Ekip chuyên nghiệp",
      desc: "Photographer, Makeup Artist và Stylist đồng hành trọn buổi chụp.",
    },
    {
      icon: "album",
      image: photos.studioCurtain,
      imagePos: "center 40%",
      title: "Album & sản phẩm ảnh",
      desc: "Album cao cấp, ảnh cổng ép gỗ, ảnh lụa để bàn và slide trình chiếu tiệc cưới.",
    },
  ],
};

// ---------- Bảng giá ----------
export const pricing = {
  eyebrow: "Investment",
  title: "Chọn gói chụp phù hợp cho hai bạn.",
  note: "Ưu đãi mùa cưới số lượng có hạn. Giá và điều kiện áp dụng theo công bố của Muse Bridal.",
  sideImage: { src: photos.gardenToast, alt: "Nâng ly chúc mừng ngoại cảnh" },
  sideImage2: { src: photos.gardenSerene, alt: "Serene Love – voan trong vườn" },
  plans: [
    {
      id: "muse-basic",
      sub: "Studio Collection",
      name: "Muse Basic",
      oldPrice: "8.590.000",
      price: "5.590.000",
      unit: "đ",
      tag: "Gói chụp studio độc quyền",
      groups: [
        {
          title: "Trọn bộ look cưới",
          items: [
            "02 váy cưới thiết kế độc quyền",
            "02 veston cao cấp",
            "Miễn phí phụ kiện & hoa lụa cầm tay",
            "Makeup linh hoạt theo từng concept",
          ],
        },
        {
          title: "Ekip chuyên nghiệp đồng hành",
          items: ["01 Photographer", "01 Makeup Artist", "01 Stylist"],
        },
        {
          title: "Trọn vẹn khoảnh khắc",
          items: [
            "Album cao cấp 20 trang",
            "Ảnh cổng ép gỗ cao cấp",
            "05 ảnh lụa để bàn",
            "Slide trình chiếu tiệc",
          ],
        },
      ],
      highlight: false,
    },
    {
      id: "saigon-basic",
      sub: "City Collection",
      name: "Sài Gòn Basic",
      oldPrice: "10.900.000",
      price: "8.900.000",
      unit: "đ",
      tag: "Gói chụp ngoại cảnh Sài Gòn",
      groups: [
        {
          title: "Trọn gói chụp ngoại cảnh",
          items: [
            "01 váy cưới thiết kế độc quyền",
            "01 veston cao cấp",
            "01 Photographer · 01 Makeup Artist · 01 Stylist",
          ],
        },
        {
          title: "Tự do chọn địa điểm",
          items: [
            "01 địa điểm ngoại cảnh tuỳ chọn tại Sài Gòn",
            "Tặng phí xe di chuyển suốt buổi chụp",
          ],
        },
        {
          title: "Trọn bộ sản phẩm bàn giao",
          items: [
            "01 album cao cấp 20 trang",
            "01 ảnh cổng ép gỗ cao cấp",
            "05 ảnh lụa để bàn",
            "01 slide chiếu tiệc nhà hàng",
          ],
        },
      ],
      highlight: true,
    },
  ],
};

// Bảng so sánh quyền lợi 2 gói (hàng = nhóm quyền lợi, cột = gói)
export const pricingRows = [
  {
    label: "Trang phục",
    "muse-basic": ["02 váy cưới độc quyền", "02 veston cao cấp", "Tặng phụ kiện & hoa lụa"],
    "saigon-basic": ["01 váy cưới độc quyền", "01 veston cao cấp"],
  },
  {
    label: "Ekip đồng hành",
    "muse-basic": ["Makeup theo concept", "01 Photographer", "01 Makeup Artist · 01 Stylist"],
    "saigon-basic": ["01 Photographer", "01 Makeup Artist · 01 Stylist"],
  },
  {
    label: "Địa điểm",
    "muse-basic": ["Phim trường Muse độc quyền"],
    "saigon-basic": ["Ngoại cảnh tuỳ chọn Sài Gòn", "Tặng phí xe di chuyển"],
  },
  {
    label: "Sản phẩm bàn giao",
    "muse-basic": ["Album cao cấp 20 trang", "Ảnh cổng ép gỗ", "05 ảnh lụa để bàn", "Slide trình chiếu tiệc"],
    "saigon-basic": ["Album cao cấp 20 trang", "Ảnh cổng ép gỗ", "05 ảnh lụa để bàn", "Slide trình chiếu tiệc"],
  },
];

// ---------- Ưu đãi mùa cưới (poster từ Facebook) ----------
export const offers = {
  eyebrow: "Đặc quyền mùa cưới",
  title: "Ưu đãi mùa cưới dành riêng cho các cặp đôi.",
  desc: "Những ưu đãi và quyền lợi đang được Muse Bridal công bố trên Facebook. Nhấn vào poster để xem rõ hơn.",
  posters: [
    { src: photos.aodaiMuseBasic, alt: "Muse Basic – gói chụp studio độc quyền chỉ còn 5.590.000đ" },
    { src: photos.promoSaigonBasic, alt: "Saigon Basic – gói chụp ngoại cảnh chỉ còn 8.900.000đ" },
    { src: photos.gardenSeason, alt: "Đặc quyền mùa cưới – số lượng có hạn" },
    { src: photos.studioLook, alt: "Trọn bộ look cưới" },
    { src: photos.studioCrew, alt: "Ekip chuyên nghiệp đồng hành" },
    { src: photos.studioCurtain, alt: "Trọn vẹn khoảnh khắc – album & sản phẩm ảnh" },
    { src: photos.cityPackage, alt: "Trọn gói chụp ngoại cảnh" },
    { src: photos.cityLocation, alt: "Tự do chọn địa điểm tại Sài Gòn" },
    { src: photos.cityDeliver, alt: "Trọn bộ sản phẩm bàn giao" },
    { src: photos.aodaiSeason, alt: "Đặc quyền mùa cưới – áo dài" },
  ],
};

// ---------- Khoảnh khắc (masonry) ----------
export const moments = {
  eyebrow: "Moments",
  title: "Những khoảnh khắc được Muse lưu giữ.",
  // size: "tall" (dọc) | "square" | "wide-ish" — dải cuộn ngang
  items: [
    { src: photos.gardenSerene, alt: "Serene Love – voan trong vườn", size: "tall" },
    { src: photos.cityRooftop, alt: "Our Journey – rooftop Sài Gòn", size: "square" },
    { src: photos.studioBlooming, alt: "Blooming Love", size: "tall" },
    { src: photos.cityPoster, alt: "Power of Love", size: "tall" },
    { src: photos.aodaiHyAn, alt: "Hỷ An", size: "square" },
    { src: photos.gardenJourney, alt: "Our Journey – love story", size: "tall" },
    { src: photos.cityCollage, alt: "Power of Love – phố Sài Gòn", size: "tall" },
    { src: photos.studioRedCollage, alt: "Studio hoa đỏ", size: "square" },
    { src: photos.gardenTower, alt: "Tháp champagne trong vườn", size: "tall" },
    { src: photos.aodaiGiaiDuyen, alt: "Giai Duyên", size: "square" },
    { src: photos.cityMagazine, alt: "Power of Love magazine", size: "tall" },
    { src: photos.studioRedFlowers, alt: "Studio hoa đỏ – cặp đôi", size: "tall" },
  ],
};

// ---------- Form liên hệ ----------
export const contact = {
  eyebrow: "Liên hệ & đặt lịch",
  title: "Câu chuyện của hai bạn sẽ bắt đầu từ đâu?",
  desc: "Hãy để Muse Bridal đồng hành: tư vấn concept, chọn gói chụp phù hợp và nhận ưu đãi mùa cưới cho hai bạn.",
  // Polaroid xoè quanh tiêu đề (desktop) — ảnh dọc/vuông trong khung đúng tỉ lệ
  polaroids: [
    { src: photos.cityRooftop, alt: "Our Journey – rooftop Sài Gòn", caption: "our journey", pos: "20% center", square: true },
    { src: photos.gardenTower, alt: "Tháp champagne trong vườn", caption: "cheers", pos: "center 30%" },
    { src: photos.studioRedFlowers, alt: "Studio hoa đỏ", caption: "blooming", pos: "center 30%" },
    { src: photos.aodaiGiaiDuyen, alt: "Giai Duyên", caption: "giai duyên", pos: "center", square: true },
  ],
  perks: ["Tư vấn concept miễn phí", "Ưu đãi mùa cưới số lượng có hạn", "Ekip Photographer · Makeup · Stylist"],
  styles: ["Phim trường – Muse Basic", "Ngoại cảnh Sài Gòn – Sài Gòn Basic", "Áo dài truyền thống", "Chưa quyết định, cần tư vấn"],
};

// ---------- Popup đặt lịch ----------
export const booking = {
  title: "Đặt lịch tư vấn",
  desc: "Để lại thông tin, Muse sẽ liên hệ trong 24h để tư vấn concept và giữ lịch chụp cho hai bạn.",
  image: { src: photos.gardenToast, alt: "Nâng ly chúc mừng ngoài trời", pos: "center 20%" },
  eyebrow: "Ưu đãi mùa cưới",
  headline: "Ưu đãi mùa cưới dành riêng cho các cặp đôi",
  bullets: ["Ekip Photographer · Makeup Artist · Stylist", "Váy cưới thiết kế độc quyền & veston", "Trọn bộ album, ảnh cổng, ảnh lụa & slide tiệc"],
  // map data-booking="..." -> phong cách chọn sẵn
  presets: { "muse-basic": "Phim trường – Muse Basic", "saigon-basic": "Ngoại cảnh Sài Gòn – Sài Gòn Basic" },
};
