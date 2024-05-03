'use client';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { formatDate } from '../../../../utils/date';
import { useTranslations } from 'next-intl';

const namespace = 'Common';

const MealPanel = () => {
  const [currentData, setCurrentData] = useState(0);

  const t = useTranslations(namespace);

  const handleDayChange = async (day: number) => {
    setCurrentData(day);
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
            <div>MEAL CHART</div>
          </div>
        </Paper>
      </Box>
      <div className="mb-2 flex justify-end">ADD MEAL</div>
      <div>FOOD LIST</div>
    </>
  );
};

export default MealPanel;
