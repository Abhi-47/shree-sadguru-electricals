import { ServiceCategory } from '../types';

export interface LocalizedService {
  id: string;
  category: ServiceCategory;
  title: { mr: string; en: string };
  shortDesc: { mr: string; en: string };
  fullDesc: { mr: string; en: string };
  startingPrice: { mr: string; en: string };
  estimatedDuration: { mr: string; en: string };
  keyFeatures: { mr: string[]; en: string[] };
  iconName: string;
  popularBadge?: { mr: string; en: string };
}

export interface LocalizedProject {
  id: string;
  category: ServiceCategory;
  title: { mr: string; en: string };
  location: { mr: string; en: string };
  completionDate: { mr: string; en: string };
  summary: { mr: string; en: string };
  challenge: { mr: string; en: string };
  solution: { mr: string; en: string };
  specifications: { label: { mr: string; en: string }; value: { mr: string; en: string } }[];
  svgType: 'concealed_wiring' | 'inverter_battery' | 'home_repair' | 'water_motor' | 'fault_finding' | 'home_earthing';
  hasBeforeAfter?: boolean;
}

export interface LocalizedReview {
  id: string;
  author: { mr: string; en: string };
  role: { mr: string; en: string };
  location: { mr: string; en: string };
  rating: number;
  projectType: { mr: string; en: string };
  date: { mr: string; en: string };
  content: { mr: string; en: string };
}

export const SHOP_INFO = {
  nameMr: 'श्री सद्गुरु इलेक्ट्रिकल्स',
  nameEn: 'Shree Sadguru Electricals',
  owner: 'श्री सद्गुरु इलेक्ट्रिकल्स',
  nature: '१००% घरपोच सेवा • स्वतंत्र इलेक्ट्रिशियन (Home Service Only - No Commercial Work)',
  locationCity: 'बीड शहर, महाराष्ट्र (Beed, Maharashtra)',
  pinCode: '431122',
  phone1: '8080795343',
  phone2: '9975094847',
  phone1Raw: '918080795343',
  phone2Raw: '919975094847',
  address: 'श्री सद्गुरु इलेक्ट्रिकल्स, बीड शहर, जिल्हा बीड, महाराष्ट्र - ४३११२२',
  landmark: 'बीड शहर (घरी येऊन थेट सेवा)',
  shopHours: 'सकाळी ७:०० ते रात्री ९:०० (सर्व दिवस घरपोच सेवा उपलब्ध)',
  serviceAreasMr: [
    'बीड शहर',
    'सुभाष रोड',
    'जालना रोड',
    'नगर रोड',
    'शिवाजी चौक',
    'शाहू नगर',
    'बिंदुसरा परिसर',
    'पाटोदा रोड',
    'कारंजा चौक',
    'पेठ बीड',
    'कनकालेश्वर परिसर',
  ],
  serviceAreasEn: [
    'Beed City',
    'Subhash Road',
    'Jalna Road',
    'Nagar Road',
    'Shivaji Chowk',
    'Shahu Nagar',
    'Bindusara Area',
    'Patoda Road',
    'Karanja Chowk',
    'Peth Beed',
    'Kankaleshwar Area',
  ],
};

