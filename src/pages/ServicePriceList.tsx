import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Clock, PenTool as Tool, Cpu, Zap, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PriceItem {
  title: string;
  price: string;
}

interface PriceSection {
  icon: React.ReactNode;
  title: string;
  items: PriceItem[];
}

function ServicePriceList() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Adjust prices based on language
  const getPriceUnit = () => {
    switch (currentLang) {
      case 'de':
      case 'en':
        return '€';
      case 'cs':
      default:
        return 'Kč';
    }
  };

  const priceUnit = getPriceUnit();
  const hourlyUnit = currentLang === 'cs' ? `${priceUnit}/hod` : `${priceUnit}/h`;

  const sections: PriceSection[] = [
    {
      icon: <Tool className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.diagnostics.title'),
      items: [
        { title: t('pricing.serviceList.sections.diagnostics.items.basic'), price: `800 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.diagnostics.items.detailed'), price: `1200 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.diagnostics.items.planning'), price: `900 ${hourlyUnit}` }
      ]
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.software.title'),
      items: [
        { title: t('pricing.serviceList.sections.software.items.deleted'), price: `1000 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.software.items.filesystem'), price: `1200 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.software.items.compressed'), price: `1100 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.software.items.raid'), price: `1500 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.software.items.database'), price: `1400 ${hourlyUnit}` }
      ]
    },
    {
      icon: <Tool className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.hardware.title'),
      items: [
        { title: t('pricing.serviceList.sections.hardware.items.electronics'), price: `1800 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.hardware.items.heads'), price: `2500 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.hardware.items.mechanics'), price: `2200 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.hardware.items.bga'), price: `2800 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.hardware.items.rom'), price: `2400 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.hardware.items.service'), price: `2600 ${hourlyUnit}` }
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.specialized.title'),
      items: [
        { title: t('pricing.serviceList.sections.specialized.items.pc3000'), price: `2200 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.specialized.items.nand'), price: `2500 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.specialized.items.security'), price: `3000 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.specialized.items.mcmt'), price: `2800 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.specialized.items.firmware'), price: `2600 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.specialized.items.reverse'), price: `2400 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.specialized.items.damaged'), price: `2700 ${hourlyUnit}` }
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.express.title'),
      items: [
        { title: t('pricing.serviceList.sections.express.items.h24'), price: '+100%' },
        { title: t('pricing.serviceList.sections.express.items.overtime'), price: '+50%' },
        { title: t('pricing.serviceList.sections.express.items.weekend'), price: '+75%' }
      ]
    },
    {
      icon: <Plus className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.additional.title'),
      items: [
        { title: t('pricing.serviceList.sections.additional.items.consulting'), price: `800 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.additional.items.backup'), price: `500 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.additional.items.encryption'), price: `700 ${hourlyUnit}` },
        { title: t('pricing.serviceList.sections.additional.items.transport'), price: currentLang === 'cs' ? `12 Kč/km + 500 Kč/hod` : `1 ${priceUnit}/km + 50 ${priceUnit}/h` }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${t('pricing.serviceList.title')} | DataHelp.eu`}
        description={t('pricing.serviceList.description')}
        keywords="ceník záchrana dat, ceny obnova dat, diagnostika dat cena, expresní záchrana dat"
        canonical={`https://datahelp.eu/${currentLang}/pricing/service-list`}
      />

      <PageHeader
        title={t('pricing.serviceList.title')}
        subtitle={t('pricing.serviceList.subtitle')}
        backgroundImage="pricing-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              {t('pricing.serviceList.pricing.note')}
            </p>
          </div>
        </div>

        <div className=" grid gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                {section.icon}
                <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
              </div>
              
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.title}</span>
                    <div className="flex-shrink-0">
                      <span className="font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicePriceList;