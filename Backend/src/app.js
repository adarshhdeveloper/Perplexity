import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import cors from "cors"
import morgan from "morgan"
import chatRouter from "./routes/chat.routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // ye frotnend me html ke form data ko use kaene ke liye use hota hii 
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials : true,
    methods : ["GET" , "POST" , "PUT" , "DELETE"]
}))
app.use(morgan("dev"))  // ye request aur response ke details ko console me log karne ke liye use hota hai

// Health check
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

app.use("/api/auth", authRouter);
app.use("/api/chats",chatRouter)

export default app;