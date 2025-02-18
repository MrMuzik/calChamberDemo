interface ProductBreadcrumbProps {
    breadcrumb: string;
}
  
export default function ProductBreadcrumb({ breadcrumb }: ProductBreadcrumbProps) {
    return (
        <div class="text-gray-500 text-sm">
            <a href="#" class="text-link-blue">Home</a><i class="fas fa-angle-right mx-1"></i><a href="#" class="text-link-blue">Posters</a><i class="fas fa-angle-right mx-1"></i><a href="#" class="text-link-blue">Local Ordinance</a><i class="fas fa-angle-right mx-1"></i> {breadcrumb}
        </div>
    );
}
  
  