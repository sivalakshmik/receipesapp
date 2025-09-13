import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true }
}, { timestamps: true });

// ✅ Export default (so `import Recipe from ...` works)
const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
