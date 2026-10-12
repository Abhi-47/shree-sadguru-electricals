export type Language = 'mr' | 'en';

export interface Translations {
  shopName: string;
  shopNameEn: string;
  shopType: string;
  shopTagline: string;
  locationBeed: string;
  phone1: string;
  phone2: string;
  phone1Raw: string;
  phone2Raw: string;
  whatsappMessage: string;

  nav: {
    services: string;
    rates: string;
    projects: string;
    estimator: string;
    contact: string;
    callNow: string;
    langToggle: string;
  };

  hero: {
    badge: string;
    title: string;
    subtitle: string;
    homeServiceNotice: string;
    callButton: string;
    whatsappButton: string;
    estimatorButton: string;
    ratesButton: string;
    stats: {
      experience: string;
      experienceLabel: string;
      satisfiedClients: string;
      satisfiedLabel: string;
      ratePromise: string;
      ratePromiseLabel: string;
      homeVisit: string;
      homeVisitLabel: string;
    };
  };

  homeServiceBadge: {
    title: string;
    desc: string;
    point1: string;
    point2: string;
    point3: string;
  };

  rateCard: {
    kicker: string;
    title: string;
    subtitle: string;
    notice: string;
    callForWork: string;
    colService: string;
    colRate: string;
    colTime: string;
    items: {
      name: string;
      rate: string;
      desc: string;
      time: string;
      badge?: string;
    }[];
  };

