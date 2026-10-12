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
  svgType: 'concealed_wiring' | 'borewell_starter' | 'inverter_battery' | 'motor_rewinding' | 'commercial_shop' | 'three_phase';
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
  owner: 'श्री सद्गुरु इलेक्ट्रिकल्स (इलेक्ट्रिशियन व दुकान)',
  nature: 'स्वतंत्र दुकान व अनुभवी इलेक्ट्रिशियन (Independent Shop - Not a Company)',
  locationCity: 'बीड शहर, महाराष्ट्र (Beed, Maharashtra)',
  pinCode: '431122',
  phone1: '8080795343',
  phone2: '9975094847',
  phone1Raw: '918080795343',
  phone2Raw: '919975094847',
  address: 'श्री सद्गुरु इलेक्ट्रिकल्स, बीड शहर, जिल्हा बीड, महाराष्ट्र - ४३११२२',
  landmark: 'बीड शहर (स्थानिक सेवा व घरपोच भेट)',
  shopHours: 'सकाळी ७:०० ते रात्री ९:०० (इमर्जन्सी सेवा २४ तास उपलब्ध)',
  serviceAreasMr: ['बीड शहर', 'सुभाष रोड', 'जालना रोड', 'नगर रोड', 'शिवाजी चौक', 'शाहू नगर', 'एमआयडीसी बीड', 'बिंदुसरा परिसर', 'पाटोदा रोड', 'आष्टी फाटा व लगतची खेडी'],
  serviceAreasEn: ['Beed City', 'Subhash Road', 'Jalna Road', 'Nagar Road', 'Shivaji Chowk', 'Shahu Nagar', 'MIDC Beed', 'Bindusara Area', 'Patoda Road', 'Ashti Phata & rural farms'],
};

