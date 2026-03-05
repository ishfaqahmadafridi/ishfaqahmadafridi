export interface SaleProduct {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discount?: string;
    sale?: boolean;
    categoryName: string;
    categoryType: string;
}

export interface SaleProductCardProps {
    product: SaleProduct;
    onClick: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CategoryWithProducts = any;
