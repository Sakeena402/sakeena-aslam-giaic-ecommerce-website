import { defineType } from "sanity"

export default defineType({
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'order',
        title: 'Order',
        type: 'reference',
        to: [{ type: 'order' }],
      },
      {
        name: 'trackingNumber',
        title: 'Tracking Number',
        type: 'string',
      },
      {
        name: 'shippingCarrier',
        title: 'Shipping Carrier',
        type: 'string',
      },
      {
        name: 'status',
        title: 'Shipment Status',
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
  