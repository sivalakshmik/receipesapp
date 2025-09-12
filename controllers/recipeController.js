const Recipe = require("../models/recipeModel");

// Create
exports.createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json(recipe); // <-- 201 instead of 200
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Get all
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateRecipe = async (req, res) => {
  try {
        
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (err) {
    console.error(err); // 👈 log any error
    res.status(400).json({ error: err.message });
  }
};


// Update recipe //https://soniakv-2822-342806.postman.co/workspace/KVS's-Workspace~faae7e7e-f12f-41b3-8fc9-3b2c0859dd54/collection/48260874-a6ee9662-a884-47e6-ad62-b39f12ca38c3?action=share&source=copy-link&creator=48260874
// exports.updateRecipe = async (req, res) => {
//   try {
    // const recipe = await Recipe.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   { new: true, runValidators: true } // important!
    // );
// 
    // if (!recipe) {
    //   return res.status(404).json({ message: "Recipe not found" });
    // }
// 
    // res.status(200).json(recipe);
//   } catch (err) {
    // res.status(400).json({ error: err.message });
//   }
// };

// Delete
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