export const RESIDENTIAL_SERVICES_DATA: LocalizedService[] = [
  {
    id: 'house-wiring',
    category: 'house_wiring',
    title: {
      mr: 'घरगुती कन्सिल्ड वायरिंग व मॉड्युलर बोर्ड फिटिंग',
      en: 'Home Concealed Wiring & Modular Switchboard Fitting',
    },
    shortDesc: {
      mr: 'नवीन घर किंवा फ्लॅटसाठी भिंत झिर्री, पॉलिकॅब/फिनोलेक्स वायर ओढणे आणि अँकर रोमा मॉड्युलर बोर्ड बसवणे.',
      en: 'Complete wall chase groove cutting, Polycab/Finolex FR wire pulling, and Anchor Roma modular switchboard fitting for homes.',
    },
    fullDesc: {
      mr: 'घरातील संपूर्ण सुरक्षित वायरिंग. प्रत्येक खोलीसाठी योग्य एमसीबी, सेफ अर्थिंग आणि मॉड्युलर स्विचेसचे नीटनेटके काम अगदी वाजवी स्थानिक दरात (फक्त ₹ ९० ते ₹ १२० प्रति पॉईंट) केले जाते.',
      en: 'Complete safe residential wiring with dedicated circuit MCBs per room, RCCB earth leakage protection, and neat modular switch fitting at just ₹90-₹120/point.',
    },
    startingPrice: {
      mr: '₹ ९० / प्रति पॉईंट (कमी केलेला दर)',
      en: '₹ 90 / per point (Lowered Rate)',
    },
    estimatedDuration: {
      mr: '१ ते २ दिवस',
      en: '1 to 2 Days',
    },
    keyFeatures: {
      mr: [
        'फक्त ₹ ९० ते ₹ १२० प्रति पॉईंट अतिशय वाजवी मजुरी दर',
        'पॉलिकॅब (Polycab) व फिनोलेक्स (Finolex) ओरिजिनल कॉपर वायर्स',
        'अँकर रोमा (Anchor Roma) व लेग्रँड (Legrand) मॉड्युलर बोर्ड',
        'हॅवेल्स (Havells) सेफ एमसीबी बॉक्स जोडणी',
        'रासायनिक अर्थिंग (Earth Pit) सेफ फिटिंग',
      ],
      en: [
        'Affordable ₹ 90 to ₹ 120 per point labor rate',
        'Genuine Polycab & Finolex copper wiring',
        'Anchor Roma & Legrand modular switchboard fitting',
        'Havells MCB distribution box setup',
        'Safe chemical earth pit installation',
      ],
    },
    iconName: 'Home',
    popularBadge: { mr: 'सर्वाधिक पसंती', en: 'Most Popular' },
  },
  {
    id: 'home-repair',
    category: 'home_repair',
    title: {
      mr: 'घरपोच फॅन, कुलर व गिझर फिटिंग आणि दुरुस्ती',
      en: 'Doorstep Fan, Cooler & Geyser Fitting & Repair',
    },
    shortDesc: {
      mr: 'सीलिंग फॅन बसवणे, कुलर मोटर दुरुस्ती, बाथरूम गिझर फिटिंग, जळलेले स्विचेस व सॉकेट बदलणे - सर्व काही थेट तुमच्या घरी.',
      en: 'Ceiling fan installation, cooler motor service, bathroom geyser fitting, and switch/socket repairs directly at your home.',
    },
    fullDesc: {
      mr: 'उपकरणे घेऊन कुठेही जाण्याची गरज नाही. एक फोन करा, आम्ही घरी येऊन फॅन (फक्त ₹ ६०), कुलर, गिझर (फक्त ₹ १५०) किंवा खराब झालेले स्विचेस तात्काळ नीट करून देतो.',
      en: 'No need to carry appliances outside. We visit your doorstep across Beed to install ceiling fans (from ₹60), geysers (from ₹150), and fix burnt switches.',
    },
    startingPrice: {
      mr: '₹ ६० पासून',
      en: 'From ₹ 60',
    },
    estimatedDuration: {
      mr: '२० ते ४५ मिनिटे (घरी प्रत्यक्ष)',
      en: '20 to 45 Minutes (at your home)',
    },
    keyFeatures: {
      mr: [
        'सीलिंग फॅन फिटिंग फक्त ₹ ६० ते ₹ ८०',
        'बाथरूम गिझर / हिटर फिटिंग फक्त ₹ १५० ते ₹ २००',
        'साधा किंवा मॉड्युलर स्विच बदलणे फक्त ₹ ३० ते ₹ ५०',
        'कुलर मोटर कॅपॅसिटर तपासणी व वायरिंग दुरुस्ती',
        'घरी येऊन त्वरित आणि खात्रीशीर काम',
      ],
      en: [
        'Ceiling fan installation only ₹ 60 - ₹ 80',
        'Bathroom water geyser fitting just ₹ 150 - ₹ 200',
        'Single switch or socket replacement ₹ 30 - ₹ 50',
        'Cooler motor capacitor check & wiring fix',
        'Quick home doorstep visit in Beed',
      ],
    },
    iconName: 'Wrench',
    popularBadge: { mr: 'घरपोच सेवा', en: 'Doorstep Service' },
  },
  {
    id: 'inverter-battery',
    category: 'inverter',
    title: {
      mr: 'घरगुती इन्व्हर्टर व बॅटरी फिटिंग (लोडशेडिंग सोल्यूशन)',
      en: 'Home Inverter & Battery Setup & Changeover Fitting',
    },
    shortDesc: {
      mr: 'लुमिनस, मायक्रोटेक किंवा एक्साईड इन्व्हर्टर बसवणे, लोड सेपरेशन वायरिंग आणि बायपास चेंजओव्हर फिटिंग.',
      en: 'Luminous, Microtek or Exide home inverter and battery installation with neat changeover wiring and load separation.',
    },
    fullDesc: {
      mr: 'वीज गेल्यावर घरातील महत्त्वाचे पंखे, लाईट्स व टीव्ही अखंड चालण्यासाठी योग्य लोड सेपरेशन. इन्व्हर्टर बिघडल्यास घर अंधारात राहू नये म्हणून बायपास चेंजओव्हर बसवून देतो. फक्त ₹ २०० ते ₹ २८० मजुरी.',
      en: 'Neat inverter connection so your home fans and lights stay on during local power cuts. Manual bypass rotary switch installed safely at just ₹200-₹280 labor.',
    },
    startingPrice: {
      mr: '₹ २०० पासून (कमी केलेला दर)',
      en: 'From ₹ 200 (Lowered Rate)',
    },
    estimatedDuration: {
      mr: '१ ते २ तास',
      en: '1 to 2 Hours',
    },
    keyFeatures: {
      mr: [
        'इन्व्हर्टर व बॅटरी संपूर्ण फिटिंग फक्त ₹ २०० - ₹ २८०',
        'फक्त आवश्यक लोडवर कनेक्शन (बॅटरी जास्त वेळ टिकते)',
        'मॅन्युअल बायपास चेंजओव्हर स्विच फिटिंग',
        'हेवी कॉपर डीसी केबल व लक्स फिटिंग',
        'सुरक्षित व नीटनेटके घरगुती वायरिंग',
      ],
      en: [
        'Inverter & battery setup only ₹ 200 - ₹ 280',
        'Smart load separation for maximum battery backup',
        'Manual bypass changeover switch installation',
        'Heavy-duty copper lugs and battery cables',
        'Safe and neat home wiring',
      ],
    },
    iconName: 'BatteryCharging',
    popularBadge: { mr: 'कमी मजुरी', en: 'Low Labor' },
  },
  {
    id: 'water-motor',
    category: 'water_motor',
    title: {
      mr: 'घरातील पाण्याची मोटर व मोनोब्लॉक पंप फिटिंग',
      en: 'Home Water Pump & Monoblock Motor Connection',
    },
    shortDesc: {
      mr: 'घराच्या पाण्याच्या टाकीची मोटर, मोनोब्लॉक पंप वायरिंग, ऑटोमॅटिक फ्लोट स्विच (टाकी भरल्यावर आपोआप बंद) व कॅपॅसिटर जोडणी.',
      en: 'Home rooftop water tank motor wiring, monoblock pump connection, automatic float switch fitting, and starter capacitor check.',
    },
    fullDesc: {
      mr: 'घरातील पाण्याच्या टाकीची मोटर व्यवस्थित चालू करणे, स्टार्टर जोडणी, ऑटो फ्लोट स्विच बसवणे ज्यामुळे टाकी भरल्यावर पाणी वाया जाणार नाही आणि मोटर जळणार नाही.',
      en: 'Safe connection of residential water pumps, starters, and overhead tank auto cut-off float switches to prevent water overflow and dry running.',
    },
    startingPrice: {
      mr: '₹ १५० पासून',
      en: 'From ₹ 150',
    },
    estimatedDuration: {
      mr: '३० ते ४५ मिनिटे',
      en: '30 to 45 Minutes',
    },
    keyFeatures: {
      mr: [
        'घरगुती पाण्याची मोटर फिटिंग फक्त ₹ १५० ते ₹ १८०',
        'ऑटोमॅटिक फ्लोट स्विच फिटिंग (टाकी भरल्यास आपोआप बंद)',
        'कॅपॅसिटर बदलणे व स्टार्टर वायरिंग दुरुस्ती',
        'वॉटरप्रूफ वायर जॉईंट व अर्थिंग जोडणी',
        'घरी येऊन त्वरित सेवा',
      ],
      en: [
        'Home water motor fitting just ₹ 150 - ₹ 180',
        'Automatic float switch fitting for overflow prevention',
        'Starter capacitor test & replacement',
        'Waterproof wire joint and shockproof earthing',
        'Direct home doorstep visit',
      ],
    },
    iconName: 'Droplet',
  },
  {
    id: 'fault-finding',
    category: 'fault_finding',
    title: {
      mr: 'शॉर्ट सर्किट, वीज गळती व फॉल्ट तपासणी (घरपोच सेवा)',
      en: 'Short Circuit, Power Tripping & Home Visit Diagnostic',
    },
    shortDesc: {
      mr: 'अचानक वीज जाणे, एमसीबी सतत ट्रिप होणे, जळका वास येणे किंवा भिंतीत करंट येणे यावर घरात येऊन तात्काळ फॉल्ट दुरुस्ती.',
      en: 'Sudden home blackout, tripping MCB, burning smell, or mild shocks on walls. We visit your home to diagnose and fix the fault.',
    },
    fullDesc: {
      mr: 'शॉर्ट सर्किट झाल्यास घाबरू नका. फोन करा, आम्ही १५ ते ३० मिनिटांत घरपोच येऊन नेमकी बिघाड असलेली वायर शोधून काढतो आणि कमीत कमी खर्चात समस्या सोडवतो.',
      en: 'Quick doorstep visit across Beed to isolate electrical faults, replace tripped breakers, and fix wire leakage safely.',
    },
    startingPrice: {
      mr: '₹ ८० (व्हिजिट फी / Visit Fee)',
      en: '₹ 80 (Inspection Visit Fee)',
    },
    estimatedDuration: {
      mr: '२० ते ३० मिनिटे',
      en: '20 to 30 Minutes',
    },
    keyFeatures: {
      mr: [
        'घरपोच व्हिजिट फी फक्त ₹ ८० ते ₹ १००',
        'शॉर्ट सर्किट फॉल्ट शोधून तात्काळ वीज पूर्ववत करणे',
        'सतत पडणारा किंवा खराब झालेला एमसीबी बदलणे',
        'भिंतीतील वीज गळती (Earth Leakage) रोखणे',
        'इमर्जन्सीमध्ये बीड शहरात तातडीने घरपोच धाव',
      ],
      en: [
        'Doorstep inspection visit fee just ₹ 80 - ₹ 100',
        'Quick fault location and safe isolation',
        'Replacement of worn or tripping MCB breakers',
        'Earth leakage rectification to eliminate wall shocks',
        'Prompt emergency response across Beed city',
      ],
    },
    iconName: 'AlertTriangle',
  },
  {
    id: 'earthing',
    category: 'earthing',
    title: {
      mr: 'घरगुती कॉपर / केमिकल अर्थिंग (शॉकपासून सुरक्षा)',
      en: 'Home Copper & Chemical Earthing for Shock Safety',
    },
    shortDesc: {
      mr: 'फ्रिज, गिझर, कुलर किंवा वॉशिंग मशीनला हात लावल्यास शॉक बसू नये म्हणून घरासाठी सुरक्षित केमिकल किंवा पाईप अर्थिंग करणे.',
      en: 'Safe chemical or copper pipe earthing setup to protect your family from electric shocks while touching refrigerators, geysers, and coolers.',
    },
    fullDesc: {
      mr: 'घरातील लहान मुले व कुटुंबीयांच्या सुरक्षिततेसाठी योग्य अर्थिंग अत्यंत गरजेचे आहे. कमी खर्चात घराभोवती कॉपर वायर व केमिकल पावडर खड्डा करून सुरक्षित अर्थिंग करून देतो.',
      en: 'Proper earth pit installation using bentonite/chemical compound and heavy copper wire ensuring zero leakage voltage in all home appliances.',
    },
    startingPrice: {
      mr: '₹ ४५० पासून (मजुरी)',
      en: 'From ₹ 450 (Labor)',
    },
    estimatedDuration: {
      mr: '२ ते ३ तास',
      en: '2 to 3 Hours',
    },
    keyFeatures: {
      mr: [
        'घरगुती अर्थिंग मजुरी फक्त ₹ ४५० ते ₹ ६००',
        'घरातील सर्व सॉकेट्सचे अर्थिंग टेस्टरने चेकिंग',
        'फ्रिज, कुलर व गिझरचा शॉक पूर्णपणे बंद',
        'रासायनिक अर्थिंग पावडर व कॉपर पाईप जोडणी',
        'दीर्घकाळ टिकणारे खात्रीशीर काम',
      ],
      en: [
        'Home earthing labor just ₹ 450 - ₹ 600',
        'Earth testing across all home sockets',
        'Eliminates tingling shocks from appliances',
        'Chemical compound and copper grounding',
        'Durable and certified residential safety',
      ],
    },
    iconName: 'ShieldCheck',
  },
];