export const INDIAN_SERVICES_DATA: LocalizedService[] = [
  {
    id: 'house-wiring',
    category: 'residential',
    title: {
      mr: 'कन्सील्ड घरगुती वायरिंग व मॉड्युलर स्विच फिटिंग',
      en: 'Concealed House Wiring & Modular Switchboard Fitting',
    },
    shortDesc: {
      mr: 'नवीन घर, बंगला किंवा फ्लॅटसाठी पाईप झिर्री मारणे, पॉलिकॅब/फिनोलेक्स वायर ओढणे आणि अँकर रोमा/लेग्रँड मॉड्युलर बोर्ड फिटिंग.',
      en: 'Complete wall groove cutting, Polycab/Finolex FR wire pulling, and Anchor Roma/Legrand modular switchboard installation for new homes & flats.',
    },
    fullDesc: {
      mr: 'घरातील संपूर्ण सुरक्षित वायरिंगसाठी आम्ही आयएसआय मार्क कॉपर वायर (Polycab / Finolex / Havells) वापरतो. प्रत्येक खोलीसाठी स्वतंत्र एमसीबी (MCB), बाथरूमसाठी आरसीसीबी (RCCB/GFCI) आणि योग्य अर्थिंग केली जाते, ज्यामुळे विजेचा धक्का बसणे किंवा शॉर्ट सर्किट होण्याचा धोका शून्य होतो.',
      en: 'Comprehensive home electrical wiring using ISI flame-retardant copper wires. Dedicated circuit MCBs per room, RCCB earth-leakage shock protection, and chemical earthing to safeguard all home appliances.',
    },
    startingPrice: {
      mr: '₹ २५० / प्रति पॉईंट',
      en: '₹ 250 / per point',
    },
    estimatedDuration: {
      mr: '२ ते ५ दिवस (घराच्या आकारावर आधारित)',
      en: '2 to 5 Days (based on house size)',
    },
    keyFeatures: {
      mr: [
        'पॉलिकॅब (Polycab) व फिनोलेक्स (Finolex) एफआर कॉपर वायर',
        'अँकर रोमा (Anchor Roma) व लेग्रँड (Legrand) मॉड्युलर बोर्ड',
        'हॅवेल्स (Havells) व श्नायडर (Schneider) सुरक्षित एमसीबी डीबी बॉक्स',
        'रासायनिक अर्थिंग (Chemical Earth Pit) १००% सुरक्षिततेसाठी',
        'फॉल्स सिलिंग, पीओपी कन्सिल्ड व प्रोफाईल एलईडी लायटिंग',
      ],
      en: [
        'Polycab & Finolex Flame-Retardant ISI copper wires',
        'Anchor Roma, Goldmedal & Legrand modular switch plates',
        'Havells & Schneider MCB distribution box with RCCB trip',
        'Copper pipe / chemical earthing for complete shock safety',
        'False ceiling concealed spot lights & decorative profile LED',
      ],
    },
    iconName: 'Home',
    popularBadge: { mr: 'सर्वाधिक पसंती', en: 'Most Popular' },
  },
  {
    id: 'borewell-starter',
    category: 'agriculture',
    title: {
      mr: 'शेती बोरवेल व विहीर सबमर्सिबल स्टार्टर पॅनेल',
      en: 'Agricultural Borewell Submersible Starter Panel',
    },
    shortDesc: {
      mr: '३ ते १५ एचपी सबमर्सिबल व ओपनवेल पंपासाठी एल अँड टी (L&T) / बीसीएच स्टार्टर, सिंगल फेजिंग प्रिव्हेंटर, ऑटो-स्विच व कॅपॅसिटर फिटिंग.',
      en: 'Heavy-duty 3 HP to 15 HP L&T / BCH starters, single-phasing preventers, auto-switches, and capacitor banks for farm borewells.',
    },
    fullDesc: {
      mr: 'बीड जिल्ह्यातील शेतकरी बांधवांसाठी शेतातील वीज अनेकदा २-फेज होते किंवा व्होल्टेज कमी-जास्त होते. त्यामुळे मोटर जळू नये म्हणून आम्ही हाय-क्वालिटी ऑटो-स्विच, व्होल्टमीटर, अँपिअर मीटर आणि ओव्हरलोड रिले असलेले सुरक्षित स्टार्टर पॅनेल तयार करून बसवतो.',
      en: 'Designed specifically for Maharashtra agricultural power conditions with frequent voltage fluctuations. Fitted with auto-switch timers, single-phase preventers, and digital meters to prevent motor burnout.',
    },
    startingPrice: {
      mr: '₹ १,२०० पासून',
      en: 'From ₹ 1,200',
    },
    estimatedDuration: {
      mr: '३ ते ५ तास (शेतात प्रत्यक्ष जागेवर)',
      en: '3 to 5 Hours (on-site at farm)',
    },
    keyFeatures: {
      mr: [
        'ओरिजिनल एल अँड टी (L&T) किंवा बीसीएच (BCH) स्टार्टर फिटिंग',
        'ऑटो-स्विच (Auto-Switch) फिटिंग - वीज आल्यावर मोटर आपोआप सुरू',
        'सिंगल फेजिंग प्रिव्हेंटर - एका फेजवर मोटर जळण्यापासून संरक्षण',
        '३-फेज कॅपॅसिटर बँक जोडणी (कमी व्होल्टेजमध्येही मोटर सुरक्षित चालते)',
        'सबमर्सिबल फ्लॅट केबल जॉईंट व वॉटरप्रूफिंग टेपिंग',
      ],
      en: [
        'Original L&T or BCH heavy-duty contactors & coils',
        'Auto-switch fitting for automatic pump start upon power restore',
        'Single-phasing preventer protects against phase imbalance',
        '3-phase oil capacitor bank for stable torque during low voltage',
        'Waterproof vulcanized cable joints for submersible pumps',
      ],
    },
    iconName: 'Droplet',
    popularBadge: { mr: 'शेतकऱ्यांसाठी खास', en: 'Farmer Special' },
  },
  {
    id: 'inverter-battery',
    category: 'inverter',
    title: {
      mr: 'घरगुती इन्व्हर्टर व टॉल ट्युब्युलर बॅटरी फिटिंग',
      en: 'Home Inverter & Tall Tubular Battery Backup Setup',
    },
    shortDesc: {
      mr: 'लुमिनस (Luminous), मायक्रोटेक (Microtek), एक्साईड (Exide) इन्व्हर्टर जोडणी, चेंजओव्हर स्विच आणि लोड सेपरेशन वायरिंग.',
      en: 'Luminous, Microtek & Exide pure sine wave inverter and tall tubular battery installation with manual changeover switch.',
    },
    fullDesc: {
      mr: 'बीड शहर व ग्रामीण भागात लोडशेडिंग किंवा वीज पुरवठा खंडित झाल्यावर घरातील पंखे, लाईट, टीव्ही आणि वायफाय अखंड चालण्यासाठी योग्य कॅपॅसिटीचे इन्व्हर्टर व बॅटरी बसवून देतो. योग्य वायर गेज व सेफ्टी कार्ट्रिज फ्यूजसह फिटिंग.',
      en: 'Reliable uninterrupted power backup for home lights, fans, TV, and Wi-Fi during local power outages. Heavy-duty copper cabling and bypass changeover switches installed neatly.',
    },
    startingPrice: {
      mr: '₹ ८५० (फक्त फिटिंग)',
      en: '₹ 850 (Fitting labor)',
    },
    estimatedDuration: {
      mr: '२ ते ३ तास',
      en: '2 to 3 Hours',
    },
    keyFeatures: {
      mr: [
        'प्युअर साईन वेव्ह (Pure Sine Wave) इन्व्हर्टर कनेक्शन',
        '१५० Ah / २२० Ah टॉल ट्युब्युलर बॅटरी सुरक्षित रॅक माउंटिंग',
        'मॅन्युअल बायपास चेंजओव्हर स्विच (इन्व्हर्टर बिघडल्यास अडचण नाही)',
        'विद्युत लोड वाटप (फक्त आवश्यक पंखे व दिवे बॅकअपवर)',
        'डिस्टिल्ड वॉटर व बॅटरी टर्मिनल ग्रीसिंग व तपासणी',
      ],
      en: [
        'Pure sine wave inverter connection for silent fan operation',
        '150Ah to 220Ah tall tubular battery setup on protected trolley',
        'Manual bypass changeover switch so grid power remains available',
        'Intelligent load balancing (critical fans & lights only)',
        'Terminal anti-corrosion petroleum jelly and electrolyte check',
      ],
    },
    iconName: 'BatteryCharging',
  },
  {
    id: 'motor-rewinding',
    category: 'repairRewinding',
    title: {
      mr: 'सबमर्सिबल मोटर, कुलर व सीलिंग फॅन कॉपर रिवाइंडिंग',
      en: 'Submersible Motor, Cooler & Ceiling Fan Copper Rewinding',
    },
    shortDesc: {
      mr: 'जळालेली शेती मोटर, पाण्याचा टुल्लू पंप, कुलर मोटर व फॅन शुद्ध तांब्याच्या (Pure Copper) तारेने रिवाइंडिंग व बेरिंग बदलणे.',
      en: '100% pure copper wire rewinding and SKF bearing replacement for burnt submersible pumps, tullu pumps, and ceiling fans.',
    },
    fullDesc: {
      mr: 'आमच्या दुकानात अचूक गेजच्या सुपर एनामल्ड कॉपर वायरने मोटर रिवाइंडिंग केली जाते. उत्तम दर्जाचे वॉर्निश आणि बेकिंग करून मोटरची कार्यक्षमता मूळ नव्या मोटरसारखी होते.',
      en: 'Precision winding with original SWG super-enameled copper wire, Class-H insulation paper, and oven baking to restore motor RPM and torque.',
    },
    startingPrice: {
      mr: '₹ ३५० पासून',
      en: 'From ₹ 350',
    },
    estimatedDuration: {
      mr: '१ ते २ दिवस',
      en: '1 to 2 Days',
    },
    keyFeatures: {
      mr: [
        '१००% शुद्ध तांब्याची (Super Enameled Copper) वायर',
        'ओरिजिनल एसकेएफ (SKF) किंवा एनबीसी (NBC) बेरिंग',
        'वॉटरप्रूफ क्लास-एफ इन्सुलेशन पेपर व बेकिंग वॉर्निश',
        'रोटर व बुश अलाइनमेंट तपासणी',
        'रिवाइंडिंगनंतर वॉरंटी व टेस्टिंग रिपोर्ट',
      ],
      en: [
        '100% pure electrolytic copper wire (no aluminium mixing)',
        'Genuine SKF / NBC high-speed long-life bearings',
        'Class-F nomex insulation paper and high-dielectric varnish',
        'Dynamic balancing and rotor shaft bushing inspection',
        'Post-rewinding amp draw test and quality guarantee',
      ],
    },
    iconName: 'RotateCw',
  },
  {
    id: 'commercial-shop',
    category: 'commercial',
    title: {
      mr: 'दुकान, शोरूम व हॉस्पिटल इलेक्ट्रिकल फिटिंग',
      en: 'Shop, Showroom & Clinic Commercial Electrical Fitting',
    },
    shortDesc: {
      mr: 'बीडमधील व्यावसायिक दुकाने, कपडे व किराणा शोरूम, दवाखाने यासाठी ट्रॅक लाईट, डिस्प्ले लायटिंग, एसी पॉईंट व इनव्हर्टर वायरिंग.',
      en: 'Display track lighting, decorative spotlights, AC heavy power points, and billing computer inverter wiring for commercial shops in Beed.',
    },
    fullDesc: {
      mr: 'दुकानात गिऱ्हाइकांना आकर्षित करण्यासाठी चकचकीत व डोळ्यांना न टोचणारी प्रकाशयोजना केली जाते. तसेच एसी, फ्रीझर किंवा संगणकांसाठी सुरक्षित व्होल्टेज व फेज बॅलन्सिंग राखले जाते.',
      en: 'Modern architectural retail lighting, track lights, high-lumen LED battens, and dedicated heavy-duty power points for ACs and commercial freezers.',
    },
    startingPrice: {
      mr: '₹ २,००० पासून',
      en: 'From ₹ 2,000',
    },
    estimatedDuration: {
      mr: '२ ते ४ दिवस',
      en: '2 to 4 Days',
    },
    keyFeatures: {
      mr: [
        'ट्रॅक लाईट्स व सीओबी (COB) फोकस लाईट्स फिटिंग',
        'एसी (Air Conditioner) साठी स्वतंत्र ४ स्क्वेअर मिमी वायरिंग व एमसीबी',
        'बिलिंग काउंटर यूपीएस / इनव्हर्टर स्वतंत्र सर्किट',
        'साइनबोर्ड व ग्लो-साइन बोर्ड टायमर कनेक्शन',
        'शॉपिंग मॉल व शोरूमसाठी नीटनेटके लपवलेले वायरिंग',
      ],
      en: [
        'Track lights and directional COB focus lights for displays',
        'Dedicated 4 sq. mm circuit with 20A MCB for Air Conditioners',
        'Billing counter uninterrupted online UPS wiring',
        'Outdoor flex/glow-sign board automatic dusk timer',
        'Concealed wiring aesthetics to match shop interior design',
      ],
    },
    iconName: 'Store',
  },
  {
    id: 'three-phase',
    category: 'commercial',
    title: {
      mr: '३-फेज पीठ गिरणी, वेल्डिंग व लघुउद्योग मोटर कनेक्शन',
      en: '3-Phase Flour Mill, Welding & Small Workshop Connection',
    },
    shortDesc: {
      mr: 'महावितरण ३-फेज मीटरनंतर मेन स्विच, बसबार चेंबर, स्टार-डेल्टा स्टार्टर, रिव्हर्सिंग स्विच व अर्थिंग.',
      en: '3-Phase main switch, busbar chamber, star-delta motor starter, and heavy earthing for flour mills (atta chakki) & fabrication workshops.',
    },
    fullDesc: {
      mr: '१० एचपी किंवा त्याहून मोठ्या मोटर्ससाठी स्टार-डेल्टा स्टार्टर, हेवी गेज कॉपर बसबार आणि दुहेरी रासायनिक अर्थिंग आवश्यक असते, ज्यामुळे मोटर जळत नाही व वीज बिल योग्य येते.',
      en: 'Complete 3-phase industrial power infrastructure including L&T star-delta starters, 63A/100A changeover switches, and dual copper earthing.',
    },
    startingPrice: {
      mr: '₹ ३,५०० पासून',
      en: 'From ₹ 3,500',
    },
    estimatedDuration: {
      mr: '१ ते २ दिवस',
      en: '1 to 2 Days',
    },
    keyFeatures: {
      mr: [
        '६३A / १००A मेन स्विच व बसबार चेंबर फिटिंग',
        'मॅन्युअल / ऑटोमॅटिक स्टार-डेल्टा स्टार्टर जोडणी',
        'दुहेरी रासायनिक कॉपर अर्थिंग (Dual Chemical Earth Pit)',
        'फेज इंडिकेटर दिवे (R-Y-B) व्होल्टेज तपासणीसाठी',
        'महावितरण (MSEDCL) नियमांनुसार सुरक्षित वायरिंग',
      ],
      en: [
        '63A / 100A main switchboard with busbar chamber',
        'Manual or automatic star-delta motor starter wiring',
        'Dual copper electrode chemical earth pit for machinery',
        'R-Y-B phase indicators and voltmeter selector switch',
        'MSEDCL industrial electrical safety code compliance',
      ],
    },
    iconName: 'Settings',
  },
];

