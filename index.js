const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/recipesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
