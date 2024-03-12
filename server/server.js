
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from 'express'

// Configure dotenv to load environment variables
dotenv.config();

const app = express();

// Define the connectDB function as an async function
const connectDB = async () => {
  try {
    // Directly use process.env.DB_CONNECTION inside the function
    await mongoose.connect(process.env.DB_CONNECTION);
    // console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

// Call the connectDB function
connectDB();

app.use(express.json());

// Define your routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
