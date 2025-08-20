import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware - Temporarily allow all origins for testing
app.use(cors());
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// MongoDB Connection
const MONGODB_URI = process.env.MONGO_DB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Test route
app.get("/test", (req, res) => {
  console.log("Test endpoint hit!");
  res.json({ status: "success", message: "Test endpoint is working!" });
});

// Basic route
app.get("/", (req, res) => {
  console.log("Root endpoint hit!");
  res.json({ message: "Welcome to the AI Meal Planner API" });
});

// Recipe routes (uncomment when ready)
import recipeRoutes from "./routes/recipes.js";
app.use("/api/recipes", recipeRoutes);

// User routes (uncomment when ready)
// import userRoutes from "./routes/users.js";
// app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export { app, server };
