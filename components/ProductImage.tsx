interface ProductImageProps {
    imageUrl: string;
    altText: string;
    className?: string;
}
  
export default function ProductImage({ imageUrl, altText, className }: ProductImageProps) {
    return <img alt={altText} class={className} src={imageUrl} width="100%" />;
}
  
  