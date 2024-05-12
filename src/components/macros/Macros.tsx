'use client';
import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import PieChart from '../pieChart/PieChart';
import { ChartDataType, convertToCal } from '../mealChart/utils';
import { COLORS, ColorsType } from '../mealChart/constants';
import { useTranslations } from 'next-intl';
Chart.register(ArcElement);

interface MealChartProps {
  fat: number;
  protein: number;
  carbs: number;
}
const namespace = 'Meal';

const Macros = ({ fat, protein, carbs }: MealChartProps) => {
  const t = useTranslations(namespace);

  const chartData = convertToCal(fat, protein, carbs);
  const allCalories = Object.keys(chartData).reduce(
    (acc, key) => acc + chartData[key as keyof ChartDataType],
    0,
  );
  return (
    <div className="flex justify-center">
      <div>
        <div className="my-2 flex justify-between space-x-6">
          <div className="text-center">
            <PieChart
              data={Object.keys(chartData).map(
                (key) => chartData[key as keyof ChartDataType],
              )}
              backgroundColor={Object.keys(COLORS).map(
                (key) => COLORS[key as keyof ColorsType],
              )}
              text={`${allCalories}`}
              caption={t('cal').toUpperCase()}
              borderWidth={4}
            />
            <p className="text-xl font-black">{t('calories').toUpperCase()}</p>
          </div>
          {Object.keys(chartData).map((key) => (
            <div key={key} className="text-center">
              <PieChart
                data={[chartData[key as keyof ChartDataType] | 1]}
                backgroundColor={[
                  COLORS[key.toUpperCase() as keyof ColorsType],
                ]}
                text={`${chartData[key as keyof ChartDataType]}`}
                caption={t('cal').toUpperCase()}
              />
              <p className="text-xl font-black">{t(key).toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Macros;
