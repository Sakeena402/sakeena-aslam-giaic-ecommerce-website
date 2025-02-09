import { defineType } from "sanity"

export default defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'products' }],
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: Rule => Rule.required().min(1).max(5),
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
      },
    ],
  });
  