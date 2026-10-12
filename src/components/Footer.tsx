import React from 'react';
import { SHOP_INFO } from '../data/mockData';
import { translations, Language } from '../translations';
import { Phone, MessageSquare, MapPin, Store, Shield } from 'lucide-react';

export const Footer: React.FC<{ currentLang: Language }> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Shop Name & Identity */}
          <div className="md:col-span-1 space-y-3">
            <a href="#" className="flex items-center gap-2 text-base font-bold text-white hover:text-amber-400 transition-colors">
              <span className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono text-xs font-black">
                ⚡
              </span>
              <span className="font-sans font-bold">{currentLang === 'mr' ? SHOP_INFO.nameMr : SHOP_INFO.nameEn}</span>
            </a>
            <p className="text-slate-400 leading-relaxed text-xs">
              {t.footer.desc}
            </p>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-medium text-amber-400">
              {t.footer.homeNotice}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {currentLang === 'mr' ? 'महत्त्वाच्या लिंक्स' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#rates" className="hover:text-amber-400 text-amber-400 font-semibold transition-colors">⚡ {t.nav.rates}</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">{t.nav.projects}</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">{t.nav.estimator}</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Top Home Services */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {currentLang === 'mr' ? 'घरगुती सेवा' : 'HOME SERVICES'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? 'सीलिंग फॅन फिटिंग (₹१०० पासून)' : 'Ceiling Fan Fitting (From ₹100)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? 'घरगुती कन्सिल्ड पॉईंट वायरिंग (₹१२०/पॉईंट)' : 'Concealed Point Wiring (₹120/pt)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? 'बाथरूम गिझर फिटिंग (₹२००)' : 'Bathroom Geyser Fitting (₹200)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? 'इन्व्हर्टर व बॅटरी कनेक्शन (₹३००)' : 'Inverter & Battery Setup (₹300)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? 'पाण्याची मोटर व ऑटो फ्लोट स्विच' : 'Water Motor & Auto Float'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Mobile Contacts */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.phoneTitle}
            </h4>
            <div className="space-y-2">
              <div>
                <span className="text-[11px] text-slate-500 block">
                  {currentLang === 'mr' ? 'मोबाईल नंबर १:' : 'Mobile Number 1:'}
                </span>
                <a href={`tel:${SHOP_INFO.phone1}`} className="text-white hover:text-amber-400 font-mono font-bold text-sm">
                  {SHOP_INFO.phone1}
                </a>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">
                  {currentLang === 'mr' ? 'मोबाईल नंबर २:' : 'Mobile Number 2:'}
                </span>
                <a href={`tel:${SHOP_INFO.phone2}`} className="text-white hover:text-amber-400 font-mono font-bold text-sm">
                  {SHOP_INFO.phone2}
                </a>
              </div>
              <div className="pt-1">
                <span className="text-[11px] text-slate-500 block">
                  {t.footer.addressTitle}
                </span>
                <span className="text-slate-300 text-[11px]">{SHOP_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Safety Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            {t.footer.copyright}
          </div>
          <div className="text-amber-400 font-medium">
            {currentLang === 'mr'
              ? 'बीड शहरातील नागरिकांसाठी घरपोच सेवा • वेळेवर हजेरी व वाजवी दर'
              : 'Doorstep Service for Beed City • Punctual & Affordable'}
          </div>
        </div>
      </div>
    </footer>
  );
};
