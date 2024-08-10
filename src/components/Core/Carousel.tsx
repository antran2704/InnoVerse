"use client";

import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";
import "swiper/scss/autoplay";

interface Props {
  children: JSX.Element | JSX.Element[];
  setting?: SwiperProps;
}

function Carousel(props: Props) {
  const {
    children,
    setting = { loop: true, className: "!py-5 !px-2", slidesPerView: 1 },
  } = props;

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Fragment>{show && <Swiper {...setting}>{children}</Swiper>}</Fragment>
  );
}

export default Carousel;
