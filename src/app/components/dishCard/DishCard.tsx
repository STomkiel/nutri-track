import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import AddDish from '../addDish/AddDish';

interface DishCardProps {
  nameId: string;
  typeId: string;
  description: string;
  imgSrc: string;
}
const DishCard = ({ nameId, typeId, description, imgSrc }: DishCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, marginRight: 2 }}>
      <Link href={`/recipe/${typeId}/${nameId}`}>
        <CardActionArea>
          <CardMedia>
            <Box width="400px" height="300px" position="relative">
              <Image
                fill
                src={imgSrc}
                alt={nameId}
                sizes="(max-width: 400px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Box>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nameId.replaceAll('-', ' ')}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              maxHeight="40px"
              overflow="hidden"
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Box className="flex w-full justify-end">
          <AddDish nameId={nameId} />
        </Box>
      </CardActions>
    </Card>
  );
};

export default DishCard;
