import mongoose from "mongoose";
const connectDb = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Conneted");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
export default connectDb;