import React, { useState } from 'react';
import { SHOP_INFO } from '../data/mockData';
import { translations, Language } from '../translations';
import { Phone, MessageSquare, ArrowRight, CheckCircle2, Sliders, Shield, Store, MapPin } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onScrollToEstimator: () => void;
  onScrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onScrollToEstimator,
  onScrollToContact,
}) => {
  const t = translations[currentLang];

  // Interactive Indian Electrical Load Simulator
  const [circuits, setCircuits] = useState([
    {
      id: 1,
      nameMr: 'मुख्य एमसीबी (Main 32A MCB)',
      nameEn: 'Main 32A MCB',
      spec: '240V Havells SPN',
      load: 8.5,
      on: true,
    },
    {
      id: 2,
      nameMr: 'शेती बोरवेल स्टार्टर (7.5 HP Starter)',
      nameEn: 'Farm Borewell 7.5 HP Starter',
      spec: '415V 3-Phase L&T MK1',
      load: 14.2,
      on: true,
    },
    {
      id: 3,
      nameMr: 'इन्व्हर्टर बॅकअप (Luminous 900VA)',
      nameEn: 'Inverter Backup (900VA)',
      spec: '150Ah Tall Tubular',
      load: 3.8,
      on: true,
    },
    {
      id: 4,
      nameMr: 'किचन व वॉटर हीटर (Geyser 16A)',
      nameEn: 'Kitchen & Water Geyser (16A)',
      spec: 'Dedicated 4 sq.mm Circuit',
      load: 9.0,
      on: false,
    },
  ]);

  const toggleCircuit = (id: number) => {
    setCircuits((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const next = !c.on;
          return {
            ...c,
            on: next,
            load: next ? (c.id === 1 ? 8.5 : c.id === 2 ? 14.2 : c.id === 3 ? 3.8 : 9.0) : 0,
          };
        }
        return c;
      })
    );
  };

  const totalLoad = circuits.reduce((acc, c) => acc + (c.on ? c.load : 0), 0);
  const maxLoad = 40;
  const loadPercentage = Math.round((totalLoad / maxLoad) * 100);

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-22 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900/70 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Trust notice, and Contact Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Independent Shop Badge */}
            <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-lg bg-amber-400/10 border border-amber-400/30 text-xs font-semibold text-amber-400 max-w-fit">
              <Store className="w-3.5 h-3.5" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] text-balance">
              {t.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Crucial Note about independent local shop */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-400 block font-semibold mb-0.5">
                  {currentLang === 'mr' ? 'स्थानिक स्वतंत्र दुकान (बीड शहर)' : 'Local Independent Shop (Beed City)'}:
                </strong>
                <span>
                  {currentLang === 'mr'
                    ? 'आम्ही कोणतीही कंपनी किंवा ऑनलाइन एजन्सी नसून बीडमधील स्वतःचे स्वतंत्र दुकान चालवतो. थेट कारागिराशी बोला, प्रामाणिक सल्ला व वाजवी दरात काम मिळवा.'
                    : 'We are an independent registered electrical shop in Beed (not an online middleman agency). Speak directly with your local technician for honest rates and reliable work.'}
                </span>
              </div>
            </div>

            {/* Direct Calling & WhatsApp Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href={`tel:${SHOP_INFO.phone1}`}
                className="px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-all shadow-lg shadow-amber-500/10 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t.hero.callButton}</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(t.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/40 rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.whatsappButton}</span>
              </a>

              <button
                onClick={onScrollToEstimator}
                className="px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Sliders className="w-4 h-4 text-amber-400" />
                <span>{t.hero.estimatorButton}</span>
              </button>
            </div>

            {/* Second Number Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800">
              <span>{currentLang === 'mr' ? 'दुसरा मोबाईल नंबर:' : 'Alternate Number:'}</span>
              <a href={`tel:${SHOP_INFO.phone2}`} className="text-amber-400 font-bold hover:underline font-mono">
                {SHOP_INFO.phone2}
              </a>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">
                {currentLang === 'mr' ? 'सकाळी ७:०० ते रात्री ९:०० (सर्व दिवस)' : '7:00 AM to 9:00 PM (All Days)'}
              </span>
            </div>
          </div>

          {/* Right Column: Live Indian Electrical Testing Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl p-6 relative overflow-hidden backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="text-[11px] font-mono text-amber-400">
                    {currentLang === 'mr' ? 'लाईव्ह इलेक्ट्रिकल पॅनेल टेस्टिंग' : 'LIVE LOAD TESTING BENCH'}
                  </div>
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    <span>{currentLang === 'mr' ? 'घरगुती व शेती वीज भार' : 'Domestic & Farm Load'}</span>
                    <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] font-mono text-slate-400">CURRENT DRAW</div>
                  <div className="text-lg font-mono font-bold text-amber-400 tabular-nums">
                    {totalLoad.toFixed(1)} A
                  </div>
                </div>
              </div>

              {/* Load Bar */}
              <div className="mt-4 mb-4">
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
                  <span>{currentLang === 'mr' ? 'वीज भार (Load Usage)' : 'Capacity Utilized'}</span>
                  <span className="tabular-nums">{totalLoad.toFixed(1)}A / 40A Rating</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                  <div
                    className={`h-full transition-all duration-300 ${
                      loadPercentage > 75 ? 'bg-rose-500' : loadPercentage > 45 ? 'bg-amber-400' : 'bg-emerald-400'
                    }`}
                    style={{ width: `${Math.min(100, loadPercentage)}%` }}
                  />
                </div>
              </div>

              {/* Circuits */}
              <div className="space-y-2.5">
                <div className="text-xs font-medium text-slate-400 flex items-center justify-between">
                  <span>{currentLang === 'mr' ? 'लाईव्ह स्विचेस चालू/बंद करून पहा' : 'Click switches to test lines'}</span>
                  <span className="text-[11px] text-amber-400">Havells / Polycab / L&T</span>
                </div>

                {circuits.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => toggleCircuit(c.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${
                      c.on
                        ? 'bg-slate-950/80 border-slate-700 hover:border-slate-600'
                        : 'bg-slate-950/30 border-slate-900 opacity-60 hover:opacity-80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          c.on ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]' : 'bg-slate-700'
                        }`}
                      />
                      <div>
                        <div className="text-xs font-semibold text-white">
                          {currentLang === 'mr' ? c.nameMr : c.nameEn}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">{c.spec}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-semibold tabular-nums text-slate-300">
                        {c.on ? `${c.load.toFixed(1)} A` : '0.0 A'}
                      </span>
                      <button
                        type="button"
                        className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded ${
                          c.on ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {c.on ? 'ON' : 'OFF'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{currentLang === 'mr' ? 'रासायनिक अर्थिंग सुरक्षित' : 'Chemical Earth Tested'}</span>
                </span>
                <span className="font-mono text-slate-500">ISI IS:732 Code Safe</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Credibility Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{t.hero.stats.experience}</span>
            <span className="text-xs text-slate-400 mt-1">{t.hero.stats.experienceLabel}</span>
            <span className="text-[11px] text-slate-500">{currentLang === 'mr' ? 'बीड शहरात निरंतर काम' : 'Serving Beed since 2014'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">{t.hero.stats.satisfiedClients}</span>
            <span className="text-xs text-slate-400 mt-1">{t.hero.stats.satisfiedLabel}</span>
            <span className="text-[11px] text-slate-500">{currentLang === 'mr' ? 'घरे, शेती व व्यावसायिक दुकाने' : 'Homes, farms & retail shops'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">{t.hero.stats.sameDay}</span>
            <span className="text-xs text-slate-400 mt-1">{t.hero.stats.sameDayLabel}</span>
            <span className="text-[11px] text-slate-500">{currentLang === 'mr' ? 'शॉर्ट सर्किटवर तातडीने धाव' : 'Emergency repair response'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">{t.hero.stats.warranty}</span>
            <span className="text-xs text-slate-400 mt-1">{t.hero.stats.warrantyLabel}</span>
            <span className="text-[11px] text-slate-500">{currentLang === 'mr' ? 'ओरिजिनल पॉलिकॅब/फिनोलेक्स' : '100% Genuine ISI materials'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
