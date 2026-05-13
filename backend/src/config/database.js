import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log("connectDB::error: ", error);
  }
};
