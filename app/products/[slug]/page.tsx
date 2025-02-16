// 'use client'

// import React, { useState } from "react";
// import { useParams } from "next/navigation";
// import useSWR from "swr";
// import { BreadCrumbs } from "@/app/components/BreadCrumbs";
// import ColorSelector from "@/app/components/ColorSelector";
// import ImageGallery from "@/app/components/ImageGallery";
// import ProductDetails from "@/app/components/ProductDetails";
// import ProductList from "@/app/components/ProductList";
// import RatingReviews from "@/app/components/RatingReviews";
// import SizeSelector from "@/app/components/SizeSelector";
// import { useCart } from "@/contexts/CartContext";
// import { urlFor } from "@/sanity/lib/image";


// // Sanity API Fetcher
// const fetcher = (url: string) => fetch(url).then((res) => res.json());


// const ProductPage: React.FC = () => {
//   const { addToCart } = useCart();
//   const { slug } = useParams(); // Get slug from URL
//   const { data: product, error } = useSWR(`/api/products/${slug}`, fetcher);

//   const [selectedColor, setSelectedColor] = useState<string>("");
//   const [selectedSize, setSelectedSize] = useState<string>("");
//   const [quantity, setQuantity] = useState<number>(1);


//   const { data: products, } = useSWR("/api/products", fetcher, { dedupingInterval: 60000 });

//   if (!products) return <div>Loading...</div>;
//   if (error) return <div>Error fetching products.</div>;
// // Sort and filter products
// const newArrivals = [...products]
// .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by newest
// .slice(0, 4); // Take top 4

// const topSelling = [...products]
// .sort((a, b) => (b.rating || 0) - (a.rating || 0)) // Sort by highest rating
// .slice(0, 4); // Take top 4

//   if (error) return <p>Error loading product.</p>;
//   if (!product) return <p>Loading...</p>;

//   // Handle quantity change
//   const incrementQuantity = () => setQuantity((prev) => prev + 1);
//   const decrementQuantity = () => quantity > 1 && setQuantity((prev) => prev - 1);

//   // Handle size change and related logic
//   const handleSizeChange = (size: string) => setSelectedSize(size);
//   const handleAddToCart = () => {
//     if (!selectedSize || !selectedColor) {
//       alert("Please select size and color before adding to cart.");
//       return;
//     }
  
//     const productToAdd = {
//       ...product,
//       selectedSize,
//       selectedColor,
//       quantity, // Quantity selected by user
//     };
  
//     addToCart(productToAdd);
//   };
  
//   const p = {
//     title: "ONE LIFE GRAPHIC T-SHIRT",
//     price: 260,
//     discount: 40,
//     description:
//       "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//     rating: 4.5,
//     colors: ["brown", "green", "blue"],
//     sizes: ["Small", "Medium", "Large", "X-Large"],
//     images: ["/image 1.png", "/image 1.png", "/image 6.png"],
//     reviews: [
//       {
//         name: "Samantha D.",
//         date: "August 14, 2023",
//         comment:
//           "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
//         rating: 4.5,
//       },
//       {
//         name: "Alex M.",
//         date: "August 15, 2023",
//         comment: "The t-shirt exceeded my expectations!",
//         rating: 5,
//       },
//       {
//         name: "Samantha D.",
//         date: "August 14, 2023",
//         comment:
//           "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
//         rating: 4.5,
//       },
//       {
//         name: "Alex M.",
//         date: "August 15, 2023",
//         comment: "The t-shirt exceeded my expectations!",
//         rating: 5,
//       },
//       {
//         name: "Samantha D.",
//         date: "August 14, 2023",
//         comment:
//           "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
//         rating: 4.5,
//       },
//       {
//         name: "Alex M.",
//         date: "August 15, 2023",
//         comment: "The t-shirt exceeded my expectations!",
//         rating: 5,
//       },
//     ],
//   };
//   // In ProductPage component
// if (!product) return (
//   <div className="container mx-auto p-4">
//     <div className="animate-pulse space-y-4">
//       <div className="h-6 bg-gray-200 rounded w-1/4"></div>
//       {/* Add more skeleton elements */}
//     </div>
//   </div>
// );
//   return (
//     <div className="container mx-auto p-4">
//           <div className="w-full p-6">
//           <BreadCrumbs
//           breadcrumbs={[
//             { name: "Home", link: "/" },
//             { name: "Shop", link: "/Shop" },
//             { name: product.category, link: `/Shop/${product.category}` },
//             { name: product.name },
//           ]}
//         />
//    </div>
//       {/* Responsive Layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Image Gallery */}
//         <div className="flex justify-center">
//         <ImageGallery images={product.images} />
//         </div>

