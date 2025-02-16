
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

// // interface ProductCardProps {
// //   _id: string; // Use string for Sanity document IDs
// //   name: string;
// //   images: {
// //     asset: {
// //       url: string; // Fixed URL type for the image
// //     };
// //   }[];
// //   ratings: number[]; // Array of ratings
// //   reviews: {
// //     title: string;
// //     content: string;
// //   }[];
// //   price: number;
// //   description?: string;
// //   discountPercent?: number;
// //   category?: string;
// //   isNew?: boolean;
// //   quantity?: number;
//   // onAddToCart?: () => void;
// // }

// export type ProductCardProps = {
//   id: string;
//   name: string;
//   slug: { current: string };
//   price: number;
//   description: string;
//   images: { asset: { url: string } }[];
//   reviews: { _ref: string }[];
//   ratings: number[]; // Ensure it's an array
//   quantity: number;
//   category: string;
//   discountPercent?: number;
//   new?: boolean;
//   colors: string[];
//   sizes: string[];
//   comments: string[];
//   tags: string[];
//   onAddToCart?: () => void;
// };


// const ProductCard: React.FC<ProductCardProps> = ({
//   name,
//   images,
//   ratings,
//   reviews,
//   price,
//   discountPercent,
//   category,
//   quantity,
//   onAddToCart,
// }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate loading for demonstration
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

  // const discountedPrice =
  //   discountPercent && discountPercent > 0
  //     ? (price - (price * discountPercent) / 100).toFixed(2)
  //     : price.toFixed(2);

  //     const averageRating =
  //     (ratings && ratings.length > 0)
  //       ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
  //       : 0;

//   if (isLoading) {
//     return (
//       <div className="max-w-xs bg-white rounded-lg p-4 animate-pulse">
//         <div className="w-full h-56 bg-gray-200 rounded-md"></div>
//         <div className="mt-4 space-y-2">
//           <div className="h-4 bg-gray-200 rounded"></div>
//           <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//           <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Link href={`/product/${slug.current}`} passHref>
//     <div className="max-w-xs bg-white p-4 rounded-lg shadow-md">
//       <img
//         src={images && images.length > 0 ? images[0].asset.url : "/fallback.jpg"}
//         alt={name}
//         className="w-full h-56 object-contain rounded-lg"
//       />
//       <div className="mt-4">
//         <h3 className="text-lg font-medium text-gray-800">{name}</h3>
//         {category && (
//           <p className="text-sm text-gray-500 mt-1 capitalize">{category}</p>
//         )}
//         <div className="flex items-center mt-2">
//           <div className="flex text-yellow-500">
//             {Array.from({ length: Math.floor(Number(averageRating)) }).map(
//               (_, i) => (
//                 <span key={i}>&#9733;</span>
//               )
//             )}
//             {Number(averageRating) % 1 !== 0 && <span>&#9734;</span>}
//           </div>
          // <span className="text-sm text-gray-600 ml-2">
          //   {reviews ? reviews.length : 0} reviews
          // </span>
//         </div>
//         <div className="flex justify-between items-center mt-3">
//           <div>
//             <span className="text-lg font-semibold text-gray-800">
//               ${discountedPrice}
//             </span>
//             {discountPercent && (
//               <>
//                 <span className="text-sm line-through text-gray-500 ml-2">
//                   ${price.toFixed(2)}
//                 </span>
//                 <span className="ml-2 text-sm font-semibold text-red-500">
//                   -{discountPercent}%
//                 </span>
//               </>
//             )}
//           </div>
//           <div className="flex gap-2">
//             <button
//               onClick={onAddToCart}
//               className="text-green-600 hover:text-green-800"
//             >
//               <AiOutlineShoppingCart size={24} />
//             </button>
//             <button className="text-red-600 hover:text-red-800">
//               <AiOutlineHeart size={24} />
//             </button>
//           </div>
//         </div>
//         {quantity !== undefined && (
//           <p className="mt-2 text-sm text-gray-600">
//             {quantity > 0 ? `${quantity} in stock` : "Out of stock"}
//           </p>
//         )}
//       </div>
//     </div>
//     </Link>
//   );
// };

// export default ProductCard;

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

export type ProductCardProps = {
  _id: string; // Changed from 'id' to match Sanity's '_id'
  name: string;
  slug: { current: string };
  price: number;
  description: string;
  images: { asset: { url: string } }[];
  reviews: any[]; // Simplified review type
  ratings: number[];
  quantity: number;
  category: string;
  discountPercent?: number;
  new?: boolean;
  colors: string[];
  sizes: string[];
  comments?: string[]; // Made optional
  tags?: string[]; // Made optional
  onAddToCart?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  slug,
  images,
  ratings,
  reviews,
  price,
  discountPercent,
  category,
  quantity,
  onAddToCart,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const discountedPrice =
    discountPercent && discountPercent > 0
      ? (price - (price * discountPercent) / 100).toFixed(2)
      : price.toFixed(2);

      const averageRating =
      (ratings && ratings.length > 0)
        ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
        : 0;

  if (isLoading) {
    return (
      <div className="max-w-xs bg-white rounded-lg p-4 animate-pulse">
        <div className="w-full h-56 bg-gray-200 rounded-md"></div>
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
   
      <div className="max-w-xs bg-white p-4 rounded-lg shadow-md cursor-pointer">
         <Link href={`/products/${slug.current}`} passHref>
        <img
          src={images.length > 0 ? images[0].asset.url : "/fallback.jpg"}
          alt={name}
          className="w-full h-56 object-contain rounded-lg"
        />
        </Link>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">{name}</h3>
          {category && <p className="text-sm text-gray-500 mt-1 capitalize">{category}</p>}

          <div className="flex items-center mt-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: Math.floor(Number(averageRating)) }).map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
              {Number(averageRating) % 1 !== 0 && <span>&#9734;</span>}
            </div>
            <span className="text-sm text-gray-600 ml-2">
            {reviews ? reviews.length : 0} reviews
          </span>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div>
              <span className="text-lg font-semibold text-gray-800">${discountedPrice}</span>
              {discountPercent && (
                <>
                  <span className="text-sm line-through text-gray-500 ml-2">
                    ${price.toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm font-semibold text-red-500">
                    -{discountPercent}%
                  </span>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <button onClick={onAddToCart} className="text-green-600 hover:text-green-800">
                <AiOutlineShoppingCart size={24} />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <AiOutlineHeart size={24} />
              </button>
            </div>
          </div>

          {quantity !== undefined && (
            <p className="mt-2 text-sm text-gray-600">
              {quantity > 0 ? `${quantity} in stock` : "Out of stock"}
            </p>
          )}
        </div>
      </div>
    
  );
};

export default ProductCard;
