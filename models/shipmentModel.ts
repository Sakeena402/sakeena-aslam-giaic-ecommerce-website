import mongoose, { Document, Types } from 'mongoose';
export interface IShipment extends Document {
    order: Types.ObjectId;
    trackingNumber: string;
    carrier: string;
    estimatedDelivery: Date;
    status: 'Pending' | 'Shipped' | 'Delivered';
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  const shipmentSchema = new mongoose.Schema(
    {
      order: { type: mongoose.Schema.Types.ObjectId, ref: 'order', required: true },
      trackingNumber: { type: String, required: true },
      carrier: { type: String, required: true },
      estimatedDelivery: { type: Date, required: true },
      status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' },
    },
    { timestamps: true }
  );
  
  const Shipment = mongoose.models.shipment || mongoose.model('shipment', shipmentSchema);
  export default Shipment;
  