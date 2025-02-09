import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Ensure the path to your sanity client is correct


export async function GET() {
  const query = `*[_type == "products" && createdAt > now() - 7*24*60*60]`; // Fetch products created in the last week
  
  try {
    // Fetching products from Sanity
    const products = await client.fetch(query);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching new products:', error);
    return NextResponse.json({ message: 'Error fetching new products' }, { status: 500 });
  }
}
