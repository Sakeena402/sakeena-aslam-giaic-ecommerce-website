import { defineType } from "sanity"

export default defineType({
    name: 'cartItem',
    title: 'Cart Item',
    type: 'document',
    fields: [
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'products' }],
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
      },
    ],
  });
  