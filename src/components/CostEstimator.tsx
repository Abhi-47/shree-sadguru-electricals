import React, { useState, useId } from 'react';
import { translations, Language } from '../translations';
import { SHOP_INFO } from '../data/mockData';
import { Calculator, ArrowRight, Check, Phone, MessageSquare, Home, Sparkles, ShieldCheck } from 'lucide-react';

interface CostEstimatorProps {
  currentLang: Language;
  initialServiceId?: string;
  onApplyEstimateToContact: (summary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  currentLang,
  initialServiceId = 'house-wiring',
  onApplyEstimateToContact,
}) => {
  const t = translations[currentLang];
  const [selectedService, setSelectedService] = useState(initialServiceId);
  const [workScale, setWorkScale] = useState<'minor' | 'medium' | 'complete'>('minor');
  const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');

  const [addOns, setAddOns] = useState({
    safeEarth: false,
    mcbTripFix: false,
    autoSwitch: false,
    changeover: false,
  });

  const earthId = useId();
  const mcbId = useId();
  const autoSwitchId = useId();
  const changeoverId = useId();

  // Fair, realistic pricing engine for Beed home market in INR (₹)
  const calculateEstimate = () => {
    let min = 150;
    let max = 220;

    switch (selectedService) {
      case 'house-wiring':
        // Point wiring labor (₹120 - ₹150/pt)
        min = workScale === 'minor' ? 240 : workScale === 'medium' ? 720 : 1500;
        max = workScale === 'minor' ? 360 : workScale === 'medium' ? 1100 : 2200;
        break;
      case 'home-repair':
        // Fan/cooler/geyser fitting (Fan ₹100, geyser ₹200)
        min = workScale === 'minor' ? 100 : workScale === 'medium' ? 200 : 380;
        max = workScale === 'minor' ? 140 : workScale === 'medium' ? 300 : 550;
        break;
      case 'inverter-battery':
        // Inverter fitting labor (₹300 - ₹400)
        min = workScale === 'minor' ? 300 : 400;
        max = workScale === 'minor' ? 400 : 550;
        break;
      case 'water-motor':
        // Home water motor & float switch (₹200 - ₹250)
        min = workScale === 'minor' ? 200 : 300;
        max = workScale === 'minor' ? 260 : 420;
        break;
      case 'fault-finding':
        // Short circuit diagnostic visit (₹150 visit fee included)
        min = 150;
        max = 200;
        break;
      case 'earthing':
        // Home safe earthing (₹550 - ₹750)
        min = 550;
        max = 750;
        break;
      default:
        min = 150;
        max = 220;
    }

    if (urgency === 'urgent') {
      min += 30;
      max += 50;
    }

    let addOnTotal = 0;
    if (addOns.safeEarth) addOnTotal += 100;
    if (addOns.mcbTripFix) addOnTotal += 80;
    if (addOns.autoSwitch) addOnTotal += 100;
    if (addOns.changeover) addOnTotal += 80;

    return {
      min: Math.round(min + addOnTotal),
      max: Math.round(max + addOnTotal),
      addOnTotal,
    };
  };

  const est = calculateEstimate();

  const handleApply = () => {
    const serviceName = selectedService.replace('-', ' ').toUpperCase();
    const summary = `${serviceName} (${workScale}, ${urgency}). Estimated ₹${est.min} - ₹${est.max}`;
    onApplyEstimateToContact(summary);
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>{t.estimator.kicker}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              {t.estimator.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
            {t.estimator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Select Work Type */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md">
              <label className="block text-xs sm:text-sm font-bold text-white mb-3">
                {t.estimator.step1}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'house-wiring', mr: 'कन्सिल्ड वायरिंग', en: 'House Wiring' },
                  { id: 'home-repair', mr: 'फॅन / गिझर / कुलर', en: 'Fan / Geyser' },
                  { id: 'inverter-battery', mr: 'इन्व्हर्टर व बॅटरी', en: 'Inverter Setup' },
                  { id: 'water-motor', mr: 'पाण्याची मोटर', en: 'Water Motor' },
                  { id: 'fault-finding', mr: 'शॉर्ट सर्किट / फॉल्ट', en: 'Short Circuit' },
                  { id: 'earthing', mr: 'घरगुती अर्थिंग', en: 'Home Earthing' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                      selectedService === s.id
                        ? 'border-amber-400 bg-amber-400/10 text-amber-300 shadow-xs'
                        : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="line-clamp-1">{currentLang === 'mr' ? s.mr : s.en}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Work Scale */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md">
              <label className="block text-xs sm:text-sm font-bold text-white mb-3">
                {t.estimator.step2}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    id: 'minor',
                    labelMr: 'किरकोळ काम',
                    labelEn: 'Small Job',
                    descMr: '१-२ वस्तू दुरुस्ती / १ फॅन',
                    descEn: '1-2 items / 1 fan',
                  },
                  {
                    id: 'medium',
                    labelMr: 'मध्यम काम',
                    labelEn: 'Medium Job',
                    descMr: '१ खोली / गिझर + फॅन',
                    descEn: '1 room / geyser + fan',
                  },
                  {
                    id: 'complete',
                    labelMr: 'मोठे काम',
                    labelEn: 'Complete Job',
                    descMr: 'पूर्ण घर वायरिंग / इन्व्हर्टर',
                    descEn: 'Full home / inverter',
                  },
                ].map((scale) => (
                  <button
                    key={scale.id}
                    type="button"
                    onClick={() => setWorkScale(scale.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      workScale === scale.id
                        ? 'border-amber-400 bg-amber-400/10 text-amber-300'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold text-white mb-1">
                      {currentLang === 'mr' ? scale.labelMr : scale.labelEn}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">
                      {currentLang === 'mr' ? scale.descMr : scale.descEn}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md">
              <label className="block text-xs sm:text-sm font-bold text-white mb-3">
                {t.estimator.step3}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgency('normal')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    urgency === 'normal'
                      ? 'border-amber-400 bg-amber-400/10 text-amber-300'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {currentLang === 'mr' ? 'नियमित (आज किंवा सोयीनुसार)' : 'Standard (Today / Convenient)'}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {currentLang === 'mr' ? 'कोणताही जादा आकार नाही' : 'Normal labor rates'}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('urgent')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    urgency === 'urgent'
                      ? 'border-rose-400 bg-rose-400/10 text-rose-300'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {currentLang === 'mr' ? 'तातडीने (१५-३० मि. इमर्जन्सी)' : 'Urgent (15-30 Min Emergency)'}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {currentLang === 'mr' ? 'तातडीने घरपोच धाव (+₹३० ते ₹५०)' : 'Emergency response (+₹30 to ₹50)'}
                  </div>
                </button>
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md">
              <label className="block text-xs sm:text-sm font-bold text-white mb-3">
                {t.estimator.step4}
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    id: earthId,
                    checked: addOns.safeEarth,
                    onChange: () => setAddOns((p) => ({ ...p, safeEarth: !p.safeEarth })),
                    titleMr: 'घरातील सर्व सॉकेट्सचे अर्थिंग टेस्टरने चेकिंग (+ ₹१००)',
                    titleEn: 'Check earthing continuity across all sockets (+ ₹100)',
                  },
                  {
                    id: mcbId,
                    checked: addOns.mcbTripFix,
                    onChange: () => setAddOns((p) => ({ ...p, mcbTripFix: !p.mcbTripFix })),
                    titleMr: 'सतत पडणारा MCB बदलणे किंवा फिक्स करणे (+ ₹८०)',
                    titleEn: 'Replace or isolate tripping breaker (+ ₹80)',
                  },
                  {
                    id: autoSwitchId,
                    checked: addOns.autoSwitch,
                    onChange: () => setAddOns((p) => ({ ...p, autoSwitch: !p.autoSwitch })),
                    titleMr: 'पाण्याच्या टाकीचा ऑटो फ्लोट स्विच जोडणी (+ ₹१००)',
                    titleEn: 'Water tank auto float sensor fitting (+ ₹100)',
                  },
                  {
                    id: changeoverId,
                    checked: addOns.changeover,
                    onChange: () => setAddOns((p) => ({ ...p, changeover: !p.changeover })),
                    titleMr: 'इन्व्हर्टरसाठी मॅन्युअल बायपास चेंजओव्हर स्विच जोडणे (+ ₹८०)',
                    titleEn: 'Manual bypass changeover switch connection (+ ₹80)',
                  },
                ].map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={item.onChange}
                      className="w-4 h-4 rounded text-amber-400 focus:ring-amber-400 bg-slate-900 border-slate-700 accent-amber-400"
                    />
                    <span className="text-xs sm:text-sm text-slate-200">
                      {currentLang === 'mr' ? item.titleMr : item.titleEn}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Result Column (Stylish estimate card) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentLang === 'mr' ? 'पारदर्शक घरपोच दर' : 'Transparent Doorstep Rate'}</span>
              </div>

              <div className="text-xs sm:text-sm text-slate-400 mb-2">
                {t.estimator.estimatedTotal}
              </div>

              <div className="text-4xl sm:text-5xl font-black text-amber-400 font-sans tracking-tight mb-3">
                ₹ {est.min} - ₹ {est.max}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {t.estimator.rangeNote}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>{currentLang === 'mr' ? 'सेवा प्रकार:' : 'Service:'}</span>
                  <span className="font-semibold text-white">{selectedService.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{currentLang === 'mr' ? 'कामाचे प्रमाण:' : 'Scale:'}</span>
                  <span className="font-semibold text-white">{workScale}</span>
                </div>
                <div className="flex justify-between">
                  <span>{currentLang === 'mr' ? 'घरपोच व्हिजिट फी:' : 'Doorstep Visit Fee:'}</span>
                  <span className="font-semibold text-emerald-400">
                    {currentLang === 'mr' ? '₹ १५० (बीड शहर)' : '₹ 150 (Beed City)'}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.estimator.applyEstimate}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${SHOP_INFO.phone1}`}
                  className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-750 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{t.estimator.callDirect}: {SHOP_INFO.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
