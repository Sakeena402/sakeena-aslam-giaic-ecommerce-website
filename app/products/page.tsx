'use client'



// import React, { useState } from "react";
// import ImageGallery from "../components/ImageGallery";
// import ProductDetails from "../components/ProductDetails";
// import ColorSelector from "../components/ColorSelector";
// import SizeSelector from "../components/SizeSelector";
// import RatingReviews from "../components/RatingReviews";

// const ProductPage: React.FC = () => {
//   const [selectedColor, setSelectedColor] = useState<string>("brown");
//   const [selectedSize, setSelectedSize] = useState<string>("Large");
//   const [quantity, setQuantity] = useState<number>(1);

//   const incrementQuantity = () => setQuantity((prev) => prev + 1);
//   const decrementQuantity = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1); // Prevent negative values
//   };

//   const product = {
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
//     ],
//   };

//   return (
//     <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2  ">
//       {/* Image Gallery */}
//       <div>
//         <ImageGallery images={product.images} />
//       </div>

//       {/* Product Info Section */}
//       <div className="flex flex-col space-y-3 mt-11">
//         {/* Product Details */}
//         <ProductDetails
//           title={product.title}
//           price={product.price}
//           discount={product.discount}
//           description={product.description}
//           rating={product.rating}
//         />

//         {/* Color and Size Selection */}
//         <div className="flex flex-col gap-4 border-t">
//           <ColorSelector
//             colors={product.colors}
//             selectedColor={selectedColor}
//             onSelect={setSelectedColor}
//           />
//           <SizeSelector
//             sizes={product.sizes}
//             selectedSize={selectedSize}
//             onSelect={setSelectedSize}
//           />
//         </div>

//         {/* Add to Cart Button */}
//         <div className="flex flex-row border-t items-center gap-3
//           ">
//       {/* Counter Section */}
//       <div className="flex items-center pt-5 gap-4">
//         <button
//           onClick={decrementQuantity}
//           className="px-4 py-2 bg-gray-200 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
//         >
//           -
//         </button>
//         <span className="text-lg font-bold px-4">{quantity}</span>
//         <button
//           onClick={incrementQuantity}
//           className="px-4 py-2  bg-gray-200 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
//         >
//           +
//         </button>
//       </div>

//       {/* Add to Cart Button */}
//       <button className="w-3/5 md:w-4/5 mt-5 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
//         Add to Cart
//       </button>
//     </div>
       
//       </div>

//       {/* Reviews Section */}
//       <div className="col-span-full">
//         <RatingReviews reviews={product.reviews} />
//       </div>
//     </div>
//   );
// };

// export default ProductPage;




import React, { useState } from "react";
import ImageGallery from "../components/ImageGallery";
import ProductDetails from "../components/ProductDetails";
import ColorSelector from "../components/ColorSelector";
import SizeSelector from "../components/SizeSelector";
import RatingReviews from "../components/RatingReviews";
import { products, reviews } from "@/data/products";
import ProductList from "../components/ProductList";
import { BreadCrumbs } from "../components/BreadCrumbs";


const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("brown");
  const [selectedSize, setSelectedSize] = useState<string>("Large");
  const [quantity, setQuantity] = useState<number>(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const product = {
    title: "ONE LIFE GRAPHIC T-SHIRT",
    price: 260,
    discount: 40,
    description:
      "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    rating: 4.5,
    colors: ["brown", "green", "blue"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: ["/image 1.png", "/image 1.png", "/image 6.png"],
    reviews: [
      {
        name: "Samantha D.",
        date: "August 14, 2023",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
        rating: 4.5,
      },
      {
        name: "Alex M.",
        date: "August 15, 2023",
        comment: "The t-shirt exceeded my expectations!",
        rating: 5,
      },
      {
        name: "Samantha D.",
        date: "August 14, 2023",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
        rating: 4.5,
      },
      {
        name: "Alex M.",
        date: "August 15, 2023",
        comment: "The t-shirt exceeded my expectations!",
        rating: 5,
      },
      {
        name: "Samantha D.",
        date: "August 14, 2023",
        comment:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
        rating: 4.5,
      },
      {
        name: "Alex M.",
        date: "August 15, 2023",
        comment: "The t-shirt exceeded my expectations!",
        rating: 5,
      },
    ],
  };

  // Change image or details dynamically based on size
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    // Example logic to change image based on size
    if (size === "Small") setSelectedColor("blue"); // Change to an appropriate image
    else if (size === "Medium") setSelectedColor("green");
    else setSelectedColor("brown");
  };

  return (
    <div className="container mx-auto p-4">
          <div className="w-full p-6">
          <BreadCrumbs
  breadcrumbs={[
    { name: "Home", link: "/" },
    { name: "Shop", link: "/Shop" },
    { name: "Men", link: "/Men" },
    { name: "T-Shirt" } // No link for the last breadcrumb
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
            title={product.title}
            price={product.price}
            discount={product.discount}
            description={product.description}
            rating={product.rating}
          />

          {/* Color and Size Selection */}
          <div className="flex flex-col gap-4 border-t pt-4">
            <ColorSelector
              colors={product.colors}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />
            <SizeSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSelect={handleSizeChange}
            />
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
            <button className="w-full sm:w-3/5 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <RatingReviews reviews={product.reviews} />
        
      </div>
      <div className="mt-8">
        <br /> <br />
      <ProductList products={products} title="YOU MIGHT ALSO LIKE" />
      <br />
      <br />
      </div>
    </div>
  );
};

export default ProductPage;
