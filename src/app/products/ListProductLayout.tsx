"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@nextui-org/react";

import productList from "~/common/product";
import { HeaderContent } from "~/components/Core";
import { ProductItem } from "~/components/Product";

import { IProduct } from "~/interface/Product";
import { parseQueryString } from "~/helper/url";
import { useMemo } from "react";

const ListProductLayout = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page: number = useMemo(() => {
    return Number(searchParams.get("page")) || 1;
  }, [searchParams]);

  const onChangePage = (nextPage: number) => {
    router.push(pathname + "?" + parseQueryString({ page: nextPage }));
  };

  return (
    <div className="container__custom">
      <section className="py-10">
        <HeaderContent title={"Products"} border />

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10 gap-5">
          {productList.map((item: IProduct, index: number) => (
            <ProductItem key={index} product={item} />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Pagination
            total={Math.ceil(productList.length / 12)}
            page={page}
            size="lg"
            onChange={onChangePage}
            color="primary"
          />
        </div>
      </section>
    </div>
  );
};

export default ListProductLayout;
