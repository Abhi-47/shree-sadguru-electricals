import React, { useState } from 'react';
import { SHOP_INFO } from '../data/mockData';
import { translations, Language } from '../translations';
import { Phone, Menu, X, MessageSquare, Globe } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenEstimate: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onOpenEstimate,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      {/* Top micro contact strip for quick Indian phone dialing */}
      <div className="bg-amber-400 text-slate-950 px-4 py-1.5 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="truncate">
              {currentLang === 'mr'
                ? '📍 बीड शहर व ग्रामीण परिसर | थेट संपर्क: '
                : '📍 Beed City & Rural District | Direct Mobile: '}
              <a href={`tel:${SHOP_INFO.phone1}`} className="underline font-bold hover:text-white">
                {SHOP_INFO.phone1}
              </a>
              {' / '}
              <a href={`tel:${SHOP_INFO.phone2}`} className="underline font-bold hover:text-white">
                {SHOP_INFO.phone2}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(t.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>WhatsApp</span>
            </a>
            <span aria-hidden="true">|</span>
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 font-bold underline cursor-pointer hover:text-white transition-colors"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.nav.langToggle}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors">
            <span className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono text-base font-black">
              ⚡
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold leading-tight text-lg sm:text-xl">
                {currentLang === 'mr' ? SHOP_INFO.nameMr : SHOP_INFO.nameEn}
              </span>
              <span className="text-[10px] font-normal text-amber-400/90 tracking-wide">
                {currentLang === 'mr' ? 'स्वतंत्र दुकान, बीड शहर' : 'Independent Shop, Beed City'}
              </span>
            </div>
          </a>

          {/* Zone 2: clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              {t.nav.services}
            </a>
            <a href="#rates" className="hover:text-amber-400 text-amber-300 transition-colors whitespace-nowrap shrink-0 font-semibold flex items-center gap-1">
              <span>⚡ {t.nav.rates}</span>
            </a>
            <a href="#projects" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              {t.nav.projects}
            </a>
            <a href="#estimator" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              {t.nav.estimator}
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              {t.nav.contact}
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(t.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${SHOP_INFO.phone1}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SHOP_INFO.phone1}</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="px-2 py-1 text-xs font-bold text-amber-400 border border-slate-700 rounded bg-slate-900"
            >
              {t.nav.langToggle}
            </button>
            <a
              href={`tel:${SHOP_INFO.phone1}`}
              className="p-2 text-amber-400 border border-slate-800 rounded-lg bg-slate-900"
              aria-label="Call Direct"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white border border-slate-800 rounded-lg bg-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400 transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#rates"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 text-amber-300 font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>⚡ {t.nav.rates}</span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400 transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400 transition-colors"
            >
              {t.nav.estimator}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${SHOP_INFO.phone1}`}
                className="py-2.5 text-center text-xs font-bold text-slate-950 bg-amber-400 rounded-lg"
              >
                📞 {SHOP_INFO.phone1}
              </a>
              <a
                href={`tel:${SHOP_INFO.phone2}`}
                className="py-2.5 text-center text-xs font-bold text-slate-950 bg-amber-300 rounded-lg"
              >
                📞 {SHOP_INFO.phone2}
              </a>
            </div>
            <a
              href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(t.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 rounded-lg"
            >
              💬 WhatsApp वर मेसेज करा
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
