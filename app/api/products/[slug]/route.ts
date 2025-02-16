// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client"; // Ensure the path to your sanity client is correct

// export async function GET(req: Request, { params }: { params: { slug: string } }) {
//   const { slug } = params;

//   try {
//     const product = await client.fetch(
//       `*[_type == "products" && slug.current == $slug][0] {
//         name,
//         "slug": slug.current,
//         price,
//         description,
//         "images": images[].asset->url,
//         reviews,
//         ratings,
//         quantity,
//         category,
//         discountPercent,
//         colors,
//         sizes
//       }`,
//       { slug }
//     );

//     return NextResponse.json(product);
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
//   }
// }

// app/api/products/[slug]/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const product = await client.fetch(
      `*[_type == "products" && slug.current == $slug][0] {
        _id,
        name,
        "slug": slug.current,
        price,
        description,
        "images": images[].asset->url,
        reviews,
        ratings,
        quantity,
        category->{name, "slug": slug.current},
        discountPercent,
        colors,
        sizes,
        date,
        _createdAt
      }`,
      { slug }
    );

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}