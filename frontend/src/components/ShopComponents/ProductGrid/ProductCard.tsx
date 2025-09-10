interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, image, price, originalPrice, rating, discount } = product;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover mb-4 rounded" 
      />
      <a href="/productdetails"><h3 className="font-medium">{name}</h3></a>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-400">
          {renderStars(rating)}
        </span>
        <span className="text-sm text-gray-500">{rating}/5</span>
      </div>
      <div className="mt-2">
        <span className="font-bold">${price}</span>
        {originalPrice && (
          <>
            <span className="text-gray-500 line-through ml-2">${originalPrice}</span>
            {discount && (
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded ml-2">
                -{discount}%
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;