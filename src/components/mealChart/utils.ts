export const fatToCalories = (grams: number) => 9 * grams;
export const proteinToCalories = (grams: number) => 4 * grams;
export const carbsToCalories = (grams: number) => 4 * grams;

export interface ChartDataType {
  fat: number;
  protein: number;
  carbs: number;
}
export const convertToCal = (
  fat: number,
  protein: number,
  carbs: number,
): ChartDataType => {
  const proteinCalories = proteinToCalories(protein);
  const carbsCalories = carbsToCalories(carbs);
  const fatCalories = fatToCalories(fat);
  return { protein: proteinCalories, carbs: carbsCalories, fat: fatCalories };
};
