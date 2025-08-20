export interface Ingredient {
  item: string;
  quantity: string;
}

export interface Instruction {
  step: number;
  text: string;
}

export interface RecipeSummary {
  _id: string;
  name: string;
  photos: {
    url: string;
    caption: string;
  }[];
  description: string;
  tags: string[];
  mealType: string;
  cuisine: string;
  rating: number;
}

export interface RecipeFull extends RecipeSummary {
  ingredients: Ingredient[];
  instructions: Instruction[];
  author: string;
  recipeYield: string;
  prepTime: string;
  cookTime: string;
  notes?: string;
}

export type Recipe = RecipeSummary | RecipeFull;
