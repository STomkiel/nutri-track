'use client';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTranslations } from 'next-intl';

const namespace = 'Common';

const RegisterForm = () => {
  const t = useTranslations(namespace);

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          sm: '400px',
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          marginBottom: 2,
        }}
      >
        <form>
          <div>
            <TextField
              name="email"
              label={t('email')}
              placeholder="example@mail.com"
              required
              fullWidth
            />
          </div>
          <div>
            <TextField
              name="password"
              label={t('password')}
              placeholder=""
              required
              type="password"
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant="outlined">
              {t('register')}
            </Button>
          </div>
        </form>
      </Paper>
    </Box>
  );
};

export default RegisterForm;
