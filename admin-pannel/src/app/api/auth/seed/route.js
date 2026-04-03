import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDb from '@/databaseConnection/connect';
import AdminUser from '@/model/user.model';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // Only allow this if there are NO users in the database
    // Or if a secret key is provided (for security)
    
    await connectDb();
    const count = await AdminUser.countDocuments();
    
    if (count > 0) {
      return NextResponse.json(
        { message: 'Admin user already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const newUser = await AdminUser.create({
      name: 'System Admin',
      email: 'admin@unicompare.com',
      password: hashedPassword,
      role: 'admin'
    });

    return NextResponse.json({
      message: 'Initial admin user created successfully',
      user: {
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
