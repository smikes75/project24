import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import Plausible from 'plausible-tracker';
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

// Initialize Sentry
export const initSentry = () => {
  if (import.meta.env.PROD) {
    Sentry.init({
      dsn: "YOUR_SENTRY_DSN", // Replace with your Sentry DSN
      integrations: [new BrowserTracing()],
      tracesSampleRate: 0.2,
      environment: import.meta.env.MODE,
      beforeSend(event) {
        // Don't send events in development
        if (import.meta.env.DEV) {
          return null;
        }
        return event;
      },
    });
  }
};

// Initialize Plausible
export const plausible = Plausible({
  domain: 'datahelp.eu',
  trackLocalhost: false,
  apiHost: 'https://plausible.io',
});

// Track page views
export const trackPageview = (url: string) => {
  if (import.meta.env.PROD) {
    plausible.trackPageview({
      url: `https://datahelp.eu${url}`,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, props?: Record<string, string | number | boolean>) => {
  if (import.meta.env.PROD) {
    plausible.trackEvent(eventName, { props });
  }
};

// Performance monitoring
export const initPerformanceMonitoring = () => {
  // Core Web Vitals
  onCLS(metric => {
    console.log('CLS:', metric.value);
    Sentry.captureMessage(`CLS: ${metric.value}`, {
      level: metric.value > 0.1 ? 'warning' : 'info',
      tags: { metric: 'cls' },
    });
  });

  onFID(metric => {
    console.log('FID:', metric.value);
    Sentry.captureMessage(`FID: ${metric.value}`, {
      level: metric.value > 100 ? 'warning' : 'info',
      tags: { metric: 'fid' },
    });
  });

  onLCP(metric => {
    console.log('LCP:', metric.value);
    Sentry.captureMessage(`LCP: ${metric.value}`, {
      level: metric.value > 2500 ? 'warning' : 'info',
      tags: { metric: 'lcp' },
    });
  });

  // Additional metrics
  onFCP(metric => {
    console.log('FCP:', metric.value);
    Sentry.captureMessage(`FCP: ${metric.value}`, {
      level: metric.value > 1800 ? 'warning' : 'info',
      tags: { metric: 'fcp' },
    });
  });

  onTTFB(metric => {
    console.log('TTFB:', metric.value);
    Sentry.captureMessage(`TTFB: ${metric.value}`, {
      level: metric.value > 600 ? 'warning' : 'info',
      tags: { metric: 'ttfb' },
    });
  });
};

// User behavior tracking
export const trackUserBehavior = () => {
  // Track clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const clickableElements = ['button', 'a', 'input[type="submit"]'];
    
    if (clickableElements.some(selector => target.matches(selector))) {
      trackEvent('click', {
        element: target.tagName.toLowerCase(),
        text: target.textContent || '',
        path: window.location.pathname,
      });
    }
  });

  // Track form submissions
  document.addEventListener('submit', (e) => {
    const form = e.target as HTMLFormElement;
    trackEvent('form_submit', {
      formId: form.id || 'unknown',
      path: window.location.pathname,
    });
  });

  // Track scroll depth
  let maxScroll = 0;
  document.addEventListener('scroll', () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
      maxScroll = scrollPercentage;
      trackEvent('scroll_depth', {
        percentage: scrollPercentage,
        path: window.location.pathname,
      });
    }
  });
};

// Error tracking
export const trackError = (error: Error, errorInfo?: Record<string, any>) => {
  if (import.meta.env.PROD) {
    Sentry.captureException(error, {
      extra: errorInfo,
    });
  } else {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }
};