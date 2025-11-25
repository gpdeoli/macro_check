export type MealAnalysis = {
    detected_foods: string[];
    estimated_calories: number;
    estimated_protein: number;
    estimated_carbs: number;
    estimated_fats: number;
    meal_score: number;
    adherence_tags: string[];
    message: string;
  };
  