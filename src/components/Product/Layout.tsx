"use client";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import { IProduct } from "~/interface/Product";
import OtherProduct from "./OtherProduct";
import productList from "~/common/product";

interface Props {
  data: IProduct;
}

const ProductLayout = (props: Props) => {
  const { data } = props;

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="container__custom py-10">
        <section className="flex lg:flex-row flex-col-reverse lg:items-start items-center justify-between gap-10">
          <div className="lg:w-1/2 w-full shadow-lg rounded-md overflow-hidden">
            <img
              src={data.thumbnail}
              alt={data.title}
              title={data.title}
              width={100}
              height={100}
              loading="lazy"
              className="w-full h-full max-h-[400px] object-cover object-center"
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <h1 className="lg:text-3xl sm:text-2xl text-xl font-medium mb-5">
              {data.title}
            </h1>

            <h2 className="md:text-base text-sm">{data.description}</h2>
          </div>
        </section>

        <section className="pt-10">
          <h2 className="lg:text-2xl md:text-xl text-lg font-medium">
            Project Images
          </h2>

          <LightGallery
            elementClassNames="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-5 gap-5"
            plugins={[lgZoom]}>
            {data.gallery.map((item: string, index: number) => (
              <a
                key={index}
                className="w-full h-48 border shadow-lg rounded-md hover:lg:scale-105 overflow-hidden cursor-pointer  transition-all ease-linear duration-100"
                data-src={item}>
                <img
                  className="w-full h-full object-cover object-center"
                  alt={data.title}
                  title={data.title}
                  width={100}
                  height={100}
                  loading="lazy"
                  src={item}
                />
              </a>
            ))}
          </LightGallery>
        </section>

        {/* Other product */}
        <OtherProduct
          items={productList.filter(
            (item: IProduct) => item.slug !== data.slug,
          )}
        />
      </div>
    </div>
  );
};

export default ProductLayout;
