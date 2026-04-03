import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDb from '@/databaseConnection/connect';
import AdminUser from '@/model/user.model';

export async function POST(request) {
  try {
    await connectDb();
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { message: 'No token provided' },
        { status: 400 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    const user = await AdminUser.findById(decoded.id).select('-password');
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Token validation error:', error);
    return NextResponse.json(
      { message: 'Invalid or expired token' },
      { status: 401 }
    );
  }
}