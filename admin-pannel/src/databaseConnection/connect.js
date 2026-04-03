import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const options = {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000 
          };
    await mongoose.connect(process.env.MONGO_URI,options);
        console.log("MongoDB Conneted");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
    }
}
export default connectDb;