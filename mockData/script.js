const { PrismaClient } = require('@prisma/client');
const foodTypesData = require('../mockData/foodTypes.json');
const foodData = require('../mockData/food.json');
const db = new PrismaClient();

const populateFoodTypesDb = async () => {
  const response = await Promise.all(
    foodTypesData.types.map(async (type) => {
      const res = await db.dishType.create({
        data: {
          name_id: type.foodType.replaceAll(' ', '-'),
          img_src: type.imgSrc,
        },
      });
      return res;
    }),
  );

  return response;
};

const populateFoodDb = async () => {
  const response = await Promise.all(
    foodData.dishes.map(async (dish) => {
      const res = await db.dish.create({
        data: {
          name_id: dish.name.replaceAll(' ', '-'),
          type_id: dish.foodType.replaceAll(' ', '-'),
          description: dish.description,
          img_src: dish.imgSrc,
          ingredients: dish.ingredients,
          protein: dish.macro.protein,
          carbs: dish.macro.carbs,
          fat: dish.macro.fat,
          instruction: dish.instruction,
        },
      });
      return res;
    }),
  );
  return response;
};

const isDbPopulated = async () => {
  const response = await db.dishType.count();
  return response !== 0;
};

const populateDb = async () => {
  try {
    const dbResponse = await isDbPopulated();
    if (dbResponse) {
      return 'Database is populated';
    }
    await populateFoodTypesDb();
    await populateFoodDb();
  } catch (error) {
    console.log(error);
    return "Database can't be populated";
  }
  return 'Database successfully populated';
};

(async () => {
  console.log(await populateDb());
})();
