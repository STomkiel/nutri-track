import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Header from '@/components/header/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nutri track',
  description: `Introducing an innovative application that seamlessly integrates a recipe book with a comprehensive diet tracker. Explore a vast array of recipes for your favorite dishes while effortlessly managing your meals. Whether you're searching for culinary inspiration or monitoring your dietary intake, this app offers a convenient solution for all your cooking and nutritional needs`,
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main
              className={`flex min-h-screen flex-col items-center justify-between bg-background p-12`}
            >
              {children}
            </main>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
