import type { Translations } from '../../types/translations';

export const cs: Translations = {
  seo: {
    about: {
      title: "O nás | DataHelp.eu",
      description: "Profesionální záchrana dat s více než 20 lety zkušeností. Specializovaná laboratoř, certifikovaní technici a nejmodernější technologie pro obnovu dat.",
      keywords: "o nás datahelp, zkušenosti obnova dat, expertní tým, laboratoř pro záchranu dat, certifikovaní specialisté, bezpečnost dat, profesionální záchrana dat"
    },
    services: {
      title: "Služby | DataHelp.eu",
      description: "Komplexní služby záchrany dat z HDD, SSD, RAID systémů a řešení pro firmy. Specializovaná laboratoř s více než 20 lety zkušeností.",
      keywords: "záchrana dat služby, obnova dat služby, hdd záchrana, ssd obnova, raid systémy, firemní řešení"
    }
  }, 
  nav: {
    home: 'Domů',
    services: 'Služby',
    about: 'O nás',
    pricing: 'Ceník',
    contact: 'Kontakt'
  },
  banner: {
    noPayment: 'Happy New Year 2025',
    freeConsultation: 'Šťastný nový rok 2025',
    secureRecovery: 'Frohes neues Jahr 2025',
    certified: 'Felice Anno Nuovo 2025'
  },
  hero: {
    title: 'Profesionální obnova dat\npro firmy i jednotlivce',
    subtitle: 'Specializujeme se na záchranu dat z poškozených médií již více než 20 let.',
    consultation: 'Bezplatná konzultace',
    ourServices: 'Naše služby',
    security: 'Garance bezpečnosti',
    securityDesc: '100% ochrana dat',
    technology: 'Moderní technologie',
    technologyDesc: 'Špičkové vybavení',
    experience: '20 let zkušeností',
    experienceDesc: 'Více jak 55.000 vyřešených zakázek'
  },
  about: {
    title: 'O nás',
    subtitle: 'Jsme Váš důvěryhodný partner pro záchranu dat',
    description: 'S více než 20 lety zkušeností v oblasti obnovy dat jsme pomohli tisícům klientů obnovit jejich cenná data. Náš tým expertů využívá nejmodernější technologie a dodržuje přísné bezpečnostní protokoly pro zajištění nejvyšší úspěšnosti v oboru.',
    experience: {
      title: 'Roky zkušeností',
      description: 'Více než 20 let se specializujeme na obnovu dat'
    },
    team: {
      title: 'Expertní tým',
      description: 'Certifikovaní profesionálové s rozsáhlými znalostmi'
    },
    availability: {
      title: 'Služby 24/7',
      description: 'Vždy k dispozici pro nouzové případy'
    },
    security: {
      title: 'Bezpečnost dat',
      description: 'Garantujeme maximální bezpečnost během celého procesu obnovy'
    },
    mission: {
      title: 'Naše mise',
      description: 'Poskytovat špičkové profesionální služby obnovy a záchrany dat.'
    }
  },
  services: {
    title: 'Naše služby',
    subtitle: 'Komplexní řešení pro obnovu a záchranu dat',
    hdd: {
          keywords: {
            recovery: "záchrana dat hdd, obnova dat pevný disk, oprava pevného disku, mechanické poškození hdd, elektronické závady hdd, rekonstrukce dat"
          },
      title: 'Záchrana HDD',
      desc: 'Z poškozených nebo nefunkčních disků.',
      features: {
        mechanical: 'Mechanické poškození',
        mechanicalDesc: 'Závady čtecích hlav, poškození ploten, selhání servisních dat',
        electronic: 'Elektronické závady',
        electronicDesc: 'Zničené PCB, poškození přepětím, selhání firmware',
        logical: 'Selhání souborového systému',
        logicalDesc: 'Obnova smazaných dat, oprava souborových systémů'
      },
      supported: {
        title: 'Podporované technologie',
        devices: 'Typy zařízení',
        manufacturers: 'Výrobci',
        sata: 'SATA HDD',
        ide: 'IDE/PATA HDD',
        scsi: 'SCSI/SAS HDD',
        external: 'Externí disky'
      }
    },
    ssd: {
      keywords: {
        recovery: "záchrana dat ssd, obnova dat ssd disk, oprava ssd disku, poškozený řadič ssd, firmware ssd, flash paměti"
      },
      title: 'Záchrana SSD',
      desc: 'Specializovaná obnova dat z flash pamětí a SSD disků.',
      features: {
        controller: 'Poruchy řadiče',
        controllerDesc: 'Obnova dat v případě poškozeného řadiče',
        firmware: 'Rekonstrukce firmwaru',
        firmwareDesc: 'Záchrana dat v případě selhání firmwaru',
        flash: 'Poškození flash čipů',
        flashDesc: 'Obnova dat z poškozených paměťových čipů'
      },
      supported: {
        title: 'Podporovaná zařízení',
        devices: 'Typy zařízení',
        manufacturers: 'Výrobci',
        sata: 'SATA SSD',
        nvme: 'NVMe SSD',
        usb: 'USB Flash disky',
        cards: 'Paměťové karty'
      }
    },
    raid: {
      keywords: {
      recovery: "záchrana dat raid, obnova dat raid systémy, oprava raid pole, rekonstrukce raid, nas server záchrana, san systémy obnova dat, raid 0 záchrana, raid 5 obnova, raid 10 rekonstrukce, RAID recovery, RAID 5E, RAID 6, havárie serveru"
    },
      title: 'RAID, NAS Systémy',
      desc: 'Obnova dat ze všech typů RAID polí a NAS serverů.',
      features: {
        hardware: 'Hardwarové RAID',
        hardwareDesc: 'Obnova dat při selhání nadkritického množství disků',
        software: 'Softwarové RAID',
        softwareDesc: 'Rekonstrukce RAID při ztrátě konfigurace',
        virtual: 'Virtuální systémy',
        virtualDesc: 'Obnova dat při poškození virtuálních strojů'
      },
      supported: {
        title: 'Podporované systémy',
        configurations: 'Konfigurace',
        nas: 'NAS systémy',
        san: 'SAN systémy',
        controllers: 'Výrobci'
      },
      security: {
        title: 'Bezpečnost dat',
        description: 'Garantujeme maximální bezpečnost a důvěrnost vašich dat během celého procesu obnovy'
      }
    },
    business: {
      title: 'Partnerský program',
        keywords: {
          recovery: "firemní záchrana dat, služby pro firmy, partnerský program datahelp, b2b záchrana dat, expresní obnova dat, prioritní servis, záchrana dat pro firmy, it firmy záchrana dat, sla záchrana dat"
        },
      desc: 'Nabízíme spolupráci IT firmám a servisům',
      contact: {
        salesTeam: 'Pro více informací kontaktujte naše obchodníky:',
        leaveMessage: 'Nebo nám zanechte zprávu:'
      },
      features: {
        support: 'Technická podpora',
        supportDesc: 'Obchodní a technická podpora, možnost zaškolení',
        security: 'Individuální ceník',
        securityDesc: 'Získejte lepší ceny a splatnost faktur',
        priority: 'Prioritní zpracování',
        priorityDesc: 'Přednostní zpracování požadavků našich partnerů'
      },
      sla: {
        title: 'SLA podmínky',
        response: {
          title: 'Garantovaná doba odezvy',
          description: 'Rychlá reakce na vaše požadavky'
        },
        onsite: {
          title: 'Servis na místě',
          description: 'Možnost řešení přímo u zákazníka'
        },
        reporting: {
          title: 'Pravidelné reporty',
          description: 'Detailní přehledy a statistiky'
        }
      },
      industries: {
        title: 'Průmyslová odvětví',
        finance: 'Finance',
        financeDesc: 'Banky a finanční instituce',
        healthcare: 'Zdravotnictví',
        healthcareDesc: 'Nemocnice a zdravotnická zařízení',
        manufacturing: 'Výroba',
        manufacturingDesc: 'Výrobní společnosti',
        it: 'IT',
        itDesc: 'IT společnosti a poskytovatelé služeb'
      }
    },
    whyChooseUs: 'Proč si vybrat nás',
    benefits: {
      security: 'Bezpečnost',
      securityDesc: 'Maximální ochrana vašich dat',
      expertise: 'Zkušenosti',
      expertiseDesc: 'Profesionální tým expertů',
      speed: 'Rychlost',
      speedDesc: 'Efektivní řešení problémů'
    }
  },
  reviews: {
    title: 'Recenze',
    review1: 'Profesionální přístup a rychlé řešení. Obnovili kritická data z našich serverů.',
    review2: 'Vynikající komunikace a perfektní výsledky. Doporučujeme pro všechny firmy.',
    review3: 'Obnovili naši databázi po ransomware útoku. Skvělá práce!'
  },
  pricing: {
    title: 'Ceník',
    subtitle: 'Férové ceny bez skrytých poplatků',
    description: 'V našich případových studiích najdete konkrétní ceny skutečných zakázek a platíte pouze za úspěšně zachráněná data. Ke každému případu přistupujeme individuálně.',
    getQuote: 'Nezávazná konzultace',
    hdd: {
      title: 'Záchrana HDD',
      description: 'Mechanicky poškozené nebo nefunkční pevné disky',
      price: 'Od 350 €',
      noSuccess: 'Data nelze obnovit = záchranu neplatíte',
      features: {
        diagnosis: 'Bezplatná vstupní diagnostika',
        recovery: 'Podpora všech výrobců',
        warranty: 'Rozsáhlý sklad dílů',
        support: 'Možnost Expresního zpracování'
      }
    },
    ssd: {
      title: 'Záchrana SSD',
      description: 'SSD disky, USB flash paměti a memory karty ',
      price: 'Od 250 €',
      noSuccess: 'Data nelze obnovit = záchranu neplatíte',
      features: {
        diagnosis: 'Bezplatná vstupní diagnostika',
        recovery: 'Podpora všech flash technologií',
        warranty: 'Více než 20 let zkušeností',
        support: 'Tým školených techniků'
      }
    },
    raid: {
      title: 'RAID, NAS Systémy',
      description: 'Pro RAID, NAS a serverové systémy',
      price: 'Individuální\nkalkulace',
      noSuccess: 'Cena dle rozsahu poškození',
      features: {
        diagnosis: 'Komplexní analýza',
        recovery: 'Rekonstrukce RAID i bez původního serveru',
        warranty: 'Podpora všech souborových systémů',
        support: 'Možnost expresního řešení 24/7'
      }
    },
    business: {
      title: 'Možnost spolupráce',
      description: 'Hledáme partnery pro spolupráci',
      price: 'Partnerský\nprogram',
      noSuccess: 'Dle specifických požadavků',
      features: {
        priority: 'Prioritní zpracování',
        sla: 'Individuální SLA',
        support: 'Odborná podpora',
        onsite: 'Individuální ceny'
      }
    },
    serviceList: {
      title: 'Položkový ceník',
      subtitle: 'Detailní ceník všech našich služeb',
      description: 'Transparentní ceník všech našich služeb včetně specializovaných prací',
      sections: {
        diagnostics: {
          title: 'Diagnostika a analýza',
          items: {
            basic: 'Základní diagnostika média (určení typu poškození)',
            detailed: 'Detailní analýza poškození a možností obnovy',
            planning: 'Vypracování postupu záchrany dat'
          }
        },
        software: {
          title: 'Softwarová záchrana dat',
          items: {
            deleted: 'Obnova smazaných souborů',
            filesystem: 'Oprava poškozených souborových systémů',
            compressed: 'Dekomprese a obnova komprimovaných souborů',
            raid: 'Převod dat z poškozeného RAID pole',
            database: 'Obnova dat z poškozených databází'
          }
        },
        hardware: {
          title: 'Hardwarová záchrana dat',
          items: {
            electronics: 'Výměna elektroniky pevného disku',
            heads: 'Výměna hlav v čistém prostředí',
            mechanics: 'Mikromanipulace s mechanikou HDD',
            bga: 'Pájení BGA čipů a výměna firmware čipů',
            rom: 'Práce s ROM emulátorem',
            service: 'Oprava servisní oblasti disku'
          }
        },
        specialized: {
          title: 'Specializované služby',
          items: {
            pc3000: 'Práce s PC-3000 UDMA/SSD/Flash',
            nand: 'Rekonstrukce NAND translátoru',
            security: 'Analýza a oprava T2/T3 security čipů',
            mcmt: 'Rekonstrukce MCMT tabulek',
            firmware: 'Analýza a modifikace firmware',
            reverse: 'Reverse engineering souborových systémů',
            damaged: 'Práce s poškozenými servisními daty'
          }
        },
        express: {
          title: 'Expresní služby',
          items: {
            h24: 'Příplatek za expresní zpracování (do 24 hodin)',
            overtime: 'Práce mimo pracovní dobu',
            weekend: 'Víkendové a sváteční práce'
          }
        },
        additional: {
          title: 'Dodatečné služby',
          items: {
            consulting: 'Konzultace a poradenství',
            backup: 'Záloha zachráněných dat na nové médium',
            encryption: 'Šifrování zachráněných dat',
            transport: 'Doprava k zákazníkovi'
          }
        }
      },
      pricing: {
        hourly: 'Kč/hod',
        percentage: '%',
        distance: 'Kč/km + 500 Kč/hod',
        note: 'Minimální účtovaná doba je 1 hodina. Ceny jsou uvedeny bez DPH. Ceny nezahrnují náhradní díly a média pro zálohu dat. Přesná cena bude stanovena po základní diagnostice. V případě neúspěšné záchrany dat se účtuje pouze diagnostika.'
      }
    }
  },
  faq: {
    title: 'Časté dotazy',
    subtitle: 'Odpovědi na nejčastější otázky o záchraně dat',
    questions: {
      q1: 'Jak se počítá konečná cena?',
      a1: 'Konečná cena závisí na typu a rozsahu poškození, potřebných dílech a složitosti obnovy.',
      q2: 'Nabízíte garanci "Bez dat, bez platby"?',
      a2: 'Ano, pokud se nám nepodaří vaše data obnovit, neplatíte za službu obnovy.',
      q3: 'Jak dlouho trvá proces obnovy?',
      a3: 'Standardní obnova trvá 5-10 pracovních dnů. Pro urgentní případy je k dispozici expresní služba.',
      q4: 'Jaké platební metody přijímáte?',
      a4: 'Přijímáme všechny hlavní platební karty, bankovní převody a firemní objednávky.',
      q5: 'Kdo jste a proč vám můžeme věřit?',
      a5: 'Jsme evropská společnost s více než 20 lety zkušeností v oboru záchrany dat. Máme vlastní specializovanou laboratoř v Praze a certifikované techniky.',
      q6: 'Kam posíláte disky k opravě?',
      a6: 'Nikam. Veškeré opravy a záchranu dat provádíme výhradně v naší vlastní laboratoři v Praze. Data nikdy neopouští naše zabezpečené prostory.',
      q7: 'Jak je zajištěna bezpečnost dat?',
      a7: 'Pracujeme v zabezpečené laboratoři s kontrolovaným přístupem. Všechna data jsou šifrována a po úspěšné záchraně bezpečně smazána. Dodržujeme přísné bezpečnostní protokoly a jsme vázáni mlčenlivostí.',
      q8: 'Co když jsou data citlivá?',
      a8: 'Jsme zvyklí pracovat s citlivými daty. Můžeme podepsat NDA a poskytnout nadstandardní bezpečnostní opatření.',
      q9: 'Jaké jsou vaše úspěšnosti?',
      a9: 'Naše úspěšnost záchrany dat přesahuje 95%. Díky vlastní laboratoři a špičkovému vybavení dokážeme řešit i velmi složité případy.',
      q10: 'Co když nemám zálohu?',
      a10: 'To je běžná situace. Jsme specialisté na záchranu dat bez zálohy. Po úspěšné záchraně vám rádi poradíme s nastavením vhodného zálohovacího řešení.'
    }
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Jsme tu pro vás 24/7',
    form: {
      title: 'Napište nám',
      leaveMessage: 'Zanechte nám zprávu',
      name: 'Jméno a příjmení',
      email: 'E-mail',
      phone: 'Telefon',
      message: 'Zpráva',
      send: 'Odeslat zprávu',
      sending: 'Odesílání...',
      success: 'Zpráva byla úspěšně odeslána',
      error: 'Došlo k chybě. Zkuste to prosím později.',
      rateLimit: 'Příliš mnoho požadavků. Zkuste to znovu za {seconds} sekund.',
      tooManyRequests: 'Příliš mnoho požadavků. Zkuste to prosím později.',
      errors: {
        name: 'Jméno je povinné',
        email: 'E-mail je povinný',
        emailFormat: 'Neplatný formát e-mailu',
        phone: 'Neplatný formát telefonu',
        message: 'Zpráva je povinná'
      }
    },
    info: {
      title: 'Kontaktní informace',
      address: 'Jirsíkova 541/1\n186 00 Praha 8 - Karlín',
      hours: 'Otevírací doba:\nPo-Pá: 9:00 - 18:00\nPohotovost: 24/7',
      phone: '+420 123 456 789',
      email: 'info@datahelp.cz',
      emergency: '24/7 Pohotovostní služba pro firemní klienty'
    },
    partners: {
      title: 'Nebo kontaktujte naše partnery',
      description: 'Máme síť certifikovaných partnerů po celé České republice'
    }
  },
  techPage: {
    ourTechnology: {
    title: 'Naše technologie',
    description: 'Používáme nejmodernější technologie a postupy pro záchranu dat. Naše laboratoř je vybavena špičkovými nástroji včetně systémů PC-3000 pro komplexní diagnostiku a obnovu dat z různých typů médií. Díky těmto technologiím dokážeme řešit i ty nejnáročnější případy záchrany dat.'
    },
    title: 'Naše technologie',
    subtitle: 'Špičkové vybavení pro profesionální záchranu dat',
    cleanRoom: {
      title: 'Bezprašné prostředí',
      description: 'Všechny pracoviště jsou vybaveny laboratorními boxy třídy 100 pro bezpečnou manipulaci s citlivými komponenty'
    },
    tools: {
      title: 'Specializované nástroje',
      description: 'Nejmodernější hardwarové a softwarové nástroje pro obnovu dat'
    },
    diagnostics: {
      title: 'Pokročilá diagnostika',
      description: 'Komplexní diagnostické systémy pro přesnou identifikaci problémů'
    },
    equipment: {
      title: 'Profesionální vybavení',
      pc3000udma: {
        description: 'Profesionální systém pro obnovu dat z HDD',
        features: {
          manufacturers: 'Podpora všech výrobců HDD',
          firmware: 'Opra vy firmware',
          recovery: 'Pokročilá obnova dat'
        }
      },
      pc3000flash: {
        description: 'Specializovaný systém pro flash paměti',
        features: {
          monolithic: 'Monolitické čipy',
          usb: 'USB flash disky',
          ssd: 'SSD disky'
        }
      },
      pc3000ssd: {
        description: 'Systém pro SSD disky',
        features: {
          nvme: 'NVMe disky',
          sata: 'SATA SSD',
          controller: 'Opravy řadičů'
        }
      }
    },
    security: {
      title: 'Bezpečnostní protokoly',
      protocols: {
        title: 'Bezpečnost dat',
        description: 'Přísné bezpečnostní protokoly pro ochranu vašich dat'
      },
      specialists: {
        title: 'Certifikovaní specialisté',
        description: 'Tým vysoce kvalifikovaných odborníků s mnohaletými zkušenostmi'
      }
    }
  },
  gallery: {
    title: 'Naše laboratoř',
    cleanRoom: 'Čistá místnost',
    diagnostics: 'Diagnostika',
    serverRoom: 'Serverovna',
    dataCenter: 'Datové centrum'
  },
  process: {
    title: 'Proces záchrany dat',
    guarantee: 'Data nelze obnovit = záchranu neplatíte',
    reception: {
      title: 'Příjem média',
      desc: 'Bezpečné převzetí vašeho zařízení'
    },
    diagnosis: {
      title: 'Diagnostika',
      desc: 'Komplexní analýza poškození'
    },
    approval: {
      title: 'Schválení postupu',
      desc: 'Cenová kalkulace a plán obnovy'
    },
    recovery: {
      title: 'Záchrana dat',
      desc: 'Profesionální obnova dat'
    },
    verification: {
      title: 'Kontrola',
      desc: 'Ověření obnovených dat'
    },
    delivery: {
      title: 'Předání dat',
      desc: 'Bezpečné předání dat'
    }
  },
  footer: {
    privacy: 'Ochrana soukromí',
    terms: 'Obchodní podmínky',
    cookies: 'Cookies',
    legal: 'Právní informace'
  },
  privacy: {
  title: 'Ochrana osobních údajů',
  subtitle: 'Informace o zpracování a ochraně vašich osobních údajů',
  dataProtection: {
    title: 'Ochrana dat',
    content: 'Vaše osobní údaje zpracováváme v souladu s GDPR a platnou legislativou. Používáme nejmodernější technologie a postupy pro zajištění maximální bezpečnosti vašich dat. Veškeré údaje jsou uchovávány na zabezpečených serverech v EU.'
  },
  security: {
    title: 'Bezpečnostní opatření',
    content: 'Implementujeme přísná bezpečnostní opatření včetně šifrování dat, kontroly přístupu a pravidelných bezpečnostních auditů. Naši zaměstnanci jsou pravidelně školeni v oblasti ochrany osobních údajů a jsou vázáni mlčenlivostí.'
  },
  transparency: {
    title: 'Transparentnost',
    content: 'Jsme maximálně transparentní ohledně způsobu, jakým zpracováváme vaše osobní údaje. Shromažďujeme pouze údaje nezbytné pro poskytování našich služeb a nikdy je neprodáváme třetím stranám. Vaše data používáme výhradně pro účely, ke kterým jste nám dali souhlas.'
  },
  rights: {
    title: 'Vaše práva',
    content: 'Máte právo na přístup ke svým osobním údajům, jejich opravu nebo výmaz, právo na omezení zpracování a právo vznést námitku proti zpracování. Také máte právo na přenositelnost údajů a právo podat stížnost u dozorového úřadu.'
  },
  contact: {
    title: 'Kontakt pro ochranu osobních údajů',
    content: 'V případě jakýchkoliv dotazů ohledně zpracování vašich osobních údajů nás můžete kontaktovat:',
    address: 'Adresa'
  }
    },
  terms: {
  title: 'Obchodní podmínky',
  subtitle: 'Všeobecné obchodní podmínky společnosti DataHelp',
  lastUpdated: 'Poslední aktualizace: 1. března 2024',
  sections: {
    general: {
      title: 'Obecná ustanovení',
      content: 'Tyto všeobecné obchodní podmínky upravují vztahy mezi společností DataHelp s.r.o. a jejími zákazníky při poskytování služeb záchrany dat.'
    },
    services: {
      title: 'Poskytované služby',
      content: 'Společnost poskytuje služby záchrany dat z poškozených datových nosičů. Součástí služeb je diagnostika, záchrana dat a jejich bezpečné předání zákazníkovi.'
    },
    pricing: {
      title: 'Ceny a platby',
      content: 'Ceny služeb se řídí aktuálním ceníkem. Zákazník platí pouze za úspěšnou záchranu dat. Diagnostika je zdarma.'
    },
    warranty: {
      title: 'Záruky',
      content: 'Společnost garantuje maximální úsilí při záchraně dat. Neručíme za data, která není možné zachránit z důvodu jejich fyzického poškození.'
    },
    confidentiality: {
      title: 'Důvěrnost',
      content: 'Zavazujeme se k absolutní mlčenlivosti o všech datech a informacích získaných při poskytování služeb.'
    },
    complaints: {
      title: 'Reklamace',
      content: 'Případné reklamace služeb řešíme individuálně s maximální snahou o spokojenost zákazníka. Reklamaci lze uplatnit do 30 dnů.'
    }
  }
},
  cookies: {
  title: 'Zásady používání cookies',
  subtitle: 'Informace o používání cookies na našich stránkách',
  lastUpdated: 'Poslední aktualizace: 1. března 2024',
  sections: {
    what: {
      title: 'Co jsou cookies',
      content: 'Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče při návštěvě našich stránek. Pomáhají nám zajistit základní funkčnost webu, analyzovat návštěvnost a přizpůsobit obsah vašim potřebám.'
    },
    types: {
      title: 'Typy cookies',
      necessary: {
        title: 'Nezbytné cookies',
        content: 'Tyto cookies jsou nutné pro správné fungování webu. Nelze je vypnout.'
      },
      analytical: {
        title: 'Analytické cookies',
        content: 'Pomáhají nám pochopit, jak návštěvníci používají web. Všechna data jsou anonymizována.'
      },
      functional: {
        title: 'Funkční cookies',
        content: 'Umožňují lepší funkčnost a personalizaci webu.'
      }
    },
    usage: {
      title: 'Jak používáme cookies',
      content: 'Cookies používáme pro:',
      purposes: [
        'Zajištění základní funkčnosti webu',
        'Analýzu návštěvnosti a chování uživatelů',
        'Zlepšování našich služeb',
        'Zapamatování vašich preferencí'
      ]
    },
    control: {
      title: 'Správa cookies',
      content: 'Cookies můžete spravovat nebo zakázat v nastavení vašeho prohlížeče. Vypnutí některých cookies však může omezit funkčnost našeho webu.'
    },
    consent: {
      title: 'Váš souhlas',
      content: 'Používáním našeho webu souhlasíte s používáním cookies v souladu s těmito zásadami.'
    }
  }
}
};