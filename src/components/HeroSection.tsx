import React from 'react';
import { SHOP_INFO } from '../data/mockData';
import { translations, Language } from '../translations';
import { Phone, ArrowRight, CheckCircle2, Home, Wrench, Shield, Zap, Sparkles, Tag, Clock } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onScrollToEstimator: () => void;
  onScrollToContact: () => void;
  onScrollToRates?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onScrollToEstimator,
  onScrollToContact,
  onScrollToRates,
}) => {
  const t = translations[currentLang];

  const quickRateList = [
    {
      titleMr: 'सीलिंग फॅन फिटिंग',
      titleEn: 'Ceiling Fan Fitting',
      rateMr: '₹ १०० / फॅन',
      rateEn: '₹ 100 / fan',
      subMr: 'हँगिंग व रेग्युलेटर जोडणी',
      subEn: 'Mounting & regulator',
      badge: 'सर्वात लोकप्रिय',
    },
    {
      titleMr: 'घरगुती पॉईंट वायरिंग',
      titleEn: 'Home Point Wiring',
      rateMr: '₹ १२० / पॉईंट',
      rateEn: '₹ 120 / point',
      subMr: 'कन्सिल्ड किंवा ओपन वायरिंग',
      subEn: 'Concealed or surface',
      badge: 'वाजवी दर',
    },
    {
      titleMr: 'बाथरूम गिझर फिटिंग',
      titleEn: 'Geyser Installation',
      rateMr: '₹ २०० / गिझर',
      rateEn: '₹ 200 / geyser',
      subMr: '१६A पॉवर सॉकेटसह',
      subEn: 'With 16A power socket',
    },
    {
      titleMr: 'इन्व्हर्टर व बॅटरी फिटिंग',
      titleEn: 'Home Inverter Setup',
      rateMr: '₹ ३०० - ₹ ४००',
      rateEn: '₹ 300 - ₹ 400',
      subMr: 'बायपास चेंजओव्हरसह',
      subEn: 'With bypass changeover',
    },
    {
      titleMr: 'घरपोच व्हिजिट फी',
      titleEn: 'Doorstep Visit Fee',
      rateMr: 'फक्त ₹ १५०',
      rateEn: 'Just ₹ 150',
      subMr: 'घरपोच तपासणी फी',
      subEn: 'Doorstep inspection',
      badge: 'बीड शहर',
    },
  ];

  const handleRatesClick = () => {
    if (onScrollToRates) {
      onScrollToRates();
    } else {
      const el = document.getElementById('rates');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clear & Stylish Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* 100% Home Service Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-xs font-semibold text-amber-300">
              <Home className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.18] font-sans">
              {t.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Clear "100% Home Service - No Commercial" Guarantee Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-white mb-1 flex items-center gap-2">
                    <span>
                      {currentLang === 'mr'
                        ? 'फक्त घरगुती सेवा (Home Service Only • No Commercial)'
                        : 'Exclusively Home Service • No Commercial Work'}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-bold">
                      १००% घरपोच
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {currentLang === 'mr'
                      ? 'आम्ही कोणतीही कंपनी नाही व मोठी कमर्शियल कंत्राटे घेत नाही. फक्त बीड शहरातील कुटुंबांसाठी थेट घरी येऊन पंखा, गिझर, इन्व्हर्टर, वायरिंग व शॉर्ट सर्किटचे काम अगदी वाजवी आणि कमी दरात करतो!'
                      : 'We are your local independent electrician shop in Beed. We specialize strictly in residential home visits: fans, geysers, inverters, wiring and sudden tripping at reduced, honest prices.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${SHOP_INFO.phone1}`}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all shadow-lg shadow-amber-400/20 flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{t.hero.callButton}: {SHOP_INFO.phone1}</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(t.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2"
              >
                <span>WhatsApp</span>
              </a>

              <button
                onClick={handleRatesClick}
                className="px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-amber-400 bg-slate-900 hover:bg-slate-850 border border-slate-700/80 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Tag className="w-4 h-4 text-amber-400" />
                <span>{t.hero.ratesButton}</span>
              </button>
            </div>

            {/* Credibility mini-badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80 text-center">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-base sm:text-lg font-black text-amber-400 font-sans">
                  {t.hero.stats.ratePromise}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {t.hero.stats.ratePromiseLabel}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-base sm:text-lg font-black text-emerald-400 font-sans">
                  {t.hero.stats.homeVisit}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {t.hero.stats.homeVisitLabel}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-base sm:text-lg font-black text-white font-sans">
                  {t.hero.stats.experience}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {t.hero.stats.experienceLabel}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-base sm:text-lg font-black text-white font-sans">
                  {t.hero.stats.satisfiedClients}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {t.hero.stats.satisfiedLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylish Quick Rate Sheet Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div>
                  <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{currentLang === 'mr' ? 'थेट घरपोच दर' : 'Direct Doorstep Rates'}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                    {currentLang === 'mr' ? 'किफायतशीर दर हायलाइट्स' : 'Affordable Rate Highlights'}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  {currentLang === 'mr' ? 'कमी केलेले दर' : 'Lowered Rates'}
                </span>
              </div>

              {/* Rate Items List */}
              <div className="space-y-2.5">
                {quickRateList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/70 hover:bg-slate-850/80 border border-slate-800/80 hover:border-amber-400/40 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                        <span>{currentLang === 'mr' ? item.titleMr : item.titleEn}</span>
                        {item.badge && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-emerald-500/15 text-emerald-300 font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {currentLang === 'mr' ? item.subMr : item.subEn}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-sm sm:text-base font-extrabold text-amber-400 font-sans">
                        {currentLang === 'mr' ? item.rateMr : item.rateEn}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer with Quick Call action */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  <span className="text-emerald-400 font-semibold">✓ {SHOP_INFO.shopHours}</span>
                </div>
                <button
                  onClick={onScrollToEstimator}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-amber-400 text-slate-200 hover:text-slate-950 text-xs font-bold rounded-lg transition-all flex items-center gap-1 border border-slate-700 hover:border-amber-400 cursor-pointer"
                >
                  <span>{t.hero.estimatorButton}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
