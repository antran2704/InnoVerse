import { IProduct } from "~/interface/Product";

const productList: IProduct[] = [
  {
    title:
      "Neyul solutions for marketing and sales",
    description: [
      "The website is used to introduce marketing and sales services and solutions",
      "Feature:",
      "+ Manage content of website",
      "+ Login",
      "+ Report",
      "+ Blog",
      "+ SEO top with keyword “Neyul”",
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
      "Sales website with many different types of items.",
      "Feature:",
      "+ Detail product",
      "+ Cart",
      "+ Payment",
      "+ Voucher",
      "+ Manager of order",
      "+ Blog",
      "+ Login / Signup",
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
    title: "Happy Ship App",
    description: [
      "The application allows users to order cars, food, and delivery.",
      "Feature:",
      "+ Booking: Car, Motorbike, Taxi, Delivery, Food Delivery, Grocery Delivery",
      "+ E-wallet: Payment via e-wallet",
      "+ Loyalty program",
      "+ Share your journey",
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
    title: "AllBanks App",
    description: [
      "+ Helps customers send loan requests to banks, request the desired amount and interest rate without having to go to a bank's transaction point.",
      "+ Monitor the progress of processing documents every day through the steps according to each bank's process",
      "+ Remind payment schedule to avoid overdue",
      "+ Bank officials can find borrowers easily",
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
      "+ Build an application that allows users to schedule health examinations",
      "+Build a queue feature, users can schedule and always put themselves at the end of the queue, users can buy reservation rights, submit priority",
      "+ Building the resident doctor feature, people can make appointments according to the application's team of resident doctors",
      "+ Build a video call feature for consultations, record consultation logs with AI, thereby evaluating customer service",
      "+ Build a rating feature for doctors",
    ],
    gallery: ["/images/products/4/image1.webp"],
    slug: "medical-consulting-application",
  },
];

export default productList;
