
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number | null;
  discount?: number | null;
  category?: string;
  size?: string;
  color?:string;
  quantity?: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Updated addToCart function to add a new instance of the product every time
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]); // Adds a new instance of the product with quantity 1
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
