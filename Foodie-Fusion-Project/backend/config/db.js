import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://dheerajsingh54785:Ald1208@foodie-fusion.2cajx.mongodb.net/?retryWrites=true&w=majority&appName=Foodie-Fusion";
 export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
 }
