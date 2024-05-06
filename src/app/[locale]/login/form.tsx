'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AuthFormType, authSchema } from '@/schemas/auth';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTranslations } from 'next-intl';

const namespace = 'Common';

const LoginForm = () => {
  const t = useTranslations(namespace);
  const router = useRouter();

  const { control, handleSubmit, setError } = useForm<AuthFormType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: AuthFormType) => {
    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!response?.error) {
      router.push('/');
      router.refresh();
    }
    if (response?.error) {
      setError('email', { message: t('errorMessage.incorrectEmail') });
      setError('password', { message: t('errorMessage.incorrectPassword') });
    }
  };

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
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="email"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error },
              }) => (
                <FormControl fullWidth>
                  <TextField
                    name="email"
                    label={t('email')}
                    placeholder="example@mail.com"
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
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              render={({
                field: { value, onChange, onBlur, ref },
                fieldState: { error },
              }) => (
                <FormControl fullWidth>
                  <TextField
                    name="password"
                    label={t('password')}
                    placeholder=""
                    required
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={Boolean(error)}
                    type="password"
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
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant="outlined">
              {t('login')}
            </Button>
          </div>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
