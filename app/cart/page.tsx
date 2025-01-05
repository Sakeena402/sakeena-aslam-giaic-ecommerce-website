
// 'use client'
// import React, { useState } from 'react';

// const CartPage = () => {
//   // Initial cart items
//   const [cartItems, setCartItems] = useState([
//     {
    //   image: './Frame1.png',
    //   title: 'T-shirt with Tape Details',
    //   rating: 4.5,
    //   reviews: 5,
    //   price: 120,
    // },
    // {
    //   image: './Frame2.png',
    //   title: 'Skinny Fit Jeans',
    //   rating: 3.5,
    //   reviews: 3,
    //   price: 240,
    //   originalPrice: 260,
    //   discount: 20,
    // },
    // {
    //   image: './Frame3.png',
    //   title: 'Checkered Shirt',
    //   rating: 4.5,
    //   reviews: 4,
    //   price: 180,
    // },
    // {
    //   image: './Frame4.png',
    //   title: 'Sleeve Striped T-shirt',
    //   rating: 4.5,
    //   reviews: 4,
    //   price: 130,
    //   originalPrice: 160,
    //   discount: 30,
    // },
//   ]);

//   const [promoCode, setPromoCode] = useState('');

//   // Handle quantity increase
//   const increaseQuantity = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   // Handle quantity decrease
//   const decreaseQuantity = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   // Handle item removal
//   const removeItem = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   // Calculate subtotal
//   const calculateSubtotal = () => {
//     return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   };

//   // Apply promo code (dummy logic)
//   const applyPromoCode = () => {
//     if (promoCode === 'DISCOUNT20') {
//       return calculateSubtotal() * 0.2;
//     }
//     return 0;
//   };

//   const subtotal = calculateSubtotal();
//   const discount = applyPromoCode();
//   const deliveryFee = 15;
//   const total = subtotal - discount + deliveryFee;

//   return (
//     <div className="p-4 md:p-8 bg-gray-100">
//       {/* Breadcrumb */}
//       <div className="text-sm text-gray-600 mb-4">Home &gt; Cart</div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Cart Items Section */}
//         <div className="md:col-span-2">
//           <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//           <div className="bg-white rounded-lg shadow p-4">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center border-b py-4 last:border-b-0"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-md"
//                 />
//                 <div className="ml-4 flex-1">
//                   <h3 className="text-lg font-semibold">{item.name}</h3>
//                   <p className="text-sm text-gray-600">
//                     Size: {item.size} | Color: {item.color}
//                   </p>
//                   <p className="text-lg font-semibold mt-2">${item.price}</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => decreaseQuantity(item.id)}
//                     className="px-2 py-1 bg-gray-200 rounded"
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     onClick={() => increaseQuantity(item.id)}
//                     className="px-2 py-1 bg-gray-200 rounded"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="ml-4 text-red-500 hover:text-red-700"
//                 >
//                   &#128465;
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Order Summary Section */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//           <div className="bg-white rounded-lg shadow p-4">
//             <div className="flex justify-between mb-2">
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Discount (-20%)</span>
//               <span className="text-red-500">-${discount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Delivery Fee</span>
//               <span>${deliveryFee.toFixed(2)}</span>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between font-bold text-lg">
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//             <div className="mt-4">
//               <input
//                 type="text"
//                 placeholder="Add promo code"
//                 value={promoCode}
//                 onChange={(e) => setPromoCode(e.target.value)}
//                 className="w-full p-2 border rounded-md mb-2"
//               />
//               <button
//                 onClick={applyPromoCode}
//                 className="w-full bg-black text-white py-2 rounded-md"
//               >
//                 Apply
//               </button>
//             </div>
//             <button className="w-full bg-black text-white py-2 rounded-md mt-4">
//               Go to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;



'use client';
import { useCart } from '@/contexts/CartContext';
import React, { useState } from 'react';
import { BreadCrumbs } from '../components/BreadCrumbs';


const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState('');

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT20') {
      return calculateSubtotal() * 0.2; // 20% discount
    }
    return 0;
  };

  const subtotal = calculateSubtotal();
  const discount = applyPromoCode();
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="p-4 md:p-8 bg-white">
 <div className="w-full pb-8">
      <BreadCrumbs
  breadcrumbs={[
    { name: "Home", link: "/" },
    { name: "Cart" } // No link for the last breadcrumb
  ]}
/>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border-b py-6 last:border-b-0">
                <img
                  src={item.image || '/placeholder.png'}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="text-lg font-semibold mt-2">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) + 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  &#128465;
                </button>
              </div>
            ))}
          </div>
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
            <div className="flex justify-between font-semibold mb-6 pt-5 border-t ">
              <span >Total</span>
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

            <button className="w-full bg-black text-white py-2 rounded-full mt-4">
               Go to Checkout span
            </button>
          </div>
        </div>
      </div>
      <div className='mb-28'>
        <br /><br />
      </div>
    </div>
    
  );
};

export default CartPage;