export const INDIAN_PROJECTS_DATA: LocalizedProject[] = [
  {
    id: 'proj-beed-residence',
    category: 'residential',
    title: {
      mr: 'नवीन २ मजली बंगला - पूर्ण कन्सिल्ड वायरिंग व मॉड्युलर बोर्ड',
      en: 'New 2-Storey Bungalow - Full Concealed Wiring & Modular DB',
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
      mr: '२,२०० चौरस फूट बंगल्यात संपूर्ण कन्सिल्ड पाईपिंग, पॉलिकॅब एफआर वायर्स, अँकर रोमा मॉड्युलर स्विचेस आणि ८-वे एमसीबी बॉक्सचे अचूक काम.',
      en: 'Complete concealed wall chase, Polycab FR copper wires, Anchor Roma switches, and 8-way Havells MCB distribution box for a 2,200 sq.ft. residence.',
    },
    challenge: {
      mr: 'घरात ३ एसी, गिझर आणि मॉड्युलर किचनसाठी हेवी लोड होता. योग्य फेज बॅलन्सिंग नसल्यास एमसीबी सतत ट्रिप होण्याची शक्यता होती.',
      en: 'High appliance load with 3 split ACs, heavy kitchen appliances, and storage geysers requiring strict phase distribution and earthing.',
    },
    solution: {
      mr: 'प्रत्येक एसी आणि किचनसाठी स्वतंत्र ४ स्क्वेअर मिमी सर्किट ओढले. ४०A आरसीसीबी (RCCB) बसवून घराला विजेच्या धक्क्यापासून १००% सुरक्षित केले.',
      en: 'Pulled dedicated 4 sq. mm circuits for ACs and power points, installed a 40A 30mA RCCB for human shock protection, and built a GI pipe earth pit.',
    },
    specifications: [
      { label: { mr: 'वापरलेली वायर', en: 'Wires Used' }, value: { mr: 'Polycab 1.5, 2.5 & 4.0 sq.mm FR', en: 'Polycab 1.5, 2.5 & 4.0 sq.mm FR' } },
      { label: { mr: 'मॉड्युलर स्विचेस', en: 'Modular Switches' }, value: { mr: 'Anchor Roma Plus Series', en: 'Anchor Roma Plus Series' } },
      { label: { mr: 'सुरक्षा उपकरण', en: 'Safety Device' }, value: { mr: 'Havells MCB + 40A RCCB', en: 'Havells MCB + 40A RCCB' } },
      { label: { mr: 'अर्थिंग', en: 'Earthing' }, value: { mr: 'Chemical Earth Pit (< 1 Ohm)', en: 'Chemical Earth Pit (< 1 Ohm)' } },
    ],
    svgType: 'concealed_wiring',
    hasBeforeAfter: true,
  },
  {
    id: 'proj-farm-borewell',
    category: 'agriculture',
    title: {
      mr: '७.५ एचपी बोरवेल सबमर्सिबल स्टार्टर व ऑटो-स्विच पॅनेल',
      en: '7.5 HP Farm Borewell Submersible Starter & Auto-Switch',
    },
    location: {
      mr: 'पाटोदा रोड शेत शिवार, बीड',
      en: 'Patoda Road Farm Shivar, Beed',
    },
    completionDate: {
      mr: '१० दिवसांपूर्वी पूर्ण',
      en: 'Completed 10 Days Ago',
    },
    summary: {
      mr: 'वारंवार व्होल्टेज कमी होणाऱ्या शेतात ७.५ एचपी पंपासाठी एल अँड टी स्टार्टर, कॅपॅसिटर बँक आणि सिंगल फेजिंग प्रिव्हेंटर पॅनेल बसवले.',
      en: 'Installed an L&T MK1 oil/air starter with single-phasing preventer, 3-phase capacitor bank, and digital auto-switch for a 7.5 HP borewell pump.',
    },
    challenge: {
      mr: 'महावितरणचे व्होल्टेज ३२०V पर्यंत घसरत होते आणि २-फेज आल्यामुळे शेतकऱ्याची मोटर एका महिन्यात दोनदा जळाली होती.',
      en: 'Severe voltage fluctuations dipping to 320V and frequent 2-phasing caused the farmer\'s motor to burn out twice in one month.',
    },
    solution: {
      mr: 'आम्ही वॉटरप्रूफ मेटल बॉक्समध्ये एल अँड टी स्टार्टर, व्होल्टेज कट-ऑफ रिले, ५ केव्हीएआर कॅपॅसिटर आणि ऑटो-स्विच बसवले. आता व्होल्टेज कमी असल्यास स्टार्टर मोटर बंद ठेवतो.',
      en: 'Built an IP65 metal enclosure with L&T contactor, under/over-voltage cut-off relay, and 5 kVAR power-factor capacitor bank.',
    },
    specifications: [
      { label: { mr: 'पंप क्षमता', en: 'Pump Capacity' }, value: { mr: '7.5 HP V6 Submersible', en: '7.5 HP V6 Submersible' } },
      { label: { mr: 'स्टार्टर युनिट', en: 'Starter Unit' }, value: { mr: 'Original L&T MK1 13-21A Relay', en: 'Original L&T MK1 13-21A Relay' } },
      { label: { mr: 'ऑटो-स्विच', en: 'Auto-Switch' }, value: { mr: 'Electronic Timer Auto-Switch', en: 'Electronic Timer Auto-Switch' } },
      { label: { mr: 'सुरक्षा', en: 'Protection' }, value: { mr: 'Single-Phasing & Dry Run Cutoff', en: 'Single-Phasing & Dry Run Cutoff' } },
    ],
    svgType: 'borewell_starter',
  },
  {
    id: 'proj-inverter-backup',
    category: 'inverter',
    title: {
      mr: 'लुमिनस ९०० VA इन्व्हर्टर + १५० Ah टॉल ट्युब्युलर बॅटरी सेटअप',
      en: 'Luminous 900VA Inverter + 150Ah Tall Tubular Battery Setup',
    },
    location: {
      mr: 'सुभाष रोड, बीड',
      en: 'Subhash Road, Beed',
    },
    completionDate: {
      mr: 'गेल्या पंधरवड्यात पूर्ण',
      en: 'Completed 2 Weeks Ago',
    },
    summary: {
      mr: 'घरगुती ग्राहकासाठी लोडशेडिंग काळात ५ ते ६ तास बॅकअप देणारे शुद्ध साईन वेव्ह इन्व्हर्टर व बायपास चेंजओव्हर स्विचचे काम.',
      en: 'Pure sine wave inverter installation providing 5-6 hours of continuous backup for 3 fans, 4 LED lights, TV, and Wi-Fi router.',
    },
    challenge: {
      mr: 'घरातील जुन्या वायरिंगमध्ये न्यूट्रल कॉमन होती, ज्यामुळे इन्व्हर्टर चालू केल्यावर इतर उपकरणांमध्ये आवाज येत होता.',
      en: 'Old house wiring had interconnected neutrals, causing inverter backfeed and humming noises in ceiling fans.',
    },
    solution: {
      mr: 'इन्व्हर्टरसाठी स्वतंत्र न्यूट्रल लूप ओढले, ६A कार्ट्रिज फ्यूज बसवले आणि कॉपर चेंजओव्हर बसवले ज्यामुळे इन्व्हर्टर खराब झाल्यास घर अंधारात राहत नाही.',
      en: 'Separated inverter neutral circuits, installed heavy-duty DC copper lugs, and integrated a 16A manual bypass switch.',
    },
    specifications: [
      { label: { mr: 'इन्व्हर्टर मॉडेल', en: 'Inverter Model' }, value: { mr: 'Luminous Eco Volt Neo 900', en: 'Luminous Eco Volt Neo 900' } },
      { label: { mr: 'बॅटरी क्षमता', en: 'Battery Spec' }, value: { mr: '150 Ah Tall Tubular (36M)', en: '150 Ah Tall Tubular (36M)' } },
      { label: { mr: 'बॅकअप वेळ', en: 'Backup Time' }, value: { mr: '५ ते ६ तास (३ पंखे + ४ दिवे)', en: '5 to 6 Hours (3 Fans + 4 Lights)' } },
      { label: { mr: 'बायपास स्विच', en: 'Bypass Switch' }, value: { mr: '16A Rotary Changeover', en: '16A Rotary Changeover' } },
    ],
    svgType: 'inverter_battery',
  },
  {
    id: 'proj-flour-mill',
    category: 'commercial',
    title: {
      mr: '१० एचपी ३-फेज पीठ गिरणी स्टार-डेल्टा स्टार्टर पॅनेल',
      en: '10 HP 3-Phase Flour Mill Star-Delta Starter Panel',
    },
    location: {
      mr: 'जालना रोड, बीड',
      en: 'Jalna Road, Beed',
    },
    completionDate: {
      mr: '३ आठवड्यांपूर्वी पूर्ण',
      en: 'Completed 3 Weeks Ago',
    },
    summary: {
      mr: 'व्यावसायिक पीठ गिरणीसाठी ६३A मेन स्विच, तीन फेज इंडिकेटर, व्होल्ट-अँपिअर मीटर आणि एल अँड टी स्टार-डेल्टा स्टार्टर जोडणी.',
      en: 'Heavy-duty commercial flour mill power setup with 63A main switch, busbar trunking, and L&T star-delta motor controller.',
    },
    challenge: {
      mr: 'गिरणी सुरू करताना सुरुवातीचा करंट खूप जास्त येत असल्याने मेन फ्युज सतत उडत होते.',
      en: 'High starting inrush current kept blowing 32A rewireable porcelain fuses when starting the commercial grinding mill.',
    },
    solution: {
      mr: 'स्टार-डेल्टा स्टार्टर बसवून स्टार्टिंग करंट १/३ केला आणि कॉपर प्लेट रासायनिक अर्थिंग करून व्होल्टेज ड्रॉप रोखला.',
      en: 'Fitted an automatic star-delta transition starter to cut starting current by 66% and installed dual copper earth plates.',
    },
    specifications: [
      { label: { mr: 'मोटर क्षमता', en: 'Motor Rating' }, value: { mr: '10 HP 3-Phase 1440 RPM', en: '10 HP 3-Phase 1440 RPM' } },
      { label: { mr: 'स्टार्टर प्रकार', en: 'Starter Type' }, value: { mr: 'L&T SASD Star-Delta', en: 'L&T SASD Star-Delta' } },
      { label: { mr: 'मेन स्विच', en: 'Main Switch' }, value: { mr: '63A TPN Sheet Steel Box', en: '63A TPN Sheet Steel Box' } },
      { label: { mr: 'अर्थिंग', en: 'Earthing' }, value: { mr: 'Dual Copper Plate (< 0.8 Ohm)', en: 'Dual Copper Plate (< 0.8 Ohm)' } },
    ],
    svgType: 'three_phase',
  },
  {
    id: 'proj-motor-repair',
    category: 'repairRewinding',
    title: {
      mr: '५ एचपी सबमर्सिबल मोटर कॉपर रिवाइंडिंग व एसकेएफ बेरिंग',
      en: '5 HP Submersible Motor Copper Rewinding & SKF Bearings',
    },
    location: {
      mr: 'बिंदुसरा परिसर, बीड',
      en: 'Bindusara Area, Beed',
    },
    completionDate: {
      mr: 'गेल्या महिन्यात पूर्ण',
      en: 'Completed Last Month',
    },
    summary: {
      mr: 'पाणी शिरून जळालेल्या ५ एचपी पंपाची अचूक २२ गेज सुपर एनामल्ड कॉपर वायरने रिवाइंडिंग करून ओरिजिनल वॉटर सील व बुश बसवले.',
      en: 'Complete 22 SWG electrolytic copper rewinding, moisture baking, and carbon-ceramic mechanical seal replacement on a 5 HP water pump.',
    },
    challenge: {
      mr: 'मोटरच्या स्टेटरमध्ये पाणी जाऊन कॉईल पूर्णपणे जळून शॉर्ट झाली होती आणि शाफ्ट जाम झाला होता.',
      en: 'Mechanical seal failed allowing muddy well water into stator slot, destroying coil insulation and rusting the rotor shaft.',
    },
    solution: {
      mr: 'स्टेटर स्वच्छ करून क्लास-एफ पॉलिएस्टर पेपर टाकला, शुद्ध तांब्याची कॉईल भरली, डबल वॉर्निश केले आणि नवे एसकेएफ बेरिंग बसवले.',
      en: 'Cleaned stator laminations, inserted Class-F Nomex slot liners, wound 100% pure copper, and pressed new SKF sealed bearings.',
    },
    specifications: [
      { label: { mr: 'वायर दर्जा', en: 'Wire Quality' }, value: { mr: '100% Pure EC Grade Copper 22 SWG', en: '100% Pure EC Grade Copper 22 SWG' } },
      { label: { mr: 'बेरिंग', en: 'Bearings' }, value: { mr: 'SKF 6204 & 6205 Heavy Duty', en: 'SKF 6204 & 6205 Heavy Duty' } },
      { label: { mr: 'इन्सुलेशन', en: 'Insulation' }, value: { mr: 'Class-F Moisture Proof', en: 'Class-F Moisture Proof' } },
      { label: { mr: 'टेस्टिंग', en: 'Load Test' }, value: { mr: '415V Balanced 7.4A No-load', en: '415V Balanced 7.4A No-load' } },
    ],
    svgType: 'motor_rewinding',
  },
  {
    id: 'proj-showroom-beed',
    category: 'commercial',
    title: {
      mr: 'कपड्यांचे शोरूम - आधुनिक एलईडी प्रोफाइल व स्पॉटलाईट फिटिंग',
      en: 'Garment Showroom - Modern LED Profile & Spotlight Fitting',
    },
    location: {
      mr: 'शिवाजी चौक, बीड',
      en: 'Shivaji Chowk, Beed',
    },
    completionDate: {
      mr: '१ महिन्यापूर्वी पूर्ण',
      en: 'Completed 1 Month Ago',
    },
    summary: {
      mr: '१,५०० चौरस फूट कपड्यांच्या शोरूममध्ये वॉर्म व्हाईट सीओबी लाईट्स, सिलिंग प्रोफाईल व ३ एसी साठी सुरक्षित पॉवर डिस्ट्रीब्युशन.',
      en: 'Modern Warm White COB focus lights, magnetic track rails, and clean 3-phase DB installation for a 1,500 sq.ft. garment store.',
    },
    challenge: {
      mr: 'शोरूममध्ये कपड्यांचे खरे रंग दिसण्यासाठी योग्य ल्युमेन व सीआयआर (CRI 90+) असलेले दिवे आवश्यक होते आणि वीज बिल कमी ठेवणे गरजेचे होते.',
      en: 'Client needed high CRI (>90) lighting so fabric colors pop accurately, with low heat dissipation and energy efficiency.',
    },
    solution: {
      mr: 'उच्च प्रतीचे ३०००K व ४०००K एलईडी ट्रॅक लाईट्स बसवले आणि एसी व बिलिंग कॉम्प्युटरसाठी स्वतंत्र एमसीबी लूपिंग केली.',
      en: 'Installed 15W high-CRI COB track spots, diffused silicone LED profiles, and dedicated 2.5 sq.mm UPS circuits.',
    },
    specifications: [
      { label: { mr: 'लाईट्स संख्या', en: 'Fixtures' }, value: { mr: '32x Track Spots + 80ft LED Profile', en: '32x Track Spots + 80ft LED Profile' } },
      { label: { mr: 'रंग तापमान', en: 'Color Temp' }, value: { mr: '3000K Warm White (High CRI)', en: '3000K Warm White (High CRI)' } },
      { label: { mr: 'ऊर्जा बचत', en: 'Energy Saving' }, value: { mr: '70% Power Saved vs Halogen', en: '70% Power Saved vs Halogen' } },
      { label: { mr: 'एमसीबी बॉक्स', en: 'DB Setup' }, value: { mr: 'Schneider 12-Way Double Door', en: 'Schneider 12-Way Double Door' } },
    ],
    svgType: 'commercial_shop',
  },
];

