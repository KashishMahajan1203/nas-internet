import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "NAS Internet Backend API is running!",
  });
});

// Contact API Routes
app.use("/api/contacts", contactRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();