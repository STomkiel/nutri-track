import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { addDishToMeals } from '@/actions';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../utils/authOptions';
import Translation from '@/app/translation/Translation';

interface AddDishProps {
  nameId: string;
}
const AddDish = async ({ nameId }: AddDishProps) => {
  const session = await getServerSession(authOptions);
  const handleAddDishToMeal = addDishToMeals.bind(null, nameId);

  if (!session) {
    return null;
  }

  return (
    <form action={handleAddDishToMeal}>
      <Tooltip title={<Translation id={'add'} namespace="Dish" />}>
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </Tooltip>
    </form>
  );
};

export default AddDish;
