import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  category?:string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
}) => {
  return (
    <div className="max-w-xs bg-white  rounded-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-500">
            {Array.from({ length: Math.floor(rating) }).map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
            {rating % 1 !== 0 && <span>&#9734;</span>}
          </div>
          <span className="text-sm text-gray-600 ml-2">{reviews} reviews</span>
        </div>
        <div className="mt-3">
          <span className="text-lg font-semibold text-gray-800">${price}</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-500 ml-2">
              ${originalPrice}
            </span>
          )}
          {discount && (
            <span className="ml-2 text-sm font-semibold text-red-500">
              -{discount}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
