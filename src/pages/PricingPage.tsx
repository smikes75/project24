import React from 'react';
import { HardDrive, Smartphone, Database, Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';

function PricingPage() {
  const { t } = useTranslation();

  const pricingTiers = [
    {
      icon: <HardDrive className="h-8 w-8 text-accent" />,
      title: t('pricing.hdd.title'),
      description: t('pricing.hdd.description'),
      price: t('pricing.hdd.price'),
      noSuccess: t('pricing.hdd.noSuccess'),
      features: [
        t('pricing.hdd.features.diagnosis'),
        t('pricing.hdd.features.recovery'),
        t('pricing.hdd.features.warranty'),
        t('pricing.hdd.features.support')
      ],
      link: '/services/hdd-recovery/case-studies'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: t('pricing.ssd.title'),
      description: t('pricing.ssd.description'),
      price: t('pricing.ssd.price'),
      noSuccess: t('pricing.ssd.noSuccess'),
      features: [
        t('pricing.ssd.features.diagnosis'),
        t('pricing.ssd.features.recovery'),
        t('pricing.ssd.features.warranty'),
        t('pricing.ssd.features.support')
      ],
      link: '/services/ssd-recovery/case-studies'
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: t('pricing.raid.title'),
      description: t('pricing.raid.description'),
      price: t('pricing.raid.price'),
      noSuccess: t('pricing.raid.noSuccess'),
      features: [
        t('pricing.raid.features.diagnosis'),
        t('pricing.raid.features.recovery'),
        t('pricing.raid.features.warranty'),
        t('pricing.raid.features.support')
      ],
      link: '/services/raid-systems/case-studies'
    },
    {
      icon: <Calculator className="h-8 w-8 text-accent" />,
      title: "Položkový ceník",
      description: "Detailní ceník všech našich služeb včetně doplňkových prací",
      price: "Kompletní\nceník",
      noSuccess: "Transparentní ceny",
      features: [
        "Základní diagnostika",
        "Specializované práce",
        "Express příplatky",
        "Doplňkové služby"
      ],
      link: '/pricing/service-list'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${t('pricing.title')} | DataHelp.eu`}
        description={t('pricing.description')}
        keywords="data recovery pricing, hdd recovery cost, ssd recovery price, raid recovery pricing"
        canonical="https://datahelp.eu/pricing"
      />
      
      <PageHeader
        title={t('pricing.title')}
        subtitle={t('pricing.subtitle')}
        backgroundImage="pricing-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t('pricing.description')}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Link 
              key={index} 
              to={tier.link}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-6">{tier.icon}</div>
                <h3 className="text-xl font-bold text-center mb-4 text-primary">{tier.title}</h3>
                <p className="text-gray-600 text-center mb-6">{tier.description}</p>
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-primary whitespace-pre-line">{tier.price}</p>
                  <p className="text-sm text-gray-500 mt-1">{tier.noSuccess}</p>
                </div>
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <FAQ />
      </div>
    </div>
  );
}

export default PricingPage;