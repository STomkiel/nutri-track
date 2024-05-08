'use server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../utils/authOptions';
import { db } from '@/db';
import { prepareMealsData } from '../../utils/data/meals';
import { mealSchema } from '@/schemas/meal';

export const addMeal = async (formData: FormData, day: number) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user.id) {
      return;
    }
    const data = Object.fromEntries(formData.entries());
    const parse = mealSchema.safeParse(data);
    if (!parse.success) {
      return;
    }
    const { name, fat, protein, carbs } = parse.data;
    const date = new Date();
    date.setDate(date.getDate() + day);

    await db.meal.create({
      data: {
        user_id: session.user.id,
        name,
        fat,
        protein,
        carbs,
        date,
      },
    });
  } catch (error) {
    console.error({ error });
  }
};

export const addDishToMeals = async (id: string) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user.id) {
      return;
    }
    await db.meal.create({
      data: {
        user_id: session.user.id,
        dish_id: id,
      },
    });
  } catch (error) {
    console.error({ error });
  }
};

export const deleteMeal = async (id: string) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user.id) {
      return;
    }
    await db.meal.delete({
      where: {
        id,
        user_id: session.user.id,
      },
    });
  } catch (error) {
    console.error({ error });
  }
};

export const getUserMeals = async (day: number) => {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) return [];
  const today = new Date();
  today.setDate(today.getDate() + day);
  const startDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    0,
    0,
    0,
  );
  const endDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59,
  );
  const meals = await db.meal.findMany({
    where: {
      user_id: {
        equals: session.user.id,
      },
      date: {
        gte: startDate.toISOString(),
        lte: endDate.toISOString(),
      },
    },
    include: {
      dish: {
        select: {
          name_id: true,
          type_id: true,
          protein: true,
          carbs: true,
          fat: true,
        },
      },
    },
  });
  return meals;
};

export const getMealsData = async (day: number = 0) => {
  const data = await getUserMeals(day);
  const { meals, chartData } = prepareMealsData(data);
  return { meals, chartData };
};

export const getDishByName = async (name: string) => {
  const dish = await db.dish.findFirst({
    where: { name_id: name },
  });
  return dish;
};

export const getDishesByType = async (type: string) => {
  const dishes = await db.dish.findMany({
    where: { type_id: type },
  });
  return dishes;
};

export const getDishTypes = async () => {
  const dishTypes = await db.dishType.findMany();
  return dishTypes;
};
