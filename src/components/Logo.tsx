import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Logo() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center">
      <Link to={`/${currentLang}`} onClick={handleLogoClick} className="flex items-center">
        <img 
          src="/DataHelp.eu.svg" 
          alt="DataHelp.eu"
          className="h-12 md:h-[3.72rem] w-auto"
        />
      </Link>
    </div>
  );
}