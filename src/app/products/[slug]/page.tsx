import productList from "~/common/product";
import { ProductLayout } from "~/components/Product";
import { IProduct } from "~/interface/Product";

export const dynamicParams = false;

export async function generateStaticParams() {
  return productList.map((item) => ({slug: item.slug}));
}

async function getProduct(slug: string) {
  const product: IProduct = productList.find(
    (item: IProduct) => item.slug === slug,
  ) as IProduct;

  return product;
}

const DetailProductPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const product: IProduct = await getProduct(slug);

  return <ProductLayout data={product} />;
};

export default DetailProductPage;
