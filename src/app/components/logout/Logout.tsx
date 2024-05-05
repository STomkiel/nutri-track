'use client';
import { signOut } from 'next-auth/react';
import React from 'react';
import NavButton from '../navButton/NavButton';
import { useTranslations } from 'next-intl';

const Logout = () => {
  const t = useTranslations('Navigation');
  return <NavButton onClick={() => signOut()}>{t('logout')}</NavButton>;
};

export default Logout;
