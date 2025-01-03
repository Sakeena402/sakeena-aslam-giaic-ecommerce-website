// import React from 'react';
// import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

// interface ProductCardProps {
//   image: string;
//   title: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   onAddToCart: () => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   image,
//   title,
//   rating,
//   reviews,
//   price,
//   originalPrice,
//   discount,
//   onAddToCart,
// }) => {
//   return (
//     <div className="max-w-xs bg-white rounded-lg p-4">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-56 object-contain rounded-md"
//       />
//       <div className="mt-4">
//         <h3 className="text-lg font-medium text-gray-800">{title}</h3>
//         <div className="flex items-center mt-2">
//           <div className="flex text-yellow-500">
//             {Array.from({ length: Math.floor(rating) }).map((_, i) => (
//               <span key={i}>&#9733;</span>
//             ))}
//             {rating % 1 !== 0 && <span>&#9734;</span>}
//           </div>
//           <span className="text-sm text-gray-600 ml-2">{reviews} reviews</span>
//         </div>
//         <div className="mt-3 flex items-center justify-between">
//           <div>
//             <span className="text-lg font-semibold text-gray-800">${price}</span>
//             {originalPrice && (
//               <span className="text-sm line-through text-gray-500 ml-2">
//                 ${originalPrice}
//               </span>
//             )}
//             {discount && (
//               <span className="ml-2 text-sm font-semibold text-red-500">
//                 -{discount}%
//               </span>
//             )}
//           </div>
//           <div className="flex gap-2">
//             <button
//               onClick={() =>
//                 onAddToCart({ id: product.id, title: product.title, price: product.price, quantity: 1 })
//               }
//               className="text-green-600 hover:text-green-800"
//             >
//               <AiOutlineShoppingCart size={20} />
//             </button>
//             <button className="text-red-600 hover:text-red-800">
//               <AiOutlineHeart size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import React from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  onAddToCart: () => void; // Add handler type
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
  onAddToCart,
}) => {
  return (
    <div className="max-w-xs bg-white rounded-lg p-4">
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
        <div className="mt-3 flex items-center justify-between">
          <div>
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
          <div className="flex gap-2">
            <button
              onClick={onAddToCart} // Call the handler
              className="text-green-600 hover:text-green-800"
            >
              <AiOutlineShoppingCart size={20} />
            </button>
            <button className="text-red-600 hover:text-red-800">
              <AiOutlineHeart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
