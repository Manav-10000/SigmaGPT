import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();

// Database Connection Function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected with Database!");
    } catch (err) {
        console.log("Failed to connect with DB", err);
    }
}

// Middleware and Routes 

connectDB(); 

app.use(express.json());

app.use(cors()); 

app.use("/api", chatRoutes);

export default app; 

// Local Development Logic

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Local server is running on ${PORT}`);
    });
}











