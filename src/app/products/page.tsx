import { Suspense } from "react";
import ListProductLayout from "./ListProductLayout";

const ProductsPage = () => {
 
  return (
    <Suspense>
      <ListProductLayout />
    </Suspense>
  );
};

export default ProductsPage;
