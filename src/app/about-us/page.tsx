"use client";

import { SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import clsx from "clsx";
import { Carousel, HeaderContent } from "~/components/Core";

const settingTeamSwiper: SwiperProps = {
  spaceBetween: 20,
  loop: true,
  modules: [Autoplay],
  speed: 2000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  className: "!py-5 !px-2",
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

const AboutUsPage = () => {
  return (
    <div className="container__custom">
      <section id="about-us" className="text-gray-600 body-font p-5">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex lg:flex-row flex-col items-center w-full mb-10 gap-10">
            <div className="lg:w-1/2 w-full">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-2 text-gray-900 lg:text-left text-center capitalize">
                Giới thiệu về InnoVerse
              </h1>
              <div className="w-full">
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="leading-relaxed text-gray-600 py-2">
                  <strong>InnoVerse Solutions</strong> là công ty Phần mềm và
                  Dịch vụ chuyên Tư vấn Chuyển đổi số, Tư vấn Giải pháp công
                  nghệ, Giải pháp Quản trị doanh nghiệp, Giải pháp Ứng dụng
                  Blockchain, Dịch vụ AI.
                </p>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="leading-relaxed text-gray-600 py-2">
                  Công ty hoạt động{" "}
                  <strong>
                    dựa trên đội ngũ nhân viên Công nghệ năng động, sáng tạo và
                    đội ngũ Quản lý, Chuyên gia Công ty hoạt động{" "}
                  </strong>
                  , Kinh doanh nhiều kinh nghiệp với mong muốn hỗ trợ khách hàng
                  <strong>
                    tăng trưởng và hiệu quả trong sản xuất kinh doanh
                  </strong>
                  .
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-3/4 rounded-md overflow-hidden">
              <img
                width="100"
                height="100"
                className="object-fill object-center w-full max-h-[600px] rounded-lg overflow-hidden"
                src="/images/about_us/1.jpg"
                alt="stats"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        id="vision"
        className="bg-[#f0ede9] text-gray-600 rounded-md body-font p-5">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex lg:flex-row-reverse flex-col items-center w-full mb-10 gap-10">
            <div className="lg:w-1/2 w-full">
              <h2
                className={clsx(
                  "md:text-3xl text-2xl capitalize font-semibold lg:text-right text-center",
                )}>
                Tầm nhìn
              </h2>

              <div className="w-full pt-5">
                <p className="leading-relaxed text-gray-600 py-2">
                  Trở thành đối tác tin cậy hàng đầu trong lĩnh vực cung cấp
                  dịch vụ công nghệ toàn diện. Cam kết tạo ra các sản phẩm và
                  dịch vụ tiên tiến, đột phá để giải quyết các vấn đề hiện tại
                  và mở ra cơ hội mới cho tương lai.
                </p>
                <p className="leading-relaxed text-gray-600 py-2">
                  Xây dựng công nghệ không chỉ mang lại lợi ích kinh tế mà còn
                  tạo ra sự thay đổi tích cực trong xã hội, cải thiện cuộc sống
                  và môi trường.
                </p>
                <p className="leading-relaxed text-gray-600 py-2">
                  Đặt khách hàng làm trung tâm, cung cấp trải nghiệm người dùng
                  xuất sắc và giải quyết nhu cầu của họ thông qua công nghệ.
                </p>
                <p className="leading-relaxed text-gray-600 py-2">
                  Tạo ra các nền tảng và giải pháp giúp kết nối con người và
                  doanh nghiệp, đồng thời khuyến khích hợp tác và làm việc
                  chung.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-3/4">
              <img
                width="100"
                height="100"
                className="object-fill object-center w-full max-h-[600px] rounded-lg overflow-hidden"
                src="/images/about_us/vision.jpg"
                alt="stats"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand message */}
      <section id="brand-message" className="text-gray-600 body-font pt-10">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col items-center w-full mb-10 gap-10">
            <div className="lg:w-3/4 w-full">
              <HeaderContent title={"Mục tiêu"} align="center" border />
              <div className="w-full pt-5">
                <p className="leading-relaxed text-gray-600 py-2">
                  Chúng tôi không ngừng đổi mới để mang đến công nghệ tiên
                  phong, giúp bạn vượt qua mọi thử thách và mở ra những cơ hội
                  mới.
                </p>
                <p className="leading-relaxed text-gray-600 py-2">
                  Giải pháp công nghệ của chúng tôi giúp bạn tối ưu hóa quy
                  trình, nâng cao hiệu quả và đạt được mục tiêu một cách dễ
                  dàng.
                </p>
                <p className="leading-relaxed text-gray-600 py-2">
                  Chúng tôi đặt khách hàng lên hàng đầu, cam kết lắng nghe và
                  đáp ứng nhu cầu của bạn bằng những sản phẩm và dịch vụ tốt
                  nhất.
                </p>
                <p className="leading-relaxed text-gray-600 py-2">
                  Bảo mật thông tin của bạn là ưu tiên hàng đầu của chúng tôi.
                  Chúng tôi cam kết mang đến sự tin cậy và bảo vệ thông tin cá
                  nhân của bạn.
                </p>
                <p className="leading-relaxed text-gray-600 py-2">
                  Công nghệ của chúng tôi không chỉ là sản phẩm; đó là giải pháp
                  giúp cải thiện cuộc sống và công việc của bạn mỗi ngày.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:h-[600px] gap-2">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lg:w-1/2 w-3/4">
                <img
                  width="100"
                  height="100"
                  className="object-fill object-center w-full max-h-[600px] rounded-lg overflow-hidden"
                  src="/images/about_us/brandMessage.jpg"
                  alt="stats"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-10">
        <HeaderContent border title={"Thành viên"} />

        <div className="pt-10">
          <Carousel setting={settingTeamSwiper}>
            <SwiperSlide>
              <div className="w-full flex flex-col items-center">
                <img
                  src="/images/team/ho_thanh_binh.webp"
                  alt="team"
                  title="team"
                  width={100}
                  height={100}
                  className="md:size-[200px] size-[140px] object-cover object-center rounded-full"
                  loading="lazy"
                />

                <div className="mt-2">
                  <h3 className="lmd:text-xl text-lg font-semibold text-center">
                    Hồ Thanh Bình
                  </h3>
                  <h4 className="sm:text-base text-sm text-center">
                    CIO InnoVerse Solutions
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex flex-col items-center">
                <img
                  src="/images/team/nguyen_linh_thanh_nhan.webp"
                  alt="team"
                  title="team"
                  width={100}
                  height={100}
                  className="md:size-[200px] size-[140px] object-cover object-center rounded-full"
                  loading="lazy"
                />

                <div className="mt-2">
                  <h3 className="lmd:text-xl text-lg font-semibold text-center">
                    Nguyễn Linh Thành Nhân
                  </h3>
                  <h4 className="sm:text-base text-sm text-center">
                    Technical Leader
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex flex-col items-center">
                <img
                  src="/images/team/thu.webp"
                  alt="team"
                  title="team"
                  width={100}
                  height={100}
                  className="md:size-[200px] size-[140px] object-cover object-center rounded-full"
                  loading="lazy"
                />

                <div className="mt-2">
                  <h3 className="lmd:text-xl text-lg font-semibold text-center">
                    Huỳnh Thị Lệ Thu
                  </h3>
                  <h4 className="sm:text-base text-sm text-center">
                    Business Analyst
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex flex-col items-center">
                <img
                  src="/images/team/antran.webp"
                  alt="team"
                  title="team"
                  width={100}
                  height={100}
                  className="md:size-[200px] size-[140px] object-cover object-center rounded-full"
                  loading="lazy"
                />

                <div className="mt-2">
                  <h3 className="lmd:text-xl text-lg font-semibold text-center">
                    Phạm Trần Gia Ân
                  </h3>
                  <h4 className="sm:text-base text-sm text-center">
                    Front-end developer
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex flex-col items-center">
                <img
                  src="/images/team/phuc.webp"
                  alt="team"
                  title="team"
                  width={100}
                  height={100}
                  className="md:size-[200px] size-[140px] object-cover object-center rounded-full"
                  loading="lazy"
                />

                <div className="mt-2">
                  <h3 className="lmd:text-xl text-lg font-semibold text-center">
                    Nguyễn Khoa Minh Phúc
                  </h3>
                  <h4 className="sm:text-base text-sm text-center">
                    Back-end developer
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex flex-col items-center">
                <img
                  src="/images/team/khoa.webp"
                  alt="team"
                  title="team"
                  width={100}
                  height={100}
                  className="md:size-[200px] size-[140px] object-cover object-center rounded-full"
                  loading="lazy"
                />

                <div className="mt-2">
                  <h3 className="lmd:text-xl text-lg font-semibold text-center">
                    Nguyễn Lê Anh Khoa
                  </h3>
                  <h4 className="sm:text-base text-sm text-center">
                    Blockchain developer
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex flex-col items-center">
                <img
                  src="/images/team/loc.webp"
                  alt="team"
                  title="team"
                  width={100}
                  height={100}
                  className="md:size-[200px] size-[140px] object-cover object-center rounded-full"
                  loading="lazy"
                />

                <div className="mt-2">
                  <h3 className="lmd:text-xl text-lg font-semibold text-center">
                    Trần Hoàn Lộc
                  </h3>
                  <h4 className="sm:text-base text-sm text-center">
                    Front-end developer
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full flex flex-col items-center">
                <img
                  src="/images/team/duy.webp"
                  alt="team"
                  title="team"
                  width={100}
                  height={100}
                  className="md:size-[200px] size-[140px] object-cover object-center rounded-full"
                  loading="lazy"
                />

                <div className="mt-2">
                  <h3 className="lmd:text-xl text-lg font-semibold text-center">
                    Phạm Quang Duy
                  </h3>
                  <h4 className="sm:text-base text-sm text-center">
                    Mobile developer
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
