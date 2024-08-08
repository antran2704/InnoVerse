import Link from "next/link";
import { IProduct } from "~/interface/Product";

interface Props {
  product: IProduct;
}

const ProductItem = (props: Props) => {
  const { product } = props;

  return (
    <div className="w-full bg-white rounded-lg shadow-md hover:lg:scale-105 overflow-hidden transition-all ease-linear duration-100">
      <Link href={product.path} className="block relative pb-[100%] overflow-hidden">
        <img
          alt={product.title}
          title={product.title}
          loading="lazy"
          width={100}
          height={100}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover object-center"
          src={product.thumbnail}
        />
      </Link>
      <Link href={product.path} className="block px-3 py-5">
        <h2 className="text-gray-900 title-font text-base font-medium line-clamp-3">
          {product.title}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci est ab repudiandae. Odio non consectetur aspernatur aliquid ex omnis veniam iste repellat aperiam! Aperiam debitis dolor corporis architecto quia.
        </h2>
      </Link>
    </div>
  );
};

export default ProductItem;