export const RESIDENTIAL_PROJECTS_DATA: LocalizedProject[] = [
  {
    id: 'proj-house-wiring',
    category: 'house_wiring',
    title: {
      mr: '२ खोल्यांचे कन्सिल्ड वायरिंग व मॉड्युलर बोर्ड फिटिंग',
      en: '2-Room Home Concealed Wiring & Modular DB Fitting',
    },
    location: {
      mr: 'शाहू नगर, बीड (Shahu Nagar, Beed)',
      en: 'Shahu Nagar, Beed',
    },
    completionDate: {
      mr: 'गेल्या आठवड्यात पूर्ण',
      en: 'Completed Last Week',
    },
    summary: {
      mr: 'शाहू नगरमधील घरात जुन्या वायर्स काढून नवीन कन्सिल्ड पाईपिंग, पॉलिकॅब वायर्स आणि अँकर रोमा मॉड्युलर बोर्डचे नीटनेटके काम केले.',
      en: 'Replaced old external wires with clean concealed piping, Polycab FR wires, and Anchor Roma modular switch plates at a residence in Shahu Nagar.',
    },
    challenge: {
      mr: 'घरात जुन्या तारा उघड्या होत्या आणि पंखा लावल्यावर बोर्डात स्पार्किंग होत होते.',
      en: 'Exposed old wires and sparking switches whenever the ceiling fan or water heater was switched on.',
    },
    solution: {
      mr: 'भिंतीत व्यवस्थित झिर्री मारून पाईप लपवले, प्रत्येक खोलीला स्वतंत्र एमसीबी दिला आणि फक्त ₹ ९० प्रति पॉईंट या वाजवी दरात काम पूर्ण केले.',
      en: 'Clean wall chase and conduit embedding, dedicated MCB breakers per room, completed at an affordable ₹90 per point rate.',
    },
    specifications: [
      { label: { mr: 'मजुरी दर', en: 'Labor Rate' }, value: { mr: '₹ ९० / पॉईंट (वाजवी दर)', en: '₹ 90 / Point (Affordable)' } },
      { label: { mr: 'वापरलेली वायर', en: 'Wire Brand' }, value: { mr: 'Polycab 1.5 & 2.5 sq.mm FR', en: 'Polycab 1.5 & 2.5 sq.mm FR' } },
      { label: { mr: 'स्विचेस', en: 'Switches' }, value: { mr: 'Anchor Roma Modular', en: 'Anchor Roma Modular' } },
      { label: { mr: 'सुरक्षितता', en: 'Safety' }, value: { mr: 'Havells MCB + Safe Earth', en: 'Havells MCB + Safe Earth' } },
    ],
    svgType: 'concealed_wiring',
    hasBeforeAfter: true,
  },
  {
    id: 'proj-inverter-home',
    category: 'inverter',
    title: {
      mr: 'घरी येऊन इन्व्हर्टर व १५० Ah बॅटरी फिटिंग + बायपास स्विच',
      en: 'Doorstep Home Inverter & Battery Installation with Bypass',
    },
    location: {
      mr: 'सुभाष रोड, बीड',
      en: 'Subhash Road, Beed',
    },
    completionDate: {
      mr: '२ आठवड्यांपूर्वी पूर्ण',
      en: 'Completed 2 Weeks Ago',
    },
    summary: {
      mr: 'सुभाष रोडवरील घरात लुमिनस इन्व्हर्टर आणि टॉल ट्युब्युलर बॅटरी बसवून लोड सेपरेशन केले, ज्यामुळे लोडशेडिंग काळात पंखे व दिवे चालू राहतात.',
      en: 'Installed pure sine wave inverter and tall tubular battery at a residence on Subhash Road with neat changeover wiring.',
    },
    challenge: {
      mr: 'घरमालकाला इन्व्हर्टरवर फक्त पंखे व दिवे चालवायचे होते, फ्रीज किंवा गीझरचा लोड नको होता.',
      en: 'Homeowner needed to separate lighting and fan circuits so heavy geysers would not drain the battery.',
    },
    solution: {
      mr: 'इन्व्हर्टरसाठी स्वतंत्र न्यूट्रल लूप ओढले आणि मॅन्युअल चेंजओव्हर बसवले, मजुरी फक्त ₹ २०० घेतली.',
      en: 'Separated inverter load loop neatly and installed a manual bypass rotary switch at just ₹200 labor charge.',
    },
    specifications: [
      { label: { mr: 'मजुरी फी', en: 'Labor Charge' }, value: { mr: '₹ २०० फक्त (कमी दर)', en: '₹ 200 Only (Lowered)' } },
      { label: { mr: 'इन्व्हर्टर', en: 'Inverter' }, value: { mr: 'Luminous 900VA Pure Sine', en: 'Luminous 900VA Pure Sine' } },
      { label: { mr: 'बॅटरी', en: 'Battery' }, value: { mr: '150 Ah Tall Tubular', en: '150 Ah Tall Tubular' } },
      { label: { mr: 'बॅकअप', en: 'Backup' }, value: { mr: '५ ते ६ तास (३ पंखे + ४ दिवे)', en: '5-6 Hours (3 Fans + 4 Lights)' } },
    ],
    svgType: 'inverter_battery',
  },
  {
    id: 'proj-fan-geyser',
    category: 'home_repair',
    title: {
      mr: 'घरी येऊन ३ सीलिंग फॅन व १ बाथरूम गिझर फिटिंग',
      en: 'Home Visit: 3 Ceiling Fans & 1 Bathroom Geyser Installation',
    },
    location: {
      mr: 'जालना रोड, बीड',
      en: 'Jalna Road, Beed',
    },
    completionDate: {
      mr: '३ दिवसांपूर्वी घरी पूर्ण',
      en: 'Completed 3 Days Ago at Home',
    },
    summary: {
      mr: 'नवीन फ्लॅटमध्ये ३ सीलिंग फॅन हँगिंग, रेग्युलेटर कनेक्शन आणि बाथरूममध्ये २५ लिटर गिझरसाठी हेवी १६A सॉकेट व फिटिंग केली.',
      en: 'Hung and wired 3 ceiling fans with electronic regulators, and installed a dedicated 16A heavy power point for a 25L bathroom geyser.',
    },
    challenge: {
      mr: 'गिझरसाठी जुन्या बोर्डात हेवी पॉवर पॉईंट नव्हता, फक्त साधा ६A सॉकेट होता ज्याने वायर वितळण्याची भीती होती.',
      en: 'Bathroom only had an ordinary 6A socket which could overheat and melt if a 2000W geyser was plugged in.',
    },
    solution: {
      mr: 'स्वतंत्र ४ स्क्वेअर मिमी कॉपर वायर ओढून १६A अँकर रोमा पॉवर सॉकेट बसवला. फॅन ₹ ६० व गिझर ₹ १५० अशा रास्त दरात काम केले.',
      en: 'Pulled a dedicated 4 sq. mm wire for a 16A power socket and safely mounted the geyser at lowered rates.',
    },
    specifications: [
      { label: { mr: 'फॅन फिटिंग दर', en: 'Fan Rate' }, value: { mr: '₹ ६० / फॅन', en: '₹ 60 / Fan' } },
      { label: { mr: 'गिझर फिटिंग दर', en: 'Geyser Rate' }, value: { mr: '₹ १५० फक्त', en: '₹ 150 Only' } },
      { label: { mr: 'पॉवर सॉकेट', en: 'Power Socket' }, value: { mr: '16A Anchor Roma Heavy', en: '16A Anchor Roma Heavy' } },
      { label: { mr: 'सेवा', en: 'Service' }, value: { mr: '१००% घरपोच सेवा', en: '100% Doorstep Visit' } },
    ],
    svgType: 'home_repair',
  },
  {
    id: 'proj-water-pump',
    category: 'water_motor',
    title: {
      mr: 'घरातील पाण्याची मोटर व ऑटो फ्लोट स्विच कनेक्शन',
      en: 'Home Water Monoblock Motor & Auto Float Switch Setup',
    },
    location: {
      mr: 'नगर रोड, बीड',
      en: 'Nagar Road, Beed',
    },
    completionDate: {
      mr: '५ दिवसांपूर्वी पूर्ण',
      en: 'Completed 5 Days Ago',
    },
    summary: {
      mr: 'घराच्या तळमजल्यावरील पाण्याचा मोनोब्लॉक पंप आणि टेरेसवरील टाकीसाठी ऑटो कट-ऑफ फ्लोट सेन्सर वायर जोडली.',
      en: 'Installed 0.5 HP domestic monoblock pump with automatic overhead tank float switch sensor in a residential home on Nagar Road.',
    },
    challenge: {
      mr: 'टाकी भरून पाणी सतत वाया जात होते आणि दररोज मोटर चालू-बंद करण्याचा त्रास होत होता.',
      en: 'Overhead tank overflowed daily, wasting municipal water, with constant manual switching hassle.',
    },
    solution: {
      mr: 'वॉटरप्रूफ फ्लोट स्विच बसवला ज्यामुळे टाकी भरताच मोटर आपोआप बंद होते. मजुरी फक्त ₹ १५० घेतली.',
      en: 'Installed water-sealed float switch so motor auto cuts off when tank is full. Charged only ₹150 labor.',
    },
    specifications: [
      { label: { mr: 'मोटर फिटिंग मजुरी', en: 'Labor Charge' }, value: { mr: '₹ १५० फक्त', en: '₹ 150 Only' } },
      { label: { mr: 'ऑटोमेशन', en: 'Automation' }, value: { mr: 'ऑटो फ्लोट स्विच सेन्सर', en: 'Auto Float Sensor' } },
      { label: { mr: 'वायरिंग प्रकार', en: 'Wiring' }, value: { mr: 'वॉटरप्रूफ कॉपर केबल', en: 'Waterproof Copper' } },
      { label: { mr: 'फायदा', en: 'Benefit' }, value: { mr: 'पाणी व विजेची १००% बचत', en: '100% Water Saved' } },
    ],
    svgType: 'water_motor',
  },
  {
    id: 'proj-fault-finding',
    category: 'fault_finding',
    title: {
      mr: 'घरातील अचानक वीज बंद - शॉर्ट सर्किट शोधून तात्काळ दुरुस्ती',
      en: 'Home Power Blackout - Short Circuit Diagnostic & Safe Repair',
    },
    location: {
      mr: 'बिंदुसरा परिसर, बीड',
      en: 'Bindusara Area, Beed',
    },
    completionDate: {
      mr: 'गेल्या आठवड्यात पूर्ण',
      en: 'Completed Last Week',
    },
    summary: {
      mr: 'घरातील मेन एमसीबी सतत ट्रिप होत होता. आम्ही घरी जाऊन तपासणी केली व किचनमधील उंदराने कुरतडलेली जळकी वायर शोधून बदलली.',
      en: 'Home main MCB kept tripping constantly. We visited the house within 25 minutes, located a rodent-chewed neutral wire in the kitchen, and fixed it safely.',
    },
    challenge: {
      mr: 'घरातील वृद्ध दाम्पत्य संध्याकाळी अंधारात होते आणि इतर कोणी इलेक्ट्रिशियन लगेच उपलब्ध नव्हता.',
      en: 'Elderly couple was in the dark in the evening and needed fast emergency help.',
    },
    solution: {
      mr: '२५ मिनिटांत घरी पोहोचलो, फॉल्ट सोडवला आणि फक्त ₹ ८० व्हिजिट फी घेतली.',
      en: 'Reached within 25 minutes, isolated and repaired the burnt circuit safely, charged just ₹80 visit fee.',
    },
    specifications: [
      { label: { mr: 'व्हिजिट फी', en: 'Visit Fee' }, value: { mr: '₹ ८० फक्त (कमी दर)', en: '₹ 80 Only (Lowered)' } },
      { label: { mr: 'पोहोचण्याची वेळ', en: 'Response' }, value: { mr: '२५ मिनिटांत घरी हजर', en: 'Within 25 Minutes' } },
      { label: { mr: 'फॉल्ट प्रकार', en: 'Fault Type' }, value: { mr: 'न्यूट्रल शॉर्ट सर्किट', en: 'Neutral Short Circuit' } },
      { label: { mr: 'सुरक्षितता', en: 'Result' }, value: { mr: 'वीज पूर्णपणे पूर्ववत', en: 'Full Power Restored' } },
    ],
    svgType: 'fault_finding',
  },
  {
    id: 'proj-earthing-safety',
    category: 'earthing',
    title: {
      mr: 'घरातील फ्रिज व कुलरचा शॉक बंद करण्यासाठी सेफ अर्थिंग',
      en: 'Safe Home Earthing Setup - Eliminated Fridge & Cooler Shock',
    },
    location: {
      mr: 'शिवाजी चौक, बीड',
      en: 'Shivaji Chowk, Beed',
    },
    completionDate: {
      mr: '२ आठवड्यांपूर्वी पूर्ण',
      en: 'Completed 2 Weeks Ago',
    },
    summary: {
      mr: 'पावसाळ्यात कुलर आणि फ्रिजच्या बॉडीला हलका करंट लागत होता. आम्ही घराच्या अंगणात केमिकल अर्थिंग खड्डा करून मेन बोर्डला कॉपर अर्थिंग जोडली.',
      en: 'Homeowner experienced minor electric shocks while touching refrigerator door and cooler body. Installed residential chemical earth pit connected to main DB.',
    },
    challenge: {
      mr: 'घरात लहान मुले असल्यामुळे शॉक लागण्याचा मोठा धोका होता.',
      en: 'Young children in the house created severe risk of accidental electric shock.',
    },
    solution: {
      mr: 'सुरक्षित केमिकल अर्थिंग खड्डा केला, सर्व सॉकेट्स तपासले, शॉक पूर्णपणे बंद झाला. मजुरी फक्त ₹ ४५० घेतली.',
      en: 'Completed proper chemical earth pit and verified earth continuity across all rooms at only ₹450 labor.',
    },
    specifications: [
      { label: { mr: 'अर्थिंग मजुरी', en: 'Earthing Labor' }, value: { mr: '₹ ४५० फक्त', en: '₹ 450 Only' } },
      { label: { mr: 'प्रकार', en: 'Type' }, value: { mr: 'केमिकल कंपाऊंड अर्थिंग', en: 'Chemical Compound' } },
      { label: { mr: 'अर्थ टेस्टर रिडिंग', en: 'Earth Resistance' }, value: { mr: '< २ ओहम (अत्यंत सुरक्षित)', en: '< 2 Ohms (Safe)' } },
      { label: { mr: 'सुरक्षितता', en: 'Safety' }, value: { mr: 'शॉक पूर्णपणे बंद', en: 'Zero Shock Risk' } },
    ],
    svgType: 'home_earthing',
  },
];

