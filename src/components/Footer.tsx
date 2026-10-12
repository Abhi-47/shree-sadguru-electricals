import React from 'react';
import { SHOP_INFO } from '../data/mockData';
import { translations, Language } from '../translations';
import { Phone, MessageSquare, MapPin, Store } from 'lucide-react';

export const Footer: React.FC<{ currentLang: Language }> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Shop Name & Identity */}
          <div className="md:col-span-1 space-y-3">
            <a href="#" className="flex items-center gap-2 text-base font-bold text-white hover:text-amber-400 transition-colors">
              <span className="w-6 h-6 rounded bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono text-xs font-black">
                ⚡
              </span>
              <span>{currentLang === 'mr' ? SHOP_INFO.nameMr : SHOP_INFO.nameEn}</span>
            </a>
            <p className="text-slate-400 leading-relaxed text-xs">
              {t.footer.about}
            </p>
            <div className="pt-1 text-[11px] font-semibold text-amber-400">
              {currentLang === 'mr' ? 'स्वतंत्र दुकान · बीड शहर (महाराष्ट्र)' : 'Independent Shop · Beed City (Maharashtra)'}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">{t.nav.projects}</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">{t.nav.estimator}</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Top Services */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.topServices}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? 'घरगुती कन्सिल्ड वायरिंग' : 'House Concealed Wiring'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? 'शेती बोरवेल स्टार्टर व ऑटो-स्विच' : 'Borewell Starter & Auto-Switch'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? 'इन्व्हर्टर व टॉल ट्युब्युलर बॅटरी' : 'Inverter & Battery Backup'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? 'सबमर्सिबल व फॅन कॉपर रिवाइंडिंग' : 'Motor & Fan Copper Rewinding'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {currentLang === 'mr' ? '३-फेज गिरणी व कार्यशाळा कनेक्शन' : '3-Phase Flour Mill Power'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Mobile Contacts */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {t.footer.directContact}
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
                  {currentLang === 'mr' ? 'पत्ता:' : 'Address:'}
                </span>
                <span className="text-slate-300 text-[11px]">{SHOP_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Safety Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} {currentLang === 'mr' ? SHOP_INFO.nameMr : SHOP_INFO.nameEn}, बीड (महाराष्ट्र).
          </div>
          <div className="text-slate-400 italic">
            {t.footer.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
};
