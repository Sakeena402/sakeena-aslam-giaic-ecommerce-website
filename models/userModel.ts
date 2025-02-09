import mongoose, { Document, Types } from 'mongoose';

// User Schema (Admin = Seller, Customer)
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profileImage?: string;
  phoneNo: string;
  role: 'Admin' | 'Customer'; // Admin = Seller, Customer = Buyer
  isVerified: boolean;
  status: 'Active' | 'Inactive';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  billingAddress: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  wishlist: Types.ObjectId[]; // References to favorite products
  orders: Types.ObjectId[]; // References to user's orders
  forgotPasswordToken?: string;
  forgotPasswordTokenExpiry?: Date;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String }, // Profile picture URL
    phoneNo: { type: String, required: true, unique: true },
    role: { type: String, enum: ['Admin', 'Customer'], default: 'Customer' },
    isVerified: { type: Boolean, default: false },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      country: String,
      postalCode: String,
    },
    billingAddress: {
      street: String,
      city: String,
      state: String,
      country: String,
      postalCode: String,
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User = mongoose.models.user || mongoose.model('user', userSchema);


export default User;
