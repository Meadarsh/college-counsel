import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
            socketTimeoutMS: 45000 // 45 seconds
          };
    await mongoose.connect(process.env.MONGO_URI,options);
        console.log("MongoDB Conneted");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
export default connectDb;