import useEmblaCarousel from "embla-carousel-react";

import { HeaderContent } from "../Core";
import { IProduct } from "~/interface/Product";
import ProductItem from "./ProductItem";

interface Props {
  items: IProduct[];
}

const OtherProduct = (props: Props) => {
  const { items } = props;

  const [otherProductRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    breakpoints: {
      "(min-width: 1024px)": {
        slidesToScroll: 4,
      },
      "(min-width: 768px)": {
        slidesToScroll: 3,
      },
      "(min-width: 0px)": {
        slidesToScroll: 2,
      },
    },
  });

  return (
    <section className="py-10">
      <HeaderContent title={"Other Product"} align="left" />

      <div className="py-5 overflow-hidden" ref={otherProductRef}>
        <div className="flex items-center pl-5 gap-5">
          {items.map((item: IProduct, index: number) => (
            <div
              key={index}
              className="lg:min-w-[24%] md:min-w-[32%] min-w-[50%]">
              <ProductItem product={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProduct;
