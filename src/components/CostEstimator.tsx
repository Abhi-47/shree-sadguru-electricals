import React, { useState, useId } from 'react';
import { translations, Language } from '../translations';
import { SHOP_INFO } from '../data/mockData';
import { Calculator, ArrowRight, Check, Phone, MessageSquare } from 'lucide-react';

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
  const [propertyType, setPropertyType] = useState<'house_flat' | 'farm_borewell' | 'shop_commercial'>('house_flat');
  const [materialScope, setMaterialScope] = useState<'with_material' | 'labor_only'>('with_material');
  const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');

  const [addOns, setAddOns] = useState({
    chemicalEarth: true,
    rccbShockProof: true,
    autoSwitch: false,
    inverterBypass: false,
  });

  const earthId = useId();
  const rccbId = useId();
  const autoSwitchId = useId();
  const bypassId = useId();

  // Pricing engine in Indian Rupees (₹)
  const calculateEstimate = () => {
    let min = 2500;
    let max = 4500;

    switch (selectedService) {
      case 'house-wiring':
        // 1BHK / 2BHK basic estimates
        min = materialScope === 'with_material' ? 18000 : 7500;
        max = materialScope === 'with_material' ? 32000 : 14000;
        break;
      case 'borewell-starter':
        min = materialScope === 'with_material' ? 5500 : 1500;
        max = materialScope === 'with_material' ? 9500 : 2500;
        break;
      case 'inverter-battery':
        min = materialScope === 'with_material' ? 19000 : 850;
        max = materialScope === 'with_material' ? 26000 : 1400;
        break;
      case 'motor-rewinding':
        min = 450;
        max = 2800;
        break;
      case 'three-phase':
        min = materialScope === 'with_material' ? 8500 : 3500;
        max = materialScope === 'with_material' ? 16000 : 6000;
        break;
      case 'commercial-shop':
        min = materialScope === 'with_material' ? 6500 : 2200;
        max = materialScope === 'with_material' ? 14000 : 4500;
        break;
      default:
        min = 1500;
        max = 3500;
    }

    if (propertyType === 'farm_borewell') {
      min *= 1.1;
      max *= 1.15;
    }

    if (urgency === 'urgent') {
      min += 500;
      max += 800;
    }

    let addOnTotal = 0;
    if (addOns.chemicalEarth) addOnTotal += 2200;
    if (addOns.rccbShockProof) addOnTotal += 1650;
    if (addOns.autoSwitch) addOnTotal += 1150;
    if (addOns.inverterBypass) addOnTotal += 850;

    return {
      min: Math.round(min + addOnTotal),
      max: Math.round(max + addOnTotal),
      addOnTotal,
    };
  };

  const est = calculateEstimate();

  const handleApply = () => {
    const summary = `${selectedService} (${propertyType}, ${materialScope}, ${urgency}). Estimated ₹${est.min} - ₹${est.max}`;
    onApplyEstimateToContact(summary);
  };

  return (
    <section id="estimator" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2">
              {t.estimator.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
              {t.estimator.title}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            {t.estimator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                {t.estimator.step1}
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-amber-400"
              >
                <option value="house-wiring">
                  {currentLang === 'mr' ? 'घरगुती कन्सिल्ड वायरिंग (House Wiring)' : 'House Concealed Wiring'}
                </option>
                <option value="borewell-starter">
                  {currentLang === 'mr' ? 'शेती बोरवेल स्टार्टर व पॅनेल (Borewell Starter)' : 'Borewell Submersible Starter'}
                </option>
                <option value="inverter-battery">
                  {currentLang === 'mr' ? 'इन्व्हर्टर व टॉल ट्युब्युलर बॅटरी (Inverter Setup)' : 'Inverter & Battery Backup'}
                </option>
                <option value="motor-rewinding">
                  {currentLang === 'mr' ? 'मोटर / कुलर / फॅन रिवाइंडिंग (Motor Rewinding)' : 'Motor / Fan Rewinding'}
                </option>
                <option value="three-phase">
                  {currentLang === 'mr' ? '३-फेज गिरणी / वेल्डिंग कनेक्शन (3-Phase Mill)' : '3-Phase Flour Mill / Workshop'}
                </option>
                <option value="commercial-shop">
                  {currentLang === 'mr' ? 'दुकान व शोरूम एलईडी फिटिंग (Commercial Shop)' : 'Commercial Shop Electricals'}
                </option>
              </select>
            </div>

            {/* Step 2: Property Type */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                {t.estimator.step2}
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'house_flat', label: currentLang === 'mr' ? 'घर / बंगला' : 'Home / Flat' },
                  { id: 'farm_borewell', label: currentLang === 'mr' ? 'शेत / बोरवेल' : 'Farm / Well' },
                  { id: 'shop_commercial', label: currentLang === 'mr' ? 'दुकान / गिरणी' : 'Shop / Mill' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id as any)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center truncate ${
                      propertyType === item.id
                        ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material Preference */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                {t.estimator.step3}
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'with_material', label: currentLang === 'mr' ? 'साहित्यासह (पॉलिकॅब/अँकर/एल अँड टी)' : 'With Materials (Polycab/L&T)' },
                  { id: 'labor_only', label: currentLang === 'mr' ? 'फक्त मजुरी (सामान ग्राहकाचे)' : 'Labor Only (Your Materials)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMaterialScope(item.id as any)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center truncate ${
                      materialScope === item.id
                        ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Urgency */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                {t.estimator.step4}
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'normal', label: currentLang === 'mr' ? 'नियोजित वेळ (१ ते ३ दिवस)' : 'Standard (1-3 Days)' },
                  { id: 'urgent', label: currentLang === 'mr' ? 'तातडीने आजच (Same Day)' : 'Urgent (Same Day)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id as any)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center truncate ${
                      urgency === item.id
                        ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Add-ons */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2.5">
                {t.estimator.step5}
              </label>
              <div className="space-y-2.5 text-xs">
                <label htmlFor={earthId} className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="flex items-center gap-3">
                    <input
                      id={earthId}
                      type="checkbox"
                      checked={addOns.chemicalEarth}
                      onChange={(e) => setAddOns({ ...addOns, chemicalEarth: e.target.checked })}
                      className="rounded text-amber-400 focus:ring-amber-400 bg-slate-900 border-slate-700"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {currentLang === 'mr' ? 'रासायनिक कॉपर अर्थिंग खड्डा (Chemical Earth Pit)' : 'Chemical Copper Earth Pit'}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {currentLang === 'mr' ? 'शॉक आणि वीज पडण्यापासून १००% संरक्षण' : 'Complete shock and surge protection'}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-amber-400 font-bold">+₹२,२००</span>
                </label>

                <label htmlFor={rccbId} className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="flex items-center gap-3">
                    <input
                      id={rccbId}
                      type="checkbox"
                      checked={addOns.rccbShockProof}
                      onChange={(e) => setAddOns({ ...addOns, rccbShockProof: e.target.checked })}
                      className="rounded text-amber-400 focus:ring-amber-400 bg-slate-900 border-slate-700"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {currentLang === 'mr' ? '४०A आरसीसीबी शॉक प्रोटेक्टर (RCCB Breaker)' : '40A RCCB Human Shock Trip'}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {currentLang === 'mr' ? 'मानवी स्पर्श झाल्यास ०.०३ सेकंदात वीज बंद होते' : 'Instantly trips power on human shock'}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-amber-400 font-bold">+₹१,६५०</span>
                </label>

                <label htmlFor={autoSwitchId} className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="flex items-center gap-3">
                    <input
                      id={autoSwitchId}
                      type="checkbox"
                      checked={addOns.autoSwitch}
                      onChange={(e) => setAddOns({ ...addOns, autoSwitch: e.target.checked })}
                      className="rounded text-amber-400 focus:ring-amber-400 bg-slate-900 border-slate-700"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {currentLang === 'mr' ? 'शेती स्टार्टर ऑटो-स्विच युनिट (Auto-Switch)' : 'Farm Motor Auto-Switch Unit'}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {currentLang === 'mr' ? 'वीज आल्यावर मोटर आपोआप सुरू होते' : 'Starts pump automatically on power restoration'}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-amber-400 font-bold">+₹१,१५०</span>
                </label>

                <label htmlFor={bypassId} className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                  <div className="flex items-center gap-3">
                    <input
                      id={bypassId}
                      type="checkbox"
                      checked={addOns.inverterBypass}
                      onChange={(e) => setAddOns({ ...addOns, inverterBypass: e.target.checked })}
                      className="rounded text-amber-400 focus:ring-amber-400 bg-slate-900 border-slate-700"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {currentLang === 'mr' ? 'इन्व्हर्टर बायपास चेंजओव्हर स्विच (Bypass Switch)' : 'Inverter Bypass Rotary Changeover'}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {currentLang === 'mr' ? 'इन्व्हर्टर बिघडल्यास घर अंधारात राहत नाही' : 'Bypasses inverter directly to grid if faulted'}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-amber-400 font-bold">+₹८५०</span>
                </label>
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <Calculator className="w-4 h-4" />
                <span>{currentLang === 'mr' ? 'अंदाजे खर्च तपशील' : 'ESTIMATED BUDGET'}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {t.estimator.estimatedTotal}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {t.estimator.rangeNote}
              </p>

              {/* Price Range Display */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-center">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  {currentLang === 'mr' ? 'अंदाजे रक्कम (रुपये)' : 'Estimated INR (₹)'}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400 tabular-nums">
                  ₹{est.min.toLocaleString('en-IN')} – ₹{est.max.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-emerald-400 mt-1.5 block">
                  {currentLang === 'mr'
                    ? 'स्थानिक बीड दुकान वॉरंटीसह प्रामाणिक काम'
                    : 'Genuine Work with Local Beed Shop Warranty'}
                </span>
              </div>

              {/* Action Buttons */}
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 mb-3"
              >
                <span>{t.estimator.applyEstimate}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${SHOP_INFO.phone1}`}
                  className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded-lg text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{SHOP_INFO.phone1}</span>
                </a>
                <a
                  href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(
                    `नमस्कार, मला ${selectedService} साठी अंदाजे ₹${est.min}-₹${est.max} च्या कामाची चौकशी करायची आहे.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-800 hover:bg-emerald-700 text-xs font-bold text-white rounded-lg text-center flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
