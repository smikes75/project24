import { useTranslation } from 'react-i18next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  canonical?: string;
  schema?: Record<string, any>;
}

// Base schema for organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DataHelp.eu",
  "url": "https://datahelp.eu",
  "logo": "https://datahelp.eu/DataHelp.eu.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jirsíkova 541/1",
    "addressLocality": "Prague",
    "postalCode": "186 00",
    "addressCountry": "CZ"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+420-123-456-789",
    "contactType": "customer service",
    "availableLanguage": ["en", "cs", "de"]
  }
};

// SEO configurations for each page
const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: "DataHelp.eu - Professional Data Recovery | HDD, SSD, RAID",
    description: "Professional data recovery service with over 20 years of experience. Specializing in HDD, SSD, and RAID recovery. No data, no charge policy.",
    keywords: "data recovery, hard drive recovery, ssd recovery, raid recovery, professional data recovery",
    schema: organizationSchema
  },
  services: {
    title: "Data Recovery Services | DataHelp.eu",
    description: "Comprehensive data recovery services for HDD, SSD, RAID systems and business solutions. Specialized laboratory with over 20 years of experience.",
    keywords: "data recovery services, hdd recovery, ssd recovery, raid recovery, business data recovery",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Data Recovery Services",
      "provider": {
        "@type": "Organization",
        "name": "DataHelp.eu"
      },
      "serviceType": "Data Recovery",
      "areaServed": ["CZ", "DE", "AT", "SK"]
    }
  },
  about: {
    title: "About Us | DataHelp.eu",
    description: "Professional data recovery with over 20 years of experience. Specialized laboratory, certified technicians and state-of-the-art technology for data recovery.",
    keywords: "about datahelp, data recovery experience, expert team, data recovery lab, certified specialists, data security, professional data recovery",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": organizationSchema
    }
  },
  contact: {
    title: "Contact Us | DataHelp.eu",
    description: "Contact our data recovery experts. 24/7 emergency service available. Professional data recovery laboratory in Prague.",
    keywords: "contact datahelp, data recovery contact, data recovery service, data recovery help",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": organizationSchema
    }
  },
  faq: {
    title: "FAQ | DataHelp.eu",
    description: "Frequently asked questions about data recovery services. Learn about our process, pricing, and security measures.",
    keywords: "data recovery faq, data recovery questions, hdd recovery faq, ssd recovery faq",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is the final price calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The final price depends on the type and extent of damage, required parts, and recovery complexity."
          }
        },
        // Add more FAQ items as needed
      ]
    }
  }
};

// Hook for using SEO configuration
export function useSEO(page: keyof typeof seoConfigs) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const baseConfig = seoConfigs[page];

  // Get translated values if they exist
  const translatedConfig = {
    title: t(`seo.${page}.title`, baseConfig.title),
    description: t(`seo.${page}.description`, baseConfig.description),
    keywords: t(`seo.${page}.keywords`, baseConfig.keywords),
  };

  return {
    ...baseConfig,
    ...translatedConfig,
    canonical: `https://datahelp.eu/${currentLang}/${page === 'home' ? '' : page}`,
    alternateUrls: {
      cs: `https://datahelp.eu/cs/${page === 'home' ? '' : page}`,
      en: `https://datahelp.eu/en/${page === 'home' ? '' : page}`,
      de: `https://datahelp.eu/de/${page === 'home' ? '' : page}`,
    }
  };
}