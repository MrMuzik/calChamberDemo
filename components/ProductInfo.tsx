import { ComponentChildren } from "preact";

interface ProductInfoProps {
    title: string;
    summary: ComponentChildren;
    sku: string;
}
  
export default function ProductInfo({ title, summary, sku }: ProductInfoProps) {
    return (
        <>
        <h1 class="text-2xl font-bold text-calchamber-blue mt-2">{title}</h1>
        <div class="mt-4 text-sm"><p>{summary}</p></div>
        <div class="mt-4 text-sm">SKU: {sku}</div>
        </>
    );
}
  
  