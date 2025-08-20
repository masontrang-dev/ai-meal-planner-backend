export type MealPlan = {
  date: string;
  meals: { breakfast: string[]; lunch: string[]; dinner: string[] };
  notes?: string;
  snacks?: string[];
};
