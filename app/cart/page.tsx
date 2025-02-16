// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useCart } from '@/contexts/CartContext';
// import { BreadCrumbs } from '../components/BreadCrumbs';
// import CheckoutButton from '../components/CheckoutButton';
// import { urlFor } from '@/sanity/lib/image';
// import { getUserData } from '@/helpers/getUserData';
// import { useRouter } from 'next/navigation';
// import address from '@/sanity/schemaTypes/address';
// import Link from 'next/link';

// const initialAddresses = {
//   shipping: { street: "", city: "", state: "", zipCode: "", country: "" },
//   billing: { street: "", city: "", state: "", zipCode: "", country: "" },
// };

// const CartPage = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const [promoCode, setPromoCode] = useState('');
//   const [addresses, setAddresses] = useState(initialAddresses);
//   const [loadingAddress, setLoadingAddress] = useState(true);
//   const [user, setUser] = useState({ id: "", name: "", email: "", phoneNo: "", token: "" });
//   const router = useRouter();

//   const handleProceedToCheckout = () => {
//     if (!addresses) {
//       alert('Please add your address before proceeding to checkout.');
//       return;
//     }

//     router.push(`/checkout?items=${encodeURIComponent(JSON.stringify(cart))}&addresses=${encodeURIComponent(addresses)}`);
//   };
//   useEffect(() => {
//     const fetchAddressData = async (token: string) => {
//       setLoadingAddress(true);
//       try {
//         const response = await fetch("/api/users/customer/get-user-address", {
//           method: "GET",
//           headers: { "Authorization": `Bearer ${token}` },
//         });
//         const addressData = await response.json();

//         if (addressData.success) {
//           setAddresses({
//             shipping: addressData.data.shippingAddress || initialAddresses.shipping,
//             billing: addressData.data.billingAddress || initialAddresses.billing,
//           });
          
//         } else {
//           console.error("Error fetching address data:", addressData.message);
//         }
//       } catch (error) {
//         console.error("Failed to fetch address data", error);
//       }
//       setLoadingAddress(false);
//     };

//     const fetchUserData = async () => {
//       const data = await getUserData();
//       if (data) {
//         setUser({
//           id: data.id,
//           name: data.username,
//           email: data.email,
//           phoneNo: data.phoneNo,
//           token: data.token,
//         });
//         await fetchAddressData(data.token);
//       }
//     };

//     fetchUserData();
//   }, []);
//   const calculateSubtotal = () =>
//     cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

//   const applyPromoCode = () => (promoCode === 'DISCOUNT20' ? calculateSubtotal() * 0.2 : 0);

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
//                   <img
//                     src={urlFor(item.images[0]).url() || '/placeholder.png'}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded-md"
//                   />
//                   <div className="ml-4 flex-1">
//                     <h3 className="text-lg font-semibold">{item.name}</h3>
//                     {/* <p className="text-sm text-gray-500">Size: {item.sizes || 'N/A'}</p>
//                     <p className="text-sm text-gray-500">Color: {item.colors || 'N/A'}</p> */}
                    
//                     <p className="text-lg font-semibold mt-2">${item.price}</p>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <button
//                       onClick={() => updateQuantity(item._id, Math.max(1, (item.quantity || 1) - 1))}
//                       className="px-2 py-1 bg-gray-200 rounded"
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity || 1}</span>
//                     <button
//                       onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
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
//               <button className="bg-black text-white py-2 px-4 rounded-full">Apply</button>
//             </div>  

//             {/* Address Section */}
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold">Shipping Address</h3>
//               {loadingAddress ? (
//                 <p className="text-gray-500">Loading address...</p>
//               ) : addresses?.shipping?.street ? (
//                 <div className="border p-4 rounded mt-2 bg-gray-100">
//                   <p><strong>Street:</strong> {addresses.shipping.street}</p>
//                   <p><strong>City:</strong> {addresses.shipping.city}</p>
//                   <p><strong>State:</strong> {addresses.shipping.state}</p>
//                   <p><strong>Country:</strong> {addresses.shipping.country}</p>
//                 </div>
//               ) : (
//                 <><p className="text-red-500">No shipping address found! Please update your address.

//                     </p>
//                     <Link
//   href="/profile"
//   className="text-sm font-light text-gray-500 underline underline-offset-2 hover:text-gray-700 hover:blur-[0.5px] transition duration-200"
// >
//   Add shipping address
// </Link>

                      
//                       </>
//               )}
//             </div>

//             {/* Checkout Button */}
//             {/* <button
//         onClick={handleProceedToCheckout}
//         disabled={!addresses}
//         className={`w-full py-2 rounded-full mt-4 ${addresses ? 'bg-black text-white' : 'bg-gray-400 cursor-not-allowed'}`}
//       >
//         Proceed to Checkout
//       </button> */}
      
//        <CheckoutButton items={cart} userId={user.id} address={addresses} email={user.email} />
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
import { getUserData } from '@/helpers/getUserData';
import { useRouter } from 'next/navigation';
import address from '@/sanity/schemaTypes/address';
import Link from 'next/link';

