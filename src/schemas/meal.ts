import { z } from 'zod';

const checkNumber = (t: (arg: string) => string) =>
  z.preprocess(
    (value) => {
      if (typeof value === 'string') {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? undefined : parsed;
      }
      return value;
    },
    z.number({
      required_error: t('errorMessage.required'),
      invalid_type_error: t('errorMessage.invalidType'),
    }),
  );

const mealSchemaType = z.object({
  name: z.string(),
  protein: z.number(),
  carbs: z.number(),
  fat: z.number(),
});

export const mealSchema = (t: (arg: string) => string) =>
  z.object({
    name: z.string().trim().min(5, t('errorMessage.name')),
    protein: checkNumber(t),
    carbs: checkNumber(t),
    fat: checkNumber(t),
  });
export type MealFormType = z.output<typeof mealSchemaType>;