export const INDIAN_REVIEWS_DATA: LocalizedReview[] = [
  {
    id: 'rev-1',
    author: { mr: 'रमेशराव देशमुख', en: 'Rameshrao Deshmukh' },
    role: { mr: 'शेतकरी बांधव', en: 'Farmer' },
    location: { mr: 'पाटोदा परिसर, बीड', en: 'Patoda Area, Beed' },
    rating: 5,
    projectType: { mr: '७.५ एचपी बोरवेल सबमर्सिबल स्टार्टर व ऑटो-स्विच', en: '7.5 HP Borewell Starter & Auto-Switch' },
    date: { mr: 'मार्च २०२६', en: 'March 2026' },
    content: {
      mr: 'आमच्या शेतात कमी व्होल्टेजमुळे आधीची मोटर जळाली होती. श्री सद्गुरु इलेक्ट्रिकल्सचे भाऊ स्वतः शेतात आले, नवीन एल अँड टी स्टार्टर आणि कॅपॅसिटर बसवून दिले. आता रात्री वीज आली तरी ऑटो-स्विचमुळे मोटर आपोआप चालू होते. एकदम विश्वासू माणूस आणि वाजवी दर!',
      en: 'Our previous pump motor kept burning due to low voltage. The technician from Shree Sadguru Electricals came directly to our farm, installed a heavy L&T starter and capacitor. Now the auto-switch starts the pump reliably even at night. Honest work and very reasonable rates!',
    },
  },
  {
    id: 'rev-2',
    author: { mr: 'सचिन जोशी', en: 'Sachin Joshi' },
    role: { mr: 'घरमालक', en: 'Homeowner' },
    location: { mr: 'शाहू नगर, बीड', en: 'Shahu Nagar, Beed' },
    rating: 5,
    projectType: { mr: 'नवीन बंगल्याचे संपूर्ण कन्सिल्ड वायरिंग', en: 'Complete House Concealed Wiring' },
    date: { mr: 'फेब्रुवारी २०२६', en: 'February 2026' },
    content: {
      mr: 'नवीन घराच्या वायरिंगचे काम श्री सद्गुरु इलेक्ट्रिकल्सना दिले होते. पॉलिकॅबच्या ओरिजिनल वायर्स वापरल्या, भिंतीवरील झिर्री आणि मॉड्युलर बोर्ड एकदम नीट बसवले. कोणतीही घाईगडबड न करता सुरक्षित अर्थिंग करून दिली. बीड शहरात असे प्रामाणिक काम करणारे कमी आहेत.',
      en: 'Entrusted our new bungalow wiring to Shree Sadguru Electricals. They used genuine Polycab wires, cut clean wall chases, and fitted Anchor Roma boards neatly. Proper chemical earthing done with zero shortcuts. Best independent electrician in Beed.',
    },
  },
  {
    id: 'rev-3',
    author: { mr: 'बाळासाहेब पवार', en: 'Balasaheb Pawar' },
    role: { mr: 'व्यापारी, कपडे दुकान', en: 'Merchant, Garment Store' },
    location: { mr: 'सुभाष रोड, बीड', en: 'Subhash Road, Beed' },
    rating: 5,
    projectType: { mr: 'दुकान इन्व्हर्टर बॅटरी व एलईडी फोकस लाईट्स', en: 'Shop Inverter & LED Focus Lights' },
    date: { mr: 'जानेवारी २०२६', en: 'January 2026' },
    content: {
      mr: 'दुकानात लोडशेडिंग झाल्यावर अंधार व्हायचा. यांनी योग्य क्षमतेचे इन्व्हर्टर आणि टॉल ट्युब्युलर बॅटरी बसवून दिली. शिवाय कपडे उजळून दिसण्यासाठी ट्रॅक लाईट्सचे काम केले. फोन केला की लगेच दुकानात हजर होतात.',
      en: 'During power cuts our retail shop used to go dark. They installed a high-capacity inverter and tall tubular battery with neat changeover wiring. Whenever we call, they attend promptly without delay.',
    },
  },
  {
    id: 'rev-4',
    author: { mr: 'विठ्ठल काळे', en: 'Vitthal Kale' },
    role: { mr: 'पीठ गिरणी मालक', en: 'Flour Mill Owner' },
    location: { mr: 'जालना रोड, बीड', en: 'Jalna Road, Beed' },
    rating: 5,
    projectType: { mr: '१० एचपी ३-फेज स्टार डेल्टा स्टार्टर व मेन स्विच', en: '10 HP 3-Phase Star-Delta Starter' },
    date: { mr: 'डिसेंबर २०२५', en: 'December 2025' },
    content: {
      mr: 'गिरणीच्या स्टार्टरमध्ये शॉर्ट सर्किट झाले होते. एका तासात येऊन दुरुस्त केले आणि नवीन कॉपर कॉन्टॅक्ट बसवले. कामात पूर्ण हातखंडा आहे आणि कंपनीसारखे फालतू चार्जेस लावत नाहीत. स्थानिक शेतकऱ्यांचा व व्यावसायिकांचा खरा आधार!',
      en: 'Our flour mill starter had a short circuit. They came within an hour, replaced the worn copper contacts, and tested the line. True skilled technician without inflated corporate charges. Highly recommended in Beed.',
    },
  },
];

