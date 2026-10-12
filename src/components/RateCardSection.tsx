import React, { useState } from 'react';
import { translations, Language } from '../translations';
import { SHOP_INFO } from '../data/mockData';
import { Phone, CheckCircle2, Zap, ArrowRight, ShieldCheck, Clock, Tag } from 'lucide-react';

interface RateCardSectionProps {
  currentLang: Language;
  onBookRateItem: (itemName: string) => void;
}

export const RateCardSection: React.FC<RateCardSectionProps> = ({
  currentLang,
  onBookRateItem,
}) => {
  const t = translations[currentLang];
  const rc = t.rateCard;

  const [activeFilter, setActiveFilter] = useState<'all' | 'popular' | 'wiring'>('all');

  const filteredItems = rc.items.filter((item) => {
    if (activeFilter === 'popular') return !!item.badge;
    if (activeFilter === 'wiring') return item.name.includes('वायरिंग') || item.name.includes('Wiring') || item.name.includes('बोर्ड') || item.name.includes('Board');
    return true;
  });

  return (
    <section id="rates" className="py-16 sm:py-24 bg-slate-900/60 border-b border-slate-800/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>{rc.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans">
            {rc.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {rc.subtitle}
          </p>

          {/* Home Service Only Reassurance Strip */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              {currentLang === 'mr'
                ? '🏠 १००% घरपोच सेवा • आम्ही फक्त घरांची कामे करतो, कमर्शियल कंत्राटे नाही'
                : '🏠 100% Doorstep Home Service • Residential only, no commercial contracts'}
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            {currentLang === 'mr' ? 'सर्व दर (All)' : 'All Rates'}
          </button>
          <button
            onClick={() => setActiveFilter('popular')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === 'popular'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            {currentLang === 'mr' ? '⭐ प्रमुख सेवा' : '⭐ Popular'}
          </button>
          <button
            onClick={() => setActiveFilter('wiring')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === 'wiring'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            {currentLang === 'mr' ? '⚡ वायरिंग व बोर्ड' : '⚡ Wiring & Boards'}
          </button>
        </div>

        {/* Stylish Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-amber-400/40 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-amber-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-4 pl-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    {rc.colRate}
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-sans tracking-tight">
                    {item.rate}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400 mr-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.time}</span>
                  </div>

                  <button
                    onClick={() => onBookRateItem(item.name)}
                    className="px-3.5 py-2 bg-slate-800 hover:bg-amber-400 text-slate-200 hover:text-slate-950 font-bold text-xs rounded-xl transition-all duration-200 flex items-center gap-1.5 border border-slate-700 hover:border-amber-400 cursor-pointer shadow-xs"
                  >
                    <span>{currentLang === 'mr' ? 'बुक करा' : 'Book'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note & Quick Call CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                {rc.notice}
              </p>
              <p className="text-xs text-amber-400/90 font-mono mt-0.5">
                {currentLang === 'mr'
                  ? '📞 बीड शहरात कुठेही १५ ते ३० मिनिटांत हजर'
                  : '📞 15-30 minute quick doorstep arrival in Beed'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${SHOP_INFO.phone1}`}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-amber-400/20"
            >
              <Phone className="w-4 h-4" />
              <span>{SHOP_INFO.phone1}</span>
            </a>
            <a
              href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(
                currentLang === 'mr'
                  ? 'नमस्कार, मला दर तक्त्यावरून कामासाठी इलेक्ट्रिशियन हवे आहेत.'
                  : 'Hello, I want to book an electrician based on your rate card.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
