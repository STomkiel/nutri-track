import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getDishesByType } from '@/actions';
import DishCard from '@/app/components/dishCard/DishCard';
import PageTitle from '@/app/components/pageTitle/PageTitle';
interface FoodTypePageProps {
  params: { type: string };
}

const FoodTypePage = async ({ params }: FoodTypePageProps) => {
  const { type } = params;
  const dishes = await getDishesByType(type);
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
