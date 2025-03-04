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
        return '€';
      case 'en':
        return '€';
      case 'cs':
      default:
        return 'Kč';
    }
  };

  // Get hourly unit based on language
  const getHourlyUnit = () => {
    switch (currentLang) {
      case 'de':
        return '€/Std';
      case 'en':
        return '€/hr';
      case 'cs':
      default:
        return 'Kč/hod';
    }
  };

  const priceUnit = getPriceUnit();
  const hourlyUnit = getHourlyUnit();

  // Get prices based on language
  const getPrices = () => {
    if (currentLang === 'cs') {
      return {
        basicDiagnostics: `800 ${priceUnit}`,
        detailedDiagnostics: `1200 ${priceUnit}`,
        
        deletedRecovery: `1000 ${hourlyUnit}`,
        filesystemRecovery: `1200 ${hourlyUnit}`,
        compressedRecovery: `1100 ${hourlyUnit}`,
        raidRecovery: `1500 ${hourlyUnit}`,
        databaseRecovery: `1400 ${hourlyUnit}`,
        
        electronicsRepair: `1800 ${hourlyUnit}`,
        headsReplacement: `2500 ${hourlyUnit}`,
        mechanicsRepair: `2200 ${hourlyUnit}`,
        bgaRepair: `2800 ${hourlyUnit}`,
        romEmulator: `2400 ${hourlyUnit}`,
        serviceArea: `2600 ${hourlyUnit}`,
        
        pc3000Work: `2200 ${hourlyUnit}`,
        nandReconstruction: `2500 ${hourlyUnit}`,
        securityChips: `3000 ${hourlyUnit}`,
        mcmtTables: `2800 ${hourlyUnit}`,
        firmwareAnalysis: `2600 ${hourlyUnit}`,
        reverseEngineering: `2400 ${hourlyUnit}`,
        damagedService: `2700 ${hourlyUnit}`,
        
        consulting: `800 ${hourlyUnit}`,
        backup: `500 ${hourlyUnit}`,
        encryption: `700 ${hourlyUnit}`
      };
    } else {
      // Euro prices (converted and rounded to end with 0 or 5)
      return {
        basicDiagnostics: `30 ${priceUnit}`,
        detailedDiagnostics: `50 ${priceUnit}`,
        
        deletedRecovery: `40 ${hourlyUnit}`,
        filesystemRecovery: `50 ${hourlyUnit}`,
        compressedRecovery: `45 ${hourlyUnit}`,
        raidRecovery: `60 ${hourlyUnit}`,
        databaseRecovery: `55 ${hourlyUnit}`,
        
        electronicsRepair: `70 ${hourlyUnit}`,
        headsReplacement: `100 ${hourlyUnit}`,
        mechanicsRepair: `90 ${hourlyUnit}`,
        bgaRepair: `110 ${hourlyUnit}`,
        romEmulator: `95 ${hourlyUnit}`,
        serviceArea: `105 ${hourlyUnit}`,
        
        pc3000Work: `90 ${hourlyUnit}`,
        nandReconstruction: `100 ${hourlyUnit}`,
        securityChips: `120 ${hourlyUnit}`,
        mcmtTables: `110 ${hourlyUnit}`,
        firmwareAnalysis: `105 ${hourlyUnit}`,
        reverseEngineering: `95 ${hourlyUnit}`,
        damagedService: `110 ${hourlyUnit}`,
        
        consulting: `30 ${hourlyUnit}`,
        backup: `20 ${hourlyUnit}`,
        encryption: `30 ${hourlyUnit}`
      };
    }
  };

  const prices = getPrices();

  const sections: PriceSection[] = [
    {
      icon: <Tool className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.diagnostics.title'),
      items: [
        { title: t('pricing.serviceList.sections.diagnostics.items.basic'), price: prices.basicDiagnostics },
        { title: t('pricing.serviceList.sections.diagnostics.items.detailed'), price: prices.detailedDiagnostics }
        // "Development of data recovery plan" item removed as requested
      ]
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.software.title'),
      items: [
        { title: t('pricing.serviceList.sections.software.items.deleted'), price: prices.deletedRecovery },
        { title: t('pricing.serviceList.sections.software.items.filesystem'), price: prices.filesystemRecovery },
        { title: t('pricing.serviceList.sections.software.items.compressed'), price: prices.compressedRecovery },
        { title: t('pricing.serviceList.sections.software.items.raid'), price: prices.raidRecovery },
        { title: t('pricing.serviceList.sections.software.items.database'), price: prices.databaseRecovery }
      ]
    },
    {
      icon: <Tool className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.hardware.title'),
      items: [
        { title: t('pricing.serviceList.sections.hardware.items.electronics'), price: prices.electronicsRepair },
        { title: t('pricing.serviceList.sections.hardware.items.heads'), price: prices.headsReplacement },
        { title: t('pricing.serviceList.sections.hardware.items.mechanics'), price: prices.mechanicsRepair },
        { title: t('pricing.serviceList.sections.hardware.items.bga'), price: prices.bgaRepair },
        { title: t('pricing.serviceList.sections.hardware.items.rom'), price: prices.romEmulator },
        { title: t('pricing.serviceList.sections.hardware.items.service'), price: prices.serviceArea }
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: t('pricing.serviceList.sections.specialized.title'),
      items: [
        { title: t('pricing.serviceList.sections.specialized.items.pc3000'), price: prices.pc3000Work },
        { title: t('pricing.serviceList.sections.specialized.items.nand'), price: prices.nandReconstruction },
        { title: t('pricing.serviceList.sections.specialized.items.security'), price: prices.securityChips },
        { title: t('pricing.serviceList.sections.specialized.items.mcmt'), price: prices.mcmtTables },
        { title: t('pricing.serviceList.sections.specialized.items.firmware'), price: prices.firmwareAnalysis },
        { title: t('pricing.serviceList.sections.specialized.items.reverse'), price: prices.reverseEngineering },
        { title: t('pricing.serviceList.sections.specialized.items.damaged'), price: prices.damagedService }
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
        { title: t('pricing.serviceList.sections.additional.items.consulting'), price: prices.consulting },
        { title: t('pricing.serviceList.sections.additional.items.backup'), price: prices.backup },
        { title: t('pricing.serviceList.sections.additional.items.encryption'), price: prices.encryption }
        // Transport item removed as requested
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