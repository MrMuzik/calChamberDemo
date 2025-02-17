import ProductImage from "./ProductImage.tsx";
import ProductBreadcrumb from "./ProductBreadcrumb.tsx";
import ProductInfo from "./ProductInfo.tsx";
import ProductRating from "./ProductRating.tsx";
import ProductPricing from "./ProductPricing.tsx";

export default function Product() {
  return (
    <div class="container mx-auto my-8 px-4">
      <div class="flex">
        <div class="w-1/3">
          <ProductImage />
        </div>
        <div class="w-1/3 pl-8">
          <ProductBreadcrumb />
          <ProductInfo />
          <ProductRating />
        </div>
        <div class="w-1/3 pl-8">
          <ProductPricing />
        </div>
      </div>
    </div>
  );
}
