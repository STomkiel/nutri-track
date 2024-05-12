import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import Macros from '@/components/macros/Macros';
import { getDishByName } from '@/actions';
import AddDish from '@/components/addDish/AddDish';
import Translation from '@/translation/Translation';

const RecipePage = async ({
  params,
}: {
  params: {
    name: string;
    recipeName: string;
  };
}) => {
  const { recipeName } = params;
  const dish = await getDishByName(recipeName);

  if (!dish) {
    return <div />;
  }

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          minWidth: '500px',
          minHeight: '200px',
          padding: 2,
          marginBottom: 2,
          maxWidth: '1000px',
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: '100%',
                  md: '400px',
                },
                height: '300px',
                position: 'relative',
              }}
            >
              <Image
                fill
                sizes="(max-width: 400px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={dish.img_src}
                alt={recipeName}
              />
            </Box>
            <Box
              sx={{
                ml: {
                  sm: 0,
                  md: 2,
                },
                maxWidth: {
                  xs: '100%',
                  md: '450px',
                },
              }}
            >
              <Box className="flex justify-between">
                <Box alignContent="center">
                  <Typography variant="h4">
                    {recipeName.replaceAll('-', ' ')}
                  </Typography>
                </Box>
                <AddDish nameId={recipeName} />
              </Box>
              <Typography>{dish.description}</Typography>
              <Box>
                <Typography variant="h5">
                  <Translation id={'macro'} namespace="Dish" />
                </Typography>
                <Macros
                  fat={dish.fat.toNumber()}
                  protein={dish.protein.toNumber()}
                  carbs={dish.carbs.toNumber()}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column-reverse',
                md: 'row',
              },
            }}
          >
            <Box mr={2} maxWidth="400px">
              <Typography variant="h4">
                <Translation id={'ingriedients'} namespace="Dish" />
              </Typography>
              {dish.ingredients.map((ingredientItem, index) => (
                <Typography key={ingredientItem}>{`${
                  index + 1
                }. ${ingredientItem}`}</Typography>
              ))}
            </Box>
            <Box maxWidth="550px">
              <Typography variant="h4">
                <Translation id={'instruction'} namespace="Dish" />
              </Typography>
              {dish.instruction.map((instructionItem) => (
                <Box key={instructionItem}>
                  <Typography>{instructionItem}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default RecipePage;
