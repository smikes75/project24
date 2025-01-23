import React from 'react';
import { HardDrive, CheckCircle, Clock, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/PageHeader';
import { Link } from 'react-router-dom';

interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  result: string;
  duration: string;
  recoveryRate: string;
  image: string;
}

function HDDCaseStudies() {
  const { t } = useTranslation();

  const caseStudies: CaseStudy[] = [
    {
      title: "Mechanické poškození plotny Western Digital",
      problem: "Disk po pádu vykazoval hlasité zvuky a nebyl detekován systémem. Klient potřeboval obnovit důležité firemní dokumenty a účetnictví.",
      solution: "V čistém prostředí jsme provedli výměnu poškozených hlav a rekonstrukci servisní zóny. Následně jsme použili specializovaný hardware pro obnovu dat.",
      result: "Úspěšně jsme obnovili 98% dat včetně všech kritických dokumentů.",
      duration: "5 dní",
      recoveryRate: "98%",
      image: "https://images.unsplash.com/photo-1601737487795-dab272f52420"
    },
    {
      title: "Selhání elektroniky Seagate Barracuda",
      problem: "Disk se nerozběhl kvůli vadě elektroniky. Obsahoval kritická výrobní data průmyslového podniku.",
      solution: "Diagnostikovali jsme závadu na PCB a provedli transplantaci komponent. Poté jsme pomocí PC-3000 obnovili přístup k datům.",
      result: "Kompletní obnova všech dat bez ztráty integrity.",
      duration: "3 dny",
      recoveryRate: "100%",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea"
    },
    {
      title: "Poškození firmware Toshiba",
      problem: "Disk byl poškozen po výpadku proudu, firmware byl částečně přepsán. Obsahoval rodinné fotografie za posledních 10 let.",
      solution: "Pomocí specializovaného vybavení jsme obnovili původní firmware a následně provedli rekonstrukci systémové oblasti.",
      result: "Zachránili jsme všechny fotografie a osobní dokumenty.",
      duration: "4 dny", 
      recoveryRate: "99%",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Případové studie - Záchrana HDD"
        subtitle="Reálné příklady úspěšné záchrany dat z poškozených pevných disků"
        backgroundImage="hdd-recovery.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">{study.title}</h2>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span>Doba řešení: {study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Úspěšnost: {study.recoveryRate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-accent" />
                      <span>Kompletní dokumentace</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">Problém:</h3>
                      <p className="text-gray-600">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">Řešení:</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">Výsledek:</h3>
                      <p className="text-gray-600">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition"
          >
            <HardDrive className="h-5 w-5" />
            <span>Máte podobný problém? Kontaktujte nás</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HDDCaseStudies;