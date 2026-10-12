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
    projects: string;
    estimator: string;
    aboutShop: string;
    contact: string;
    callNow: string;
    langToggle: string;
  };

  hero: {
    badge: string;
    title: string;
    subtitle: string;
    callButton: string;
    whatsappButton: string;
    estimatorButton: string;
    shopNotice: string;
    stats: {
      experience: string;
      experienceLabel: string;
      satisfiedClients: string;
      satisfiedLabel: string;
      sameDay: string;
      sameDayLabel: string;
      warranty: string;
      warrantyLabel: string;
    };
  };

  shopHighlights: {
    title: string;
    desc: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    item4Title: string;
    item4Desc: string;
  };

  services: {
    kicker: string;
    title: string;
    subtitle: string;
    tabs: {
      all: string;
      houseWiring: string;
      agriculture: string;
      inverter: string;
      repairRewinding: string;
      commercial: string;
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
    sliderNotice: string;
    inspectDetails: string;
  };

  estimator: {
    kicker: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    estimatedTotal: string;
    rangeNote: string;
    applyEstimate: string;
  };

  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    shopInfoTitle: string;
    ownerName: string;
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
    urgencyLabel: string;
    detailsLabel: string;
    attachPhoto: string;
    submitButton: string;
    directCallTitle: string;
  };

  faq: {
    kicker: string;
    title: string;
    subtitle: string;
  };

  footer: {
    about: string;
    quickLinks: string;
    topServices: string;
    directContact: string;
    copyright: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, Translations> = {
  mr: {
    shopName: 'श्री सद्गुरु इलेक्ट्रिकल्स',
    shopNameEn: 'Shree Sadguru Electricals',
    shopType: 'स्वतंत्र इलेक्ट्रिकल दुकान व इलेक्ट्रिशियन सेवा (बीड)',
    shopTagline: 'बीड शहर व परिसरातील घरगुती, शेती व व्यावसायिक कामांसाठी विश्वासू इलेक्ट्रिशियन',
    locationBeed: 'बीड शहर, महाराष्ट्र',
    phone1: '8080795343',
    phone2: '9975094847',
    phone1Raw: '918080795343',
    phone2Raw: '919975094847',
    whatsappMessage: 'नमस्कार, मला श्री सद्गुरु इलेक्ट्रिकल्स यांच्याकडून इलेक्ट्रिकल कामाची माहिती हवी आहे.',

    nav: {
      services: 'आमच्या सेवा',
      projects: 'कामांचे फोटो',
      estimator: 'अंदाजे खर्च कॅल्क्युलेटर',
      aboutShop: 'दुकानाची माहिती',
      contact: 'संपर्क व पत्ता',
      callNow: 'कॉल करा',
      langToggle: 'English',
    },

    hero: {
      badge: 'स्वतंत्र दुकान · बीड शहर व ग्रामीण परिसर · त्वरित सेवा',
      title: 'घरगुती वायरिंग, शेती बोरवेल स्टार्टर व संपूर्ण इलेक्ट्रिकल कामे',
      subtitle: 'आम्ही कोणतीही मोठी कंपनी नसून बीडमधील तुमचे स्वतःचे हक्काचे स्वतंत्र इलेक्ट्रिकल दुकान आहोत. उत्तम दर्जाची फिटिंग, सुरक्षित काम आणि वाजवी दरात सर्व प्रकारची दुरुस्ती.',
      callButton: 'थेट फोन करा: 8080795343',
      whatsappButton: 'व्हॉट्सअॅपवर मेसेज करा',
      estimatorButton: 'कामाचा खर्च अंदाज पहा',
      shopNotice: 'नोंद: आम्ही स्वतंत्र इलेक्ट्रिशियन व दुकान आहोत (No Corporate Agency) · अस्सल काम, रास्त दर',
      stats: {
        experience: '१२+ वर्षे',
        experienceLabel: 'अनुभवी काम',
        satisfiedClients: '१,८००+',
        satisfiedLabel: 'समाधानी ग्राहक व शेतकरी',
        sameDay: 'त्याच दिवशी',
        sameDayLabel: 'बीड शहरात जलद सेवा',
        warranty: '१००%',
        warrantyLabel: 'सुरक्षित व खात्रीशीर काम',
      },
    },

    shopHighlights: {
      title: 'श्री सद्गुरु इलेक्ट्रिकल्सच का निवडावे?',
      desc: 'मध्यस्थ किंवा एजंटशिवाय थेट कारागिराशी बोला व दर्जेदार काम करून घ्या.',
      item1Title: 'स्वतंत्र दुकान व थेट संपर्क',
      item1Desc: 'कोणत्याही कंपनीचे कमिशन नाही, थेट आम्हास फोन करा व योग्य सल्ला आणि योग्य दर मिळवा.',
      item2Title: 'शेती बोरवेल व मोटरमध्ये तज्ज्ञ',
      item2Desc: 'बीड जिल्ह्यातील शेतकऱ्यांसाठी सबमर्सिबल पंप, स्टार्टर पॅनेल, सिंगल फेजिंग प्रिव्हेंटर व ऑटो-स्विच फिटिंग.',
      item3Title: 'ओरिजिनल ब्रँडेड साहित्याचा वापर',
      item3Desc: 'पॉलिकॅब (Polycab), फिनोलेक्स (Finolex), अँकर (Anchor), एल अँड टी (L&T) आदी नामांकित आयएसआय साहित्याचा वापर.',
      item4Title: 'इमर्जन्सी व २४ तास मदत',
      item4Desc: 'शॉर्ट सर्किट, वीज जाणे, स्टार्टर ट्रिप होणे किंवा मीटर जळणे यावर बीडमध्ये तात्काळ धाव.',
    },

    services: {
      kicker: 'आमची कामे व सेवा',
      title: 'सर्व प्रकारची इलेक्ट्रिकल सेवा एकाच छताखाली',
      subtitle: 'घरातील नवीन वायरिंगपासून शेतातील बोरवेल मोटरपर्यंत सर्व कामे कुशलतेने केली जातात.',
      tabs: {
        all: 'सर्व कामे',
        houseWiring: 'घरगुती वायरिंग',
        agriculture: 'शेती बोरवेल स्टार्टर',
        inverter: 'इन्व्हर्टर व बॅटरी',
        repairRewinding: 'मोटर/फॅन रिवाइंडिंग',
        commercial: 'दुकान व ३-फेज',
      },
      startingFrom: 'किमान दर',
      viewDetails: 'तपशील पहा',
      bookService: 'काम सांगा',
    },

    projects: {
      kicker: 'प्रत्यक्ष कामांचे फोटो व पुरावा',
      title: 'आम्ही बीडमध्ये केलेली प्रत्यक्ष कामे',
      subtitle: 'प्रत्येक कामात अचूक वायर फिटिंग, सुरक्षित एमसीबी व नीटनेटकेपणा हीच आमची ओळख.',
      sliderTitle: 'जुने जळके फ्यूज बोर्ड vs नवीन मॉड्युलर एमसीबी पॅनेल',
      sliderSubtitle: 'स्लायडर सरकवून कामातील दर्जा व बदल स्वतः पहा',
      beforeLabel: 'आधी: जुना जळका बोर्ड (धोकादायक)',
      afterLabel: 'नंतर: नवीन मॉड्युलर एमसीबी बॉक्स',
      sliderNotice: 'स्लायडर डावीकडे-उजवीकडे ओढून बघा',
      inspectDetails: 'कामाचा संपूर्ण तपशील पहा',
    },

    estimator: {
      kicker: 'पारदर्शक खर्च अंदाज',
      title: 'तुमच्या कामाचा अंदाजे खर्च (₹) तपासा',
      subtitle: 'कामाचा प्रकार निवडा आणि साहित्यासह किंवा फक्त मजुरीचा अंदाजे खर्च लगेच जाणून घ्या.',
      step1: '१. कामाचा प्रकार निवडा',
      step2: '२. मालमत्तेचा प्रकार',
      step3: '३. साहित्याची निवड',
      step4: '४. कामाची निकड (तात्काळ / नियोजित)',
      step5: '५. अतिरिक्त फिटिंग व सुरक्षितता',
      estimatedTotal: 'अंदाजे खर्च मर्यादा',
      rangeNote: 'अचूक कोटेशन जागेवर प्रत्यक्ष पाहणी केल्यावर अंतिम केले जाईल.',
      applyEstimate: 'हा अंदाज घेऊन संपर्क करा',
    },

    contact: {
      kicker: 'थेट संपर्क साधा',
      title: 'काम सांगण्यासाठी किंवा चौकशीसाठी फोन करा',
      subtitle: 'बीड शहर अथवा परिसरातील कोणत्याही कामासाठी कधीही कॉल करा अथवा व्हॉट्सअॅप करा.',
      shopInfoTitle: 'दुकानाचा पत्ता व संपर्क तपशील',
      ownerName: 'मालक व इलेक्ट्रिशियन: श्री सद्गुरु इलेक्ट्रिकल्स',
      addressLabel: 'पत्ता',
      shopAddress: 'श्री सद्गुरु इलेक्ट्रिकल्स, बीड शहर, जिल्हा बीड, महाराष्ट्र (पिन: ४३११२२)',
      timingLabel: 'वेळ',
      shopTiming: 'सकाळी ७:०० ते रात्री ९:०० (सर्व दिवस उघडे) · इमर्जन्सीसाठी २४ तास उपलब्ध',
      areasCovered: 'सेवा क्षेत्र',
      areasList: 'बीड शहर, सुभाष रोड, जालना रोड, नगर रोड, शिवाजी चौक, शाहू नगर, एमआयडीसी बीड, आष्टी फाटा, पाटोदा परिसर व लगतची गावे',
      formTitle: 'इलेक्ट्रिशियन बोलावण्यासाठी माहिती भरा',
      formSubtitle: 'माहिती पाठवताच आम्ही १० ते १५ मिनिटांत तुम्हाला फोन करू.',
      nameLabel: 'तुमचे नाव *',
      phoneLabel: 'मोबाईल नंबर *',
      villageOrAreaLabel: 'पत्ता / गल्ली / गाव (बीड परिसर)',
      serviceLabel: 'कामाचा प्रकार',
      urgencyLabel: 'कामाची घाई',
      detailsLabel: 'कामाबद्दल थोडी माहिती (उदा. २ खोल्यांचे वायरिंग / बोरवेल स्टार्टर जळणे / इन्व्हर्टर बसवणे)',
      attachPhoto: 'कामाचा / मीटरचा फोटो जोडा (पर्यायी)',
      submitButton: 'माहिती पाठवा व इलेक्ट्रिशियन बुक करा',
      directCallTitle: 'तातडीच्या कामासाठी थेट फोन लावा:',
    },

    faq: {
      kicker: 'वारंवार विचारले जाणारे प्रश्न',
      title: 'ग्राहकांचे नेहमीचे प्रश्न व उत्तरे',
      subtitle: 'वायरिंग, साहित्य, महावितरण मीटर व मोटर संदर्भातील महत्त्वाची माहिती.',
    },

    footer: {
      about: 'श्री सद्गुरु इलेक्ट्रिकल्स हे बीड शहरातील स्वतंत्र इलेक्ट्रिकल दुकान व इलेक्ट्रिशियन सेवा केंद्र आहे. घरगुती वायरिंग, शेती बोरवेल, इन्व्हर्टर आणि सर्व प्रकारच्या इलेक्ट्रिकल कामांसाठी आम्ही नेहमी तत्पर आहोत.',
      quickLinks: 'महत्त्वाच्या लिंक्स',
      topServices: 'प्रमुख सेवा',
      directContact: 'थेट संपर्क क्रमांक',
      copyright: 'सर्व हक्क राखीव. श्री सद्गुरु इलेक्ट्रिकल्स, बीड, महाराष्ट्र.',
      disclaimer: 'नोंद: आम्ही बीडमधील स्थानिक स्वतंत्र इलेक्ट्रिकल दुकान आहोत. सर्व कामे अनुभवी तंत्रज्ञांमार्फत केली जातात.',
    },
  },

  en: {
    shopName: 'Shree Sadguru Electricals',
    shopNameEn: 'Shree Sadguru Electricals',
    shopType: 'Independent Electrical Shop & Electrician Services (Beed)',
    shopTagline: 'Trusted Local Electrician for Home, Farm & Commercial Wiring in Beed City & Rural District',
    locationBeed: 'Beed City, Maharashtra',
    phone1: '8080795343',
    phone2: '9975094847',
    phone1Raw: '918080795343',
    phone2Raw: '919975094847',
    whatsappMessage: 'Hello, I would like to inquire about electrical work from Shree Sadguru Electricals, Beed.',

    nav: {
      services: 'Services',
      projects: 'Work Photos',
      estimator: 'Cost Estimator',
      aboutShop: 'About Shop',
      contact: 'Contact & Shop',
      callNow: 'Call Now',
      langToggle: 'मराठी',
    },

    hero: {
      badge: 'Independent Shop · Beed City & Rural Area · Fast On-Site Service',
      title: 'House Concealed Wiring, Borewell Starters & All Electrical Work',
      subtitle: 'We are an independent, family-run electrical shop based in Beed city, Maharashtra (not a corporate agency). Providing genuine quality wiring, safe fitting, and honest pricing across Beed district.',
      callButton: 'Call Direct: 8080795343',
      whatsappButton: 'Chat on WhatsApp',
      estimatorButton: 'Check Cost Estimate',
      shopNotice: 'Note: We are an independent electrical shop & licensed technician in Beed (No Middlemen) · Honest Rates',
      stats: {
        experience: '12+ Years',
        experienceLabel: 'Trade Experience',
        satisfiedClients: '1,800+',
        satisfiedLabel: 'Happy Families & Farmers',
        sameDay: 'Same Day',
        sameDayLabel: 'Rapid Beed City Dispatch',
        warranty: '100%',
        warrantyLabel: 'Safe & Guaranteed Work',
      },
    },

    shopHighlights: {
      title: 'Why Choose Shree Sadguru Electricals?',
      desc: 'Direct interaction with experienced local technicians with no agency commission.',
      item1Title: 'Independent Local Shop',
      item1Desc: 'Speak directly with us without any middleman. Honest guidance, fair quotes, and reliable service.',
      item2Title: 'Farm & Borewell Specialists',
      item2Desc: 'Expert in agricultural submersible starters, capacitor banks, single-phasing preventers, and auto-switches.',
      item3Title: '100% Original Brand Materials',
      item3Desc: 'We supply and use trusted ISI brands: Polycab, Finolex, Anchor, L&T, Havells, Schneider, and Crompton.',
      item4Title: 'Fast Emergency Response',
      item4Desc: 'Rapid troubleshooting for short circuits, tripped MCBs, burnt fuse boards, and power failures in Beed.',
    },

    services: {
      kicker: 'Our Capabilities & Services',
      title: 'Complete Electrical Solutions Under One Roof',
      subtitle: 'From modern concealed house wiring to heavy agricultural water pump setups, all work handled skillfully.',
      tabs: {
        all: 'All Services',
        houseWiring: 'House Wiring',
        agriculture: 'Borewell Starter',
        inverter: 'Inverter & Battery',
        repairRewinding: 'Motor/Fan Rewinding',
        commercial: 'Shops & 3-Phase',
      },
      startingFrom: 'Starts From',
      viewDetails: 'View Details',
      bookService: 'Book Service',
    },

    projects: {
      kicker: 'Real Field Work & Photos',
      title: 'Completed Electrical Work in Beed',
      subtitle: 'Neat conduit lines, modular switchboards, and safe MCB distribution boards completed across Beed.',
      sliderTitle: 'Dangerous Burnt Fuse Board vs Modern Modular MCB Panel',
      sliderSubtitle: 'Drag the slider to see the before and after transformation',
      beforeLabel: 'Before: Dangerous Burnt Fuse Box',
      afterLabel: 'After: Modern Safe Modular MCB Box',
      sliderNotice: 'Drag slider left and right to inspect',
      inspectDetails: 'Inspect Work Details',
    },

    estimator: {
      kicker: 'Transparent Pricing in INR (₹)',
      title: 'Instant Cost Estimator (₹)',
      subtitle: 'Select your electrical requirement to get an immediate estimated budget.',
      step1: '1. Select Electrical Service',
      step2: '2. Property / Location Type',
      step3: '3. Material Preference',
      step4: '4. Service Urgency',
      step5: '5. Additional Safety Add-ons',
      estimatedTotal: 'Estimated Price Range',
      rangeNote: 'Final quotation given on-site after inspecting site wiring and load.',
      applyEstimate: 'Apply Estimate & Inquire',
    },

    contact: {
      kicker: 'Direct Contact & Visit Shop',
      title: 'Call Us Directly or Book an Electrician',
      subtitle: 'Available anytime for Beed city, MIDC, and nearby village farms.',
      shopInfoTitle: 'Shop Address & Phone Numbers',
      ownerName: 'Owner & Electrician: Shree Sadguru Electricals',
      addressLabel: 'Address',
      shopAddress: 'Shree Sadguru Electricals, Beed City, Beed District, Maharashtra (PIN: 431122)',
      timingLabel: 'Timings',
      shopTiming: '7:00 AM – 9:00 PM (All Days Open) · 24/7 Available for Emergencies',
      areasCovered: 'Service Coverage',
      areasList: 'Beed City, Subhash Road, Jalna Road, Nagar Road, Shivaji Chowk, Shahu Nagar, MIDC Beed, Ashti & Patoda area, and nearby villages',
      formTitle: 'Book an Electrician Visit',
      formSubtitle: 'Submit your request and we will call you back within 10–15 minutes.',
      nameLabel: 'Your Full Name *',
      phoneLabel: 'Mobile Number *',
      villageOrAreaLabel: 'Address / Area / Village (Beed District)',
      serviceLabel: 'Service Required',
      urgencyLabel: 'Urgency Level',
      detailsLabel: 'Describe Work (e.g., 2 room wiring / borewell starter tripping / inverter installation)',
      attachPhoto: 'Attach Photo of Board / Meter (Optional)',
      submitButton: 'Send Request & Book Electrician',
      directCallTitle: 'For Urgent Needs, Call Now Directly:',
    },

    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Common Questions & Helpful Answers',
      subtitle: 'Clear answers on wiring costs, MSEDCL meter connections, borewell pump protection, and inverters.',
    },

    footer: {
      about: 'Shree Sadguru Electricals is an independent electrical shop and electrician service based in Beed city, Maharashtra. We handle house wiring, farm borewell pumps, inverters, and emergency electrical repair with honest rates and original brand materials.',
      quickLinks: 'Quick Links',
      topServices: 'Popular Services',
      directContact: 'Direct Mobile Numbers',
      copyright: 'All Rights Reserved. Shree Sadguru Electricals, Beed, Maharashtra.',
      disclaimer: 'Note: We are an independent local electrical shop in Beed. All jobs executed by experienced trade technicians.',
    },
  },
};