  services: {
    kicker: string;
    title: string;
    subtitle: string;
    tabs: {
      all: string;
      houseWiring: string;
      homeRepair: string;
      inverter: string;
      waterMotor: string;
      faultFinding: string;
      earthing: string;
    };
    startingFrom: string;
    viewDetails: string;
    bookService: string;
  };

  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    sliderTitle: string;
    sliderSubtitle: string;
    beforeLabel: string;
    afterLabel: string;
    inspectDetails: string;
    clickToEnlarge: string;
  };

  estimator: {
    kicker: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    estimatedTotal: string;
    rangeNote: string;
    applyEstimate: string;
    callDirect: string;
  };

  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    shopInfoTitle: string;
    addressLabel: string;
    shopAddress: string;
    timingLabel: string;
    shopTiming: string;
    areasCovered: string;
    areasList: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    villageOrAreaLabel: string;
    serviceLabel: string;
    detailsLabel: string;
    submitButton: string;
    directCallTitle: string;
  };

  faq: {
    kicker: string;
    title: string;
    subtitle: string;
  };

  footer: {
    desc: string;
    homeNotice: string;
    copyright: string;
    phoneTitle: string;
    addressTitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  mr: {
    shopName: 'श्री सद्गुरु इलेक्ट्रिकल्स',
    shopNameEn: 'Shree Sadguru Electricals',
    shopType: 'स्वतंत्र घरगुती इलेक्ट्रिशियन सेवा (Independent Home Electrician)',
    shopTagline: 'बीड शहर • १००% घरपोच सेवा • अतिशय वाजवी व परवडणारे दर',
    locationBeed: 'बीड शहर, महाराष्ट्र',
    phone1: '8080795343',
    phone2: '9975094847',
    phone1Raw: '918080795343',
    phone2Raw: '919975094847',
    whatsappMessage: 'नमस्कार, मला घरातील इलेक्ट्रिकल कामासाठी आपली मदत हवी आहे.',

    nav: {
      services: 'घरगुती सेवा',
      rates: 'दर तक्ता',
      projects: 'केलेली कामे',
      estimator: 'अंदाजे खर्च',
      contact: 'संपर्क',
      callNow: 'कॉल करा',
      langToggle: 'English',
    },

    hero: {
      badge: '🏠 फक्त घरगुती सेवा • कमर्शियल कामे नाही करत • बीड शहर',
      title: 'घरातील प्रत्येक इलेक्ट्रिकल कामासाठी विश्वासू, जलद व वाजवी सेवा',
      subtitle:
        'आम्ही कंपनी नाही, बीड शहरातील आपले स्वतंत्र व स्थानिक इलेक्ट्रिशियन आहोत. फक्त एका फोनवर थेट आपल्या घरी येऊन काम करतो. बाजारातील दरांपेक्षा खूप कमी आणि पारदर्शक दरात खात्रीशीर काम!',
      homeServiceNotice:
        'विशेष नोंद: आम्ही फक्त घरगुती (Home Service) कामे करतो, मोठी कमर्शियल किंवा कारखान्यांची कामे करत नाही.',
      callButton: 'थेट कॉल करा',
      whatsappButton: 'व्हॉट्सॲपवर सांगा',
      estimatorButton: 'अंदाजे बिल काढा',
      ratesButton: 'वाजवी दर पहा',
      stats: {
        experience: '१०+ वर्षे',
        experienceLabel: 'स्थानिक कामाचा अनुभव',
        satisfiedClients: '१०००+',
        satisfiedLabel: 'समाधानी कुटुंबे बीडमध्ये',
        ratePromise: '₹१०० पासून',
        ratePromiseLabel: 'किफायतशीर व वाजवी दर',
        homeVisit: '१५-३० मि.',
        homeVisitLabel: 'तातडीने घरपोच हजेरी',
      },
    },

    homeServiceBadge: {
      title: 'आम्ही फक्त घरगुती सेवा (Home Service) का देतो?',
      desc: 'मोठ्या कंत्राटांमध्ये न अडकता, बीड शहरातील सामान्य कुटुंबांना तातडीने व कमीत कमी खर्चात सेवा मिळावी हाच आमचा प्रामाणिक उद्देश आहे.',
      point1: 'घरी येऊन जागेवर काम - पंखे, बोर्ड किंवा उपकरणे कुठेही घेऊन जाण्याची गरज नाही',
      point2: 'बाजारातील वाढीव दरांऐवजी स्थानिक आणि अगदी वाजवी मजुरी दर',
      point3: 'शॉर्ट सर्किट किंवा इमर्जन्सीमध्ये बीड शहरात १५ ते ३० मिनिटांत घरपोच धाव',
    },

    rateCard: {
      kicker: 'पारदर्शक व कमी केलेले दर',
      title: 'घरगुती इलेक्ट्रिकल सेवा - दर तक्ता',
      subtitle: 'कोणतेही छुपे शुल्क नाही. बीड शहरातील कुटुंबांसाठी अगदी रास्त व परवडणारे मजुरी दर.',
      notice: 'टीप: वरील दर फक्त मजुरीचे आहेत. साहित्य (सामान) आपले असेल किंवा आम्ही वाजवी दरात मूळ बिल देऊन आणू शकतो.',
      callForWork: 'काम ठरवण्यासाठी लगेच कॉल करा',
      colService: 'कामाचा प्रकार',
      colRate: 'वाजवी मजुरी दर',
      colTime: 'वेळ',
      items: [
        {
          name: 'सीलिंग फॅन फिटिंग / हँगिंग',
          rate: '₹ १०० - ₹ १२० / फॅन',
          desc: 'फॅन बसवणे, रॉड फिटिंग व रेग्युलेटर कनेक्शन',
          time: '२०-३० मि.',
          badge: 'सर्वात लोकप्रिय',
        },
        {
          name: 'साधा / मॉड्युलर स्विच किंवा सॉकेट बदलणे',
          rate: '₹ ५० - ₹ ७० / पीस',
          desc: 'जळलेला स्विच बदलणे, सॉकेट दुरुस्ती',
          time: '१५ मि.',
        },
        {
          name: 'मॉड्युलर बोर्ड जोडणी / दुरुस्ती',
          rate: '₹ १२० - ₹ १८० / बोर्ड',
          desc: 'नवीन बोर्ड बसवणे किंवा जुन्या बोर्डचे अंतर्गत वायरिंग दुरुस्ती',
          time: '३०-४५ मि.',
        },
        {
          name: 'कन्सिल्ड पॉईंट वायरिंग (Concealed Point)',
          rate: '₹ १२० - ₹ १५० / पॉईंट',
          desc: 'नवीन घर किंवा खोलीसाठी झिर्री पाईप व सुरक्षित पॉईंट वायरिंग',
          time: '१-२ दिवस',
          badge: 'वाजवी व खात्रीशीर',
        },
        {
          name: 'बाथरूम गिझर / हिटर फिटिंग',
          rate: '₹ २०० - ₹ २५० / गिझर',
          desc: 'भिंतीवर हँगिंग, वॉटरप्रूफ १६A पॉवर कनेक्शन व अर्थिंग चेक',
          time: '४५ मि.',
        },
        {
          name: 'घरगुती इन्व्हर्टर व बॅटरी कनेक्शन',
          rate: '₹ ३०० - ₹ ४०० / सेटअप',
          desc: 'इन्व्हर्टर लोड सेपरेशन वायरिंग, बॅटरी केबल्स व बायपास स्विच',
          time: '१-२ तास',
          badge: 'परवडणारा दर',
        },
        {
          name: 'घरातील पाण्याची मोटर / मोनोब्लॉक पंप फिटिंग',
          rate: '₹ २०० - ₹ २५० / मोटर',
          desc: 'घरगुती पाण्याची मोटर कनेक्शन, स्टार्टर कॅपॅसिटर तपासणी',
          time: '३०-४५ मि.',
        },
        {
          name: 'शॉर्ट सर्किट शोधणे / फ्युज व MCB दुरुस्ती',
          rate: '₹ १५० (व्हिजिट फी समाविष्ट)',
          desc: 'सतत ट्रिप होणारा MCB, वीज गळती शोधणे व तात्काळ वीज सुरू करणे',
          time: '३० मि.',
        },
        {
          name: 'घरगुती सेफ अर्थिंग काम',
          rate: '₹ ५५० - ₹ ७५०',
          desc: 'शॉकपासून संरक्षणासाठी कॉपर/केमिकल अर्थिंग पाईप फिटिंग',
          time: '२-३ तास',
        },
        {
          name: 'घरपोच व्हिजिट / तपासणी फी (Doorstep Visit)',
          rate: 'फक्त ₹ १५०',
          desc: 'बीड शहरात घरी येऊन सर्व वायरिंग तपासणे (मोठे काम असल्यास बिलात ॲडजस्ट)',
          time: '२० मि.',
          badge: 'निश्चित दर',
        },
      ],
    },

    services: {
      kicker: 'आमच्या सेवा',
      title: '१००% घरपोच इलेक्ट्रिकल कामे',
      subtitle: 'आपल्या घरासाठी आवश्यक असणारी सर्व इलेक्ट्रिकल कामे एकाच ठिकाणी, रास्त दरात.',
      tabs: {
        all: 'सर्व सेवा',
        houseWiring: 'घरगुती वायरिंग',
        homeRepair: 'फॅन, गिझर व उपकरणे',
        inverter: 'इन्व्हर्टर व बॅटरी',
        waterMotor: 'पाण्याची मोटर',
        faultFinding: 'फॉल्ट व शॉर्ट सर्किट',
        earthing: 'घरगुती अर्थिंग',
      },
      startingFrom: 'दर सुरुवात',
      viewDetails: 'सविस्तर माहिती',
      bookService: 'घरपोच बोलवा',
    },

    projects: {
      kicker: 'कामाचे नमुने',
      title: 'बीड शहरातील घरांमध्ये केलेली कामे',
      subtitle: 'आम्ही स्वतः केलेल्या प्रत्यक्ष घरगुती कामांचे फोटो व तांत्रिक माहिती.',
      sliderTitle: 'काम कसे सुधारले? (Before / After)',
      sliderSubtitle: 'जुन्या धोकादायक लाकडी बोर्डाचे रूपांतर सुरक्षित मॉड्युलर बोर्डमध्ये',
      beforeLabel: 'आधी: जुना धोकादायक बोर्ड',
      afterLabel: 'नंतर: सुरक्षित अँकर रोमा मॉड्युलर बोर्ड',
      inspectDetails: 'कामाचा तपशील पहा',
      clickToEnlarge: 'मोठ्या आकारात पाहण्यासाठी फोटोवर क्लिक करा',
    },

    estimator: {
      kicker: 'कमी केलेले दर कॅल्क्युलेटर',
      title: 'घरगुती कामाचा अंदाजे खर्च तपासा',
      subtitle: 'आपल्याला हवे असलेले काम निवडा आणि तात्काळ वाजवी खर्चाचा अंदाज मिळवा.',
      step1: '१. कामाचा प्रकार निवडा',
      step2: '२. कामाचे प्रमाण निवडा',
      step3: '३. तातडीची निकड',
      step4: '४. अतिरिक्त सोयी निवडा',
      estimatedTotal: 'अंदाजे वाजवी मजुरी खर्च',
      rangeNote: 'हा दर घरपोच सेवेचा अंदाजे मजुरी खर्च आहे. प्रत्यक्ष पाहणीनंतर अचूक सांगता येईल.',
      applyEstimate: 'हे काम ठरवण्यासाठी संपर्क करा',
      callDirect: 'थेट फोन करून बुक करा',
    },

    contact: {
      kicker: 'थेट संपर्क',
      title: 'एका फोनवर आम्ही आपल्या घरी हजर!',
      subtitle: 'बीड शहरात कुठेही असला तरी थेट कॉल किंवा व्हॉट्सॲप करा, आम्ही वेळेत पोहोचू.',
      shopInfoTitle: 'इलेक्ट्रिशियन संपर्क माहिती',
      addressLabel: 'पत्ता / मुख्य केंद्र:',
      shopAddress: 'श्री सद्गुरु इलेक्ट्रिकल्स, बीड शहर, जिल्हा बीड, महाराष्ट्र - ४३११२२',
      timingLabel: 'वेळ:',
      shopTiming: 'सकाळी ७:०० ते रात्री ९:०० (सर्व दिवस घरपोच सेवा उपलब्ध)',
      areasCovered: 'सेवा क्षेत्र (बीड शहर व लगतचा परिसर):',
      areasList:
        'सुभाष रोड, जालना रोड, नगर रोड, शिवाजी चौक, शाहू नगर, बिंदुसरा परिसर, पाटोदा रोड, कारंजा चौक व संपूर्ण बीड शहर.',
      formTitle: 'घरपोच सेवेसाठी नाव व पत्ता पाठवा',
      formSubtitle: 'माहिती भरताच आम्ही तुम्हाला त्वरित फोन करून वेळ निश्चित करू.',
      nameLabel: 'आपले नाव *',
      phoneLabel: 'मोबाईल नंबर *',
      villageOrAreaLabel: 'घराचा पत्ता / परिसर (बीड शहर) *',
      serviceLabel: 'कामाचा प्रकार *',
      detailsLabel: 'काही विशेष अडचण असल्यास लिहा',
      submitButton: 'घरपोच व्हिजिटसाठी विनंती पाठवा',
      directCallTitle: 'तातडीचे काम असल्यास थेट कॉल करा:',
    },

    faq: {
      kicker: 'नेहमी विचारले जाणारे प्रश्न',
      title: 'आपल्या मनातील शंका व उत्तरे',
      subtitle: 'घरगुती कामे, दर आणि व्हिजिट बाबतची स्पष्ट माहिती.',
    },

    footer: {
      desc: 'श्री सद्गुरु इलेक्ट्रिकल्स - बीड शहरातील आपल्या विश्वासातील स्वतंत्र घरगुती इलेक्ट्रिशियन. सुरक्षित, दर्जेदार आणि वाजवी दरातील काम.',
      homeNotice: 'टीप: आम्ही फक्त घरगुती (Home Service) कामे करतो, कमर्शियल कंत्राटे घेतली जात नाहीत.',
      copyright: 'सर्व हक्क सुरक्षित © २०२६ श्री सद्गुरु इलेक्ट्रिकल्स, बीड.',
      phoneTitle: 'थेट संपर्क क्रमांक',
      addressTitle: 'पत्ता व कार्यक्षेत्र',
    },
  },

  en: {
    shopName: 'Shree Sadguru Electricals',
    shopNameEn: 'Shree Sadguru Electricals',
    shopType: 'Independent Residential Home Electrician',
    shopTagline: 'Beed City • 100% Doorstep Home Service • Highly Affordable Rates',
    locationBeed: 'Beed City, Maharashtra',
    phone1: '8080795343',
    phone2: '9975094847',
    phone1Raw: '918080795343',
    phone2Raw: '919975094847',
    whatsappMessage: 'Hello, I need assistance with home electrical work.',

    nav: {
      services: 'Home Services',
      rates: 'Rate Card',
      projects: 'Projects',
      estimator: 'Cost Estimator',
      contact: 'Contact',
      callNow: 'Call Now',
      langToggle: 'मराठी',
    },

    hero: {
      badge: '🏠 100% Home Service Only • No Commercial Contracts • Beed City',
      title: 'Reliable, Prompt & Affordable Doorstep Electrical Services for Your Home',
      subtitle:
        'We are not a corporation — we are your independent local electrician shop right in Beed city. Just one call and we arrive at your doorstep. Safe, neat electrical work at honest, lowered local prices.',
      homeServiceNotice:
        'Important Notice: We exclusively provide Residential Home Services; we do not take large commercial or factory contracts.',
      callButton: 'Call Now',
      whatsappButton: 'Chat on WhatsApp',
      estimatorButton: 'Estimate Bill',
      ratesButton: 'View Fair Rates',
      stats: {
        experience: '10+ Years',
        experienceLabel: 'Local Field Experience',
        satisfiedClients: '1000+',
        satisfiedLabel: 'Happy Families in Beed',
        ratePromise: 'From ₹100',
        ratePromiseLabel: 'Fair & Honest Rates',
        homeVisit: '15-30 Min',
        homeVisitLabel: 'Quick Doorstep Arrival',
      },
    },

    homeServiceBadge: {
      title: 'Why Do We Exclusively Do Home Service?',
      desc: 'By avoiding complicated corporate commercial contracts, we stay 100% available for local families in Beed city to deliver fast and affordable doorstep solutions.',
      point1: 'Doorstep on-site repairs - No need to carry heavy fans, boards or heaters to outside shops',
      point2: 'Substantially lower labor rates compared to market contractor rates',
      point3: 'Rapid emergency response across Beed city in 15 to 30 minutes for tripping and short circuits',
    },

    rateCard: {
      kicker: 'Transparent Lowered Prices',
      title: 'Home Electrical Service Rate Card',
      subtitle: 'Zero hidden fees. Clean, budget-friendly labor rates for residents across Beed city.',
      notice: 'Note: Prices shown are for skilled labor only. Electrical materials can be supplied by you or brought by us at genuine wholesale receipt rates.',
      callForWork: 'Call us now to book an appointment',
      colService: 'Work Description',
      colRate: 'Affordable Labor Rate',
      colTime: 'Duration',
      items: [
        {
          name: 'Ceiling Fan Installation & Hanging',
          rate: '₹ 100 - ₹ 120 / Fan',
          desc: 'Mounting, down-rod fitting & electronic regulator wiring',
          time: '20-30 min',
          badge: 'Most Popular',
        },
        {
          name: 'Single Switch or Socket Replacement',
          rate: '₹ 50 - ₹ 70 / Pc',
          desc: 'Burnt switch renewal, tight connection & socket testing',
          time: '15 min',
        },
        {
          name: 'Modular Switchboard Wiring / Repair',
          rate: '₹ 120 - ₹ 180 / Board',
          desc: 'Internal board loop rewiring or fitting a new modular plate',
          time: '30-45 min',
        },
        {
          name: 'Concealed Point Wiring (House Wiring)',
          rate: '₹ 120 - ₹ 150 / Point',
          desc: 'Groove conduit & fire-retardant copper point wiring',
          time: '1-2 days',
          badge: 'Fair & Reliable',
        },
        {
          name: 'Bathroom Water Geyser Installation',
          rate: '₹ 200 - ₹ 250 / Unit',
          desc: 'Wall bracket mounting, 16A power socket wiring & earthing test',
          time: '45 min',
        },
        {
          name: 'Home Inverter & Battery Setup',
          rate: '₹ 300 - ₹ 400 / Setup',
          desc: 'Load segregation, thick battery lug cables & bypass switch',
          time: '1-2 hrs',
          badge: 'Affordable',
        },
        {
          name: 'Home Water Pump / Monoblock Motor Wiring',
          rate: '₹ 200 - ₹ 250 / Motor',
          desc: 'Home water motor connections & capacitor verification',
          time: '30-45 min',
        },
        {
          name: 'Short Circuit Diagnostic & Tripping MCB Fix',
          rate: '₹ 150 (Visit Fee Included)',
          desc: 'Tripping breaker isolation, neutral wire fix & quick power restore',
          time: '30 min',
        },
        {
          name: 'Safe Home Chemical / Copper Earthing',
          rate: '₹ 550 - ₹ 750',
          desc: 'Earthing pipe installation to protect families from electric shock',
          time: '2-3 hrs',
        },
        {
          name: 'Home Inspection Visit Fee (Doorstep Visit)',
          rate: 'Just ₹ 150',
          desc: 'Comprehensive doorstep wiring inspection across Beed city (adjusted in bill for major jobs)',
          time: '20 min',
          badge: 'Fixed Charge',
        },
      ],
    },

    services: {
      kicker: 'Our Capabilities',
      title: '100% Residential Doorstep Electrical Services',
      subtitle: 'Complete electrical solutions for your home in one place at truly affordable rates.',
      tabs: {
        all: 'All Services',
        houseWiring: 'Home Wiring',
        homeRepair: 'Fan, Geyser & Appliances',
        inverter: 'Inverter & Battery',
        waterMotor: 'Water Pump & Motor',
        faultFinding: 'Short Circuit & Faults',
        earthing: 'Safe Earthing',
      },
      startingFrom: 'Starts From',
      viewDetails: 'View Details',
      bookService: 'Book Home Visit',
    },

    projects: {
      kicker: 'Our Real Work',
      title: 'Residential Projects Completed in Beed City',
      subtitle: 'Photographs and technical details of authentic home electrical work done by us.',
      sliderTitle: 'Visual Transformation (Before / After)',
      sliderSubtitle: 'Hazardous old wooden switchboard upgraded to safe Anchor Roma modular plate',
      beforeLabel: 'Before: Hazardous Old Wooden Board',
      afterLabel: 'After: Safe Anchor Roma Modular Board',
      inspectDetails: 'Inspect Technical Scope',
      clickToEnlarge: 'Click any project image to open in full-screen Lightbox',
    },

    estimator: {
      kicker: 'Lowered Cost Calculator',
      title: 'Estimate Your Home Electrical Bill',
      subtitle: 'Choose your required home service to receive an immediate realistic labor estimate.',
      step1: '1. Select Work Type',
      step2: '2. Select Scale of Work',
      step3: '3. Urgency',
      step4: '4. Optional Safety Add-ons',
      estimatedTotal: 'Estimated Fair Labor Cost',
      rangeNote: 'Estimated labor charge for doorstep visit. Final quote verified on-site.',
      applyEstimate: 'Apply to Booking Form',
      callDirect: 'Call Directly to Book',
    },

    contact: {
      kicker: 'Direct Contact',
      title: 'One Call & We Are at Your Doorstep!',
      subtitle: 'Wherever you reside in Beed city, call or message us on WhatsApp for timely service.',
      shopInfoTitle: 'Electrician Contact Information',
      addressLabel: 'Address / Shop Base:',
      shopAddress: 'Shree Sadguru Electricals, Beed City, District Beed, Maharashtra - 431122',
      timingLabel: 'Operating Hours:',
      shopTiming: '7:00 AM to 9:00 PM (Doorstep Service Available 7 Days a Week)',
      areasCovered: 'Service Areas (Beed City & Periphery):',
      areasList:
        'Subhash Road, Jalna Road, Nagar Road, Shivaji Chowk, Shahu Nagar, Bindusara Area, Patoda Road, Karanja Chowk and all of Beed city.',
      formTitle: 'Send Name & Address for Doorstep Visit',
      formSubtitle: 'Submit your request and we will promptly call back to confirm arrival timing.',
      nameLabel: 'Your Name *',
      phoneLabel: 'Mobile Phone Number *',
      villageOrAreaLabel: 'Home Address / Area in Beed City *',
      serviceLabel: 'Service Required *',
      detailsLabel: 'Describe your issue or timing preference',
      submitButton: 'Request Doorstep Electrician Visit',
      directCallTitle: 'For urgent assistance, call directly:',
    },

    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Got Questions? We Have Answers',
      subtitle: 'Clear details on our home visit policy, lowered pricing, and doorstep reliability.',
    },

    footer: {
      desc: 'Shree Sadguru Electricals - Your trusted independent residential home electrician in Beed city. Safe, high quality, and budget-friendly service.',
      homeNotice: 'Note: We exclusively perform Residential Home Services; no commercial contracts are undertaken.',
      copyright: 'All Rights Reserved © 2026 Shree Sadguru Electricals, Beed.',
      phoneTitle: 'Direct Contact Numbers',
      addressTitle: 'Address & Coverage',
    },
  },
};
