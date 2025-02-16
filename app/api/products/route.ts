import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Ensure the path to your sanity client is correct

// Sanity query to fetch product data
const query = `
  *[_type == "products"]{
      _id,
      name,
      slug,
      price,
      description,
      images[]{
        asset->{
          _id,
          url
        }
      },
      reviews[]->{
        _id,
        reviewerName, // Make sure this field exists in the "review" type
        rating,
        comment
      },
      ratings[],
      quantity,
      category,
      discountPercent,
      new,
      colors[],
      sizes[],
      comments[],
      tags[]
    }
`;

// GET handler for fetching products
export async function GET() {
  try {
    const products = await client.fetch(query);

    return NextResponse.json(products); 
    
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ message: "Error fetching products" }, { status: 500 });
  }
}
