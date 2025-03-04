import type { Translations } from '../../types/translations';

export const it: Translations = {
  seo: {
    about: {
      title: "Chi siamo | DataHelp.eu",
      description: "Recupero dati professionale con oltre 20 anni di esperienza. Laboratorio specializzato, tecnici certificati e tecnologia all'avanguardia per il recupero dati.",
      keywords: "chi siamo datahelp, esperienza recupero dati, team di esperti, laboratorio recupero dati, specialisti certificati, sicurezza dati, recupero dati professionale"
    },
    services: {
      title: "Servizi | DataHelp.eu",
      description: "Servizi completi di recupero dati per HDD, SSD, sistemi RAID e soluzioni aziendali. Laboratorio specializzato con oltre 20 anni di esperienza.",
      keywords: "servizi recupero dati, servizi ripristino dati, recupero hdd, ripristino ssd, sistemi raid, soluzioni aziendali"
    }
  },
  nav: {
    home: 'Home',
    services: 'Servizi',
    about: 'Chi siamo',
    pricing: 'Prezzi',
    contact: 'Contatti'
  },
  banner: {
    noPayment: 'Felice Anno Nuovo 2025',
    freeConsultation: 'Happy New Year 2025',
    secureRecovery: 'Frohes neues Jahr 2025',
    certified: 'Šťastný nový rok 2025'
  },
  hero: {
    title: 'Recupero dati professionale\nper aziende e privati',
    subtitle: 'Specializzati nel recupero dati da supporti danneggiati da oltre 20 anni.',
    consultation: 'Consulenza gratuita',
    ourServices: 'I nostri servizi',
    security: 'Garanzia di sicurezza',
    securityDesc: 'Protezione dati al 100%',
    technology: 'Tecnologia moderna',
    technologyDesc: 'Attrezzature all\'avanguardia',
    experience: '20 anni di esperienza',
    experienceDesc: 'Oltre 55.000 casi risolti'
  },
  about: {
    title: 'Chi siamo',
    subtitle: 'Il tuo partner affidabile per il recupero dati',
    description: 'Con oltre 20 anni di esperienza nel recupero dati, abbiamo aiutato migliaia di clienti a recuperare i loro dati preziosi. Il nostro team di esperti utilizza le tecnologie più avanzate e segue rigorosi protocolli di sicurezza per garantire il più alto tasso di successo del settore.',
    experience: {
      title: 'Anni di esperienza',
      description: 'Oltre 20 anni di specializzazione nel recupero dati'
    },
    team: {
      title: 'Team di esperti',
      description: 'Professionisti certificati con vaste conoscenze'
    },
    availability: {
      title: 'Servizio 24/7',
      description: 'Sempre disponibili per le emergenze'
    },
    security: {
      title: 'Sicurezza dei dati',
      description: 'Garantiamo la massima sicurezza durante tutto il processo di recupero'
    },
    mission: {
      title: 'La nostra missione',
      description: 'Fornire servizi professionali di recupero dati di alta qualità.'
    }
  },
  services: {
    title: 'I nostri servizi',
    subtitle: 'Soluzioni complete per il recupero dati',
    hdd: {
      title: 'Recupero HDD',
      desc: 'Da dischi rigidi danneggiati o non funzionanti.',
      keywords: {
        recovery: "recupero dati hdd, ripristino dati disco rigido, riparazione disco rigido, danni meccanici hdd, guasti elettronici hdd, ricostruzione dati"
      },
      features: {
        mechanical: 'Danni meccanici',
        mechanicalDesc: 'Guasti alle testine di lettura, danni ai piatti, errori dei dati di servizio',
        electronic: 'Guasti elettronici',
        electronicDesc: 'PCB danneggiato, danni da sovratensione, guasti al firmware',
        logical: 'Errori del file system',
        logicalDesc: 'Recupero dati cancellati, riparazione file system'
      },
      supported: {
        title: 'Tecnologie supportate',
        devices: 'Tipi di dispositivi',
        manufacturers: 'Produttori',
        sata: 'HDD SATA',
        ide: 'HDD IDE/PATA',
        scsi: 'HDD SCSI/SAS',
        external: 'Dischi esterni'
      }
    },
    ssd: {
      title: 'Recupero SSD',
      desc: 'Recupero dati specializzato da memorie flash e SSD.',
      keywords: {
        recovery: "recupero dati ssd, ripristino dati disco ssd, riparazione disco ssd, controller danneggiato ssd, firmware ssd, memorie flash"
      },
      features: {
        controller: 'Guasti al controller',
        controllerDesc: 'Recupero dati in caso di controller danneggiato',
        firmware: 'Ricostruzione firmware',
        firmwareDesc: 'Recupero dati in caso di guasto al firmware',
        flash: 'Danni ai chip flash',
        flashDesc: 'Recupero dati da chip di memoria danneggiati'
      },
      supported: {
        title: 'Dispositivi supportati',
        devices: 'Tipi di dispositivi',
        manufacturers: 'Produttori',
        sata: 'SSD SATA',
        nvme: 'SSD NVMe',
        usb: 'Chiavette USB',
        cards: 'Schede di memoria'
      }
    },
    raid: {
      title: 'Sistemi RAID e NAS',
      desc: 'Recupero dati da tutti i tipi di array RAID e server NAS.',
      keywords: {
        recovery: "recupero dati raid, ripristino dati sistemi raid, riparazione array raid, ricostruzione raid, recupero server nas, ripristino sistemi san, recupero raid 0, ripristino raid 5, ricostruzione raid 10, RAID recovery, RAID 5E, RAID 6, crash server"
      },
      features: {
        hardware: 'RAID hardware',
        hardwareDesc: 'Recupero dati in caso di guasto di più dischi',
        software: 'RAID software',
        softwareDesc: 'Ricostruzione RAID dopo perdita di configurazione',
        virtual: 'Sistemi virtuali',
        virtualDesc: 'Recupero dati da macchine virtuali danneggiate'
      },
      supported: {
        title: 'Sistemi supportati',
        configurations: 'Configurazioni',
        nas: 'Sistemi NAS',
        san: 'Sistemi SAN',
        controllers: 'Produttori'
      },
      security: {
        title: 'Sicurezza dei dati',
        description: 'Garantiamo la massima sicurezza e riservatezza dei vostri dati durante tutto il processo di recupero'
      }
    },
    business: {
      title: 'Programma Partner',
      desc: 'Offriamo collaborazione per aziende IT e servizi',
      keywords: {
        recovery: "recupero dati aziendali, servizi per aziende, programma partner datahelp, recupero dati b2b, recupero dati express, servizio prioritario, recupero dati per aziende, recupero dati aziende it, sla recupero dati"
      },
      contact: {
        salesTeam: 'Per ulteriori informazioni, contatta il nostro team commerciale:',
        leaveMessage: 'O lasciaci un messaggio:'
      },
      features: {
        support: 'Supporto tecnico',
        supportDesc: 'Supporto commerciale e tecnico, possibilità di formazione',
        security: 'Listino prezzi individuale',
        securityDesc: 'Ottieni prezzi migliori e termini di pagamento',
        priority: 'Elaborazione prioritaria',
        priorityDesc: 'Elaborazione prioritaria delle richieste dei nostri partner'
      },
      sla: {
        title: 'Condizioni SLA',
        response: {
          title: 'Tempo di risposta garantito',
          description: 'Risposta rapida alle tue richieste'
        },
        onsite: {
          title: 'Servizio in loco',
          description: 'Possibilità di soluzione direttamente dal cliente'
        },
        reporting: {
          title: 'Report regolari',
          description: 'Panoramiche e statistiche dettagliate'
        }
      },
      industries: {
        title: 'Settori industriali',
        finance: 'Finanza',
        financeDesc: 'Banche e istituzioni finanziarie',
        healthcare: 'Sanità',
        healthcareDesc: 'Ospedali e strutture sanitarie',
        manufacturing: 'Produzione',
        manufacturingDesc: 'Aziende manifatturiere',
        it: 'IT',
        itDesc: 'Aziende IT e fornitori di servizi'
      }
    },
    whyChooseUs: 'Perché scegliere noi',
    benefits: {
      security: 'Sicurezza',
      securityDesc: 'Massima protezione dei tuoi dati',
      expertise: 'Esperienza',
      expertiseDesc: 'Team professionale di esperti',
      speed: 'Velocità',
      speedDesc: 'Risoluzione efficiente dei problemi'
    }
  },
  reviews: {
    title: 'Recensioni',
    review1: 'Approccio professionale e soluzione rapida. Hanno recuperato dati critici dai nostri server.',
    review2: 'Eccellente comunicazione e risultati perfetti. Consigliato per tutte le aziende.',
    review3: 'Hanno recuperato il nostro database dopo un attacco ransomware. Ottimo lavoro!'
  },
  pricing: {
    title: 'Prezzi',
    subtitle: 'Prezzi equi senza costi nascosti',
    description: 'Crediamo nella trasparenza. Ecco perché siamo tra i pochi a mostrare non solo i prezzi minimi ma anche quelli massimi dei nostri servizi. Paghi solo per il recupero dati riuscito. Il recupero dati è un processo altamente specializzato dove ogni caso richiede un approccio individuale e la massima cura dei nostri esperti.',
    getQuote: 'Consulenza gratuita',
    hdd: {
      title: 'Recupero HDD',
      description: 'Dischi rigidi meccanicamente danneggiati o non funzionanti',
      price: 'Da 350 €',
      noSuccess: 'Dati non recuperabili = non paghi il recupero',
      features: {
        diagnosis: 'Diagnosi iniziale gratuita',
        recovery: 'Supporto per tutti i produttori',
        warranty: 'Ampio magazzino ricambi',
        support: 'Elaborazione express disponibile'
      }
    },
    ssd: {
      title: 'Recupero SSD',
      description: 'SSD, chiavette USB e schede di memoria',
      price: 'Da 250 €',
      noSuccess: 'Dati non recuperabili = non paghi il recupero',
      features: {
        diagnosis: 'Diagnosi iniziale gratuita',
        recovery: 'Supporto per tutte le tecnologie flash',
        warranty: 'Oltre 20 anni di esperienza',
        support: 'Team di tecnici formati'
      }
    },
    raid: {
      title: 'Sistemi RAID e NAS',
      description: 'Per sistemi RAID, NAS e server',
      price: 'Preventivo\nindividuale',
      noSuccess: 'Prezzo basato sull\'entità del danno',
      features: {
        diagnosis: 'Analisi completa',
        recovery: 'Ricostruzione RAID anche senza server originale',
        warranty: 'Supporto per tutti i file system',
        support: 'Soluzione express 24/7 disponibile'
      }
    },
    business: {
      title: 'Opportunità di partnership',
      description: 'Cerchiamo partner per collaborare',
      price: 'Programma\npartner',
      noSuccess: 'In base a requisiti specifici',
      features: {
        priority: 'Elaborazione prioritaria',
        sla: 'SLA individuale',
        support: 'Supporto esperto',
        onsite: 'Prezzi individuali'
      }
    }
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Risposte alle domande frequenti sul recupero dati',
    questions: {
      q1: 'Come viene calcolato il prezzo finale?',
      a1: 'Il prezzo finale dipende dal tipo e dall\'entità del danno, dai pezzi di ricambio necessari e dalla complessità del recupero.',
      q2: 'Offrite una garanzia "Nessun dato, nessun pagamento"?',
      a2: 'Sì, se non riusciamo a recuperare i tuoi dati, non paghi il servizio di recupero.',
      q3: 'Quanto tempo richiede il processo di recupero?',
      a3: 'Il recupero standard richiede 5-10 giorni lavorativi. Per i casi urgenti è disponibile un servizio express.',
      q4: 'Quali metodi di pagamento accettate?',
      a4: 'Accettiamo tutte le principali carte di credito, bonifici bancari e ordini aziendali.',
      q5: 'Chi siete e perché possiamo fidarci di voi?',
      a5: 'Siamo un\'azienda europea con oltre 20 anni di esperienza nel recupero dati. Abbiamo un laboratorio specializzato a Praga e tecnici certificati.',
      q6: 'Dove inviate i dischi per la riparazione?',
      a6: 'Da nessuna parte. Tutte le riparazioni e i recuperi dati vengono eseguiti esclusivamente nel nostro laboratorio a Praga. I dati non lasciano mai i nostri locali sicuri.',
      q7: 'Come viene garantita la sicurezza dei dati?',
      a7: 'Lavoriamo in un laboratorio sicuro con accesso controllato. Tutti i dati sono crittografati e cancellati in modo sicuro dopo il recupero riuscito. Seguiamo rigorosi protocolli di sicurezza e siamo vincolati alla riservatezza.',
      q8: 'E se i dati sono sensibili?',
      a8: 'Siamo abituati a lavorare con dati sensibili. Possiamo firmare un NDA e fornire misure di sicurezza aggiuntive.',
      q9: 'Quali sono i vostri tassi di successo?',
      a9: 'Il nostro tasso di successo nel recupero dati supera il 95%. Grazie al nostro laboratorio e alle attrezzature all\'avanguardia, possiamo gestire anche casi molto complessi.',
      q10: 'E se non ho un backup?',
      a10: 'È una situazione comune. Siamo specialisti nel recupero dati senza backup. Dopo un recupero riuscito, saremo lieti di consigliarti una soluzione di backup appropriata.'
    }
  },
  contact: {
    title: 'Contatti',
    subtitle: 'Siamo qui 24/7',
    form: {
      title: 'Scrivici',
      leaveMessage: 'Lasciaci un messaggio',
      name: 'Nome e cognome',
      email: 'Email',
      phone: 'Telefono',
      message: 'Messaggio',
      send: 'Invia messaggio',
      sending: 'Invio in corso...',
      success: 'Messaggio inviato con successo',
      error: 'Si è verificato un errore. Riprova più tardi.',
      rateLimit: 'Troppe richieste. Riprova tra {seconds} secondi.',
      tooManyRequests: 'Troppe richieste. Riprova più tardi.',
      errors: {
        name: 'Il nome è obbligatorio',
        email: 'L\'email è obbligatoria',
        emailFormat: 'Formato email non valido',
        phone: 'Formato telefono non valido',
        message: 'Il messaggio è obbligatorio'
      }
    },
    info: {
      title: 'Informazioni di contatto',
      address: 'Jirsíkova 541/1\n186 00 Praga 8 - Karlín',
      hours: 'Orari di apertura:\nLun-Ven: 9:00 - 18:00\nEmergenza: 24/7',
      phone: '+420 123 456 789',
      email: 'info@datahelp.cz',
      emergency: 'Servizio di emergenza 24/7 per clienti aziendali'
    },
    partners: {
      title: 'O contatta i nostri partner',
      description: 'Abbiamo una rete di partner certificati in tutta la Repubblica Ceca'
    }
  },
  techPage: {
    ourTechnology: {
      title: 'La nostra tecnologia',
      description: 'Utilizziamo tecnologie e procedure all\'avanguardia per il recupero dati. Il nostro laboratorio è dotato di strumenti avanzati, inclusi i sistemi PC-3000 per la diagnostica completa e il recupero dati da vari tipi di supporti. Grazie a queste tecnologie, possiamo risolvere anche i casi di recupero dati più complessi.'
    },
    title: 'La nostra tecnologia',
    subtitle: 'Attrezzature all\'avanguardia per il recupero dati professionale',
    cleanRoom: {
      title: 'Ambiente pulito',
      description: 'Tutte le postazioni sono dotate di box di laboratorio Classe 100 per la manipolazione sicura di componenti sensibili'
    },
    tools: {
      title: 'Strumenti specializzati',
      description: 'Strumenti hardware e software all\'avanguardia per il recupero dati'
    },
    diagnostics: {
      title: 'Diagnostica avanzata',
      description: 'Sistemi diagnostici completi per l\'identificazione precisa dei problemi'
    },
    equipment: {
      title: 'Attrezzature professionali',
      pc3000udma: {
        description: 'Sistema professionale per il recupero dati da HDD',
        features: {
          manufacturers: 'Supporto per tutti i produttori di HDD',
          firmware: 'Riparazioni firmware',
          recovery: 'Recupero dati avanzato'
        }
      },
      pc3000flash: {
        description: 'Sistema specializzato per memorie flash',
        features: {
          monolithic: 'Chip monolitici',
          usb: 'Chiavette USB',
          ssd: 'Dischi SSD'
        }
      },
      pc3000ssd: {
        description: 'Sistema per dischi SSD',
        features: {
          nvme: 'Dischi NVMe',
          sata: 'SSD SATA',
          controller: 'Riparazioni controller'
        }
      }
    },
    security: {
      title: 'Protocolli di sicurezza',
      protocols: {
        title: 'Sicurezza dei dati',
        description: 'Rigorosi protocolli di sicurezza per proteggere i tuoi dati'
      },
      specialists: {
        title: 'Specialisti certificati',
        description: 'Team di esperti altamente qualificati con molti anni di esperienza'
      }
    }
  },
  gallery: {
    title: 'Il nostro laboratorio',
    cleanRoom: 'Camera bianca',
    diagnostics: 'Diagnostica',
    serverRoom: 'Sala server',
    dataCenter: 'Data center'
  },
  process: {
    title: 'Processo di recupero dati',
    guarantee: 'Dati non recuperabili = non paghi il recupero',
    reception: {
      title: 'Ricezione supporto',
      desc: 'Accettazione sicura del tuo dispositivo'
    },
    diagnosis: {
      title: 'Diagnostica',
      desc: 'Analisi completa del danno'
    },
    approval: {
      title: 'Approvazione procedura',
      desc: 'Calcolo del prezzo e piano di recupero'
    },
    recovery: {
      title: 'Recupero dati',
      desc: 'Recupero dati professionale'
    },
    verification: {
      title: 'Verifica',
      desc: 'Verifica dei dati recuperati'
    },
    delivery: {
      title: 'Consegna dati',
      desc: 'Consegna sicura dei dati'
    }
  },
  footer: {
    privacy: 'Privacy',
    terms: 'Termini e condizioni',
    cookies: 'Cookie',
    legal: 'Informazioni legali'
  },
  privacy: {
    title: 'Informativa sulla privacy',
    subtitle: 'Informazioni sul trattamento e la protezione dei tuoi dati personali',
    dataProtection: {
      title: 'Protezione dei dati',
      content: 'Trattiamo i tuoi dati personali in conformità con il GDPR e la legislazione applicabile. Utilizziamo le tecnologie e le procedure più recenti per garantire la massima sicurezza dei tuoi dati. Tutti i dati sono conservati su server sicuri nell\'UE.'
    },
    security: {
      title: 'Misure di sicurezza',
      content: 'Implementiamo rigorose misure di sicurezza tra cui crittografia dei dati, controllo degli accessi e audit di sicurezza regolari. I nostri dipendenti sono regolarmente formati sulla protezione dei dati personali e sono vincolati alla riservatezza.'
    },
    transparency: {
      title: 'Trasparenza',
      content: 'Siamo completamente trasparenti su come trattiamo i tuoi dati personali. Raccogliamo solo i dati necessari per fornire i nostri servizi e non li vendiamo mai a terzi. Utilizziamo i tuoi dati esclusivamente per gli scopi per cui hai dato il consenso.'
    },
    rights: {
      title: 'I tuoi diritti',
      content: 'Hai il diritto di accedere ai tuoi dati personali, di rettificarli o cancellarli, di limitare il trattamento e di opporti al trattamento. Hai anche il diritto alla portabilità dei dati e il diritto di presentare un reclamo all\'autorità di controllo.'
    },
    contact: {
      title: 'Contatto per la protezione dei dati personali',
      content: 'Per qualsiasi domanda sul trattamento dei tuoi dati personali, puoi contattarci:',
      address: 'Indirizzo'
    }
  },
  terms: {
    title: 'Termini e condizioni',
    subtitle: 'Termini e condizioni generali di DataHelp',
    lastUpdated: 'Ultimo aggiornamento: 1 marzo 2024',
    sections: {
      general: {
        title: 'Disposizioni generali',
        content: 'Questi termini e condizioni generali regolano il rapporto tra DataHelp s.r.o. e i suoi clienti nella fornitura di servizi di recupero dati.'
      },
      services: {
        title: 'Servizi forniti',
        content: 'L\'azienda fornisce servizi di recupero dati da supporti danneggiati. I servizi includono diagnostica, recupero dati e consegna sicura al cliente.'
      },
      pricing: {
        title: 'Prezzi e pagamenti',
        content: 'I prezzi dei servizi sono regolati dal listino prezzi corrente. Il cliente paga solo per il recupero dati riuscito. La diagnostica è gratuita.'
      },
      warranty: {
        title: 'Garanzie',
        content: 'L\'azienda garantisce il massimo impegno nel recupero dati. Non siamo responsabili per i dati che non possono essere recuperati a causa di danni fisici.'
      },
      confidentiality: {
        title: 'Riservatezza',
        content: 'Ci impegniamo alla massima riservatezza su tutti i dati e le informazioni ottenute durante la fornitura dei servizi.'
      },
      complaints: {
        title: 'Reclami',
        content: 'Gestiamo eventuali reclami sui servizi individualmente con il massimo impegno per la soddisfazione del cliente. I reclami possono essere presentati entro 30 giorni.'
      }
    }
  },
  cookies: {
    title: 'Politica dei cookie',
    subtitle: 'Informazioni sull\'uso dei cookie sul nostro sito',
    lastUpdated: 'Ultimo aggiornamento: 1 marzo 2024',
    sections: {
      what: {
        title: 'Cosa sono i cookie',
        content: 'I cookie sono piccoli file di testo memorizzati nel tuo browser quando visiti il nostro sito. Ci aiutano a garantire la funzionalità di base del sito, analizzare il traffico e personalizzare i contenuti in base alle tue esigenze.'
      },
      types: {
        title: 'Tipi di cookie',
        necessary: {
          title: 'Cookie necessari',
          content: 'Questi cookie sono essenziali per il corretto funzionamento del sito. Non possono essere disattivati.'
        },
        analytical: {
          title: 'Cookie analitici',
          content: 'Ci aiutano a capire come i visitatori utilizzano il sito. Tutti i dati sono anonimizzati.'
        },
        functional: {
          title: 'Cookie funzionali',
          content: 'Consentono una migliore funzionalità e personalizzazione del sito.'
        }
      },
      usage: {
        title: 'Come utilizziamo i cookie',
        content: 'Utilizziamo i cookie per:',
        purposes: [
          'Garantire la funzionalità di base del sito',
          'Analizzare il traffico e il comportamento degli utenti',
          'Migliorare i nostri servizi',
          'Ricordare le tue preferenze'
        ]
      },
      control: {
        title: 'Gestione dei cookie',
        content: 'Puoi gestire o disabilitare i cookie nelle impostazioni del tuo browser. Tuttavia, la disattivazione di alcuni cookie potrebbe limitare la funzionalità del nostro sito.'
      },
      consent: {
        title: 'Il tuo consenso',
        content: 'Utilizzando il nostro sito, accetti l\'uso dei cookie in conformità con questa politica.'
      }
    }
  }
};