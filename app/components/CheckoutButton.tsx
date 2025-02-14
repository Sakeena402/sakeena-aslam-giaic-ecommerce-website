// 'use client';

// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Product } from '@/types/product';
// import { urlFor } from '@/sanity/lib/image';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');

// interface AddressType {
//   shipping: {
//     street: string;
//     city: string;
//     state: string;
//     zipCode: string;
//     country: string;
//   };
//   billing: {
//     street: string;
//     city: string;
//     state: string;
//     zipCode: string;
//     country: string;
//   };
// }

// interface CheckoutButtonProps {
//   items: Product[];
//   userId: string | null;
//   address: AddressType | null;
//   email:string;
// }

// const CheckoutButton: React.FC<CheckoutButtonProps> = ({ items, userId, address ,email}) => {

//   const [loading, setLoading] = useState(false)
//   const handleCheckout = async () => {
//     if (!userId || !address) {
//       alert("Please log in and provide an address");
//       return;
//     }

//     setLoading(true); // Show loading state

//     const stripe = await stripePromise;

//     try {
//       const response = await fetch('/api/checkout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           items: items.map(item => ({
//             ...item,
//             image: urlFor(item.images[0]).url() ,
//             selectedSize: item.selectedSize,
//             selectedColor: item.selectedColor,
//           })),
//           userId,
//           address,
//           email
//         }),
//       });
   

//       const session = await response.json();

//       if (stripe) {
//         await stripe.redirectToCheckout({ sessionId: session.id });
//       }
//     } catch (error) {
//       console.error("Checkout Error:", error);
//       alert("Failed to proceed to checkout. Please try again.");
//     } finally {
//       setLoading(false); // Hide loading state after request
//     }
//   };
//   console.log("Items received in CheckoutButton:", items);

//   return (
//     <button
//       onClick={handleCheckout}
//       disabled={loading || !userId || !address}
//       className={`w-full py-2 rounded-full mt-4 ${
//         userId && address ? 'bg-black text-white' : 'bg-gray-400 cursor-not-allowed'
//       }`}
//     >
//       {loading ? "Processing..." : "Proceed to Checkout"}
//     </button>
//   );
// };

// export default CheckoutButton;

'use client';

import React, { useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Product } from '@/types/product';
import { urlFor } from '@/sanity/lib/image';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');
// In your CheckoutButton component definition:
type AddressType = {
  shipping: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  billing: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
};

type CheckoutButtonProps = {
  items: Product[];
  userId: string;
  address: AddressType | string;  // Update to use AddressType
  email: string;
};
const CheckoutButton: React.FC<CheckoutButtonProps> = ({ items, userId, address, email }) => {
  const [loading, setLoading] = useState(false);
  
  // Parse the address prop
  const parsedAddress = useMemo(() => {
    if (typeof address === 'string') {
      try {
        return JSON.parse(address) as AddressType;
      } catch (error) {
        console.error('Error parsing address:', error);
        return null;
      }
    }
    return address;
  }, [address]);

  const handleCheckout = async () => {
    if (!userId || !parsedAddress) {
      alert("Please log in and provide an address");
      return;
    }

    setLoading(true); // Show loading state

    const stripe = await stripePromise;

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(item => ({
            ...item,
            image: urlFor(item.images[0]).url(),
            selectedSize: item.selectedSize,
            selectedColor: item.selectedColor,
          })),
          userId,
          address: parsedAddress,  // Use parsed address here
          email
        }),
      });
   

      const session = await response.json();

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Failed to proceed to checkout. Please try again.");
    } finally {
      setLoading(false); // Hide loading state after request
    }
  };
  console.log("Items received in CheckoutButton:", items);

  return (
    <button
      onClick={handleCheckout}
      disabled={loading || !userId || !address}
      className={`w-full py-2 rounded-full mt-4 ${
        userId && address ? 'bg-black text-white' : 'bg-gray-400 cursor-not-allowed'
      }`}
    >
      {loading ? "Processing..." : "Proceed to Checkout"}
    </button>
  );
};

export default CheckoutButton;
