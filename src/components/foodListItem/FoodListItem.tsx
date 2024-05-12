'use client';
import React, { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ExpandButton from '../expandButton/ExpandButton';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Macros from '../macros/Macros';
import Link from 'next/link';
import DeleteMealModal from '../deleteMealModal/DeleteMealModal';
import { useTranslations } from 'next-intl';

interface MealProps {
  id: string;
  name: string;
  fat: number;
  protein: number;
  carbs: number;
  day: number;
  getCurrentMeals: (day: number) => Promise<void>;
  dishId?: string;
  typeId?: string;
}

const namespace = 'Meal';

const FoodListItem = ({
  id,
  name,
  fat,
  protein,
  carbs,
  day,
  getCurrentMeals,
  dishId,
  typeId,
}: MealProps) => {
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations(namespace);

  return (
    <Paper elevation={3}>
      <div className="mb-2 min-w-[500px] p-3">
        <div className="flex justify-between">
          <Typography variant="h6">{name.replaceAll('-', ' ')}</Typography>
          <Box>
            {!!dishId && (
              <Link href={`/recipe/${typeId}/${dishId}`}>
                <Tooltip title={t('seeRecipe')}>
                  <IconButton>
                    <ArrowCircleRightIcon />
                  </IconButton>
                </Tooltip>
              </Link>
            )}
            <DeleteMealModal
              id={id}
              day={day}
              getCurrentMeals={getCurrentMeals}
            />
            <ExpandButton
              expand={expanded}
              onClick={() => setExpanded(!expanded)}
            />
          </Box>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Macros fat={fat} protein={protein} carbs={carbs} />
        </Collapse>
      </div>
    </Paper>
  );
};

export default FoodListItem;
