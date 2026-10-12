import React from 'react';
import { Language } from '../translations';
import { SHOP_INFO } from '../data/mockData';
import { ShieldCheck, Store, Home, CheckCircle2, HeartHandshake, Zap, Sparkles } from 'lucide-react';

export const CredentialsSection: React.FC<{ currentLang: Language }> = ({ currentLang }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'mr' ? 'विश्वास व बांधिलकी' : 'TRUST & HOME RELIABILITY'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              {currentLang === 'mr'
                ? 'श्री सद्गुरु इलेक्ट्रिकल्स का निवडावे?'
                : 'Why Choose Shree Sadguru Electricals?'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
            {currentLang === 'mr'
              ? 'बीड शहरातील घरांसाठी प्रामाणिक, परवडणारी आणि थेट घरपोच सेवा देणारा आपला स्थानिक इलेक्ट्रिशियन.'
              : 'Honest, affordable doorstep electrical service dedicated purely to residential homes in Beed city.'}
          </p>
        </div>

        {/* 4 Pillars of Shop Credibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-400/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
              <Store className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-amber-400 mb-1 font-semibold">
              {currentLang === 'mr' ? 'स्थानिक दुकान' : 'LOCAL INDEPENDENT'}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-sans">
              {currentLang === 'mr' ? 'स्वतंत्र स्थानिक कारागीर' : 'Independent Local Work'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {currentLang === 'mr'
                ? 'कोणतीही मध्यस्थ एजन्सी नाही. आम्ही स्वतः काम करतो, त्यामुळे ग्राहकांचा अनावश्यक खर्च वाचतो.'
                : 'No corporate middleman fees. We work directly with you, saving your hard-earned money.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-400/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
              <Home className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-emerald-400 mb-1 font-semibold">
              {currentLang === 'mr' ? 'फक्त घरगुती कामे' : 'HOME SERVICE ONLY'}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-sans">
              {currentLang === 'mr' ? '१००% घरपोच सेवा' : '100% Doorstep Service'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {currentLang === 'mr'
                ? 'आम्ही मोठी कमर्शियल कंत्राटे घेत नाही, त्यामुळे बीडमधील घरांसाठी नेहमी वेळेवर उपलब्ध असतो.'
                : 'We avoid commercial complexes to ensure dedicated, fast response for family homes in Beed.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-400/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-sky-400 mb-1 font-semibold">
              {currentLang === 'mr' ? 'कमी व वाजवी दर' : 'AFFORDABLE RATES'}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-sans">
              {currentLang === 'mr' ? 'किफायतशीर मजुरी दर' : 'Lowered Honest Pricing'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {currentLang === 'mr'
                ? 'फॅन फिटिंग ₹१००, गिझर ₹२०० आणि व्हिजिट फी फक्त ₹१५०. कामापूर्वी पारदर्शक दर.'
                : 'Ceiling fans from ₹100, geysers ₹200, visit fee just ₹150. Completely upfront and transparent.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-rose-400/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-rose-400/10 border border-rose-400/20 flex items-center justify-center text-rose-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-rose-400 mb-1 font-semibold">
              {currentLang === 'mr' ? 'सुरक्षितता प्रथम' : 'SAFETY FIRST'}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-sans">
              {currentLang === 'mr' ? '१००% शॉकप्रूफ काम' : '100% Shockproof Safety'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {currentLang === 'mr'
                ? 'पॉलिकॅब, हॅवेल्स व अँकरचे ओरिजिनल साहित्य वापरून कुटुंबाच्या सुरक्षिततेची संपूर्ण हमी.'
                : 'Using genuine Polycab, Havells & Anchor Roma components for permanent family safety.'}
            </p>
          </div>
        </div>

        {/* Brand Brands Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-bold text-white">
              {currentLang === 'mr'
                ? 'आम्ही वापरत असलेले नामांकित आयएसआय (ISI) ब्रँड्स'
                : 'Original ISI Brands We Work With'}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Polycab · Finolex · Anchor Roma · Legrand · Havells · Schneider · Luminous · Microtek · Crompton
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-amber-400 shrink-0 font-mono">
            <span>📞 {SHOP_INFO.phone1}</span>
            <span aria-hidden="true">/</span>
            <span>📞 {SHOP_INFO.phone2}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
