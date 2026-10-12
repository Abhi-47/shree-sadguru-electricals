import React from 'react';
import { translations, Language } from '../translations';
import { SHOP_INFO } from '../data/mockData';
import { ShieldCheck, Award, Store, CheckCircle2, ThumbsUp, Wrench, HeartHandshake } from 'lucide-react';

export const CredentialsSection: React.FC<{ currentLang: Language }> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-20 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2">
              {currentLang === 'mr' ? 'विश्वास व गुणवत्ता' : 'TRUST & WORK QUALITY'}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
              {t.shopHighlights.title}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            {t.shopHighlights.desc}
          </p>
        </div>

        {/* 4 Pillars of Shop Credibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
              <Store className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-amber-400 mb-1">
              {currentLang === 'mr' ? 'स्थानिक दुकान' : 'LOCAL INDEPENDENT SHOP'}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.shopHighlights.item1Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.shopHighlights.item1Desc}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
              <Wrench className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-emerald-400 mb-1">
              {currentLang === 'mr' ? 'बोरवेल तज्ज्ञ' : 'FARM PUMP EXPERT'}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.shopHighlights.item2Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.shopHighlights.item2Desc}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-sky-400 mb-1">
              {currentLang === 'mr' ? '१००% ओरिजिनल' : 'GENUINE BRANDS'}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.shopHighlights.item3Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.shopHighlights.item3Desc}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-rose-400/10 border border-rose-400/20 flex items-center justify-center text-rose-400 mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-rose-400 mb-1">
              {currentLang === 'mr' ? '२४ तास मदत' : '24/7 SUPPORT'}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.shopHighlights.item4Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.shopHighlights.item4Desc}
            </p>
          </div>
        </div>

        {/* Brand Brands Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-bold text-white">
              {currentLang === 'mr'
                ? 'आम्ही वापरत असलेले व दुकानात उपलब्ध नामांकित ब्रँड्स'
                : 'Original ISI Brands Used & Available in Shop'}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Polycab · Finolex · Anchor Roma · L&T Electrical · Havells · Schneider · Luminous · Microtek · SKF Bearings
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-amber-400 shrink-0">
            <span>{SHOP_INFO.phone1}</span>
            <span aria-hidden="true">/</span>
            <span>{SHOP_INFO.phone2}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
