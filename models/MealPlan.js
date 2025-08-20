import mongoose from "mongoose";

const mealPlanSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  meals: {
    breakfast: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    lunch: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    dinner: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  },
  notes: String,
  snacks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

// Create and export the model
const MealPlan = mongoose.model("MealPlan", mealPlanSchema);
export default MealPlan;
