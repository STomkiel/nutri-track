import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().trim().email({
    message: 'Invalid email adress',
  }),
  password: z.string().min(5, 'Password is to short, minimum 5 characters '),
});
export type AuthFormType = z.output<typeof authSchema>;
