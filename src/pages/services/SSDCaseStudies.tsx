import React from 'react';
import { Smartphone, CheckCircle, Clock, FileText } from 'lucide-react';
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

function SSDCaseStudies() {
  const { t } = useTranslation();

  const caseStudies: CaseStudy[] = [
    {
      title: "Poškozený řadič Samsung NVMe SSD",
      problem: "SSD disk přestal být detekován po aktualizaci firmware. Obsahoval kritická data vývojářského týmu včetně zdrojových kódů.",
      solution: "Provedli jsme bypass poškozeného řadiče a přímé čtení NAND čipů. Data byla následně rekonstruována pomocí specializovaného softwaru.",
      result: "Obnovení kompletní adresářové struktury a všech zdrojových kódů.",
      duration: "4 dny",
      recoveryRate: "100%",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea"
    },
    {
      title: "Selhání flash paměti USB disku",
      problem: "USB flash disk vykazoval pouze část své kapacity a soubory byly poškozené. Obsahoval důležité pracovní prezentace.",
      solution: "Pomocí PC-3000 Flash jsme analyzovali poškozené bloky a provedli rekonstrukci souborového systému.",
      result: "Záchrana všech prezentací a dokumentů v původní kvalitě.",
      duration: "2 dny",
      recoveryRate: "95%",
      image: "https://images.unsplash.com/photo-1601737487795-dab272f52420"
    },
    {
      title: "Zašifrovaný firemní SSD Kingston",
      problem: "SSD disk byl zašifrovaný a po hardwarovém selhání nebylo možné získat přístup k datům. Obsahoval účetní databázi.",
      solution: "Opravili jsme fyzické poškození a pomocí specializovaných nástrojů obnovili přístup k zašifrovaným datům.",
      result: "Úspěšná obnova celé účetní databáze včetně všech transakcí.",
      duration: "6 dní",
      recoveryRate: "99%",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Případové studie - Záchrana SSD"
        subtitle="Reálné příklady úspěšné záchrany dat z poškozených SSD disků a flash pamětí"
        backgroundImage="ssd-recovery.jpg"
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
            <Smartphone className="h-5 w-5" />
            <span>Máte podobný problém? Kontaktujte nás</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SSDCaseStudies;