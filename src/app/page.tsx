"use client";

import { CiCircleCheck } from "react-icons/ci";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import productList from "~/common/product";
import { ProductItem } from "~/components/Product";
import { IProduct } from "~/interface/Product";
import { Carousel, Collapse, HeaderContent } from "~/components/Core";
import listCustomer from "~/common/customer";
import { ReactTyped } from "react-typed";

const settingFeedbackSwiper: SwiperProps = {
  spaceBetween: 20,
  loop: true,
  modules: [Autoplay],
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  className: "!py-5 !px-2",
  freeMode: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};

const settingCustomerSwiper: SwiperProps = {
  spaceBetween: 20,
  loop: true,
  modules: [Autoplay],
  speed: 2000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  className: "!py-5 !px-2",
  freeMode: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },
};

export default function Home() {
  return (
    <div className="container__custom">
      {/* Banner */}
      <section className="flex items-center md:flex-row flex-col justify-between md:pt-0 pt-10 md:gap-10">
        <div>
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold md:text-start text-center">
            InnoVerse
          </h1>
          <ReactTyped
            strings={[
              "Phân tích và tư vấn",
              "Phát triển mô hình AI",
              "Phát triển website",
            ]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={1000}
            attr="value"
            loop>
            <input
              type="text"
              className="text-primary-200 font-medium bg-transparent lg:text-3xl md:text-2xl text-xl md:text-start text-center pointer-events-none"
            />
          </ReactTyped>
        </div>
        <div className="lg:h-[500px] md:h-[400px] h-[300px] relative">
          <img
            src="https://i.pinimg.com/564x/d4/93/74/d4937491aac89d7669e860d1f0dd6281.jpg"
            alt="banner"
            title="banner"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Products */}
      <section id="product" className="py-12">
        <HeaderContent border title={"Sản phẩm"} />

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10 gap-5">
          {productList.map((item: IProduct, index: number) => (
            <ProductItem key={index} product={item} />
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section id="why" className="py-10">
        <HeaderContent border title={"Tại sao chọn Innoverse"} />

        <div className="flex md:flex-row flex-col items-center justify-between pt-5 gap-10">
          <ul className="md:w-1/2 w-full flex flex-col list-disc gap-5">
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Đội ngũ chuyên gia</strong>: Đội ngũ lập trình viên giàu
                kinh nghiệm, am hiểu sâu rộng về nhiều nền tảng và công nghệ
                khác nhau
              </p>
            </li>
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Quy trình làm việc chuyên nghiệp</strong>: Áp dụng các
                phương pháp quản lý dự án hiện đại, đảm bảo chất lượng và tiến
                độ.
              </p>
            </li>
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Công nghệ</strong>: Sử dụng các công nghệ mới nhất để
                phát triển các sản phẩm phần mềm hiệu quả, đáp ứng nhu cầu đa
                dạng của khách hàng.
              </p>
            </li>
            <li className="flex items-start md:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Linh hoạt tùy biến</strong>:Chúng tôi cam kết đáp ứng
                mọi yêu cầu của khách hàng, từ các dự án nhỏ đến các dự án lớn.
              </p>
            </li>
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Bảo mật</strong>:Đảm bảo an toàn thông tin cho khách
                hàng bằng các biện pháp bảo mật nghiêm ngặt.
              </p>
            </li>
          </ul>

          <div className="md:w-1/2 w-3/4">
            <img
              className="w-full object-contain object-center"
              src="/images/whyChoose.png"
              width={100}
              height={100}
              alt="whyChoose"
              title="why choose"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Static */}
      <section id="statistics" className="py-5">
        <HeaderContent border title={"Statistics"} />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-5 text-center">
          <div className="p-4">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24">
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font lg:text-3xl md:text-2xl text-xl text-gray-900 font-bold">
                2.7K
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="p-4">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font lg:text-3xl md:text-2xl text-xl text-gray-900 font-bold">
                1.3K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24">
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font lg:text-3xl md:text-2xl text-xl text-gray-900 font-bold">
                74
              </h2>
              <p className="leading-relaxed">Files</p>
            </div>
          </div>
          <div className="p-4">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font lg:text-3xl md:text-2xl text-xl text-gray-900 font-bold">
                46
              </h2>
              <p className="leading-relaxed">Places</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feed back */}
      <section id="feedback" className="py-10">
        <HeaderContent border title={"Feedback"} />

        <div className="pt-5 ">
          <Carousel setting={settingFeedbackSwiper}>
            <SwiperSlide>
              <div className="h-full bg-gray-100 p-8 rounded-md">
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://images.unsplash.com/photo-1722603037473-22866cddade7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-gray-100 p-8 rounded-md">
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://images.unsplash.com/photo-1722603037473-22866cddade7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-gray-100 p-8 rounded-md">
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://images.unsplash.com/photo-1722603037473-22866cddade7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-gray-100 p-8 rounded-md">
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://images.unsplash.com/photo-1722603037473-22866cddade7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-gray-100 p-8 rounded-md">
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://images.unsplash.com/photo-1722603037473-22866cddade7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-gray-100 p-8 rounded-md">
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://images.unsplash.com/photo-1722603037473-22866cddade7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
          </Carousel>
        </div>
      </section>

      {/* Customer */}
      <section id="customer" className="py-10">
        <HeaderContent border title={"Khách hàng & Đối tác"} />

        <div className="pt-10">
          <Carousel setting={settingCustomerSwiper}>
            {listCustomer.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  alt="customer"
                  title="customer"
                  width={100}
                  height={100}
                  loading="lazy"
                  src={item}
                  className="size-[100px] object-contain object-center mx-auto"
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-10">
        <HeaderContent border title={"Những câu hỏi thường gặp"} />

        <div className="py-10">
          <Collapse title="Dịch vụ">
            <ul className="flex flex-col px-8 list-decimal gap-2">
              <li>
                <strong>Phát triển phần mềm theo yêu cầu</strong>: Ứng dụng
                Website, App, hệ thống quản lý doanh nghiệp, phần mềm tích
                hợp,...
              </li>
              <li>
                <strong>Bảo trì, nâng cấp phần mềm</strong>: Sửa lỗi, cập nhật
                tính năng, tối ưu hiệu năng, chuyển đổi phần mềm sang nền tảng
                mới
              </li>
              <li>
                <strong>Phân tích và tư vấn</strong>: Hiểu rõ nhu cầu và mục
                tiêu của doanh nghiệp, Lựa chọn nền tảng phù hợp, Xây dựng chiếc
                lược nội dung
              </li>
              <li>
                <strong>Phân tích và lên kế hoạch </strong>: Phân tích nhu cầu
                và mục tiêu doanh nghiệp, Lựa chọn công nghệ và kiến trúc phù
                hợp, Xây dựng tùy biến AI đáp ứng chính xác các nhu cầu cụ thể
                của doanh nghiệp
              </li>
              <li>
                <strong>Thiết kế giao diện</strong>: Thiết kế giao diện đẹp mắt,
                thân thiện với người dùng, Tối ưu hóa trải nghiệm người dùng
                trên mọi thiết bị
              </li>
              <li>
                <strong>Phát triển website</strong>: Lập trình website bằng các
                công nghệ hiện đại, Tích hợp các tính năng nâng cao (e-commerce,
                blog...)
              </li>
              <li>
                <strong>Thu thập và xử lý dữ liệu</strong>: Thu thập, làm sạch
                và chuẩn hóa dữ liệu, Xây dựng cơ sở dữ liệu AI, Phân tích dữ
                liệu lớn
              </li>
              <li>
                <strong>Phát triển mô hình AI</strong>: Lựa chọn mô hình AI phù
                hợp với từng bài toán cụ thể, Tối ưu hóa hiệu năng của mô hình
              </li>
              <li>
                <strong>Phát triển ứng dụng Blockchain </strong>: Phát triển
                Smart Contract, Xây dựng giao diện người dùng, Tích hợp với hệ
                thống hiện có
              </li>
            </ul>
          </Collapse>
          <Collapse title="Lĩnh vực">
            <ul className="px-4">
              <li>+ Thương mại điện tử</li>
              <li>+ Tài chính ngân hàng</li>
              <li>+ Y tế</li>
              <li>+ Giáo dục</li>
              <li>+ Sản xuất</li>
            </ul>
          </Collapse>
          <Collapse title="Cam kết">
            <ul className="px-4">
              <li>- Đảm bảo chất lượng</li>
              <li>- Bàn giao sản phẩm đúng thời hạn</li>
              <li>- Bảo mật thông tin khách hàng tuyệt đối</li>
              <li>- Hỗ trợ khách hàng 24/7</li>
            </ul>
          </Collapse>
          <Collapse title="Lợi ích">
            <ul className="px-4">
              <li>- Tiết kiệm chi phí</li>
              <li>- Nâng cao hiệu quả</li>
              <li>- Tiếp cận công nghệ mới</li>
              <li>- Giám rủi ro</li>
              <li>- Nâng cao năng lực cạnh tranh</li>
            </ul>
          </Collapse>
        </div>
      </section>
    </div>
  );
}
