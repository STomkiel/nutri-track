'use client';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteMeal } from '@/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Modal from '../modal/Modal';
import { useTranslations } from 'next-intl';

interface DeleteMealModalProps {
  id: string;
  getCurrentMeals: (day: number) => Promise<void>;
  day: number;
}
const namespace = 'Meal';

const DeleteMealModal = ({
  id,
  getCurrentMeals,
  day,
}: DeleteMealModalProps) => {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations(namespace);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = async () => {
    await deleteMeal(id);
    await getCurrentMeals(day);
    handleClose();
  };

  return (
    <>
      <Tooltip title={t('remove')}>
        <IconButton onClick={handleOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <div className="flex justify-center">
          <div>
            <Typography variant="h5">{t('confirmationTitle')}</Typography>
            <div className="m-2 flex justify-around">
              <Button onClick={handleConfirm} variant="contained">
                {t('confirm')}
              </Button>
              <Button onClick={handleClose} variant="contained">
                {t('cancel')}
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteMealModal;
