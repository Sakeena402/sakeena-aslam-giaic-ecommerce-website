import mongoose, { Document, Types } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  seller: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    images: [{ type: String }], // Array of image URLs
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  },
  { timestamps: true }
);

const Product = mongoose.models.product || mongoose.model('product', productSchema);

export default Product;