import { useEffect, useState } from "preact/hooks";

import ProductImage from "../components/ProductImage.tsx";
import ProductBreadcrumb from "../components/ProductBreadcrumb.tsx";
import ProductInfo from "../components/ProductInfo.tsx";
import ProductRating from "../components/ProductRating.tsx";
import ProductPricing from "../components/ProductPricing.tsx";

import Tabs from "./Tabs.tsx";
import Modal from "./Modal.tsx";

interface ProductProps {
  title: string;
  imageUrl: string;
  breadcrumb: string;
  price: string;
  sku: string;
  summary: Record<string, string>;
  tabs: Record<string, string>; 
}

export default function Product({ title, imageUrl, breadcrumb, price, sku, summary, tabs }: ProductProps) {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      const handleOpenModal = () => setModalOpen(true);
      globalThis.addEventListener("open-modal", handleOpenModal);
      return () => globalThis.removeEventListener("open-modal", handleOpenModal);
    }, []);

    return (
    <div class="container mx-auto my-8 px-4">
      <div class="flex">
        <div class="w-1/3">
          <ProductImage imageUrl={imageUrl} altText={title} />
        </div>
        <div class="w-1/3 pl-8">
          <ProductBreadcrumb breadcrumb={breadcrumb} />
          <ProductInfo title={title} summary={summary.summary} sku={sku} />
          <ProductRating />
        </div>
        <div class="w-1/3 pl-8">
          <ProductPricing price={price} />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <Tabs description={tabs.description.replace(
          `<a href="#" class="text-link-blue">Use this guide</a>`,
          `<button class="text-link-blue underline" onclick="window.dispatchEvent(new CustomEvent('open-modal'))">Use this guide</button>`
        )} compliance={tabs.compliance} specifications={tabs.specifications} reviews={tabs.reviews} />
    </div>
  );
}
