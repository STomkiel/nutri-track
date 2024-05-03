import React from 'react';
import MealPanel from './MealPanel';

const DietPage = () => {
  return (
    <div>
      <p className="text-3xl">My meals</p>
      <div className="min-w-[580px]">
        <MealPanel />
      </div>
    </div>
  );
};

export default DietPage;
