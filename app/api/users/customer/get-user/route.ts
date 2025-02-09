import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

// ✅ 1️⃣ GET: Retrieve user profile, wishlist, and orders
export async function GET(request: NextRequest) {
    try {
        const userId = request.cookies.get('id');
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const user = await User.findById(userId)
            .populate('wishlist') // Populate wishlist (Sanity product IDs)
            .populate('orders'); // Populate orders 

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error('Error fetching user details:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

// ✅ 2️⃣ PUT: Update user profile (username, addresses, phone)
export async function PUT(request: NextRequest) {
    try {
        const userId = request.cookies.get('userId');
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { username, shippingAddress, billingAddress, phoneNo } = await request.json();
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        user.username = username || user.username;
        user.shippingAddress = shippingAddress || user.shippingAddress;
        user.billingAddress = billingAddress || user.billingAddress;
        user.phoneNo = phoneNo || user.phoneNo;

        await user.save();

        return NextResponse.json({ message: 'User details updated successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error updating user details:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

// ✅ 3️⃣ GET_ORDERS: Retrieve user order history
export async function GET_ORDERS(request: NextRequest) {
    try {
        const userId = request.cookies.get('userId');
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const user = await User.findById(userId).populate('orders');
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user.orders, { status: 200 });
    } catch (error) {
        console.error('Error fetching order history:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
