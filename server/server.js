
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from 'express';
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import serviceRoute from "./routes/serviceRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import requireAuth from "./middleware/authMiddleware.js";

dotenv.config();
const app = express();
// console.log(process.env.DB_CONNECTION); // Should output your MongoDB URI
// console.log(process.env.PORT); // Should output '8080'
// console.log(process.env.SECRET_KEY); // Should output 'SECRET-KEY'


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



app.use(cookieParser())
app.use(express.json());
app.use(requireAuth)

// Define your routes here
app.use('/api/users', userRoutes);
// app.use('api/users',userRoutes)
app.use('/api/appointments', appointmentRoutes);

app.use('/api/services', serviceRoute);

app.use('/api/staff',staffRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