export const RESIDENTIAL_REVIEWS_DATA: LocalizedReview[] = [
  {
    id: 'rev-1',
    author: { mr: 'सचिन जोशी', en: 'Sachin Joshi' },
    role: { mr: 'घरमालक', en: 'Homeowner' },
    location: { mr: 'शाहू नगर, बीड', en: 'Shahu Nagar, Beed' },
    rating: 5,
    projectType: { mr: 'घरगुती कन्सिल्ड वायरिंग व मॉड्युलर बोर्ड', en: 'Home Concealed Wiring & Modular DB' },
    date: { mr: 'मार्च २०२६', en: 'March 2026' },
    content: {
      mr: 'नवीन खोलीच्या वायरिंगसाठी श्री सद्गुरुंना बोलावले होते. बाजारातील इतर लोकांपेक्षा खूप कमी आणि वाजवी दरात (फक्त ₹ ९० प्रति पॉईंट) काम करून दिले. स्वतः घरी येऊन अतिशय नीटनेटके काम केले.',
      en: 'Called Shree Sadguru for wiring our new room. Charged very fair local rates (just ₹90 per point) compared to others. Visited our home on time and did very clean work.',
    },
  },
  {
    id: 'rev-2',
    author: { mr: 'सौ. अनिता कुलकर्णी', en: 'Mrs. Anita Kulkarni' },
    role: { mr: 'गृहिणी', en: 'Homemaker' },
    location: { mr: 'सुभाष रोड, बीड', en: 'Subhash Road, Beed' },
    rating: 5,
    projectType: { mr: 'घरपोच फॅन व इन्व्हर्टर फिटिंग', en: 'Doorstep Fan & Inverter Fitting' },
    date: { mr: 'मार्च २०२६', en: 'March 2026' },
    content: {
      mr: 'घरात २ पंखे आणि इन्व्हर्टर बसवायचे होते. कुठेही बाहेर दुकानात जाण्याची गरज पडली नाही. त्यांनी घरी येऊन सर्व काम व्यवस्थित केले आणि दरही अगदी परवडणारे (फॅन फक्त ₹६०, इन्व्हर्टर ₹२००) घेतले.',
      en: 'Needed to install 2 ceiling fans and an inverter. Did not have to carry anything anywhere. They came home and did everything neatly at very affordable rates (Fan ₹60, Inverter ₹200).',
    },
  },
  {
    id: 'rev-3',
    author: { mr: 'गणेशराव शिंदे', en: 'Ganeshrao Shinde' },
    role: { mr: 'घरमालक', en: 'Resident' },
    location: { mr: 'जालना रोड, बीड', en: 'Jalna Road, Beed' },
    rating: 5,
    projectType: { mr: 'शॉर्ट सर्किट दुरुस्ती व गिझर फिटिंग', en: 'Short Circuit Repair & Geyser Fitting' },
    date: { mr: 'फेब्रुवारी २०२६', en: 'February 2026' },
    content: {
      mr: 'रात्री अचानक किचनमधील बोर्डातून धूर आला आणि वीज गेली. फोन केल्यावर २० मिनिटांत भाऊ घरी हजर झाले, जळकी वायर शोधून काढली आणि फक्त ₹८० व्हिजिट फी घेतली. प्रामाणिक माणूस!',
      en: 'Smoke came from kitchen switchboard at night and power went out. The electrician arrived in 20 minutes, located the burnt wire, and charged just ₹80 visit fee. Very honest service!',
    },
  },
];

