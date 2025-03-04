import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

// Supported languages
export const SUPPORTED_LANGUAGES = ['en', 'cs', 'de'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// Check if a language is supported
export const isSupportedLanguage = (lang: string): lang is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
};

// Extract language from URL path
export const getLanguageFromPath = (path: string): SupportedLanguage | null => {
  const pathSegments = path.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  if (firstSegment && isSupportedLanguage(firstSegment)) {
    return firstSegment;
  }
  
  return null;
};

// Get path without language prefix
export const getPathWithoutLanguage = (path: string): string => {
  const pathSegments = path.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  if (firstSegment && isSupportedLanguage(firstSegment)) {
    return '/' + pathSegments.slice(1).join('/');
  }
  
  return path;
};

// Add language prefix to path
export const addLanguageToPath = (path: string, language: SupportedLanguage): string => {
  const pathWithoutLanguage = getPathWithoutLanguage(path);
  return `/${language}${pathWithoutLanguage}`;
};

// Hook to synchronize URL with language
export const useLanguageRouter = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Effect to update language based on URL
  useEffect(() => {
    const langFromPath = getLanguageFromPath(location.pathname);
    
    if (langFromPath && langFromPath !== i18n.language) {
      i18n.changeLanguage(langFromPath);
    } else if (!langFromPath && i18n.language) {
      // If no language in URL, add current language
      navigate(addLanguageToPath(location.pathname, i18n.language as SupportedLanguage), { replace: true });
    }
  }, [location.pathname, i18n, navigate]);
  
  // Function to change language and update URL
  const changeLanguage = (language: SupportedLanguage) => {
    if (language !== i18n.language) {
      i18n.changeLanguage(language);
      navigate(addLanguageToPath(location.pathname, language), { replace: true });
    }
  };
  
  return {
    currentLanguage: i18n.language as SupportedLanguage,
    changeLanguage
  };
};

// Function to check for missing translation keys
export const findMissingTranslationKeys = (baseObj: any, compareObj: any, prefix = ''): string[] => {
  const missingKeys: string[] = [];
  
  Object.keys(baseObj).forEach(key => {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    
    if (typeof baseObj[key] === 'object' && baseObj[key] !== null) {
      // If it's an object, recurse
      if (!compareObj[key] || typeof compareObj[key] !== 'object') {
        missingKeys.push(currentPath);
      } else {
        missingKeys.push(...findMissingTranslationKeys(baseObj[key], compareObj[key], currentPath));
      }
    } else {
      // If it's a primitive value, check if it exists
      if (compareObj[key] === undefined) {
        missingKeys.push(currentPath);
      }
    }
  });
  
  return missingKeys;
};