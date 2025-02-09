'use client'
import { useState, useEffect } from 'react';

export const Notifications = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    // Function to fetch new product notifications
    const fetchNewProducts = async () => {
      try {
        const response = await fetch('../api/notifications'); // Endpoint to fetch new products
        const data = await response.json();
        setNewProducts(data);
      } catch (error) {
        console.error('Error fetching new products:', error);
      }
    };

    fetchNewProducts();
  }, []);

  return (
    <div className="absolute top-16 right-4 bg-white p-4 shadow-lg rounded-md w-80">
      <h3 className="text-lg font-bold mb-4">New Products</h3>
      <ul className="space-y-2">
        {newProducts.map((product) => (
          <li key={product._id} className="border-b pb-2">
            <strong>{product.name}</strong>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
