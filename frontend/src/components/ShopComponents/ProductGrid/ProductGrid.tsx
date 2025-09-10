import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  discount?: number;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid = ({ title, products }: ProductGridProps) => {
  return (
    <section className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border border-gray-300 px-8 py-2 rounded-full">
          View All
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;