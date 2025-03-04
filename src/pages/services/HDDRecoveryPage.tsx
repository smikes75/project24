import React from 'react';
import { HardDrive, Shield, Wrench, AlertCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { backgroundImages } from '../../utils/imageUtils';
import { SEO } from '../../components/SEO';

function HDDRecoveryPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const features = [
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: t('services.hdd.features.mechanical'),
      description: t('services.hdd.features.mechanicalDesc')
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-accent" />,
      title: t('services.hdd.features.electronic'),
      description: t('services.hdd.features.electronicDesc')
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: t('services.hdd.features.logical'),
      description: t('services.hdd.features.logicalDesc')
    }
  ];

  // Translate case studies link text based on language
  const getCaseStudiesText = () => {
    switch (currentLang) {
      case 'en':
        return {
          title: "Case Studies",
          description: "View real examples of successful data recovery from damaged hard drives"
        };
      case 'de':
        return {
          title: "Fallstudien",
          description: "Sehen Sie sich reale Beispiele erfolgreicher Datenrettung von beschädigten Festplatten an"
        };
      case 'cs':
      default:
        return {
          title: "Případové studie",
          description: "Prohlédněte si reálné příklady úspěšné záchrany dat z poškozených pevných disků"
        };
    }
  };

  const caseStudiesText = getCaseStudiesText();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${t('services.hdd.title')} | DataHelp.eu`}
        description={t('services.hdd.desc')}
        keywords={t('services.hdd.keywords.recovery')}
        canonical="https://datahelp.eu/services/hdd-recovery"
        ogImage="/images/backgrounds/hdd-recovery.jpg"
      />
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url("${backgroundImages.hdd}")`
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(27, 56, 122, 1) 50%, rgba(27, 56, 122, 0) 100%)'
            }}
          ></div>
        </div>

        <div className="relative z-10 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4 mb-6">
              <HardDrive className="h-12 w-12" />
              <h1 className="text-4xl font-bold">{t('services.hdd.title')}</h1>
            </div>
            <p className="text-xl">{t('services.hdd.desc')}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">{t('services.hdd.supported.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('services.hdd.supported.devices')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.hdd.supported.sata')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.hdd.supported.ide')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.hdd.supported.scsi')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{t('services.hdd.supported.external')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('services.hdd.supported.manufacturers')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Western Digital, Seagate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Toshiba, Samsung</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Hitachi, Fujitsu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Maxtor, IBM, Quantum </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Case Studies Link */}
        <Link 
          to={`/${currentLang}/services/hdd-recovery/case-studies`}
          className="block bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">{caseStudiesText.title}</h2>
              <p className="text-gray-600">{caseStudiesText.description}</p>
            </div>
            <ArrowRight className="h-8 w-8 text-accent" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HDDRecoveryPage;