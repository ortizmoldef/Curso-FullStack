'use client'
import React from 'react';
import { useLanguage } from './ejer4';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      Cambiar idioma: {language === 'es' ? 'Español' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
