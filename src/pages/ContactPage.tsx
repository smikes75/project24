import React from 'react';
import { Phone, Mail, MessageSquare, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Contact } from '../components/Contact';

function ContactPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataHelp.eu",
    "url": "https://datahelp.eu",
    "logo": "/DataHelp.eu.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+420 123 456 789",
      "contactType": "customer service",
      "areaServed": ["CZ", "DE", "AT", "SK"],
      "availableLanguage": ["cs", "en", "de"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jirsíkova 541/1",
      "addressLocality": "Prague",
      "postalCode": "186 00",
      "addressCountry": "CZ"
    }
  };

  const partners = [
    {
      country: 'DataHelp s.r.o.',
      city: 'Praha',
      address: 'Jirsíkova 541/1, 186 00 Praha 8 - Karlín',
      phone: '+420 775 220 440',
      email: 'info@datahelp.eu'
    },
    {
      country: 'Kreml & Co GesmbH',
      city: 'Wien',
      address: 'Gymnasiumstraße 42 / 5, 1180 Wien',
      phone: '+43 676 400 6666',
      email: 'office@kreml-edv.at'
    },
    {
      country: 'PRO.Laika spol. s r.o',
      city: 'Bratislava',
      address: 'Palackého 12, 811 02 Bratislava',
      phone: '+421 2 5441 4880',
      email: 'servis@prolaika.sk'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${t('contact.title')} | DataHelp.eu`}
        description={t('contact.subtitle')}
        keywords="data recovery contact, data recovery service, data recovery help"
        canonical={`https://datahelp.eu/${currentLang}/contact`}
        schema={schema}
      />
      
      <PageHeader
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        backgroundImage="contact-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-primary">{t('contact.form.title')}</h2>
            </div>
            <Contact />
          </div>

          {/* Partners Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-8">
              {t('contact.partners.title')}
            </h2>
            <div className="space-y-6">
              {partners.map((partner, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <div className="flex items-start space-x-4">
                    <Building className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">{partner.city}</h3>
                      <p className="text-sm text-accent mb-2">{partner.country}</p>
                      <p className="text-gray-600 mb-3 text-sm">{partner.address}</p>
                      <div className="space-y-1">
                        <p className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-accent" />
                          <a 
                            href={`tel:${partner.phone}`} 
                            className="text-gray-600 text-sm hover:text-primary transition-colors"
                          >
                            {partner.phone}
                          </a>
                        </p>
                        <p className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-accent" />
                          <a 
                            href={`mailto:${partner.email}`}
                            className="text-gray-600 text-sm hover:text-primary transition-colors"
                          >
                            {partner.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;