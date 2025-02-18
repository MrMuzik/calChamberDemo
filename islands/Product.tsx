import { ComponentChildren } from "preact";
import ProductImage from "../components/ProductImage.tsx";
import ProductBreadcrumb from "../components/ProductBreadcrumb.tsx";
import ProductInfo from "../components/ProductInfo.tsx";
import ProductRating from "../components/ProductRating.tsx";
import ProductPricing from "../components/ProductPricing.tsx";
import Tabs from "./Tabs.tsx";

interface ProductProps {
  title: string;
  imageUrl: string;
  breadcrumb: string;
  price: string;
  sku: string;
  summary: ComponentChildren;
  tabs: Record<string, string>; 
}

export default function Product({ title, imageUrl, breadcrumb, price, sku, summary, tabs }: ProductProps) {
    return (
    <div class="container mx-auto my-8 px-4">
      <div class="flex">
        <div class="w-1/3">
          <ProductImage imageUrl={imageUrl} altText={title} />
        </div>
        <div class="w-1/3 pl-8">
          <ProductBreadcrumb breadcrumb={breadcrumb} />
          <ProductInfo title={title} summary={summary} sku={sku} />
          <ProductRating />
        </div>
        <div class="w-1/3 pl-8">
          <ProductPricing price={price} />
        </div>
      </div>
      <Tabs description={tabs.description} compliance={tabs.compliance} specifications={tabs.specifications} reviews={tabs.reviews} />
    </div>
  );
}