export const INDIAN_FAQ_DATA = [
  {
    q: {
      mr: 'तुम्ही फक्त बीड शहरात काम करता की ग्रामीण भागातही शेतात येता?',
      en: 'Do you work only in Beed city or do you also visit rural farms and villages?',
    },
    a: {
      mr: 'आम्ही बीड शहर (सुभाष रोड, जालना रोड, नगर रोड, शाहू नगर, एमआयडीसी) तसेच परिसरातील सर्व खेडी आणि शेतातील बोरवेलवर जाऊन प्रत्यक्ष काम करतो. शेतकरी बांधवांसाठी आम्ही खास शेतावर येऊन स्टार्टर व मोटर बसवून देतो.',
      en: 'We serve Beed city as well as surrounding rural farm areas. For farmers, we travel directly to farm borewells to install starters, motors, and single-phasing preventers.',
    },
  },
  {
    q: {
      mr: 'वायरिंगचे सामान आम्ही स्वतः आणायचे की तुम्ही दुकानातून पुरवता?',
      en: 'Can we purchase the materials ourselves, or do you supply them from your shop?',
    },
    a: {
      mr: 'दोन्ही पर्याय उपलब्ध आहेत! तुम्ही स्वतः बाजारातून आणू शकता, अथवा आमच्या दुकानातून पॉलिकॅब (Polycab), फिनोलेक्स (Finolex), अँकर (Anchor), एल अँड टी (L&T) आदी ओरिजिनल ब्रँडचे सामान वाजवी घाऊक दरात मिळू शकते. आम्ही कोणतेही डुप्लिकेट सामान वापरत नाही.',
      en: 'Both options are welcome! You can either purchase materials yourself or get 100% genuine ISI brand materials (Polycab, Finolex, Anchor, L&T) directly from our shop at fair wholesale prices.',
    },
  },
  {
    q: {
      mr: 'शेतातील मोटर वारंवार जळू नये म्हणून काय उपाय करावा?',
      en: 'How can we prevent agricultural borewell motors from burning out frequently?',
    },
    a: {
      mr: 'ग्रामीण भागात बऱ्याचदा २-फेज वीज येते किंवा व्होल्टेज ३२०V पेक्षा कमी होते. यासाठी स्टार्टरमध्ये (१) चांगल्या दर्जाचा सिंगल फेजिंग प्रिव्हेंटर, (२) ऑटो-स्विच आणि (३) योग्य क्षमतेचा ऑईल कॅपॅसिटर बसवणे आवश्यक आहे. आम्ही असे सुरक्षित स्टार्टर पॅनेल तयार करून देतो.',
      en: 'Motor burnout is mainly caused by single-phasing (running on 2 phases) or severe under-voltage. Installing a quality Single-Phasing Preventer, electronic auto-switch, and 3-phase capacitor bank completely stops motor burnout.',
    },
  },
  {
    q: {
      mr: 'घरासाठी किती क्षमतेचे इन्व्हर्टर व बॅटरी योग्य राहील?',
      en: 'What capacity inverter and battery is recommended for a typical home?',
    },
    a: {
      mr: 'साधारण ३ ते ४ पंखे, ५ ते ६ एलईडी दिवे, टीव्ही आणि वायफायसाठी ९०० VA (किंवा १ KVA) प्युअर साईन वेव्ह इन्व्हर्टर आणि १५० Ah टॉल ट्युब्युलर बॅटरी ४ ते ५ तासांचा उत्तम बॅकअप देते. जास्त लोडसाठी ११०० VA ते १५०० VA इन्व्हर्टर योग्य ठरते.',
      en: 'For 3-4 fans, 5-6 LED lights, TV, and Wi-Fi, a 900VA to 1000VA pure sine wave inverter paired with a 150Ah tall tubular battery provides 4-5 hours of comfortable backup.',
    },
  },
  {
    q: {
      mr: 'इमर्जन्सीमध्ये वीज गेली किंवा शॉर्ट सर्किट झाले तर रात्री कॉल करू शकतो का?',
      en: 'Can we call you at night if there is an emergency short circuit or power loss?',
    },
    a: {
      mr: 'होय, नक्कीच! शॉर्ट सर्किट, घरातून जळका वास येणे, मेन फ्युज उडणे किंवा शेतातील पाणी अडकल्यास आमच्या ८०८०७९५३४३ किंवा ९९७५०९४८४७ या क्रमांकावर कधीही फोन करू शकता.',
      en: 'Yes! For emergency short circuits, burnt distribution boards, or urgent borewell repairs, feel free to call our numbers 8080795343 or 9975094847 anytime.',
    },
  },
];
