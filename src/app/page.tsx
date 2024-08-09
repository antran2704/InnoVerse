"use client";

import { CiCircleCheck } from "react-icons/ci";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import productList from "~/common/product";
import { ProductItem } from "~/components/Product";
import { IProduct } from "~/interface/Product";
import { Collapse, HeaderContent } from "~/components/Core";
import listCustomer from "~/common/customer";

export default function Home() {
  const [feedbackRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      breakpoints: {
        "(min-width: 1024px)": {
          slidesToScroll: 3,
        },
        "(min-width: 768px)": {
          slidesToScroll: 2,
        },
        "(min-width: 0px)": {
          slidesToScroll: 1,
        },
      },
    },
    [
      Autoplay({
        delay: 10000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  const [customerRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 10000,
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 0,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <div className="container__custom">
      {/* Banner */}
      <section>
        <div className="lg:h-[500px] md:h-[400px] h-[300px] relative">
          <img
            src="/images/banner.png"
            alt="banner"
            title="banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center">
              <h1 className="lg:text-6xl md:text-5xl text-4xl text-white font-bold">
                InnoVerse
              </h1>
              <p className="lg:text-xl md:text-lg text-base text-white">
                We provide the best products and services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="product" className="py-5">
        <HeaderContent title={"Our Product"} />

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10 gap-5">
          {productList.map((item: IProduct, index: number) => (
            <ProductItem key={index} product={item} />
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section id="why" className="py-5">
        <HeaderContent title={"Why choose InnoVerse"} />

        <div className="flex md:flex-row flex-col items-center justify-between py-10 gap-10">
          <ul className="md:w-1/2 w-full flex flex-col list-disc gap-5">
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Innovative Products</strong>: Cutting-edge products and
                solutions.
              </p>
            </li>
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Reliability</strong>: High performance and durability.
              </p>
            </li>
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>User Experience</strong>: Intuitive and easy-to-use
                interfaces.
              </p>
            </li>
            <li className="flex items-start lg:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Support</strong>:Excellent customer service and support.
              </p>
            </li>
            <li className="flex items-start md:text-lg text-base gap-5">
              <CiCircleCheck className="min-w-6 size-6" />
              <p>
                <strong>Cost</strong>:Competitive pricing and good value.
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
        <HeaderContent title={"Statistics"} />

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
        <HeaderContent title={"Feedback"} />

        <div className="pt-5 overflow-hidden" ref={feedbackRef}>
          <div className="flex items-center md:px-5 md:gap-5">
            <div className="lg:min-w-[33.333333%] md:min-w-[50%] min-w-full">
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
            </div>
            <div className="lg:min-w-[33.333333%] md:min-w-[50%] min-w-full">
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
            </div>
            <div className="lg:min-w-[33.333333%] md:min-w-[50%] min-w-full">
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
            </div>
            <div className="lg:min-w-[33.333333%] md:min-w-[50%] min-w-full">
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
            </div>
          </div>
        </div>
      </section>

      {/* Customer */}
      <section id="customer" className="py-10">
        <HeaderContent title={"Customer"} />

        <div className="pt-10 overflow-hidden" ref={customerRef}>
          <div className="flex items-center md:px-5 md:gap-5">
            {listCustomer.map((item, index) => (
              <div
                key={index}
                className="lg:min-w-[16.666667%;] md:min-w-[25%] min-w-[33.333333%] h-[80px]">
                <img
                  alt="customer"
                  title="customer"
                  width={100}
                  height={100}
                  loading="lazy"
                  src={item}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-10">
        <HeaderContent title={"Frequently Asked Questions"} />

        <div className="py-10">
          <Collapse
            title="Products and Services"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates similique explicabo fuga aspernatur minima voluptas sint ipsum debitis, nemo perferendis tempore eligendi nam cumque totam ab eaque dolorem expedita?"
          />
          <Collapse
            title="Technical Support and Troubleshooting"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates similique explicabo fuga aspernatur minima voluptas sint ipsum debitis, nemo perferendis tempore eligendi nam cumque totam ab eaque dolorem expedita?"
          />
          <Collapse
            title="Careers and Employment"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates similique explicabo fuga aspernatur minima voluptas sint ipsum debitis, nemo perferendis tempore eligendi nam cumque totam ab eaque dolorem expedita?"
          />
          <Collapse
            title="Security and Privacy"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates similique explicabo fuga aspernatur minima voluptas sint ipsum debitis, nemo perferendis tempore eligendi nam cumque totam ab eaque dolorem expedita?"
          />
        </div>
      </section>
    </div>
  );
}
