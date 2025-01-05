import React from "react";

interface ProductDetailsProps {
  title: string;
  price: number;
  discount: number;
  description: string;
  rating: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  price,
  discount,
  description,
  rating,
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div className="flex items-center gap-2 text-lg">
        <span className="text-red-500 font-bold">${price}</span>
        <span className="line-through text-gray-400">${price + discount}</span>
        <span className="text-green-500">{`-${discount / (price + discount) * 100}%`}</span>
      </div>
      <p className="text-gray-500 mt-3 text-small font-extralight ">{description}</p>
      <div className="mt-2 text-yellow-400">{`⭐ ${rating}/5`}</div>
    </div>
  );
};

export default ProductDetails;
