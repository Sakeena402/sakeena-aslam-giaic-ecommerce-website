// // app/api/products/[slug]/route.ts
// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client";

// export async function GET(
//   request: Request,
//   { params }: { params: { slug: string } }
// ) {
//   try {
//     if (!params?.slug) {
//       return NextResponse.json({ error: "Slug is required" }, { status: 400 });
//     }

//     const product = await client.fetch(
//       `*[_type == "products" && slug.current == $slug][0] {
//         _id,
//         name,
//         "slug": slug.current,
//         price,
//         description,
//         "images": images[].asset->url,
//         reviews,
//         ratings,
//         quantity,
//         category->{name, "slug": slug.current},
//         discountPercent,
//         colors,
//         sizes,
//         _createdAt
//       }`,
//       { slug: params.slug }
//     );

//     if (!product) {
//       return NextResponse.json({ error: "Product not found" }, { status: 404 });
//     }

//     return NextResponse.json(product, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
// app/api/product/[slug]/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> } // 👈 Await required here
) {
  try {
    const { slug } = await context.params; // 👈 Await params properly

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

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
        _createdAt
      }`,
      { slug }
    );

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
