import mongoose from "mongoose";

// Define the schema for ingredients
const ingredientSchema = new mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: String, required: true },
});

// Define the schema for photos
const photoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  caption: { type: String },
});

// Main Recipe schema
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [ingredientSchema],
  instructions: [
    {
      step: { type: Number, required: true },
      text: { type: String, required: true },
    },
  ],
  photos: [photoSchema],
  tags: [String],
  cuisine: String,
  mealType: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  notes: String,
  author: String,
  recipeYield: String,
  prepTime: String,
  cookTime: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
recipeSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the model
const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
