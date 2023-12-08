export const APP_CONFIG = {
  NAME: "PlusPhim",
  DESCRIPTION:
    "PlusPhim - Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú. Phim cập nhập liên tục từng ngày, mời các bạn cùng thưởng thức những bộ phim hành động, võ thuật, phim chiếu rạp, các thể loại phim tâm lý, tình cảm cực lôi cuốn và hấp dẫn nhất.",
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
};

export const APP_ROUTERS = {
  HOME: "/",
  LIST: {
    FILM: "/danh-sach/phim-le",
    SERIES: "/danh-sach/phim-bo",
    ANIME: "/danh-sach/hoat-hinh",
    UPCOMMING: "/danh-sach/phim-sap-chieu",
  },
  CATEGORY: "/the-loai/",
  MOVIE: "/phim/",
  WATCH: "/xem-phim/",
};

export const MENU_BAR = [
  {
    id: 1,
    title: "Phim lẻ",
    path: APP_ROUTERS.LIST.FILM,
    key: "film",
    active: "phim-le",
  },
  {
    id: 2,
    title: "Phim bộ",
    path: APP_ROUTERS.LIST.SERIES,
    key: "series",
    active: "phim-bo",
  },
  {
    id: 3,
    title: "Phim hoạt hình",
    path: APP_ROUTERS.LIST.ANIME,
    key: "anime",
    active: "hoat-hinh",
  },
  {
    id: 4,
    title: "Thể loại",
    path: "",
    key: "categories",
    active: "the-loai",
  },
  {
    id: 5,
    title: "Quốc gia",
    path: "",
    key: "countries",
    active: "quoc-gia",
  },
];

export const MENU_INFORMATION = [
  { id: 1, name: "Giới Thiệu", slug: "/about" },
  { id: 2, name: "Liên Hệ Chúng Tôi", slug: "/contact" },
  { id: 3, name: "Điều Khoản Sử Dụng", slug: "/rules" },
  { id: 4, name: "Chính Sách Riêng Tư", slug: "/policy" },
  { id: 5, name: "Kiếu Nại Bản Quyền", slug: "/complain" },
];

export const MENU_LIST = [
  { id: "1", name: "Phim Mới", slug: "danh-sach/phim-moi" },
  { id: "2", name: "Phim Bộ", slug: "danh-sach/phim-bo" },
  { id: "3", name: "Phim Lẻ", slug: "danh-sach/phim-le" },
  { id: "4", name: "Hoạt Hình", slug: "danh-sach/hoat-hinh" },
  { id: "5", name: "Phim Vietsub", slug: "danh-sach/phim-vietsub" },
  { id: "6", name: "Phim Thuyết Minh", slug: "danh-sach/phim-thuyet-minh" },
  { id: "7", name: "Phim Lồng Tiếng", slug: "danh-sach/phim-long-tieng" },
  {
    id: "8",
    name: "Phim Bộ Đang Chiếu",
    slug: "danh-sach/phim-bo-dang-chieu",
  },
  { id: "9", name: "Phim Bộ Hoàn Thành", slug: "danh-sach/phim-hoan-thanh" },
  { id: "10", name: "Phim Sắp chiếu", slug: "danh-sach/phim-sap-chieu" },
  { id: "11", name: "Subteam", slug: "danh-sach/supteam" },
];

export const SORT_FIELD = [
  { id: "1", name: "Thời Gian Đăng", slug: "_id" },
  { id: "2", name: "Thời gian Cập Nhật", slug: "modified.time" },
  { id: "1", name: "Năm sản xuất", slug: "year" },
];

export const SPECIAL_PATH = {
  THE_LOAI: "the-loai",
  QUOC_GIA: "quoc-gia",
  DANH_SACH: "danh-sach",
};

export const GALLERY = {
  new: {
    name: "Phim mới cập nhật",
    slug: "/",
  },
  upcoming: {
    name: "Phim sắp chiếu",
    slug: "/danh-sach/phim-sap-chieu",
  },
  single: {
    name: "Phim Lẻ mới cập nhật",
    slug: `/danh-sach/phim-le?sort_field=_id&category=&country=&year=${new Date().getFullYear()}`,
  },
  series: { name: "Phim Bộ mới cập nhật", slug: "/danh-sach/phim-bo" },
  cartoon: {
    name: "Hoạt Hình mới cập nhật",
    slug: "/danh-sach/hoat-hinh",
  },
};

export const PAGE_PLUS_PHIM =
  "https://www.facebook.com/profile.php?id=61554302664546";

export const EMAIL_PLUS_PHIM = "plusphim2023@gmail.com";
