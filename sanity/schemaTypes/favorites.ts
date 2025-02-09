import { defineType } from "sanity";

export default defineType({
    name: 'favorites',
    title: 'Favorites',
    type: 'document',
    fields: [
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            to: [{ type: 'user' }],
            validation: (Rule) => Rule.required(),
            description: 'The user who marked the products as favorites.',
        },
        {
            name: 'products',
            title: 'Favorite Products',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'products' }] }],
            validation: (Rule) => Rule.required().min(1).error('At least one product must be added to favorites.'),
            description: 'The list of products marked as favorites by the user.',
        },
        {
            name: 'createdAt',
            title: 'Added At',
            type: 'datetime',
            options: {
                default: new Date().toISOString(),
            },
            description: 'The date and time when the favorites list was created or last updated.',
        },
    ],
});
