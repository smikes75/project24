import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, any>;
}

export function SEO({ 
  title, 
  description, 
  keywords,
  canonical = 'https://datahelp.eu',
  ogImage = '/DataHelp.eu.png',
  ogType = 'website',
  schema
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const alternateUrls = {
    en: 'https://datahelp.eu/en',
    de: 'https://datahelp.eu/de',
    cs: 'https://datahelp.eu/cs'
  };

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <link rel="canonical" href={canonical} />
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link 
          key={lang}
          rel="alternate" 
          hrefLang={lang} 
          href={url} 
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href="https://datahelp.eu" />
      
      <meta property="og:locale" content={currentLang} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}