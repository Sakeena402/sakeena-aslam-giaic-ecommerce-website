

// "use client";
// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import { PaginationDemo } from "./Pagination"; // Assuming this is the custom Pagination component
// import { useCart } from "@/contexts/CartContext";
// import { Product } from "@/types/product";

import { useCart } from "@/contexts/CartContext";
import { PaginationDemo } from "./Pagination";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";


type ProductListProps = {
  products: Product[];
  title: string;
  productsPerPage?: number;
};

// const CategoryList: React.FC<ProductListProps> = ({
//   products,
//   title,
//   productsPerPage = 6,
// }) => {
//   const { addToCart } = useCart();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortOption, setSortOption] = useState("popularity");

//   // Calculate total pages
//   const totalPages = Math.ceil(products.length / productsPerPage);

//   // Handle sorting
//   const sortedProducts = [...products].sort((a, b) => {
//     switch (sortOption) {
//       case "price_low_to_high":
//         return a.price - b.price;
//       case "price_high_to_low":
//         return b.price - a.price;
//       case "rating":
//         return b.rating - a.rating;
//       default:
//         return 0;
//     }
//   });

//   // Paginate products
//   const startIndex = (currentPage - 1) * productsPerPage;
//   const paginatedProducts = sortedProducts.slice(
//     startIndex,
//     startIndex + productsPerPage
//   );

//   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSortOption(e.target.value);
//     setCurrentPage(1); // Reset to first page on sort
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <section className="py-4 px-4">
//       {/* Header */}
//       <div className="flex flex-cols-2 items-center justify-between gap-4">
//         <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tighter leading-none text-center">
//           {title}
//         </h2>
//         <div className="flex items-center gap-4">
//           <div>
//             <span className="text-sm text-gray-500">
//               Showing {paginatedProducts.length} of {products.length} products
//             </span>
//           </div>
//           <select
//             className="border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:border-gray-400"
//             aria-label="Sort products"
//             value={sortOption}
//             onChange={handleSortChange}
//           >
//             <option value="popularity">Sort by Popularity</option>
//             <option value="price_low_to_high">Price: Low to High</option>
//             <option value="price_high_to_low">Price: High to Low</option>
//             <option value="rating">Sort by Rating</option>
//           </select>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 justify-center">
//         {paginatedProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             {...product}
//             onAddToCart={() => addToCart(product)} // Pass handler
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-6">
//         <PaginationDemo
//           totalItems={products.length}
//           itemsPerPage={productsPerPage}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </section>
//   );
// };

// export default CategoryList;



const CategoryList: React.FC<ProductListProps> = ({
  products,
  title,
  productsPerPage = 6,
}) => {
  const { addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("popularity");

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle sorting
  // const sortedProducts = [...products].sort((a, b) => {
  //   switch (sortOption) {
  //     case "price_low_to_high":
  //       return a.price - b.price;
  //     case "price_high_to_low":
  //       return b.price - a.price;
  //     case "ratings":
  //       return b.ratings - a.ratings;
  //     default:
  //       return 0;
  //   }
  // });
  const sortedProducts = [...products].sort((a, b) => {
    const avgRatingA = a.ratings ? a.ratings.reduce((sum, r) => sum + r, 0) / a.ratings.length : 0;
    const avgRatingB = b.ratings ? b.ratings.reduce((sum, r) => sum + r, 0) / b.ratings.length : 0;
  
    switch (sortOption) {
      case "price_low_to_high":
        return a.price - b.price;
      case "price_high_to_low":
        return b.price - a.price;
      case "ratings":
        return avgRatingB - avgRatingA; // Compare average ratings
      default:
        return 0;
    }
  });
  
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // Reset to first page on sort
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-4 px-4">
      <div className="flex flex-cols-2 items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tighter leading-none text-center">
          {title}
        </h2>
        <div className="flex items-center gap-4">
          <div>
            <span className="text-sm text-gray-500">
              Showing {paginatedProducts.length} of {products.length} products
            </span>
          </div>
          <select
            className="border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:border-gray-400"
            aria-label="Sort products"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="popularity">Sort by Popularity</option>
            <option value="price_low_to_high">Price: Low to High</option>
            <option value="price_high_to_low">Price: High to Low</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 justify-center">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product._id}
            {...product}
            onAddToCart={() => addToCart(product)} // Pass handler
          />
        ))}
      </div>

      <div className="mt-6">
        <PaginationDemo
          totalItems={products.length}
          itemsPerPage={productsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
};

export default CategoryList;
