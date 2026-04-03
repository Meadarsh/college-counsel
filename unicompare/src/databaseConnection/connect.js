import mongoose from 'mongoose';

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection error');
  }
};

export default connectDb;
