// 'use client';
// import React, { useState } from 'react';
// import { useCart } from '@/contexts/CartContext';
// import { BreadCrumbs } from '../components/BreadCrumbs';
// import CheckoutButton from '../components/CheckoutButton';
// import { urlFor } from '@/sanity/lib/image';

// const CartPage = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const [promoCode, setPromoCode] = useState('');

//   const calculateSubtotal = () =>
//     cart.reduce((total, item) => total + item.price * (item.stockQuantity || 1), 0);

//   const applyPromoCode = () => {
//     if (promoCode === 'DISCOUNT20') {
//       return calculateSubtotal() * 0.2; // 20% discount
//     }
//     return 0;
//   };

//   const subtotal = calculateSubtotal();
//   const discount = applyPromoCode();
//   const deliveryFee = 150;
//   const total = subtotal - discount + deliveryFee;

//   return (
//     <div className="p-4 md:p-8 bg-white">
//       <div className="w-full pb-8">
//         <BreadCrumbs breadcrumbs={[{ name: 'Home', link: '/' }, { name: 'Cart' }]} />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Cart Items Section */}
//         <div className="md:col-span-2">
//           <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//           {cart.length === 0 ? (
//             <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
//           ) : (
//             <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
//               {cart.map((item) => (
//                 <div key={item._id} className="flex items-center border-b py-6 last:border-b-0">
//                 <img
//   src={urlFor(item.images[0]).url() || '/placeholder.png'}
//   alt={item.name}
//   className="w-20 h-20 object-cover rounded-md"
// />

//                   <div className="ml-4 flex-1">
//                     <h3 className="text-lg font-semibold">{item.name}</h3>
//                     <p className="text-sm text-gray-500">Size: {item.sizes || 'N/A'}</p>
//                     <p className="text-sm text-gray-500">Color: {item.colors || 'N/A'}</p>
//                     <p className="text-lg font-semibold mt-2">${item.price}</p>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <button
//                       onClick={() => updateQuantity(item._id, Math.max(1, (item.stockQuantity || 1) - 1))}
//                       className="px-2 py-1 bg-gray-200 rounded"
//                     >
//                       -
//                     </button>
//                     <span>{item.stockQuantity || 1}</span>
//                     <button
//                       onClick={() => updateQuantity(item._id, (item.stockQuantity || 1) + 1)}
//                       className="px-2 py-1 bg-gray-200 rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="ml-4 text-red-500 hover:text-red-700"
//                   >
//                     &#128465;
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Order Summary Section */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//           <div className="bg-white rounded-2xl shadow p-10 border border-gray-200">
//             <div className="flex justify-between mb-4">
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-4">
//               <span>Discount (-20%)</span>
//               <span className="text-red-500">-${discount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-4">
//               <span>Delivery Fee</span>
//               <span>${deliveryFee.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between font-semibold mb-6 pt-5 border-t">
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>

//             {/* Promo Code Section */}
//             <div className="mt-4 flex items-center space-x-4">
//               <input
//                 type="text"
//                 placeholder="Promo code"
//                 value={promoCode}
//                 onChange={(e) => setPromoCode(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-full"
//               />
//               <button
//                 onClick={applyPromoCode}
//                 className="bg-black text-white py-2 px-4 rounded-full"
//               >
//                 Apply
//               </button>
//             </div>
//             <CheckoutButton items={cart} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
'use client';
import React, { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { BreadCrumbs } from '../components/BreadCrumbs';
import CheckoutButton from '../components/CheckoutButton';
import { urlFor } from '@/sanity/lib/image';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [userAddress, setUserAddress] = useState(null); // Store the user's address

  useEffect(() => {
    // Simulating fetching user address from the backend
    const fetchAddress = async () => {
      // Replace this with an actual API call
      const response = await fetch('/api/users/customer/get-user-address');
      const data = await response.json();
      setUserAddress(data.address); // Assuming the response has an 'address' field
    };

    fetchAddress();
  }, []);

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + item.price * (item.stockQuantity || 1), 0);

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT20') {
      return calculateSubtotal() * 0.2; // 20% discount
    }
    return 0;
  };

  const subtotal = calculateSubtotal();
  const discount = applyPromoCode();
  const deliveryFee = 150;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="p-4 md:p-8 bg-white">
      <div className="w-full pb-8">
        <BreadCrumbs breadcrumbs={[{ name: 'Home', link: '/' }, { name: 'Cart' }]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
              {cart.map((item) => (
                <div key={item._id} className="flex items-center border-b py-6 last:border-b-0">
                  <img
                    src={urlFor(item.images[0]).url() || '/placeholder.png'}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />

                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">Size: {item.sizes || 'N/A'}</p>
                    <p className="text-sm text-gray-500">Color: {item.colors || 'N/A'}</p>
                    <p className="text-lg font-semibold mt-2">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item._id, Math.max(1, (item.stockQuantity || 1) - 1))}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.stockQuantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(item._id, (item.stockQuantity || 1) + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    &#128465;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="bg-white rounded-2xl shadow p-10 border border-gray-200">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Discount (-20%)</span>
              <span className="text-red-500">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold mb-6 pt-5 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Promo Code Section */}
            <div className="mt-4 flex items-center space-x-4">
              <input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-full"
              />
              <button
                onClick={applyPromoCode}
                className="bg-black text-white py-2 px-4 rounded-full"
              >
                Apply
              </button>
            </div>

            {/* Address Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Shipping Address</h3>
              {userAddress ? (
                <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                  <p>{userAddress}</p> {/* Show the user's address */}
                </div>
              ) : (
                <p className="text-gray-500">No address available. Please provide an address.</p>
              )}
            </div>

            <CheckoutButton items={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
