"use client";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

const DetailProductPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="container__custom md:py-20 py-10">
        <section className="flex items-start justify-between gap-10">
          <div className="w-1/2 shadow-lg rounded-md overflow-hidden">
            <img
              src="/images/products/image1.png"
              alt="product"
              title="product"
              width={100}
              height={100}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2">
            <h1 className="lg:text-3xl sm:text-2xl text-xl font-medium mb-5">
              Project 1
            </h1>

            <h2 className="md:text-lg text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              sit rerum perspiciatis pariatur sequi ad deleniti ducimus impedit
              ullam eaque! Nesciunt culpa ipsum assumenda qui similique
              obcaecati laudantium quisquam repellendus? Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Eveniet sit rerum perspiciatis
              pariatur sequi ad deleniti ducimus impedit ullam eaque! Nesciunt
              culpa ipsum assumenda qui similique obcaecati laudantium quisquam
              repellendus?
            </h2>
          </div>
        </section>

        <section className="py-20">
          <h2 className="lg:text-2xl md:text-xl text-lg font-medium">
            Project Images
          </h2>

          <LightGallery
            elementClassNames="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-5 gap-5"
            plugins={[lgZoom]}>
            <a
              className="w-full h-48 border shadow-lg rounded-md hover:lg:scale-105 overflow-hidden cursor-pointer  transition-all ease-linear duration-100"
              data-src="/images/products/image1.png">
              <img
                className="w-full h-full object-cover object-center"
                src="/images/products/image1.png"
              />
            </a>
            <a
              className="w-full h-48 border shadow-lg rounded-md hover:lg:scale-105 overflow-hidden cursor-pointer  transition-all ease-linear duration-100"
              data-src="/images/products/image2.png">
              <img
                className="w-full h-full object-cover object-center"
                src="/images/products/image2.png"
              />
            </a>
          </LightGallery>
        </section>
      </div>
    </div>
  );
};

export default DetailProductPage;
