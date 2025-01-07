'use client'
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useCart } from '@/contexts/CartContext';

type Product = {
  id?: number; // Add unique ID for each product
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number | null;
  discount?: number | null;
  category?: string;
  quantity?: number | null;
};

type ProductListProps = {
  products: Product[];
  title: string;
};
   


const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  
  const { addToCart } = useCart();
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <section className="py-8 px-4">
      <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter leading-none scale-y-75 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 justify-center">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} 
          onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-8 py-3 bg-white w-52 text-black rounded-full border border-gray-200">
          View All
        </button>
      </div>
    </section>
  );
};

export default ProductList;
