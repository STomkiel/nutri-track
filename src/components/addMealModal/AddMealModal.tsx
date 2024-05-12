'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { addMeal } from '@/actions';
import Modal from '../modal/Modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { MealFormType, mealSchema } from '@/schemas/meal';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { useTranslations } from 'next-intl';

interface AddMealModalProps {
  day: number;
  getCurrentMeals: (day: number) => Promise<void>;
}

const defaultValues = {
  name: '',
  protein: 0,
  carbs: 0,
  fat: 0,
};
const namespace = 'Meal';

const AddMealModal = ({ day, getCurrentMeals }: AddMealModalProps) => {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations(namespace);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset(defaultValues);
  };
  console.log({ mealSchema });
  const { control, handleSubmit, reset } = useForm<MealFormType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(mealSchema(t)),
    defaultValues,
  });

  const onSubmit = async (data: MealFormType) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('protein', data.protein.toString());
    formData.append('carbs', data.carbs.toString());
    formData.append('fat', data.fat.toString());
    await addMeal(formData, day);
    await getCurrentMeals(day);
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        {t('addMeal')}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({
              field: { value, onChange, onBlur, ref },
              fieldState: { error },
            }) => (
              <FormControl fullWidth>
                <TextField
                  name="name"
                  label={t('name')}
                  required
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(error)}
                  fullWidth
                />
                <FormHelperText
                  sx={{
                    color: 'error.main',
                  }}
                >
                  {error?.message ?? ''}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Typography variant="h5">{t('macro')}</Typography>
          <Box display="flex">
            <Controller
              name="protein"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error },
              }) => (
                <FormControl fullWidth>
                  <TextField
                    name="protein"
                    label={t('proteinGram')}
                    type="number"
                    required
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={Boolean(error)}
                    fullWidth
                  />
                  <FormHelperText
                    sx={{
                      color: 'error.main',
                    }}
                  >
                    {error?.message ?? ''}
                  </FormHelperText>
                </FormControl>
              )}
            />

            <Controller
              name="carbs"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error },
              }) => (
                <FormControl fullWidth>
                  <TextField
                    name="carbs"
                    label={t('carbsGram')}
                    type="number"
                    required
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={Boolean(error)}
                    fullWidth
                  />
                  <FormHelperText
                    sx={{
                      color: 'error.main',
                    }}
                  >
                    {error?.message ?? ''}
                  </FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              name="fat"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error },
              }) => (
                <FormControl fullWidth>
                  <TextField
                    name="fat"
                    label={t('fatGram')}
                    type="number"
                    required
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={Boolean(error)}
                    fullWidth
                  />
                  <FormHelperText
                    sx={{
                      color: 'error.main',
                    }}
                  >
                    {error?.message ?? ''}
                  </FormHelperText>
                </FormControl>
              )}
            />
          </Box>
          <Button type="submit" variant="contained">
            {t('add')}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AddMealModal;
