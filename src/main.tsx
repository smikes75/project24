import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';
import { initSentry, initPerformanceMonitoring, trackUserBehavior } from './utils/monitoring';
import { preloadCriticalImages } from './utils/imageUtils';
import { suppressResizeObserverErrors } from './utils/browserUtils';

// Initialize monitoring
initSentry();
initPerformanceMonitoring();
trackUserBehavior();

// Preload critical images
preloadCriticalImages();

// Suppress ResizeObserver warnings
suppressResizeObserverErrors();

// Create a diagnostic function to check for missing translations
if (import.meta.env.DEV) {
  import('./utils/i18nUtils').then(({ findMissingTranslationKeys }) => {
    import('./i18n/locales/en').then(({ en }) => {
      import('./i18n/locales/cs').then(({ cs }) => {
        console.log('Missing CS translations:', findMissingTranslationKeys(en, cs));
      });
      import('./i18n/locales/de').then(({ de }) => {
        console.log('Missing DE translations:', findMissingTranslationKeys(en, de));
      });
      import('./i18n/locales/it').then(({ it }) => {
        console.log('Missing IT translations:', findMissingTranslationKeys(en, it));
      });
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);