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
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Case studies for different languages
  const getCaseStudies = (): CaseStudy[] => {
    switch (currentLang) {
      case 'en':
        return [
          {
            title: "RAID 5 Server Failure with Accounting Data",
            problem: "Simultaneous failure of two disks in a RAID 5 array. The server contained complete accounting and ERP system of a medium-sized manufacturing company.",
            solution: "Using specialized diagnostics, we identified the cause of failure and recovered data from the damaged disks. We then reconstructed the RAID array and restored access to the data.",
            result: "Complete recovery of accounting and ERP data without loss of transactions.",
            duration: "7 days",
            recoveryRate: "100%",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          },
          {
            title: "QNAP NAS Configuration Loss",
            problem: "After a firmware update, the RAID configuration was lost. The NAS contained 8 disks in RAID 6 with critical project data.",
            solution: "We analyzed the original configuration and used specialized software to reconstruct the RAID array including all parameters.",
            result: "Successful recovery of all project data and documentation.",
            duration: "5 days",
            recoveryRate: "99%",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          },
          {
            title: "Ransomware on Synology NAS",
            problem: "A company NAS was hit by ransomware that encrypted critical data. Backups were incomplete.",
            solution: "Using forensic analysis, we identified and recovered original data from snapshots and journal files.",
            result: "Recovery of 95% of data without paying the ransom.",
            duration: "6 days",
            recoveryRate: "95%",
            image: "https://images.unsplash.com/photo-1588508065123-287b28e013da"
          }
        ];
      case 'de':
        return [
          {
            title: "RAID 5 Server-Ausfall mit Buchhaltungsdaten",
            problem: "Gleichzeitiger Ausfall von zwei Festplatten in einem RAID 5-Array. Der Server enthielt die komplette Buchhaltung und das ERP-System eines mittelständischen Produktionsunternehmens.",
            solution: "Mit spezialisierter Diagnostik haben wir die Ausfallursache identifiziert und Daten von den beschädigten Festplatten wiederhergestellt. Anschließend haben wir das RAID-Array rekonstruiert und den Zugriff auf die Daten wiederhergestellt.",
            result: "Vollständige Wiederherstellung der Buchhaltungs- und ERP-Daten ohne Transaktionsverluste.",
            duration: "7 Tage",
            recoveryRate: "100%",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          },
          {
            title: "QNAP NAS Konfigurationsverlust",
            problem: "Nach einem Firmware-Update ging die RAID-Konfiguration verloren. Das NAS enthielt 8 Festplatten im RAID 6 mit kritischen Projektdaten.",
            solution: "Wir haben die ursprüngliche Konfiguration analysiert und spezialisierte Software verwendet, um das RAID-Array einschließlich aller Parameter zu rekonstruieren.",
            result: "Erfolgreiche Wiederherstellung aller Projektdaten und Dokumentation.",
            duration: "5 Tage",
            recoveryRate: "99%",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          },
          {
            title: "Ransomware auf Synology NAS",
            problem: "Ein Unternehmens-NAS wurde von Ransomware befallen, die kritische Daten verschlüsselte. Backups waren unvollständig.",
            solution: "Mittels forensischer Analyse haben wir die Originaldaten aus Snapshots und Journal-Dateien identifiziert und wiederhergestellt.",
            result: "Wiederherstellung von 95% der Daten ohne Lösegeld zu zahlen.",
            duration: "6 Tage",
            recoveryRate: "95%",
            image: "https://images.unsplash.com/photo-1588508065123-287b28e013da"
          }
        ];
      case 'cs':
      default:
        return [
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
    }
  };

  const caseStudies = getCaseStudies();

  // Translate UI elements
  const getTranslatedLabels = () => {
    switch (currentLang) {
      case 'en':
        return {
          title: "Case Studies - RAID and NAS Systems",
          subtitle: "Real examples of successful data recovery from damaged RAID arrays and NAS servers",
          problem: "Problem:",
          solution: "Solution:",
          result: "Result:",
          duration: "Recovery time:",
          recoveryRate: "Success rate:",
          documentation: "Complete documentation",
          contactUs: "Have a similar problem? Contact us"
        };
      case 'de':
        return {
          title: "Fallstudien - RAID und NAS-Systeme",
          subtitle: "Reale Beispiele erfolgreicher Datenrettung von beschädigten RAID-Arrays und NAS-Servern",
          problem: "Problem:",
          solution: "Lösung:",
          result: "Ergebnis:",
          duration: "Bearbeitungszeit:",
          recoveryRate: "Erfolgsrate:",
          documentation: "Vollständige Dokumentation",
          contactUs: "Haben Sie ein ähnliches Problem? Kontaktieren Sie uns"
        };
      case 'cs':
      default:
        return {
          title: "Případové studie - RAID a NAS systémy",
          subtitle: "Reálné příklady úspěšné záchrany dat z poškozených RAID polí a NAS serverů",
          problem: "Problém:",
          solution: "Řešení:",
          result: "Výsledek:",
          duration: "Doba řešení:",
          recoveryRate: "Úspěšnost:",
          documentation: "Kompletní dokumentace",
          contactUs: "Máte podobný problém? Kontaktujte nás"
        };
    }
  };

  const labels = getTranslatedLabels();

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={labels.title}
        subtitle={labels.subtitle}
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
                      <span>{labels.duration} {study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>{labels.recoveryRate} {study.recoveryRate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-accent" />
                      <span>{labels.documentation}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{labels.problem}</h3>
                      <p className="text-gray-600">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{labels.solution}</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{labels.result}</h3>
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
            to={`/${currentLang}/contact`}
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition"
          >
            <Database className="h-5 w-5" />
            <span>{labels.contactUs}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RAIDCaseStudies;