import { Decimal } from '@prisma/client/runtime/library';

type MealDB = {
  id: string;
  date: Date;
  user_id: string;
  dish_id: string | null;
  name: string | null;
  fat: Decimal | null;
  protein: Decimal | null;
  carbs: Decimal | null;
  dish: {
    name_id: string;
    type_id: string;
    protein: Decimal | null;
    carbs: Decimal | null;
    fat: Decimal | null;
  } | null;
};

export const prepareMealsData = (meals: MealDB[]) => {
  let fat = 0;
  let protein = 0;
  let carbs = 0;
  const preparedData = meals.map((meal) => {
    const data = {
      id: meal.id,
      date: meal.date,
      dishId: undefined,
    };
    if (meal.dish) {
      protein = protein + (meal.dish.protein?.toNumber() || 0);
      carbs = carbs + (meal.dish.carbs?.toNumber() || 0);
      fat = fat + (meal.dish.fat?.toNumber() || 0);
      return {
        ...data,
        name: meal.dish.name_id,
        protein: meal.dish.protein?.toNumber() || 0,
        carbs: meal.dish.carbs?.toNumber() || 0,
        fat: meal.dish.fat?.toNumber() || 0,
        dishId: meal.dish.name_id,
        typeId: meal.dish.type_id,
      };
    }
    protein = protein + (meal.protein?.toNumber() || 0);
    carbs = carbs + (meal.carbs?.toNumber() || 0);
    fat = fat + (meal.fat?.toNumber() || 0);
    return {
      ...data,
      name: meal.name || '',
      protein: meal.protein?.toNumber() || 0,
      carbs: meal.carbs?.toNumber() || 0,
      fat: meal.fat?.toNumber() || 0,
    };
  });
  return { meals: preparedData, chartData: { fat, protein, carbs } };
};
