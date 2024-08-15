"use client";

import { CiCircleCheck } from "react-icons/ci";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ReactTyped } from "react-typed";
import { GrResources } from "react-icons/gr";
import { SiWebpack, SiHiveBlockchain } from "react-icons/si";

import productList from "~/common/product";
import { ProductItem } from "~/components/Product";
import { IProduct } from "~/interface/Product";
import { Carousel, Collapse, HeaderContent } from "~/components/Core";
import listCustomer from "~/common/customer";

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

const settingProductSwiper: SwiperProps = {
  modules: [Pagination],
  spaceBetween: 20,
  loop: true,
  className: "!py-10 !px-2",
  freeMode: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    0: {
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
              "Analysis and consulting",
              "Develop AI models",
              "Website development",
              "App mobile development",
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

      {/* Static */}
      <section id="statistics" className="py-10">
        <HeaderContent border title={"Services"} />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-10 text-center gap-5">
          <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-6 h-[180px] rounded-lg">
            <GrResources className="min-w-12 w-12 min-h-12 h-12 mb-3 text-primary-200" />
            <h2 className="title-font lg:text-xl md:text-lg text-base text-gray-900 font-bold">
             Outsourcing Service
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-6 h-[180px] rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-primary-200 min-w-12 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 className="title-font lg:text-xl md:text-lg text-base text-gray-900 font-bold">
              AI Service
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-6 h-[180px] rounded-lg">
            <SiWebpack className="min-w-12 w-12 min-h-12 h-12 mb-3 text-primary-200" />
            <h2 className="title-font lg:text-xl md:text-lg text-base text-gray-900 font-bold">
              Website Service
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-6 h-[180px] rounded-lg">
          <SiHiveBlockchain className="min-w-12 w-12 min-h-12 h-12 mb-3 text-primary-200" />
            <h2 className="title-font lg:text-xl md:text-lg text-base text-gray-900 font-bold">
              Blockchain Service
            </h2>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="product" className="py-12">
        <HeaderContent border title={"Product"} />

        <Carousel setting={settingProductSwiper}>
          {productList.map((item: IProduct, index: number) => (
            <SwiperSlide key={index}>
              <ProductItem product={item} />
            </SwiperSlide>
          ))}
        </Carousel>
      </section>

      {/* Why choose */}
      <section id="why" className="py-10">
        <HeaderContent border title={"Why choose Innoverse"} />

        <div className="flex md:flex-row flex-col items-center justify-between pt-5 gap-10">
          <ul className="md:w-1/2 w-full flex flex-col list-disc gap-5">
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Expert team</strong>: A team of experienced programmers
                with in-depth knowledge of many different platforms and
                technologies
              </p>
            </li>
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Profesional</strong>: Apply modern project management
                methods to ensure quality and progress.
              </p>
            </li>
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Technology</strong>: Using the latest technologies to
                develop efficient software products to meet diverse customer
                needs.
              </p>
            </li>
            <li className="flex items-start md:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Flexible and customizable</strong>: We are committed to
                meeting all customer requirements, from small to large projects.
              </p>
            </li>
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Security</strong>: Ensure customer information security
                with strict security measures.
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
        <HeaderContent border title={"Partner & Customer"} />

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
        <HeaderContent border title={"FAQ"} />

        <div className="py-10">
          <Collapse title="What is Innoverse's field?">
            <ul className="px-4">
              <li>- E-commerce</li>
              <li>- Banking and Finance</li>
              <li>- Healthcare</li>
              <li>- Education</li>
              <li>- Manufacturing</li>
            </ul>
          </Collapse>
          <Collapse title="What does the Innoverse Commitment include?">
            <ul className="px-4">
              <li>- Quality Assurance</li>
              <li>- On-time Product Delivery</li>
              <li>- Absolute Customer Information Confidentiality</li>
              <li>- 24/7 Customer Support</li>
            </ul>
          </Collapse>
          <Collapse title="What are the benefits of cooperating with Innoverse?">
            <ul className="px-4">
              <li>- Cost savings</li>
              <li>- Improve efficiency</li>
              <li>- Access to new technology</li>
              <li>- Risk management</li>
              <li>- Improve competitiveness</li>
            </ul>
          </Collapse>
        </div>
      </section>
    </div>
  );
}
