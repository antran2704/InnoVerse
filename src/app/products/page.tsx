"use client";

import productList from "~/common/product";
import { HeaderContent } from "~/components/Core";
import { ProductItem } from "~/components/Product";

import { IProduct } from "~/interface/Product";

const ProductsPage = () => {
  return (
   <div className="container__custom">
        <section className="py-10">
          <HeaderContent title={"Products"} border />
    
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10 gap-5">
            {productList.map((item: IProduct, index: number) => (
              <ProductItem key={index} product={item} />
            ))}
          </div>
        </section>
   </div>
  );
};

export default ProductsPage;
