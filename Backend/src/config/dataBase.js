//1
import mongoose from "mongoose";
const connectToDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to mongoDB');
};

export default connectToDB;
