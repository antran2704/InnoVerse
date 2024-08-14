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
                About InnoVerse
              </h1>
              <div className="w-full">
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="leading-relaxed text-gray-600 py-2">
                  <strong>InnoVerse Solutions</strong> is a Software and Service
                  company specializing in Digital Transformation Consulting,
                  Technology Solution Consulting, Business Management Solutions,
                  Blockchain Application Solutions, AI Services.
                </p>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="leading-relaxed text-gray-600 py-2">
                  The company operates based on{" "}
                  <strong>
                    a team of dynamic, creative Technology staff and a team of
                    experienced Managers, Experts, and Sales
                  </strong>
                  , with the desire to support customers in{" "}
                  <strong>
                    growth and efficiency in production and business.
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
                Vison
              </h2>

              <div className="w-full pt-5">
                <p className="leading-relaxed text-gray-600 py-2">
                  At InnoVerse Solutions, our vision is to harness the power of
                  technology to unlock new possibilities and drive meaningful
                  change in the world. We aspire to create a future where
                  technology seamlessly integrates into everyday life, making it
                  smarter, more efficient, and more accessible for everyone.
                </p>
                <p className="leading-relaxed text-gray-600 py-2">
                  We aim to create technologies that not only advance human
                  progress but also protect and preserve our planet. This means
                  investing in green technologies, reducing our carbon
                  footprint, and promoting practices that contribute to a more
                  sustainable future.
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
              <HeaderContent title={"Brand message"} align="center" border />
              <div className="w-full pt-5">
                <p className="leading-relaxed text-gray-600 py-2">
                  At InnoVerse Solutions, we’re dedicated to pushing the
                  boundaries of technology to create solutions that make life
                  easier, smarter, and more connected. Our passion for
                  innovation drives us to develop cutting-edge products and
                  services that solve real-world problems, empower individuals,
                  and transform industries.
                </p>
                <p className="leading-relaxed text-gray-600 py-2">
                  With a commitment to excellence and a focus on user-centric
                  design, we bring you technology that seamlessly integrates
                  into your world, enhancing your everyday experiences and
                  unlocking new possibilities. Join us in shaping a future where
                  technology elevates every aspect of life, and together, let’s
                  build a smarter, more connected tomorrow.
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
        <HeaderContent border title={"Team"} />

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
