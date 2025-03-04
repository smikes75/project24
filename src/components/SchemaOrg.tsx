import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function SchemaOrg() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DataHelp.eu",
    "image": "/DataHelp.eu.png",
    "description": {
      "@type": "rdf:Alt",
      "cs": "Profesionální obnova dat z poškozených médií",
      "en": "Professional data recovery from damaged media",
      "de": "Professionelle Datenrettung von beschädigten Medien"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jirsíkova 541/1",
      "addressLocality": "Praha",
      "postalCode": "186 00",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.0922,
      "longitude": 14.4507
    },
    "url": {
      "@type": "rdf:Alt",
      "cs": "https://datahelp.eu/cs",
      "en": "https://datahelp.eu/en",
      "de": "https://datahelp.eu/de"
    },
    "telephone": "+420123456789",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "inLanguage": [
      {
        "@type": "Language",
        "name": "Czech",
        "alternateName": "cs"
      },
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "German",
        "alternateName": "de"
      },
{
  "@type": "Service",
  "name": "Data Recovery Services",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "offerCount": "4",
    "offers": [
      {
        "@type": "Offer",
        "name": "HDD Recovery",
        "price": "350",
        "priceCurrency": "EUR",
        "description": "Data recovery from damaged hard drives"
      },
      {
        "@type": "Offer",
        "name": "SSD Recovery", 
        "price": "250",
        "priceCurrency": "EUR",
        "description": "Data recovery from SSD drives"
      },
      {
        "@type": "Offer",
        "name": "RAID Recovery",
        "description": "Data recovery from RAID systems"
      },
      {
        "@type": "Offer",
        "name": "Business Solutions",
        "description": "Enterprise data recovery solutions"
      }
    ]
  }
}
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}