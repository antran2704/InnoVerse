import { IProduct } from "~/interface/Product";

const productList: IProduct[] = [
  {
    title:
      "Neyul xây dựng giải pháp về marketting, saleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    description: [
      "Trang web dùng để giới thiệu các dịch vụ, giải pháp về marketing, sale",
      "Các tính năng chính:",
      "+ Quản lý content trang web",
      "+ Đăng nhập",
      "+ Report",
      "+ Blog",
      "+ SEO top với keyword “Neyul”",
    ],
    thumbnail: "/images/products/1/image1.png",
    gallery: [
      "/images/products/1/image1.png",
      "/images/products/1/image2.png",
      "/images/products/1/image3.png",
      "/images/products/1/image4.png",
    ],
    slug: "neyul",
  },
  {
    title: "E-commerce",
    thumbnail: "/images/products/2/image1.webp",
    description: [
      "Trang web bán hàng với nhiều loại mặt hàng khác nhau.",
      "Các tính năng chính:",
      "+ Chi tiết sản phẩm",
      "+ Thêm vào giỏ hàng",
      "+ Thanh toán",
      "+ Dùng mã giảm giá",
      "+ Quản lý đơn hàng",
      "+ Blog",
      "+ Đăng nhập / đăng ký",
    ],
    gallery: [
      "/images/products/2/image1.webp",
      "/images/products/2/image2.webp",
      "/images/products/2/image3.webp",
      "/images/products/2/image4.webp",
      "/images/products/2/image5.webp",
    ],
    slug: "e-commerce",
  },
  {
    thumbnail: "/images/products/3/image1.webp",
    title: "Ứng dụng Happy SHIP",
    description: [
      "Ứng dụng cho phép người dùng đặt xe, đồ ăn, giao hàng.",
      "Các chức năng:",
      "+ Đặt xe: Ô tô, Xe máy, Taxi, Giao hàng, Giao đồ ăn, Giao hàng tạp hóa",
      "+ Ví điện tử: Thanh toán qua ví điện tử",
      "+ Theo dõi lộ trình di chuyển của tài xế",
      "+ Chương trình khách hàng thân thiết",
      "+ Chia sẻ hành trình với người thân",
    ],
    gallery: [
      "/images/products/3/image1.webp",
      "/images/products/3/image2.webp",
      "/images/products/3/image3.webp",
      "/images/products/3/image4.webp",
    ],
    slug: "happy-ship",
  },
  {
    thumbnail: "/images/products/4/image1.webp",
    title: "Ứng dụng AllBanks",
    description: [
      "+ Giúp khách hàng gửi đề nghị vay vốn tới các ngân hàng, đề nghị số tiền, lãi suất mong muốn mà không cần tới điểm giao dịch của ngân hàng",
      "+ Theo dõi tiến độ xử lý hồ sơ từng ngày qua các bước theo qui trình từng ngân hàng",
      "+ Sau khi được duyệt có thể đề nghị ngân hàng giải ngân, bảo lãnh...",
      "+ Nhắc lịch trả nợ tránh bị quá hạn",
      "+ Gửi bài viết, tâm trạng vào trang nhật ký (như Facebook,…)",
      "+ Cán bộ ngân hàng có thể tìm khách hàng vay dễ dàng",
      "+ Lãnh đạo ngân hàng có thể theo dõi tiến độ xử lý hồ sơ của các cán bộ, báo cáo chi tiết và báo cáo tổng hợp số lượng hồ sơ đã xử lý của các cán bộ.",
    ],
    gallery: [
      "/images/products/4/image1.webp",
      "/images/products/4/image2.webp",
    ],
    slug: "allbanks",
  },
  {
    thumbnail: "/images/products/5/image1.webp",
    title: "Medical Consulting Application",
    description: [
      "+ Xây dựng ứng dụng cho phép người dùng có thể đặt lịch khám sức khỏ",
      "+ Xây dựng tính năng hàng chờ, người dùng có thể đặt lịch và luôn đặt họ ở cuối hàng chờ, người dùng có thể mua quyền đặt chỗ, trìnhưu tiên(đánh vào nhu cầu khám bệnh luôn muốn nhanh và luôn muốn có thể được khám sớm nhất có thể",
      "+ Xây dựng tính năng bác sĩ thường trú, mọi người có thể đặt lịch theo đội ngũ bác sĩ thường trú của ứng dụng",
      "+ Xây dựng tính năng video call cho cuộc tư vấn, ghi lại nhật ký tư vấn bằng AI, từ đó đánh giá dịch vụ khách hàng",
      "+ Xây dựng tính năng rating cho bác sĩ",
    ],
    gallery: ["/images/products/4/image1.webp"],
    slug: "medical-consulting-application",
  },
];

export default productList;
