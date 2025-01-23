import React from 'react';
import { Database, CheckCircle, Clock, FileText } from 'lucide-react';
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

function RAIDCaseStudies() {
  const { t } = useTranslation();

  const caseStudies: CaseStudy[] = [
    {
      title: "Havárie RAID 5 serveru s účetními daty",
      problem: "Selhání dvou disků v RAID 5 poli současně. Server obsahoval kompletní účetnictví a ERP systém střední výrobní firmy.",
      solution: "Specializovanou diagnostikou jsme identifikovali příčinu selhání a obnovili data z poškozených disků. Následně jsme rekonstruovali RAID pole a obnovili přístup k datům.",
      result: "Kompletní obnova účetnictví a ERP dat bez ztráty transakcí.",
      duration: "7 dní",
      recoveryRate: "100%",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
    },
    {
      title: "Ztráta konfigurace QNAP NAS",
      problem: "Po aktualizaci firmware došlo ke ztrátě konfigurace RAID. NAS obsahoval 8 disků v RAID 6 s kritickými projektovými daty.",
      solution: "Provedli jsme analýzu původní konfigurace a pomocí specializovaného software rekonstruovali RAID pole včetně všech parametrů.",
      result: "Úspěšná obnova všech projektových dat a dokumentace.",
      duration: "5 dní",
      recoveryRate: "99%",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },
    {
      title: "Ransomware na Synology NAS",
      problem: "Firemní NAS byl zasažen ransomwarem, který zašifroval kritická data. Zálohy byly neúplné.",
      solution: "Pomocí forenzní analýzy jsme identifikovali a obnovili původní data ze snapshots a žurnálových souborů.",
      result: "Záchrana 95% dat bez nutnosti platit výkupné.",
      duration: "6 dní",
      recoveryRate: "95%",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Případové studie - RAID a NAS systémy"
        subtitle="Reálné příklady úspěšné záchrany dat z poškozených RAID polí a NAS serverů"
        backgroundImage="raid-recovery.jpg"
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
            <Database className="h-5 w-5" />
            <span>Máte podobný problém? Kontaktujte nás</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RAIDCaseStudies;