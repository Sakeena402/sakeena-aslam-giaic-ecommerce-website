import { defineType } from "sanity";

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(3).error("Name must be at least 3 characters long."),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) =>
                Rule.required()
                    .regex(
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        { name: 'email', invert: false }
                    )
                    .error('Must be a valid email address'),
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) =>
                Rule.regex(
                    /^[+]?[0-9]{10,15}$/,
                    { name: 'phone', invert: false }
                ).error('Must be a valid phone number with 10-15 digits.'),
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true, // Allows users to select the focal point of the image
            },
        },
        {
            name: 'billingAddress',
            title: 'Billing Address',
            type: 'reference',
            to: [{ type: 'address' }],
            description: 'User\'s billing address.',
        },
        {
            name: 'shippingAddress',
            title: 'Shipping Address',
            type: 'reference',
            to: [{ type: 'address' }],
            description: 'User\'s shipping address.',
        },
        {
            name: 'orders',
            title: 'Orders',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'order' }] }],
            description: 'List of orders placed by the user.',
        },
        {
            name: 'createdAt',
            title: 'Account Created At',
            type: 'datetime',
            options: {
                default: new Date().toISOString(),
            },
            description: 'Date when the user account was created.',
        },
        {
            name: 'isAdmin',
            title: 'Is Admin',
            type: 'boolean',
            description: 'Indicates if the user has admin privileges.',
        },
        {
            name: 'status',
            title: 'Account Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Active', value: 'active' },
                    { title: 'Inactive', value: 'inactive' },
                    { title: 'Banned', value: 'banned' },
                ],
            },
            description: 'Current status of the user account.',
        },
        {
            name: 'favorites',
            title: 'Favorite Products',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'products' }] }],
            description: 'List of products marked as favorites by the user.',
        },
    ],
});
