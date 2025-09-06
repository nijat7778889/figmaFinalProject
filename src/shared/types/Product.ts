export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  discount?: number;
}

export interface ProductGridProps {
  title: string;
  products: Product[];
}

export interface ProductCardProps {
  product: Product;
}