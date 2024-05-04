import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageTitle from '@/app/components/pageTitle/PageTitle';
import DishCard from '@/app/components/dishCard/DishCard';
import data from '../../../../../mockData/food.json';

interface FoodTypePageProps {
  params: { type: string };
}

const FoodTypePage = ({ params }: FoodTypePageProps) => {
  const { type } = params;
  const dishes = data.dishes.filter((dish) => dish.type_id === type);
  return (
    <Box>
      <PageTitle text={type} />
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={1}>
            {dishes.map((dishItem) => (
              <Box key={dishItem.name_id} m={1}>
                <Grid item>
                  <DishCard
                    nameId={dishItem.name_id}
                    typeId={dishItem.type_id}
                    description={dishItem.description}
                    imgSrc={dishItem.img_src}
                  />
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodTypePage;
