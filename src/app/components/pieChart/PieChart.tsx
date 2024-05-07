'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

interface PieChartProps {
  data: number[];
  backgroundColor: string[];
  text: string;
  caption: string;
  borderWidth?: number;
  cutout?: number;
  small?: boolean;
  textSize?: 'text-2xl' | 'text-5xl';
}
const PieChart = ({
  data,
  backgroundColor,
  text,
  caption,
  borderWidth = 0,
  cutout = 35,
  small = true,
  textSize = 'text-2xl',
}: PieChartProps) => {
  return (
    <div className="flex justify-center">
      <div>
        <div className={`relative ${small && 'w-24'}`}>
          <Doughnut
            data={{
              datasets: [
                {
                  data,
                  backgroundColor,
                  borderWidth,
                },
              ],
            }}
            options={{
              cutout,
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="text-center">
              <p className={`${textSize} font-black`}>{text}</p>
              <p>{caption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
