import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY || '', { apiVersion: '2023-10-16' });

export async function POST(req: NextRequest) {
  try {
    const { items, userId, address, email } = await req.json();

    if (!userId || !email || !address || items.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    items.forEach((item: any) => {
      if (typeof item.price !== 'number' || isNaN(item.price)) {
        throw new Error('Invalid price format');
      }
    });

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: { 
          name: item.name,
          images: [item.image], // Use the image URL
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    

    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
      metadata: {
        userId,
        address: JSON.stringify(address),
        items: JSON.stringify(items.map(item => ({
          id: item._id,
          qty: item.quantity
        })))
      },
    });


    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
