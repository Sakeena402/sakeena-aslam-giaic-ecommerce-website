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
    console.log('🔑 Received Stripe signature:', sig);

    let event;

    // ✅ Verify Stripe Webhook Signature
    try {
      event = stripe.webhooks.constructEvent(await req.text(), sig, process.env.NEXT_STRIPE_WEBHOOK_SECRET || '');
    } catch (err: any) {
      console.error('❌ Webhook Signature Verification Failed:', err.message);
      return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    console.log(`🛠 Received event: ${event.type}`);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const address = session.metadata?.address;

      if (!userId) {
        console.error('❌ User ID is missing in metadata.');
        return NextResponse.json({ error: 'User ID is missing in metadata' }, { status: 400 });
      }

      console.log(`✅ Processing order for user: ${userId}`);

      // ✅ Fetch Line Items
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
      console.log('📦 Line Items:', JSON.stringify(lineItems.data, null, 2));

      await connectDB();

      // ✅ Create Order in MongoDB
      const order = new Order({
        customer: new mongoose.Types.ObjectId(userId),
        products: lineItems.data.map((item) => ({
          productId: item.price?.id || 'unknown',
          quantity: item.quantity || 1,
          price: item.amount_total ? item.amount_total / 100 : 0,
          
        })),
        totalAmount: session.amount_total ? session.amount_total / 100 : 0,
        paymentStatus: 'Paid',
        orderStatus: 'Processing',
        shipment: null,
      });

      await order.save();
      console.log('✅ Order saved in MongoDB:', order);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('❌ Webhook Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}












