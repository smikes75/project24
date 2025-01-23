import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Clock, PenTool as Tool, Cpu, Zap, Plus } from 'lucide-react';

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
  const sections: PriceSection[] = [
    {
      icon: <Tool className="h-6 w-6 text-primary" />,
      title: 'Diagnostika a analýza',
      items: [
        { title: 'Základní diagnostika média (určení typu poškození)', price: '800 Kč/hod' },
        { title: 'Detailní analýza poškození a možností obnovy', price: '1200 Kč/hod' },
        { title: 'Vypracování postupu záchrany dat', price: '900 Kč/hod' }
      ]
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: 'Softwarová záchrana dat',
      items: [
        { title: 'Obnova smazaných souborů', price: '1000 Kč/hod' },
        { title: 'Oprava poškozených souborových systémů', price: '1200 Kč/hod' },
        { title: 'Dekomprese a obnova komprimovaných souborů', price: '1100 Kč/hod' },
        { title: 'Převod dat z poškozeného RAID pole', price: '1500 Kč/hod' },
        { title: 'Obnova dat z poškozených databází', price: '1400 Kč/hod' }
      ]
    },
    {
      icon: <Tool className="h-6 w-6 text-primary" />,
      title: 'Hardwarová záchrana dat',
      items: [
        { title: 'Výměna elektroniky pevného disku', price: '1800 Kč/hod' },
        { title: 'Výměna hlav v čistém prostředí', price: '2500 Kč/hod' },
        { title: 'Mikromanipulace s mechanikou HDD', price: '2200 Kč/hod' },
        { title: 'Pájení BGA čipů a výměna firmware čipů', price: '2800 Kč/hod' },
        { title: 'Práce s ROM emulátorem', price: '2400 Kč/hod' },
        { title: 'Oprava servisní oblasti disku', price: '2600 Kč/hod' }
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Specializované služby',
      items: [
        { title: 'Práce s PC-3000 UDMA/SSD/Flash', price: '2200 Kč/hod' },
        { title: 'Rekonstrukce NAND translátoru', price: '2500 Kč/hod' },
        { title: 'Analýza a oprava T2/T3 security čipů', price: '3000 Kč/hod' },
        { title: 'Rekonstrukce MCMT tabulek', price: '2800 Kč/hod' },
        { title: 'Analýza a modifikace firmware', price: '2600 Kč/hod' },
        { title: 'Reverse engineering souborových systémů', price: '2400 Kč/hod' },
        { title: 'Práce s poškozenými servisními daty', price: '2700 Kč/hod' }
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Expresní služby',
      items: [
        { title: 'Příplatek za expresní zpracování (do 24 hodin)', price: '+100%' },
        { title: 'Práce mimo pracovní dobu', price: '+50%' },
        { title: 'Víkendové a sváteční práce', price: '+75%' }
      ]
    },
    {
      icon: <Plus className="h-6 w-6 text-primary" />,
      title: 'Dodatečné služby',
      items: [
        { title: 'Konzultace a poradenství', price: '800 Kč/hod' },
        { title: 'Záloha zachráněných dat na nové médium', price: '500 Kč/hod' },
        { title: 'Šifrování zachráněných dat', price: '700 Kč/hod' },
        { title: 'Doprava k zákazníkovi', price: '12 Kč/km + 500 Kč/hod' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Položkový ceník | DataHelp.eu"
        description="Detailní ceník služeb záchrany dat včetně diagnostiky, softwarové a hardwarové záchrany dat, specializovaných služeb a expresního zpracování."
        keywords="ceník záchrana dat, ceny obnova dat, diagnostika dat cena, expresní záchrana dat"
      />

      <PageHeader
        title="Položkový ceník služeb"
        subtitle="Transparentní ceník všech našich služeb včetně specializovaných prací"
        backgroundImage="pricing-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Minimální účtovaná doba je 1 hodina. Ceny jsou uvedeny bez DPH. Ceny nezahrnují náhradní díly a média pro zálohu dat.
              Přesná cena bude stanovena po základní diagnostice. V případě neúspěšné záchrany dat se účtuje pouze diagnostika.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
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