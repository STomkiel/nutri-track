'use client';
import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { ChartDataType, convertToCal } from './utils';
import { COLORS, ColorsType } from './constants';
import PieChart from '../pieChart/PieChart';
import { useTranslations } from 'next-intl';
Chart.register(ArcElement);

interface MealChartProps {
  fat: number;
  protein: number;
  carbs: number;
}
const namespace = 'Meal';
const MealChart = ({ fat, protein, carbs }: MealChartProps) => {
  const t = useTranslations(namespace);

  const chartData = convertToCal(fat, protein, carbs);
  const allCalories = Object.keys(chartData).reduce(
    (acc, key) => acc + chartData[key as keyof ChartDataType],
    0,
  );
  return (
    <div className="flex justify-center">
      <div>
        <PieChart
          data={Object.keys(chartData).map(
            (key) => chartData[key as keyof ChartDataType],
          )}
          backgroundColor={Object.keys(COLORS).map(
            (key) => COLORS[key as keyof ColorsType],
          )}
          text={`${allCalories}`}
          caption={t('calories').toUpperCase()}
          cutout={100}
          borderWidth={4}
          small={false}
        />
        <div className="m-2 flex justify-between space-x-12">
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

export default MealChart;
