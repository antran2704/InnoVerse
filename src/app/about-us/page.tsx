"use client";

import clsx from "clsx";
import { CiCircleCheck } from "react-icons/ci";
import { HeaderContent } from "~/components/Core";

const AboutUsPage = () => {
  return (
    <div className="container__custom">
      <section className="text-gray-600 body-font p-5">
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
                  className="leading-relaxed text-gray-500 text-justify">
                  Furnidepot is the nation’s largest supplier of structural
                  building products, value-added components and services to the
                  professional market for new residential construction and
                  repair and remodeling. Our focus is on providing unparalleled
                  service to both large and small customers. Through investments
                  in innovation and an unmatched portfolio of value-added
                  products and manufacturing capabilities, we’re revolutionizing
                  the homebuilding industry – outperforming today and
                  transforming tomorrow.
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
      <section className="bg-[#f0ede9] text-gray-600 rounded-md body-font p-5">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex lg:flex-row-reverse flex-col items-center w-full mb-10 gap-10">
            <div className="lg:w-1/2 w-full">
              <h2
                className={clsx(
                  "md:text-3xl text-2xl capitalize font-semibold lg:text-right text-center",
                )}>
                Vision
              </h2>

              <div className="w-full pt-5">
                <p className="leading-relaxed text-gray-500 text-justify">
                  Furni Design will be the perfect choice for those looking to
                  trust a strong team of architects, interior designers,
                  engineers, and skilled machinists to create and construct
                  projects that will improve the quality of life in the country
                  and abroad. We take each project step by step, from the
                  initial concept creation, through the implementation and
                  finishing of the construction.
                </p>
                <p className="leading-relaxed text-gray-500 text-justify pt-5">
                  Unlike other companies that only provide design services and
                  not the actual production of furniture, at Furni Depot, we are
                  here to take care of the entire process from designing to
                  producing the interior products according to your
                  specifications. That why so many customers choose Furni Depot
                  to be their partner in providing quality solutions.
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
      <section className="text-gray-600 body-font pt-10">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col items-center w-full mb-10 gap-10">
            <div className="lg:w-3/4 w-full">
              <HeaderContent title={"Brand Message"} align="center" border />
              <div className="w-full pt-5">
                <p className="leading-relaxed text-[#5a6066] text-justify">
                  At Furni Design, we value creativity and uniqueness above all
                  else. Our professional team will create a product that
                  transcends mere utility and becomes an artful masterpiece, a
                  bridge between you and Furni Depot. We strive for excellence,
                  setting ourselves apart from the competition by offering
                  something truly different. With us, you will be one of a kind.
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

      {/* Why choose */}
      <section id="why" className="py-5">
        <HeaderContent title={"Why choose InnoVerse"} border />

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
    </div>
  );
};

export default AboutUsPage;
