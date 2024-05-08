'use client';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getMealsData } from '@/actions';
import Typography from '@mui/material/Typography';
import { formatDate } from '../../../../utils/date';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTranslations } from 'next-intl';
import MealChart from '@/app/components/mealChart/MealChart';
import FoodListItem from '@/app/components/foodListItem/FoodListItem';

type Meal = {
  id: string;
  date: Date;
  name: string;
  fat: number;
  protein: number;
  carbs: number;
  dishId?: string;
  typeId?: string;
};

interface MealPanelProps {
  meals: Meal[];
  chartData: {
    fat: number;
    protein: number;
    carbs: number;
  };
}

const namespace = 'Common';

const MealPanel = (props: MealPanelProps) => {
  const [meals, setMeals] = useState(props.meals);
  const [chartData, setChartData] = useState(props.chartData);
  const [currentData, setCurrentData] = useState(0);

  const t = useTranslations(namespace);

  const getCurrentMeals = async (day: number) => {
    const { meals, chartData } = await getMealsData(day);
    setMeals(meals);
    setChartData(chartData);
  };

  const handleDayChange = async (day: number) => {
    setCurrentData(day);
    await getCurrentMeals(day);
  };
  return (
    <>
      <Box>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            marginBottom: 2,
          }}
        >
          <div>
            <div className="flex justify-between">
              <IconButton onClick={() => handleDayChange(currentData - 1)}>
                <ArrowBackIosIcon />
              </IconButton>
              <Button onClick={() => handleDayChange(0)}>{t('today')}</Button>
              <IconButton
                onClick={() => handleDayChange(currentData + 1)}
                disabled={currentData === 0}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
      </Box>
      <Box>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            marginBottom: 2,
          }}
        >
          <div className="text-center">
            <Typography variant="h6">{formatDate(currentData)}</Typography>
            <MealChart
              fat={chartData.fat}
              protein={chartData.protein}
              carbs={chartData.carbs}
            />
          </div>
        </Paper>
      </Box>
      <div className="mb-2 flex justify-end">ADD MEAL</div>
      <div>
        {meals.map((meal) => (
          <FoodListItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            fat={meal.fat}
            protein={meal.protein}
            carbs={meal.carbs}
            day={currentData}
            getCurrentMeals={getCurrentMeals}
            dishId={meal.dishId}
            typeId={meal.typeId}
          />
        ))}
      </div>
    </>
  );
};

export default MealPanel;
