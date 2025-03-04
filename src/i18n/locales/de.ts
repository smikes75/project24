import type { Translations } from '../../types/translations';

export const de: Translations = {
  seo: {
    about: {
      title: "Über uns | DataHelp.eu",
      description: "Professionelle Datenrettung mit über 20 Jahren Erfahrung. Spezialisiertes Labor, zertifizierte Techniker und modernste Technologie für die Datenwiederherstellung.",
      keywords: "über uns datahelp, erfahrung datenrettung, expertenteam, datenrettungslabor, zertifizierte spezialisten, datensicherheit, professionelle datenrettung"
    },
    services: {
      title: "Dienstleistungen | DataHelp.eu",
      description: "Umfassende Datenrettungsdienste für HDD, SSD, RAID-Systeme und Unternehmenslösungen. Spezialisiertes Labor mit über 20 Jahren Erfahrung.",
      keywords: "datenrettungsdienste, datenwiederherstellungsdienste, hdd-rettung, ssd-wiederherstellung, raid-systeme, unternehmenslösungen"
    }
  },
  nav: {
    home: 'Startseite',
    services: 'Dienstleistungen',
    about: 'Über uns',
    pricing: 'Preise',
    contact: 'Kontakt'
  },
  banner: {
    noPayment: 'Frohes neues Jahr 2025',
    freeConsultation: 'Šťastný nový rok 2025',
    secureRecovery: 'Happy New Year 2025',
    certified: 'Felice Anno Nuovo 2025'
  },
  hero: {
    title: 'Professionelle Datenrettung\nfür Unternehmen und Privatpersonen',
    subtitle: 'Wir sind seit über 20 Jahren auf die Rettung von Daten aus beschädigten Medien spezialisiert.',
    consultation: 'Kostenlose Beratung',
    ourServices: 'Unsere Dienstleistungen',
    security: 'Sicherheitsgarantie',
    securityDesc: '100% Datenschutz',
    technology: 'Moderne Technologie',
    technologyDesc: 'Hochmoderne Ausstattung',
    experience: '20 Jahre Erfahrung',
    experienceDesc: 'Über 55.000 gelöste Aufträge'
  },
  about: {
    title: 'Über uns',
    subtitle: 'Wir sind Ihr vertrauenswürdiger Partner für Datenrettung',
    description: 'Mit über 20 Jahren Erfahrung in der Datenrettung haben wir Tausenden von Kunden geholfen, ihre wertvollen Daten wiederherzustellen. Unser Expertenteam nutzt modernste Technologien und befolgt strenge Sicherheitsprotokolle, um die höchste Erfolgsrate in der Branche zu gewährleisten.',
    experience: {
      title: 'Jahre Erfahrung',
      description: 'Über 20 Jahre Spezialisierung auf Datenrettung'
    },
    team: {
      title: 'Expertenteam',
      description: 'Zertifizierte Fachleute mit umfassendem Wissen'
    },
    availability: {
      title: '24/7 Service',
      description: 'Immer verfügbar für Notfälle'
    },
    security: {
      title: 'Datensicherheit',
      description: 'Maximale Sicherheit während des gesamten Wiederherstellungsprozesses garantiert'
    },
    mission: {
      title: 'Unsere Mission',
      description: 'Erstklassige professionelle Datenrettungs- und Wiederherstellungsdienste anbieten.'
    }
  },
  services: {
    title: 'Unsere Dienstleistungen',
    subtitle: 'Umfassende Lösungen für Datenrettung und -wiederherstellung',
    hdd: {
      title: 'Festplattenrettung',
      desc: 'Von beschädigten oder defekten Festplatten.',
      keywords: {
        recovery: "festplattenrettung, datenwiederherstellung festplatte, festplattenreparatur, mechanische beschädigung hdd, elektronische fehler hdd, datenrekonstruktion"
      },
      features: {
        mechanical: 'Mechanische Schäden',
        mechanicalDesc: 'Defekte Leseköpfe, beschädigte Platten, Service-Daten-Ausfall',
        electronic: 'Elektronische Defekte',
        electronicDesc: 'Zerstörte PCB, Überspannungsschäden, Firmware-Ausfälle',
        logical: 'Dateisystemfehler',
        logicalDesc: 'Wiederherstellung gelöschter Daten, Reparatur von Dateisystemen'
      },
      supported: {
        title: 'Unterstützte Technologien',
        devices: 'Gerätetypen',
        manufacturers: 'Hersteller',
        sata: 'SATA HDD',
        ide: 'IDE/PATA HDD',
        scsi: 'SCSI/SAS HDD',
        external: 'Externe Festplatten'
      }
    },
    ssd: {
      title: 'SSD-Rettung',
      desc: 'Spezialisierte Datenrettung von Flash-Speichern und SSDs.',
      keywords: {
        recovery: "ssd-datenrettung, ssd-datenwiederherstellung, ssd-reparatur, beschädigter controller ssd, ssd-firmware, flash-speicher"
      },
      features: {
        controller: 'Controller-Defekte',
        controllerDesc: 'Datenrettung bei defektem Controller',
        firmware: 'Firmware-Rekonstruktion',
        firmwareDesc: 'Datenrettung bei Firmware-Ausfällen',
        flash: 'Flash-Chip-Schäden',
        flashDesc: 'Datenrettung von beschädigten Speicherchips'
      },
      supported: {
        title: 'Unterstützte Geräte',
        devices: 'Gerätetypen',
        manufacturers: 'Hersteller',
        sata: 'SATA SSD',
        nvme: 'NVMe SSD',
        usb: 'USB-Sticks',
        cards: 'Speicherkarten'
      }
    },
    raid: {
      title: 'RAID, NAS-Systeme',
      desc: 'Datenrettung von allen RAID-Arrays und NAS-Servern.',
      keywords: {
        recovery: "raid-datenrettung, raid-systeme wiederherstellung, raid-array reparatur, raid-rekonstruktion, nas-server rettung, san-systeme datenwiederherstellung, raid 0 rettung, raid 5 wiederherstellung, raid 10 rekonstruktion, RAID recovery, RAID 5E, RAID 6, serverabsturz"
      },
      features: {
        hardware: 'Hardware-RAID',
        hardwareDesc: 'Datenrettung bei Ausfall einer überkritischen Anzahl von Festplatten',
        software: 'Software-RAID',
        softwareDesc: 'RAID-Rekonstruktion bei Konfigurationsverlust',
        virtual: 'Virtuelle Systeme',
        virtualDesc: 'Datenrettung bei beschädigten virtuellen Maschinen'
      },
      supported: {
        title: 'Unterstützte Systeme',
        configurations: 'Konfigurationen',
        nas: 'NAS-Systeme',
        san: 'SAN-Systeme',
        controllers: 'Hersteller'
      },
      security: {
        title: 'Datensicherheit',
        description: 'Wir garantieren maximale Sicherheit und Vertraulichkeit Ihrer Daten während des gesamten Wiederherstellungsprozesses'
      }
    },
    business: {
      title: 'Partnerprogramm',
      desc: 'Wir bieten Zusammenarbeit für IT-Firmen und Serviceanbieter',
      keywords: {
        recovery: "unternehmensdatenrettung, dienste für unternehmen, datahelp partnerprogramm, b2b datenrettung, express datenwiederherstellung, prioritätsservice, datenrettung für unternehmen, it-firmen datenrettung, sla datenrettung"
      },
      contact: {
        salesTeam: 'Für weitere Informationen kontaktieren Sie unser Vertriebsteam:',
        leaveMessage: 'Oder hinterlassen Sie uns eine Nachricht:'
      },
      features: {
        support: 'Technischer Support',
        supportDesc: 'Geschäfts- und technischer Support, Schulungsmöglichkeiten',
        security: 'Individuelle Preisgestaltung',
        securityDesc: 'Erhalten Sie bessere Preise und Zahlungsbedingungen',
        priority: 'Vorrangige Bearbeitung',
        priorityDesc: 'Bevorzugte Bearbeitung der Anfragen unserer Partner'
      },
      sla: {
        title: 'SLA-Bedingungen',
        response: {
          title: 'Garantierte Reaktionszeit',
          description: 'Schnelle Reaktion auf Ihre Anfragen'
        },
        onsite: {
          title: 'Vor-Ort-Service',
          description: 'Möglichkeit der Lösung direkt beim Kunden'
        },
        reporting: {
          title: 'Regelmäßige Berichte',
          description: 'Detaillierte Übersichten und Statistiken'
        }
      },
      industries: {
        title: 'Branchen',
        finance: 'Finanzen',
        financeDesc: 'Banken und Finanzinstitute',
        healthcare: 'Gesundheitswesen',
        healthcareDesc: 'Krankenhäuser und Gesundheitseinrichtungen',
        manufacturing: 'Produktion',
        manufacturingDesc: 'Produktionsunternehmen',
        it: 'IT',
        itDesc: 'IT-Unternehmen und Dienstleister'
      }
    },
    whyChooseUs: 'Warum uns wählen',
    benefits: {
      security: 'Sicherheit',
      securityDesc: 'Maximaler Schutz Ihrer Daten',
      expertise: 'Erfahrung',
      expertiseDesc: 'Professionelles Expertenteam',
      speed: 'Geschwindigkeit',
      speedDesc: 'Effiziente Problemlösung'
    },
    serviceList: {
      title: 'Detaillierte Preisliste',
      subtitle: 'Detaillierte Preisliste aller unserer Dienstleistungen',
      description: 'Transparente Preisliste aller unserer Dienstleistungen einschließlich spezialisierter Arbeiten',
      sections: {
        diagnostics: {
          title: 'Diagnose und Analyse',
          items: {
            basic: 'Grundlegende Mediendiagnose (Bestimmung der Schadensart)',
            detailed: 'Detaillierte Analyse von Schäden und Wiederherstellungsoptionen',
            planning: 'Entwicklung eines Datenwiederherstellungsplans'
          }
        },
        software: {
          title: 'Software-Datenwiederherstellung',
          items: {
            deleted: 'Wiederherstellung gelöschter Dateien',
            filesystem: 'Reparatur beschädigter Dateisysteme',
            compressed: 'Dekomprimierung und Wiederherstellung komprimierter Dateien',
            raid: 'Datenübertragung aus beschädigtem RAID-Array',
            database: 'Datenwiederherstellung aus beschädigten Datenbanken'
          }
        },
        hardware: {
          title: 'Hardware-Datenwiederherstellung',
          items: {
            electronics: 'Austausch der Festplattenelektronik',
            heads: 'Kopfaustausch in Reinraumumgebung',
            mechanics: 'Mikromanipulation mit HDD-Mechanik',
            bga: 'BGA-Chip-Löten und Firmware-Chip-Austausch',
            rom: 'Arbeit mit ROM-Emulator',
            service: 'Reparatur des Festplatten-Servicebereichs'
          }
        },
        specialized: {
          title: 'Spezialisierte Dienstleistungen',
          items: {
            pc3000: 'Arbeit mit PC-3000 UDMA/SSD/Flash',
            nand: 'NAND-Übersetzer-Rekonstruktion',
            security: 'Analyse und Reparatur von T2/T3-Sicherheitschips',
            mcmt: 'MCMT-Tabellen-Rekonstruktion',
            firmware: 'Firmware-Analyse und -Modifikation',
            reverse: 'Dateisystem-Reverse-Engineering',
            damaged: 'Arbeit mit beschädigten Servicedaten'
          }
        },
        express: {
          title: 'Express-Dienste',
          items: {
            h24: 'Express-Bearbeitungszuschlag (innerhalb von 24 Stunden)',
            overtime: 'Arbeit außerhalb der Geschäftszeiten',
            weekend: 'Wochenend- und Feiertagsarbeit'
          }
        },
        additional: {
          title: 'Zusätzliche Dienstleistungen',
          items: {
            consulting: 'Beratung',
            backup: 'Sicherung wiederhergestellter Daten auf neuen Medien',
            encryption: 'Verschlüsselung wiederhergestellter Daten',
            transport: 'Transport zum Kunden'
          }
        }
      },
      pricing: {
        hourly: '€/Stunde',
        percentage: '%',
        distance: '€/km + 50€/Stunde',
        note: 'Die Mindestabrechnung beträgt 1 Stunde. Die Preise verstehen sich ohne MwSt. Die Preise beinhalten keine Ersatzteile und Medien für die Datensicherung. Der genaue Preis wird nach der Grunddiagnose festgelegt. Bei erfolgloser Datenrettung wird nur die Diagnose berechnet.'
      }
    }
  },
  reviews: {
    title: 'Bewertungen',
    review1: 'Professioneller Ansatz und schnelle Lösung. Sie haben kritische Daten von unseren Servern wiederhergestellt.',
    review2: 'Ausgezeichnete Kommunikation und perfekte Ergebnisse. Empfehlenswert für alle Unternehmen.',
    review3: 'Sie haben unsere Datenbank nach einem Ransomware-Angriff wiederhergestellt. Großartige Arbeit!'
  },
  pricing: {
    title: 'Preise',
    subtitle: 'Faire Preise ohne versteckte Gebühren',
    description: 'Sie zahlen nur für erfolgreiche Datenrettung. Datenrettung ist ein hochspezialisierter Prozess, bei dem jeder Fall einen individuellen Ansatz und maximale Aufmerksamkeit unserer Experten erfordert.',
    getQuote: 'Unverbindliche Beratung',
    hdd: {
      title: 'Festplattenrettung',
      description: 'Mechanisch beschädigte oder defekte Festplatten',
      price: 'Ab 350 €',
      noSuccess: 'Keine Datenrettung möglich = keine Kosten',
      features: {
        diagnosis: 'Kostenlose Eingangsdiagnose',
        recovery: 'Unterstützung aller Hersteller',
        warranty: 'Umfangreiches Ersatzteillager',
        support: 'Express-Bearbeitung möglich'
      }
    },
    ssd: {
      title: 'SSD-Rettung',
      description: 'SSD-Laufwerke, USB-Sticks und Speicherkarten',
      price: 'Ab 250 €',
      noSuccess: 'Keine Datenrettung möglich = keine Kosten',
      features: {
        diagnosis: 'Kostenlose Eingangsdiagnose',
        recovery: 'Unterstützung aller Flash-Technologien',
        warranty: 'Über 20 Jahre Erfahrung',
        support: 'Team geschulter Techniker'
      }
    },
    raid: {
      title: 'RAID, NAS-Systeme',
      description: 'Für RAID, NAS und Serversysteme',
      price: 'Individuelle\nKalkulation',
      noSuccess: 'Preis abhängig vom Schadensumfang',
      features: {
        diagnosis: 'Umfassende Analyse',
        recovery: 'RAID-Rekonstruktion auch ohne Original-Server',
        warranty: 'Unterstützung aller Dateisysteme',
        support: '24/7 Express-Lösung möglich'
      }
    },
    business: {
      title: 'Partnerschaft',
      description: 'Wir suchen Kooperationspartner',
      price: 'Partner-\nprogramm',
      noSuccess: 'Nach spezifischen Anforderungen',
      features: {
        priority: 'Vorrangige Bearbeitung',
        sla: 'Individuelle SLA',
        support: 'Fachkundige Unterstützung',
        onsite: 'Individuelle Preise'
      }
    },
    serviceList: {
      title: 'Detaillierte Preisliste',
      subtitle: 'Detaillierte Preisliste aller unserer Dienstleistungen',
      description: 'Transparente Preisliste aller unserer Dienstleistungen einschließlich spezialisierter Arbeiten',
      sections: {
        diagnostics: {
          title: 'Diagnose und Analyse',
          items: {
            basic: 'Grundlegende Mediendiagnose (Bestimmung der Schadensart)',
            detailed: 'Detaillierte Analyse von Schäden und Wiederherstellungsoptionen',
            planning: 'Entwicklung eines Datenwiederherstellungsplans'
          }
        },
        software: {
          title: 'Software-Datenwiederherstellung',
          items: {
            deleted: 'Wiederherstellung gelöschter Dateien',
            filesystem: 'Reparatur beschädigter Dateisysteme',
            compressed: 'Dekomprimierung und Wiederherstellung komprimierter Dateien',
            raid: 'Datenübertragung aus beschädigtem RAID-Array',
            database: 'Datenwiederherstellung aus beschädigten Datenbanken'
          }
        },
        hardware: {
          title: 'Hardware-Datenwiederherstellung',
          items: {
            electronics: 'Austausch der Festplattenelektronik',
            heads: 'Kopfaustausch in Reinraumumgebung',
            mechanics: 'Mikromanipulation mit HDD-Mechanik',
            bga: 'BGA-Chip-Löten und Firmware-Chip-Austausch',
            rom: 'Arbeit mit ROM-Emulator',
            service: 'Reparatur des Festplatten-Servicebereichs'
          }
        },
        specialized: {
          title: 'Spezialisierte Dienstleistungen',
          items: {
            pc3000: 'Arbeit mit PC-3000 UDMA/SSD/Flash',
            nand: 'NAND-Übersetzer-Rekonstruktion',
            security: 'Analyse und Reparatur von T2/T3-Sicherheitschips',
            mcmt: 'MCMT-Tabellen-Rekonstruktion',
            firmware: 'Firmware-Analyse und -Modifikation',
            reverse: 'Dateisystem-Reverse-Engineering',
            damaged: 'Arbeit mit beschädigten Servicedaten'
          }
        },
        express: {
          title: 'Express-Dienste',
          items: {
            h24: 'Express-Bearbeitungszuschlag (innerhalb von 24 Stunden)',
            overtime: 'Arbeit außerhalb der Geschäftszeiten',
            weekend: 'Wochenend- und Feiertagsarbeit'
          }
        },
        additional: {
          title: 'Zusätzliche Dienstleistungen',
          items: {
            consulting: 'Beratung',
            backup: 'Sicherung wiederhergestellter Daten auf neuen Medien',
            encryption: 'Verschlüsselung wiederhergestellter Daten',
            transport: 'Transport zum Kunden'
          }
        }
      },
      pricing: {
        hourly: '€/Stunde',
        percentage: '%',
        distance: '€/km + 50€/Stunde',
        note: 'Die Mindestabrechnung beträgt 1 Stunde. Die Preise verstehen sich ohne MwSt. Die Preise beinhalten keine Ersatzteile und Medien für die Datensicherung. Der genaue Preis wird nach der Grunddiagnose festgelegt. Bei erfolgloser Datenrettung wird nur die Diagnose berechnet.'
      }
    }
  },
  faq: {
    title: 'Häufige Fragen',
    subtitle: 'Antworten auf die häufigsten Fragen zur Datenrettung',
    questions: {
      q1: 'Wie wird der Endpreis berechnet?',
      a1: 'Der Endpreis hängt von der Art und dem Umfang des Schadens, den benötigten Ersatzteilen und der Komplexität der Wiederherstellung ab.',
      q2: 'Bieten Sie eine "Keine Daten, keine Kosten"-Garantie?',
      a2: 'Ja, wenn wir Ihre Daten nicht wiederherstellen können, zahlen Sie nichts für den Rettungsversuch.',
      q3: 'Wie lange dauert der Wiederherstellungsprozess?',
      a3: 'Die Standardwiederherstellung dauert 5-10 Werktage. Für dringende Fälle steht ein Express-Service zur Verfügung.',
      q4: 'Welche Zahlungsmethoden akzeptieren Sie?',
      a4: 'Wir akzeptieren alle gängigen Kreditkarten, Banküberweisungen und Firmenbestellungen.',
      q5: 'Wer sind Sie und warum können wir Ihnen vertrauen?',
      a5: 'Wir sind ein europäisches Unternehmen mit über 20 Jahren Erfahrung in der Datenrettung. Wir haben ein eigenes Speziallabor in Prag und zertifizierte Techniker.',
      q6: 'Wohin schicken Sie die Festplatten zur Reparatur?',
      a6: 'Nirgendwohin. Alle Reparaturen und Datenrettungen führen wir ausschließlich in unserem eigenen Labor in Prag durch. Die Daten verlassen niemals unsere gesicherten Räumlichkeiten.',
      q7: 'Wie wird die Datensicherheit gewährleistet?',
      a7: 'Wir arbeiten in einem gesicherten Labor mit kontrolliertem Zugang. Alle Daten werden verschlüsselt und nach erfolgreicher Rettung sicher gelöscht. Wir befolgen strenge Sicherheitsprotokolle und sind zur Verschwiegenheit verpflichtet.',
      q8: 'Was ist bei sensiblen Daten?',
      a8: 'Wir sind es gewohnt, mit sensiblen Daten zu arbeiten. Wir können eine NDA unterzeichnen und zusätzliche Sicherheitsmaßnahmen bereitstellen.',
      q9: 'Wie hoch sind Ihre Erfolgsquoten?',
      a9: 'Unsere Erfolgsquote bei der Datenrettung liegt über 95%. Dank unserem eigenen Labor und modernster Ausrüstung können wir auch sehr komplexe Fälle lösen.',
      q10: 'Was, wenn ich kein Backup habe?',
      a10: 'Das ist eine häufige Situation. Wir sind Spezialisten für Datenrettung ohne Backup. Nach erfolgreicher Rettung beraten wir Sie gerne bei der Einrichtung einer geeigneten Backup-Lösung.'
    }
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Wir sind 24/7 für Sie da',
    form: {
      title: 'Schreiben Sie uns',
      leaveMessage: 'Hinterlassen Sie uns eine Nachricht',
      name: 'Vor- und Nachname',
      email: 'E-Mail',
      phone: 'Telefon',
      message: 'Nachricht',
      send: 'Nachricht senden',
      sending: 'Wird gesendet...',
      success: 'Nachricht erfolgreich gesendet',
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      rateLimit: 'Zu viele Anfragen. Bitte versuchen Sie es in {seconds} Sekunden erneut.',
      tooManyRequests: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.',
      errors: {
        name: 'Name ist erforderlich',
        email: 'E-Mail ist erforderlich',
        emailFormat: 'Ungültiges E-Mail-Format',
        phone: 'Ungültiges Telefonformat',
        message: 'Nachricht ist erforderlich'
      }
    },
    info: {
      title: 'Kontaktinformationen',
      address: 'Jirsíkova 541/1\n186 00 Prag 8 - Karlín',
      hours: 'Öffnungszeiten:\nMo-Fr: 9:00 - 18:00\nNotdienst: 24/7',
      phone: '+420 123 456 789',
      email: 'info@datahelp.cz',
      emergency: '24/7 Notfalldienst für Geschäftskunden'
    },
    partners: {
      title: 'Oder kontaktieren Sie unsere Partner',
      description: 'Wir haben ein Netzwerk zertifizierter Partner in der gesamten Tschechischen Republik'
    }
  },
  techPage: {
    ourTechnology: {
      title: 'Unsere Technologie',
      description: 'Wir verwenden modernste Technologien und Verfahren für die Datenrettung. Unser Labor ist mit fortschrittlichen Werkzeugen ausgestattet, darunter PC-3000-Systeme für umfassende Diagnose und Datenwiederherstellung von verschiedenen Medientypen. Dank dieser Technologien können wir auch die anspruchsvollsten Datenrettungsfälle lösen.'
    },
    title: 'Unsere Technologie',
    subtitle: 'Hochmoderne Ausstattung für professionelle Datenrettung',
    cleanRoom: {
      title: 'Staubfreie Umgebung',
      description: 'Alle Arbeitsplätze sind mit Klasse-100-Laborboxen für die sichere Handhabung empfindlicher Komponenten ausgestattet'
    },
    tools: {
      title: 'Spezialisierte Werkzeuge',
      description: 'Modernste Hardware- und Software-Tools für die Datenrettung'
    },
    diagnostics: {
      title: 'Fortgeschrittene Diagnostik',
      description: 'Umfassende Diagnosesysteme zur genauen Problemidentifikation'
    },
    equipment: {
      title: 'Professionelle Ausrüstung',
      pc3000udma: {
        description: 'Professionelles System für die Festplattenrettung',
        features: {
          manufacturers: 'Unterstützung aller Festplattenhersteller',
          firmware: 'Firmware-Reparaturen',
          recovery: 'Erweiterte Datenrettung'
        }
      },
      pc3000flash: {
        description: 'Spezialisiertes System für Flash-Speicher',
        features: {
          monolithic: 'Monolithische Chips',
          usb: 'USB-Sticks',
          ssd: 'SSD-Laufwerke'
        }
      },
      pc3000ssd: {
        description: 'System für SSD-Laufwerke',
        features: {
          nvme: 'NVMe-Laufwerke',
          sata: 'SATA SSD',
          controller: 'Controller-Reparaturen'
        }
      }
    },
    security: {
      title: 'Sicherheitsprotokolle',
      protocols: {
        title: 'Datensicherheit',
        description: 'Strenge Sicherheitsprotokolle zum Schutz Ihrer Daten'
      },
      specialists: {
        title: 'Zertifizierte Spezialisten',
        description: 'Team hochqualifizierter Fachleute mit langjähriger Erfahrung'
      }
    }
  },
  gallery: {
    title: 'Unser Labor',
    cleanRoom: 'Reinraum',
    diagnostics: 'Diagnostik',
    serverRoom: 'Serverraum',
    dataCenter: 'Rechenzentrum'
  },
  process: {
    title: 'Datenrettungsprozess',
    guarantee: 'Keine Datenrettung möglich = keine Kosten',
    reception: {
      title: 'Medienannahme',
      desc: 'Sichere Übernahme Ihres Geräts'
    },
    diagnosis: {
      title: 'Diagnose',
      desc: 'Umfassende Schadensanalyse'
    },
    approval: {
      title: 'Verfahrensgenehmigung',
      desc: 'Preiskalkulation und Wiederherstellungsplan'
    },
    recovery: {
      title: 'Datenrettung',
      desc: 'Professionelle Datenwiederherstellung'
    },
    verification: {
      title: 'Überprüfung',
      desc: 'Überprüfung der wiederhergestellten Daten'
    },
    delivery: {
      title: 'Datenübergabe',
      desc: 'Sichere Übergabe der Daten'
    }
  },
  footer: {
    privacy: 'Datenschutz',
    terms: 'Geschäftsbedingungen',
    cookies: 'Cookies',
    legal: 'Rechtliche Informationen'
  },
  privacy: {
    title: 'Datenschutzrichtlinie',
    subtitle: 'Informationen über die Verarbeitung und den Schutz Ihrer personenbezogenen Daten',
    dataProtection: {
      title: 'Datenschutz',
      content: 'Wir verarbeiten Ihre personenbezogenen Daten in Übereinstimmung mit der DSGVO und den geltenden Gesetzen. Wir verwenden die neuesten Technologien und Verfahren, um maximale Sicherheit Ihrer Daten zu gewährleisten. Alle Daten werden auf sicheren Servern in der EU gespeichert.'
    },
    security: {
      title: 'Sicherheitsmaßnahmen',
      content: 'Wir implementieren strenge Sicherheitsmaßnahmen, darunter Datenverschlüsselung, Zugangskontrolle und regelmäßige Sicherheitsaudits. Unsere Mitarbeiter werden regelmäßig im Bereich des Datenschutzes geschult und sind zur Vertraulichkeit verpflichtet.'
    },
    transparency: {
      title: 'Transparenz',
      content: 'Wir sind vollständig transparent darüber, wie wir Ihre personenbezogenen Daten verarbeiten. Wir sammeln nur Daten, die für die Erbringung unserer Dienstleistungen erforderlich sind, und verkaufen sie niemals an Dritte. Wir verwenden Ihre Daten ausschließlich für Zwecke, denen Sie zugestimmt haben.'
    },
    rights: {
      title: 'Ihre Rechte',
      content: 'Sie haben das Recht auf Zugang zu Ihren personenbezogenen Daten, auf Berichtigung oder Löschung, auf Einschränkung der Verarbeitung und das Recht, der Verarbeitung zu widersprechen. Sie haben auch das Recht auf Datenübertragbarkeit und das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen.'
    },
    contact: {
      title: 'Kontakt für Datenschutz',
      content: 'Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie uns kontaktieren:',
      address: 'Adresse'
    }
  },
  terms: {
    title: 'Geschäftsbedingungen',
    subtitle: 'Allgemeine Geschäftsbedingungen von DataHelp',
    lastUpdated: 'Letzte Aktualisierung: 1. März 2024',
    sections: {
      general: {
        title: 'Allgemeine Bestimmungen',
        content: 'Diese allgemeinen Geschäftsbedingungen regeln die Beziehung zwischen DataHelp s.r.o. und seinen Kunden bei der Erbringung von Datenrettungsdiensten.'
      },
      services: {
        title: 'Erbrachte Dienstleistungen',
        content: 'Das Unternehmen bietet Datenrettungsdienste von beschädigten Datenträgern an. Die Dienstleistungen umfassen Diagnose, Datenrettung und sichere Übergabe an den Kunden.'
      },
      pricing: {
        title: 'Preise und Zahlungen',
        content: 'Die Preise der Dienstleistungen richten sich nach der aktuellen Preisliste. Der Kunde zahlt nur für erfolgreiche Datenrettung. Die Diagnose ist kostenlos.'
      },
      warranty: {
        title: 'Garantien',
        content: 'Das Unternehmen garantiert maximale Anstrengungen bei der Datenrettung. Wir haften nicht für Daten, die aufgrund physischer Beschädigung nicht wiederhergestellt werden können.'
      },
      confidentiality: {
        title: 'Vertraulichkeit',
        content: 'Wir verpflichten uns zu absoluter Vertraulichkeit bezüglich aller Daten und Informationen, die bei der Erbringung von Dienstleistungen erlangt werden.'
      },
      complaints: {
        title: 'Beschwerden',
        content: 'Wir behandeln alle Beschwerden zu Dienstleistungen individuell mit maximaler Anstrengung für die Kundenzufriedenheit. Beschwerden können innerhalb von 30 Tagen eingereicht werden.'
      }
    }
  },
  cookies: {
    title: 'Cookie-Richtlinie',
    subtitle: 'Informationen zur Cookie-Nutzung auf unserer Website',
    lastUpdated: 'Letzte Aktualisierung: 1. März 2024',
    sections: {
      what: {
        title: 'Was sind Cookies',
        content: 'Cookies sind kleine Textdateien, die in Ihrem Browser gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen uns, die grundlegende Funktionalität der Website zu gewährleisten, den Verkehr zu analysieren und Inhalte an Ihre Bedürfnisse anzupassen.'
      },
      types: {
        title: 'Arten von Cookies',
        necessary: {
          title: 'Notwendige Cookies',
          content: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Sie können nicht deaktiviert werden.'
        },
        analytical: {
          title: 'Analytische Cookies',
          content: 'Helfen uns zu verstehen, wie Besucher die Website nutzen. Alle Daten werden anonymisiert.'
        },
        functional: {
          title: 'Funktionale Cookies',
          content: 'Ermöglichen bessere Funktionalität und Personalisierung der Website.'
        }
      },
      usage: {
        title: 'Wie wir Cookies verwenden',
        content: 'Wir verwenden Cookies für:',
        purposes: [
          'Gewährleistung der grundlegenden Website-Funktionalität',
          'Analyse des Verkehrs und des Nutzerverhaltens',
          'Verbesserung unserer Dienstleistungen',
          'Speicherung Ihrer Präferenzen'
        ]
      },
      control: {
        title: 'Cookie-Verwaltung',
        content: 'Sie können Cookies in Ihren Browsereinstellungen verwalten oder deaktivieren. Die Deaktivierung einiger Cookies kann jedoch die Funktionalität unserer Website einschränken.'
      },
      consent: {
        title: 'Ihre Zustimmung',
        content: 'Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß dieser Richtlinie zu.'
      }
    }
  }
};