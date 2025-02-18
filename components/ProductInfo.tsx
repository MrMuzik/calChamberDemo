interface ProductInfoProps {
    title: string;
    summary: string; // Ensure summary is a string
    sku: string;
  }
  
  export default function ProductInfo({ title, summary, sku }: ProductInfoProps) {
    return (
      <>
        <h1 class="text-2xl font-bold text-calchamber-blue mt-2">{title}</h1>
        <div class="mt-4 text-sm" dangerouslySetInnerHTML={{ __html: summary }} />
        <div class="mt-4 text-sm">SKU: {sku}</div>
      </>
    );
  }
  