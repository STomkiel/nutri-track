import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import Image from 'next/image';

interface DishTypeCardProps {
  dishType: string;
  imgSrc: string;
}
const DishTypeCard = ({ dishType, imgSrc }: DishTypeCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, marginRight: 2 }}>
      <CardActionArea>
        <CardMedia>
          <Box width="400px" height="300px" position="relative">
            <Image
              fill
              src={imgSrc}
              alt={dishType}
              sizes="(max-width: 400px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dishType.replaceAll('-', ' ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DishTypeCard;
