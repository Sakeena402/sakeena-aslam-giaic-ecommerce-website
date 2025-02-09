import { defineType } from "sanity"

export default defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'cartItems',
        title: 'Cart Items',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'cartItem' }] }],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Completed', value: 'completed' },
            { title: 'Failed', value: 'failed' },
          ],
        },
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'reference',
        to: [{ type: 'address' }],
        validation: Rule => Rule.required(),
      },
      {
        name: 'billingAddress',
        title: 'Billing Address',
        type: 'reference',
        to: [{ type: 'address' }],
        validation: Rule => Rule.required(),
      },
      {
        name: 'shippingStatus',
        title: 'Shipping Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
          ],
        },
      },
    ],
  });
  