import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import mongoose from 'mongoose';
import connectDB from '@/dbConfig/dbConfig';
import Order from '@/models/orderModel';

// ✅ Ensure Stripe API Version is Correct
const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY || '', {
  apiVersion: process.env.NEXT_STRIPE_API_VERSION as Stripe.LatestApiVersion,
});

export async function POST(req: NextRequest) {
  try {
    console.log('🔗 Webhook request received.');
    
    const sig = req.headers.get('stripe-signature') || '';
   // console.log('🔑 Received Stripe signature:', sig);

    let event;

    // ✅ Verify Stripe Webhook Signature
    try {
      event = stripe.webhooks.constructEvent(await req.text(), sig, process.env.NEXT_STRIPE_WEBHOOK_SECRET || '');
    } catch (err: any) {
      console.error('❌ Webhook Signature Verification Failed:', err.message);
      return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    //console.log(`🛠 Received event: ${event.type}`);

    // route.ts
if (event.type === 'checkout.session.completed') {
  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session.metadata?.userId;
  const address = session.metadata?.address;
  const items = JSON.parse(session.metadata?.items || '[]'); // Parse items metadata

  // Validate required metadata
  if (!userId || !items) {
    console.error('❌ Missing metadata:', { userId, items });
    return NextResponse.json({ error: 'Missing metadata' }, { status: 400 });
  }

  // Get line items with metadata
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
  
  // Create order with variant details
  const order = new Order({
    customer: new mongoose.Types.ObjectId(userId),
    products: lineItems.data.map((item, index) => ({
      productId: item.price?.id || 'unknown',
      quantity: item.quantity || 1,
      price: item.amount_total ? item.amount_total / 100 : 0,
      selectedColor: items[index]?.color || 'none', // Get from metadata
      selectedSize: items[index]?.size || 'none'    // Get from metadata
    })),
    totalAmount: session.amount_total ? session.amount_total / 100 : 0,
    paymentStatus: 'Paid',
    orderStatus: 'Processing'
  });

  await order.save();
 // console.log('✅ Order saved with variants:', order);
}

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('❌ Webhook Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}