//         {/* Product Info Section */}
//         <div className="flex flex-col space-y-4">
//           {/* Product Details */}
//           <ProductDetails
//             title={product.name}
//             price={product.price}
//             discount={product.discountPercent}
//             description={product.description}
//             rating={product.ratings?.length ? product.ratings.reduce((a: number, b: number) => a + b) / product.ratings.length : 0}
//           />

//           {/* Color and Size Selection */}
//           <div className="flex flex-col gap-4 border-t pt-4">
//           <ColorSelector colors={product.colors} selectedColor={selectedColor.toLowerCase()} onSelect={setSelectedColor} />
//            <SizeSelector
//               sizes={product.sizes}
//               selectedSize={selectedSize}
//               onSelect={handleSizeChange}
//             />
//           </div>

//           {/* Add to Cart Section */}
//           <div className="flex flex-col sm:flex-row items-center gap-4 border-t pt-4">
//             {/* Counter Section */}
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={decrementQuantity}
//                 className="px-4 py-2 bg-gray-200 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
//               >
//                 -
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={incrementQuantity}
//                 className="px-4 py-2 bg-gray-200 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
//               >
//                 +
//               </button>
//             </div>

//             {/* Add to Cart Button */}
//             <button onClick={handleAddToCart} className="w-full sm:w-3/5 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-8">
//         <RatingReviews reviews={p.reviews} />
        
//       </div>
//       <div className="mt-8">
//         <br /> <br />
//       <ProductList products={topSelling} title="YOU MIGHT ALSO LIKE" />
//       <br />
//       <br />
//       </div>
//     </div>
//   );
// };

// export default ProductPage;






'use client'

import React, { useState } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { BreadCrumbs } from "@/app/components/BreadCrumbs";
import ColorSelector from "@/app/components/ColorSelector";
import ImageGallery from "@/app/components/ImageGallery";
import ProductDetails from "@/app/components/ProductDetails";
import ProductList from "@/app/components/ProductList";
import RatingReviews from "@/app/components/RatingReviews";
import SizeSelector from "@/app/components/SizeSelector";
import { useCart } from "@/contexts/CartContext";

// Sanity API Fetcher
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductPage: React.FC = () => {
  const { addToCart } = useCart();
  const params = useParams();
  const slug = params?.slug as string; // Fix: Ensure slug is correctly typed

  const { data: product, error } = useSWR(slug ? `/api/products/${slug}` : null, fetcher);
  const { data: products } = useSWR("/api/products", fetcher, { dedupingInterval: 60000 });

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  if (error) return <p>Error loading product.</p>;
  if (!product) return <p>Loading...</p>;

  // Fix: Ensure product data exists before sorting
  const newArrivals = products
    ? [...products].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4)
    : [];

  const topSelling = products
    ? [...products].sort((a, b) => (b.ratings?.length || 0) - (a.ratings?.length || 0)).slice(0, 4)
    : [];

  // Handle quantity change
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity((prev) => prev - 1);

  // Handle adding to cart
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color before adding to cart.");
      return;
    }

    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    };

    addToCart(productToAdd);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-full p-6">
        <BreadCrumbs
          breadcrumbs={[
            { name: "Home", link: "/" },
            { name: "Shop", link: "/Shop" },
            { name: product.category?.name || "Category", link: `/Shop/${product.category?.slug || "#"}` },
            { name: product.name },
          ]}
        />
      </div>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div className="flex justify-center">
          <ImageGallery images={product.images} />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col space-y-4">
          {/* Product Details */}
          <ProductDetails
            title={product.name}
            price={product.price}
            discount={product.discountPercent}
            description={product.description}
            rating={product.ratings?.length ? product.ratings.reduce((a: number, b: number) => a + b) / product.ratings.length : 0}
          />

          {/* Color and Size Selection */}
          <div className="flex flex-col gap-4 border-t pt-4">
            <ColorSelector colors={product.colors} selectedColor={selectedColor} onSelect={setSelectedColor} />
            <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSelect={setSelectedSize} />
          </div>

          {/* Add to Cart Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 border-t pt-4">
            {/* Counter Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={decrementQuantity}
                className="px-4 py-2 bg-gray-200 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-4 py-2 bg-gray-200 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button onClick={handleAddToCart} className="w-full sm:w-3/5 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <RatingReviews reviews={product.reviews} />
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <ProductList products={topSelling} title="YOU MIGHT ALSO LIKE" />
      </div>
    </div>
  );
};

export default ProductPage;
