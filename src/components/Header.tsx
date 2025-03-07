import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    const fullPath = `/${currentLang}${path}`;
    return location.pathname === fullPath ? "text-accent font-bold" : "text-gray-700 hover:text-accent font-bold";
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-md'
    }`}>
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={`/${currentLang}`} className={isActive("")}>{t('nav.home')}</Link>
            <Link to={`/${currentLang}/services`} className={isActive("/services")}>{t('nav.services')}</Link>
            <Link to={`/${currentLang}/about`} className={isActive("/about")}>{t('nav.about')}</Link>
            <Link to={`/${currentLang}/pricing`} className={isActive("/pricing")}>{t('nav.pricing')}</Link>
            <Link to={`/${currentLang}/faq`} className={isActive("/faq")}>FAQ</Link>
            <Link to={`/${currentLang}/contact`} className={isActive("/contact")}>{t('nav.contact')}</Link>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu"
              className="text-primary hover:text-accent transition-colors"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link to={`/${currentLang}`} className={`block font-bold ${isActive("")}`}>{t('nav.home')}</Link>
            <Link to={`/${currentLang}/services`} className={`block font-bold ${isActive("/services")}`}>{t('nav.services')}</Link>
            <Link to={`/${currentLang}/about`} className={`block font-bold ${isActive("/about")}`}>{t('nav.about')}</Link>
            <Link to={`/${currentLang}/pricing`} className={`block font-bold ${isActive("/pricing")}`}>{t('nav.pricing')}</Link>
            <Link to={`/${currentLang}/faq`} className={`block font-bold ${isActive("/faq")}`}>FAQ</Link>
            <Link to={`/${currentLang}/contact`} className={`block font-bold ${isActive("/contact")}`}>{t('nav.contact')}</Link>
          </div>
        )}
      </nav>
    </header>
  );
}