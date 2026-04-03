const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String, default: 'admin' },
}, { timestamps: true });

const AdminUser = mongoose.models.AdminUser || mongoose.model('AdminUser', UserSchema);

async function seed() {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/unicompare';
  
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected.');

    const count = await AdminUser.countDocuments();
    if (count > 0) {
      console.log('Admin user already exists. Skipping seed.');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    await AdminUser.create({
      name: 'System Admin',
      email: 'admin@unicompare.com',
      password: hashedPassword,
      role: 'admin'
    });

    console.log('Initial admin user created successfully!');
    console.log('Email: admin@unicompare.com');
    console.log('Password: admin123');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seed();
