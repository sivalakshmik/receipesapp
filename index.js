import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import recipeRoutes from "./src/routes/recipeRoutes.js"; // ✅ note .js

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// MongoDB connection (replace with your Atlas URI for Render deploy)
const uri = "mongodb+srv://soniakv2822_db_user:killbill2811@cluster0.vttyujz.mongodb.net/recipesDB";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ DB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
