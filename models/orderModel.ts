// import mongoose, { Document, Types } from 'mongoose';
// export interface IOrder extends Document {
//     customer: Types.ObjectId;
//     products: {
//       productId: string; // Sanity Product ID
//       quantity: number;
//       price: number;
//     }[];
//     totalAmount: number;
//     paymentStatus: 'Pending' | 'Paid' | 'Failed';
//     orderStatus: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
//     shipment: Types.ObjectId;
//     createdAt?: Date;
//     updatedAt?: Date;
//   }
  
//   const orderSchema = new mongoose.Schema(
//     {
//       customer: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
//       products: [
//         {
//           productId: { type: String, required: true }, // Sanity Product ID
//           quantity: { type: Number, required: true },
//           price: { type: Number, required: true },
//         },
//       ],
//       totalAmount: { type: Number, required: true },
//       paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' },
//       orderStatus: {
//         type: String,
//         enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled'],
//         default: 'Processing',
//       },
//       shipment: { type: mongoose.Schema.Types.ObjectId, ref: 'shipment' },
//     },
//     { timestamps: true }
//   );
  
//   const Order = mongoose.models.order || mongoose.model('order', orderSchema);
//   export default Order;
import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IOrder extends Document {
  customer: Types.ObjectId;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  paymentStatus: 'Pending' | 'Paid' | 'Failed';
  orderStatus: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  shipment?: Types.ObjectId;
}

const orderSchema = new Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' },
    orderStatus: { type: String, enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled'], default: 'Processing' },
    shipment: { type: mongoose.Schema.Types.ObjectId, ref: 'shipment' },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model<IOrder>('Order', orderSchema);
