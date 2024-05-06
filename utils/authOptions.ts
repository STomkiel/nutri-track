import { db } from '@/db';
import { authSchema } from '@/schemas/auth';
import { compare } from 'bcrypt';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const parse = authSchema.safeParse(credentials);
        if (!parse.success) {
          return null;
        }
        const { email, password } = parse.data;
        const response = await db.user.findUnique({
          where: {
            email,
          },
        });
        if (!response) return null;
        const passwordCorrect = await compare(password, response.password);

        if (passwordCorrect) {
          return {
            id: response.id,
            email,
          };
        }
        return null;
      },
    }),
  ],
};
