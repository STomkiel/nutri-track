import React from 'react';
import MealPanel from './MealPanel';
import { getMealsData } from '@/actions';

const DietPage = async () => {
  const { meals, chartData } = await getMealsData();

  return (
    <div>
      <div className=" min-w-[580px]">
        <MealPanel meals={meals} chartData={chartData} />
      </div>
    </div>
  );
};

export default DietPage;
