"use client";

import { SwiperProps, SwiperSlide } from "swiper/react";

import { Carousel, HeaderContent } from "../Core";
import { IProduct } from "~/interface/Product";
import ProductItem from "./ProductItem";
import { Autoplay } from "swiper/modules";

interface Props {
  items: IProduct[];
}

const settingSwiper: SwiperProps = {
  spaceBetween: 20,
  loop: true,
  modules: [Autoplay],
  className: "!py-5 !px-2",
  freeMode: true,
  breakpoints: {
    640: {
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

const OtherProduct = (props: Props) => {
  const { items } = props;

  return (
    <section className="py-10">
      <HeaderContent title={"Other Product"} align="left" />

        <div className="py-5">
          <Carousel setting={settingSwiper}>
            {items.map((item: IProduct, index: number) => (
              <SwiperSlide key={index}>
                <ProductItem product={item} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
    </section>
  );
};

export default OtherProduct;