const initialAddresses = {
  shipping: { street: "", city: "", state: "", zipCode: "", country: "" },
  billing: { street: "", city: "", state: "", zipCode: "", country: "" },
};

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, updateSelections } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [addresses, setAddresses] = useState(initialAddresses);
  const [loadingAddress, setLoadingAddress] = useState(true);
  const [user, setUser] = useState({ id: "", name: "", email: "", phoneNo: "", token: "" });
  const router = useRouter();
  const [selectionErrors, setSelectionErrors] = useState<string[]>([]);
  const validateSelections = () => {
    const errors = cart
      .filter(item => !item.selectedSize || !item.selectedColor)
      .map(item => item._id);
    
    setSelectionErrors(errors);
    return errors.length === 0;
  };

  const handleProceedToCheckout = () => {
    if (!addresses) {
      alert('Please add your address before proceeding to checkout.');
      return;
    }
    if (!validateSelections()) {
      alert('Please select size and color for all items before checkout');
      return;
    }
    router.push(
      `/checkout?items=${encodeURIComponent(JSON.stringify(cart))}&addresses=${encodeURIComponent(JSON.stringify(addresses))}`
    );
  };

  useEffect(() => {
    const fetchAddressData = async (token: string) => {
      setLoadingAddress(true);
      try {
        const response = await fetch("/api/users/customer/get-user-address", {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}` },
        });
        const addressData = await response.json();

        if (addressData.success) {
          setAddresses({
            shipping: addressData.data.shippingAddress || initialAddresses.shipping,
            billing: addressData.data.billingAddress || initialAddresses.billing,
          });
          
        } else {
          console.error("Error fetching address data:", addressData.message);
        }
      } catch (error) {
        console.error("Failed to fetch address data", error);
      }
      setLoadingAddress(false);
    };

    const fetchUserData = async () => {
      const data = await getUserData();
      if (data) {
        setUser({
          id: data.id,
          name: data.username,
          email: data.email,
          phoneNo: data.phoneNo,
          token: data.token,
        });

        await fetchAddressData(data.token);
      }
    };

    fetchUserData();
  }, []);

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  const applyPromoCode = () => (promoCode === 'DISCOUNT20' ? calculateSubtotal() * 0.2 : 0);

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
                    
                    {/* Size Selection */}
                    <div className="mt-2">
                      <label className="text-sm text-gray-500">Size:</label>
                      {item.selectedSize ? (
                        <span className="ml-2">{item.selectedSize}</span>
                      ) : (
                        <select
                          className="ml-2 p-1 border rounded"
                          onChange={(e) => updateSelections(item._id, e.target.value, item.selectedColor || '')}
                          required
                        >
                          <option value="">Select Size</option>
                          {item.sizes?.map((size) => (
  <option 
    key={`${item._id}-size-${size}`}  // Unique composite key
    value={size}
  >
    {size}
  </option>
))}
                        </select>
                      )}
                      {selectionErrors.includes(item._id) && !item.selectedSize && (
                        <span className="text-red-500 text-sm ml-2">Please select a size</span>
                      )}
                    </div>

                    {/* Color Selection */}
                    <div className="mt-2">
                      <label className="text-sm text-gray-500">Color:</label>
                      {item.selectedColor ? (
                        <span className="ml-2">{item.selectedColor}</span>
                      ) : (
                        <select
                          className="ml-2 p-1 border rounded"
                          onChange={(e) => updateSelections(item._id, item.selectedSize || '', e.target.value)}
                          required
                        >
                          <option value="">Select Color</option>
                          {item.colors?.map((color) => (
  <option 
    key={`${item._id}-color-${color}`}  // Unique composite key
    value={color}
  >
    {color}
  </option>
))}
                        </select>
                      )}
                      {selectionErrors.includes(item._id) && !item.selectedColor && (
                        <span className="text-red-500 text-sm ml-2">Please select a color</span>
                      )}
                    </div>

                    <p className="text-lg font-semibold mt-2">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item._id, Math.max(1, (item.quantity || 1) - 1))}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
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
              <button className="bg-black text-white py-2 px-4 rounded-full">Apply</button>
            </div>  

            {/* Address Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Shipping Address</h3>
              {loadingAddress ? (
                <p className="text-gray-500">Loading address...</p>
              ) : addresses?.shipping?.street ? (
                <div className="border p-4 rounded mt-2 bg-gray-100">
                  <p><strong>Street:</strong> {addresses.shipping.street}</p>
                  <p><strong>City:</strong> {addresses.shipping.city}</p>
                  <p><strong>State:</strong> {addresses.shipping.state}</p>
                  <p><strong>Country:</strong> {addresses.shipping.country}</p>
                </div>
              ) : (
                <><p className="text-red-500">No shipping address found! Please update your address.

                    </p>
                    <Link
  href="/profile"
  className="text-sm font-light text-gray-500 underline underline-offset-2 hover:text-gray-700 hover:blur-[0.5px] transition duration-200"
>
  Add shipping address
</Link>

                      
                      </>
              )}
            </div>

            {/* Checkout Button */}
            {/* <button
        onClick={handleProceedToCheckout}
        disabled={!addresses}
        className={`w-full py-2 rounded-full mt-4 ${addresses ? 'bg-black text-white' : 'bg-gray-400 cursor-not-allowed'}`}
      >
        Proceed to Checkout
      </button> */}
      
    
<CheckoutButton 
  items={cart} 
  userId={user.id} 
  address={JSON.stringify(addresses)}  // Convert to string
  email={user.email} 
/>
          </div>
        </div>
      </div>
      <br />
<br /><br /><br /><br />
<br /><br /><br />
<br />
<br /><br /><br /><br />
<br /><br /><br />
    </div>
  );
};

export default CartPage;