export const RESIDENTIAL_FAQ_DATA = [
  {
    q: {
      mr: 'तुम्ही फक्त घरी येऊन काम करता का? कमर्शियल किंवा कारखान्यांचे काम का नाही करत?',
      en: 'Do you only do doorstep home visits? Why no commercial work?',
    },
    a: {
      mr: 'होय! आम्ही १००% फक्त घरगुती सेवा (Home Service Only) देतो. मोठी कमर्शियल कंत्राटे किंवा कारखान्यांची कामे आम्ही मुद्दाम घेत नाही, जेणेकरून बीड शहरातील सामान्य कुटुंबांना एका फोनवर, कमीत कमी खर्चात आणि वेळेवर घरबसल्या खात्रीशीर सेवा देता यावी.',
      en: 'Yes! We focus 100% on residential homes. We purposely avoid large commercial or factory contracts so that local families in Beed receive prompt, budget-friendly doorstep service without delay.',
    },
  },
  {
    q: {
      mr: 'तुमचे दर बाजारापेक्षा कमी का आहेत?',
      en: 'Why are your rates so affordable compared to others?',
    },
    a: {
      mr: 'आम्ही कोणतीही मोठी कॉर्पोरेट कंपनी नाही, आम्ही बीड शहरातील स्वतंत्र स्थानिक इलेक्ट्रिशियन आहोत. आमचा कोणताही अतिरिक्त ऑफिस खर्च नसून आम्ही थेट घरी येऊन काम करतो. त्यामुळे वाजवी मजुरी (उदा. फॅन फिटिंग ₹६०, स्विच बदलणे ₹३०) आकारून ग्राहकांचे पैसे वाचवतो.',
      en: 'We are an independent local electrician in Beed, not an agency with heavy overheads. We work directly with homeowners and pass those savings straight to our customers.',
    },
  },
  {
    q: {
      mr: 'घरी येऊन तपासणी करण्याचे (Visit Charges) किती पैसे घेता?',
      en: 'What are your home visit and inspection charges?',
    },
    a: {
      mr: 'बीड शहरात घरपोच व्हिजिट फी फक्त ₹ ८० ते ₹ १०० आहे. जर काम मोठे असेल (उदा. पूर्ण वायरिंग किंवा इन्व्हर्टर फिटिंग), तर ही व्हिजिट फी मजुरीच्या बिलातच ॲडजस्ट केली जाते.',
      en: 'Inspection visit fee within Beed city is just ₹ 80 to ₹ 100. For larger jobs like full wiring or inverter setup, this fee is adjusted directly into the final bill.',
    },
  },
  {
    q: {
      mr: 'सामान (वायर्स, स्विचेस) आम्ही आणायचे की तुम्ही सोबत घेऊन येता?',
      en: 'Should we purchase electrical parts or do you bring them?',
    },
    a: {
      mr: 'दोन्ही पर्याय उपलब्ध आहेत! तुम्ही स्वतः सामान आणले तरी चालेल, किंवा आम्हाला सांगितले तर आम्ही पॉलिकॅब, अँकर रोमा, हॅवेल्सचे ओरिजिनल सामान थेट घाऊक दरात मूळ बिलासह सोबत घेऊन येतो. फक्त वापरलेल्या सामानाचे पैसे घेतले जातात.',
      en: 'Either option is totally fine! You can purchase materials yourself, or we can bring genuine Polycab, Anchor Roma, and Havells parts directly with receipt at wholesale rates.',
    },
  },
  {
    q: {
      mr: 'शॉर्ट सर्किट झाल्यास किती वेळात घरी पोहोचता?',
      en: 'How fast do you reach in case of sudden short circuits?',
    },
    a: {
      mr: 'बीड शहर परिसरात आम्ही साधारण १५ ते २५ मिनिटांत तुमच्या घरी पोहोचतो. तातडीच्या मदतीसाठी थेट ८०८०७९५३४३ किंवा ९९७५०९४८४७ वर कॉल करा.',
      en: 'Within Beed city, we typically reach your doorstep within 15 to 25 minutes. For emergencies, call 8080795343 or 9975094847 directly.',
    },
  },
];
