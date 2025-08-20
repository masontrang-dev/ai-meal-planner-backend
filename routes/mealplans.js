import express from "express";
import mongoose from "mongoose";
import Recipe from "../models/Recipe.js";

const router = express.Router();

// GET all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.find(
    {},
    {
      title: 1,
      description: 1,
      photos: 1,
      cuisine: 1,
      mealType: 1,
      rating: 1,
      _id: 1,
    }
  );
  return res.json(recipes);
});

// GET a single recipe
router.get("/:id", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  return res.json(recipe);
});

// POST a new recipe
router.post("/", async (req, res) => {
  if (Array.isArray(req.body)) {
    const recipes = [];
    for (const recipeData of req.body) {
      const recipe = await Recipe.create(recipeData);
      recipes.push(recipe);
    }
    await Promise.all(recipes);
    return res.json(recipes);
  }
  const recipe = await Recipe.create(req.body);
  return res.json(recipe);
});

// UPDATE a recipe
router.patch("/:id", async (req, res) => {
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body);
  return res.json(recipe);
});

// DELETE a recipe
router.delete("/:id", async (req, res) => {
  const recipe = await Recipe.findByIdAndDelete(req.params.id);
  return res.json(recipe);
});

export default router;
