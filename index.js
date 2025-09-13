import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import recipeRoutes from "./src/routes/recipeRoutes.js"; 

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// MongoDB connection
const mongoUri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB connected"))
.catch(err => console.log(" DB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));


