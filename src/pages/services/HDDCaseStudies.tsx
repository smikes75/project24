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
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Case studies for different languages
  const getCaseStudies = (): CaseStudy[] => {
    switch (currentLang) {
      case 'en':
        return [
          {
            title: "Western Digital Mechanical Platter Damage",
            problem: "After a drop, the disk was making loud noises and wasn't detected by the system. The client needed to recover important business documents and accounting data.",
            solution: "In a clean room environment, we replaced the damaged heads and reconstructed the service zone. We then used specialized hardware for data recovery.",
            result: "We successfully recovered 98% of the data including all critical documents.",
            duration: "5 days",
            recoveryRate: "98%",
            image: "https://images.unsplash.com/photo-1601737487795-dab272f52420"
          },
          {
            title: "Seagate Barracuda Electronics Failure",
            problem: "The disk wouldn't spin up due to an electronics fault. It contained critical manufacturing data for an industrial company.",
            solution: "We diagnosed the PCB fault and performed component transplantation. Then we used PC-3000 to restore access to the data.",
            result: "Complete recovery of all data without loss of integrity.",
            duration: "3 days",
            recoveryRate: "100%",
            image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea"
          },
          {
            title: "Toshiba Firmware Damage",
            problem: "The disk was damaged after a power outage, with partially overwritten firmware. It contained family photos from the last 10 years.",
            solution: "Using specialized equipment, we restored the original firmware and then reconstructed the system area.",
            result: "We saved all photos and personal documents.",
            duration: "4 days", 
            recoveryRate: "99%",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          }
        ];
      case 'de':
        return [
          {
            title: "Western Digital mechanische Plattenschäden",
            problem: "Nach einem Sturz machte die Festplatte laute Geräusche und wurde vom System nicht erkannt. Der Kunde benötigte wichtige Geschäftsdokumente und Buchhaltungsdaten.",
            solution: "In einer Reinraumumgebung haben wir die beschädigten Köpfe ausgetauscht und die Servicezone rekonstruiert. Anschließend haben wir spezialisierte Hardware zur Datenrettung eingesetzt.",
            result: "Wir haben erfolgreich 98% der Daten einschließlich aller kritischen Dokumente wiederhergestellt.",
            duration: "5 Tage",
            recoveryRate: "98%",
            image: "https://images.unsplash.com/photo-1601737487795-dab272f52420"
          },
          {
            title: "Seagate Barracuda Elektronikausfall",
            problem: "Die Festplatte startete aufgrund eines Elektronikfehlers nicht. Sie enthielt kritische Fertigungsdaten eines Industrieunternehmens.",
            solution: "Wir haben den PCB-Fehler diagnostiziert und eine Komponententransplantation durchgeführt. Dann haben wir PC-3000 verwendet, um den Zugriff auf die Daten wiederherzustellen.",
            result: "Vollständige Wiederherstellung aller Daten ohne Integritätsverlust.",
            duration: "3 Tage",
            recoveryRate: "100%",
            image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea"
          },
          {
            title: "Toshiba Firmware-Beschädigung",
            problem: "Die Festplatte wurde nach einem Stromausfall beschädigt, wobei die Firmware teilweise überschrieben wurde. Sie enthielt Familienfotos der letzten 10 Jahre.",
            solution: "Mit spezieller Ausrüstung haben wir die ursprüngliche Firmware wiederhergestellt und anschließend den Systembereich rekonstruiert.",
            result: "Wir haben alle Fotos und persönlichen Dokumente gerettet.",
            duration: "4 Tage", 
            recoveryRate: "99%",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          }
        ];
      case 'cs':
      default:
        return [
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
    }
  };

  const caseStudies = getCaseStudies();

  // Translate UI elements
  const getTranslatedLabels = () => {
    switch (currentLang) {
      case 'en':
        return {
          title: "Case Studies - HDD Recovery",
          subtitle: "Real examples of successful data recovery from damaged hard drives",
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
          title: "Fallstudien - HDD-Wiederherstellung",
          subtitle: "Reale Beispiele erfolgreicher Datenrettung von beschädigten Festplatten",
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
          title: "Případové studie - Záchrana HDD",
          subtitle: "Reálné příklady úspěšné záchrany dat z poškozených pevných disků",
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
            <HardDrive className="h-5 w-5" />
            <span>{labels.contactUs}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HDDCaseStudies;