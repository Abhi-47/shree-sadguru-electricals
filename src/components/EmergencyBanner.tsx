import React, { useState } from 'react';
import { SHOP_INFO } from '../data/mockData';
import { Language } from '../translations';
import { AlertTriangle, Phone, MessageSquare, ChevronDown } from 'lucide-react';

export const EmergencyBanner: React.FC<{ currentLang: Language }> = ({ currentLang }) => {
  const [showTips, setShowTips] = useState(false);

  return (
    <div className="bg-gradient-to-r from-red-950/90 via-slate-900 to-amber-950/80 border-b border-red-900/60 px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>
                {currentLang === 'mr'
                  ? 'तातडीची मदत (Emergency Electrical Service)'
                  : 'Emergency Electrical Service in Beed'}
              </span>
              <span className="text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-1.5 py-0.2 rounded font-mono">
                24/7 ON CALL
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              {currentLang === 'mr'
                ? 'घरातून जळका वास, शॉर्ट सर्किट, मेन फ्युज उडणे किंवा शेतातील पाणी अडकल्यास लगेच फोन करा.'
                : 'Burnt smell, sudden short circuits, blown main fuses, or farm motor tripping? Call now.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
          <button
            onClick={() => setShowTips(!showTips)}
            className="text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
          >
            {showTips
              ? (currentLang === 'mr' ? 'सुरक्षा सूचना लपवा' : 'Hide Safety Tips')
              : (currentLang === 'mr' ? 'सुरक्षा सूचना पहा' : 'Safety Tips')}
          </button>

          <a
            href={`tel:${SHOP_INFO.phone1}`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{SHOP_INFO.phone1}</span>
          </a>

          <a
            href={`tel:${SHOP_INFO.phone2}`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{SHOP_INFO.phone2}</span>
          </a>
        </div>
      </div>

      {showTips && (
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-red-900/40 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300">
          <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800">
            <span className="font-bold text-amber-400 block mb-1">
              {currentLang === 'mr' ? '१. मेन स्विच बंद करा' : '1. Turn Off Main Switch'}
            </span>
            {currentLang === 'mr'
              ? 'घरात किंवा दुकानातून जळका वास येत असल्यास प्रथम मेन एमसीबी किंवा मेन स्विच खाली पाडा.'
              : 'Immediately turn off main MCB or switch if you smell burnt plastic or wire smoke.'}
          </div>
          <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800">
            <span className="font-bold text-red-400 block mb-1">
              {currentLang === 'mr' ? '२. जळालेल्या बोर्डला हात लावू नका' : '2. Do Not Touch Burnt Parts'}
            </span>
            {currentLang === 'mr'
              ? 'पाण्यात उभे राहून किंवा ओल्या हाताने फ्यूज किंवा वायरला स्पर्श करू नका.'
              : 'Never touch scorched wire joints or wet starter boxes with bare hands.'}
          </div>
          <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800">
            <span className="font-bold text-emerald-400 block mb-1">
              {currentLang === 'mr' ? '३. आमच्या क्रमांकावर फोन करा' : '3. Call Shree Sadguru Electricals'}
            </span>
            {currentLang === 'mr'
              ? '८०८०७९५३४३ किंवा ९९७५०९४८४७ वर फोन करा, आम्ही बीड शहरात त्वरित पोहोचू.'
              : 'Call 8080795343 or 9975094847 for immediate technician dispatch in Beed.'}
          </div>
        </div>
      )}
    </div>
  );
};
