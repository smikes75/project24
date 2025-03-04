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
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Case studies for different languages
  const getCaseStudies = (): CaseStudy[] => {
    switch (currentLang) {
      case 'en':
        return [
          {
            title: "Damaged Samsung NVMe SSD Controller",
            problem: "The SSD drive stopped being detected after a firmware update. It contained critical data from a development team including source code.",
            solution: "We performed a bypass of the damaged controller and direct reading of NAND chips. The data was then reconstructed using specialized software.",
            result: "Recovery of the complete directory structure and all source code.",
            duration: "4 days",
            recoveryRate: "100%",
            image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea"
          },
          {
            title: "USB Flash Drive Flash Memory Failure",
            problem: "The USB flash drive showed only part of its capacity and files were corrupted. It contained important work presentations.",
            solution: "Using PC-3000 Flash, we analyzed the damaged blocks and reconstructed the file system.",
            result: "Recovery of all presentations and documents in original quality.",
            duration: "2 days",
            recoveryRate: "95%",
            image: "https://images.unsplash.com/photo-1601737487795-dab272f52420"
          },
          {
            title: "Encrypted Corporate Kingston SSD",
            problem: "The SSD was encrypted and after hardware failure, it was impossible to access the data. It contained an accounting database.",
            solution: "We repaired the physical damage and used specialized tools to restore access to the encrypted data.",
            result: "Successful recovery of the entire accounting database including all transactions.",
            duration: "6 days",
            recoveryRate: "99%",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          }
        ];
      case 'de':
        return [
          {
            title: "Beschädigter Samsung NVMe SSD-Controller",
            problem: "Die SSD wurde nach einem Firmware-Update nicht mehr erkannt. Sie enthielt kritische Daten eines Entwicklerteams, einschließlich Quellcode.",
            solution: "Wir haben einen Bypass des beschädigten Controllers durchgeführt und die NAND-Chips direkt ausgelesen. Die Daten wurden dann mit spezialisierter Software rekonstruiert.",
            result: "Wiederherstellung der kompletten Verzeichnisstruktur und des gesamten Quellcodes.",
            duration: "4 Tage",
            recoveryRate: "100%",
            image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea"
          },
          {
            title: "Flash-Speicherausfall eines USB-Sticks",
            problem: "Der USB-Stick zeigte nur einen Teil seiner Kapazität an und Dateien waren beschädigt. Er enthielt wichtige Arbeitspräsentationen.",
            solution: "Mit PC-3000 Flash haben wir die beschädigten Blöcke analysiert und das Dateisystem rekonstruiert.",
            result: "Wiederherstellung aller Präsentationen und Dokumente in Originalqualität.",
            duration: "2 Tage",
            recoveryRate: "95%",
            image: "https://images.unsplash.com/photo-1601737487795-dab272f52420"
          },
          {
            title: "Verschlüsselte Kingston SSD eines Unternehmens",
            problem: "Die SSD war verschlüsselt und nach einem Hardwareausfall war es unmöglich, auf die Daten zuzugreifen. Sie enthielt eine Buchhaltungsdatenbank.",
            solution: "Wir haben den physischen Schaden repariert und spezialisierte Tools verwendet, um den Zugriff auf die verschlüsselten Daten wiederherzustellen.",
            result: "Erfolgreiche Wiederherstellung der gesamten Buchhaltungsdatenbank einschließlich aller Transaktionen.",
            duration: "6 Tage",
            recoveryRate: "99%",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          }
        ];
      case 'cs':
      default:
        return [
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
    }
  };

  const caseStudies = getCaseStudies();

  // Translate UI elements
  const getTranslatedLabels = () => {
    switch (currentLang) {
      case 'en':
        return {
          title: "Case Studies - SSD Recovery",
          subtitle: "Real examples of successful data recovery from damaged SSD drives and flash memory",
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
          title: "Fallstudien - SSD-Wiederherstellung",
          subtitle: "Reale Beispiele erfolgreicher Datenrettung von beschädigten SSD-Laufwerken und Flash-Speichern",
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
          title: "Případové studie - Záchrana SSD",
          subtitle: "Reálné příklady úspěšné záchrany dat z poškozených SSD disků a flash pamětí",
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
            <Smartphone className="h-5 w-5" />
            <span>{labels.contactUs}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SSDCaseStudies;