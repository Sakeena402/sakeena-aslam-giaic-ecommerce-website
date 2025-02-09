import { defineType } from "sanity";

export default defineType({
    name: 'comments',
    title: 'Comments',
    type: 'document',
    fields: [
        {
            name: 'product',
            title: 'Product',
            type: 'reference',
            to: [{ type: 'products' }], // Reference to the 'products' schema
        },
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            to: [{ type: 'user' }], // Reference to the 'user' schema
        },
        {
            name: 'commentText',
            title: 'Comment Text',
            type: 'text',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5), // Ensures rating is between 1 and 5
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            options: {
                default: new Date().toISOString(),
            },
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: 'Mark this comment as approved for display',
        },
    ],
});
