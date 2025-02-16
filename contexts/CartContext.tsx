"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { getUserData } from "@/helpers/getUserData";

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  user: { id: string; role: string; username: string } | null;
  updateSelections: (id: string, size: string, color: string) => void;
  fetchUserData: () => Promise<void>; // Add this line
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  
  // ✅ Store user data
  const [user, setUser] = useState<{ id: string; role: string; username: string } | null>(null);
  
  // ✅ Load user data on mount

    // Move fetch logic to reusable function
  const fetchUserData = async () => {
    try {
      const userData = await getUserData();
      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
        localStorage.removeItem("cart");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setUser(null);
    }
  };
  useEffect(() => {
    
    fetchUserData();
  }, []);
    // Move fetch logic to reusable function
    const fetchUser = async () => {
      try {
        const userData = await getUserData();
        if (userData) {
          setUser(userData);
        } else {
          setUser(null);
          localStorage.removeItem("cart");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setUser(null);
      }
    };
  const updateSelections = (id: string, size: string, color: string) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item._id === id 
          ? { ...item, selectedSize: size, selectedColor: color }
          : item
      )
    );
  };

  // ✅ Initialize cart from localStorage
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // ✅ Automatically clear cart when user logs out
  useEffect(() => {
    if (!user) {
      setCart([]);
      localStorage.removeItem("cart");
    }
  }, [user]);

  // ✅ Sync cart with localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // ✅ Add to Cart (with auth check)
  const addToCart = (product: Product) => {
    if (!user) {
      router.push("/login");
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ✅ Remove from Cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // ✅ Update Quantity (with min/max limits)
  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stockQuantity || Infinity)) }
          : item
      )
    );
  };
  

  // ✅ Clear Cart (used on logout)
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
// Example: Update the logout process to also clear the cart
// const handleLogout = async () => {
//   await logout();  // Call your logout API
//   clearCart(); // Clear cart after logout is successful
// };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, user,updateSelections, fetchUserData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

























