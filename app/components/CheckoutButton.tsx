'use client';

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Product } from '@/types/product';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');

interface CheckoutButtonProps {
  items: Product[];
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ items }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const session = await response.json();

    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    }
  };

  return (

        <button    onClick={handleCheckout} className="w-full bg-black text-white py-2 rounded-full mt-4">
        Go to Checkout
        </button>
  );
};

export default CheckoutButton;
