import React, { useState } from 'react';
import { INDIAN_SERVICES_DATA, LocalizedService, SHOP_INFO } from '../data/mockData';
import { translations, Language } from '../translations';
import { Home, Droplet, BatteryCharging, RotateCw, Store, Settings, Check, ArrowRight, X, Phone, MessageSquare } from 'lucide-react';

interface ServicesSectionProps {
  currentLang: Language;
  onSelectServiceForEstimate: (serviceId: string) => void;
  onBookServiceDirect: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onSelectServiceForEstimate,
  onBookServiceDirect,
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'all' | string>('all');
  const [selectedService, setSelectedService] = useState<LocalizedService | null>(null);

  const filteredServices = activeTab === 'all'
    ? INDIAN_SERVICES_DATA
    : INDIAN_SERVICES_DATA.filter((s) => s.category === activeTab);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-5 h-5 text-amber-400" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-sky-400" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5 text-emerald-400" />;
      case 'RotateCw': return <RotateCw className="w-5 h-5 text-orange-400" />;
      case 'Store': return <Store className="w-5 h-5 text-indigo-400" />;
      case 'Settings': return <Settings className="w-5 h-5 text-yellow-400" />;
      default: return <Home className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2">
              {t.services.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
              {t.services.title}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl max-w-full overflow-x-auto mb-10">
          {[
            { id: 'all', label: t.services.tabs.all },
            { id: 'residential', label: t.services.tabs.houseWiring },
            { id: 'agriculture', label: t.services.tabs.agriculture },
            { id: 'inverter', label: t.services.tabs.inverter },
            { id: 'repairRewinding', label: t.services.tabs.repairRewinding },
            { id: 'commercial', label: t.services.tabs.commercial },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');
            const title = service.title[currentLang];
            const shortDesc = service.shortDesc[currentLang];
            const price = service.startingPrice[currentLang];
            const duration = service.estimatedDuration[currentLang];
            const features = service.keyFeatures[currentLang];
            const badge = service.popularBadge ? service.popularBadge[currentLang] : null;

            return (
              <div
                key={service.id}
                className="group rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-900 hover:border-slate-700 transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span className="text-amber-400 font-semibold">{formattedIndex}. {service.category.toUpperCase()}</span>
                    {badge && (
                      <span className="text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded font-sans font-bold">
                        {badge}
                      </span>
                    )}
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                    {getServiceIcon(service.iconName)}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {shortDesc}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-slate-300">
                    {features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block">{t.services.startingFrom}</span>
                    <span className="text-base font-bold font-mono text-white">
                      {price}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>{t.services.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Scope Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-amber-400 mb-1">
              {currentLang === 'mr' ? 'कामाचे स्वरूप व माहिती' : 'WORK SPECIFICATION & DETAILS'}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {selectedService.title[currentLang]}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.fullDesc[currentLang]}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-xs">
              <div>
                <span className="text-slate-500 block">{currentLang === 'mr' ? 'अंदाजे वेळ' : 'Duration'}</span>
                <span className="font-semibold text-white">{selectedService.estimatedDuration[currentLang]}</span>
              </div>
              <div>
                <span className="text-slate-500 block">{currentLang === 'mr' ? 'किमान मजुरी दर' : 'Base Rate'}</span>
                <span className="font-bold text-amber-400 font-mono text-sm">{selectedService.startingPrice[currentLang]}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                {currentLang === 'mr' ? 'कामामध्ये समाविष्ट असणाऱ्या गोष्टी' : 'Included in Work Scope'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {selectedService.keyFeatures[currentLang].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons inside modal */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`tel:${SHOP_INFO.phone1}`}
                className="w-full sm:w-auto px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{currentLang === 'mr' ? 'थेट फोन करा: 8080795343' : 'Call: 8080795343'}</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => {
                    const sid = selectedService.id;
                    setSelectedService(null);
                    onSelectServiceForEstimate(sid);
                  }}
                  className="px-3.5 py-2.5 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-lg"
                >
                  {currentLang === 'mr' ? 'खर्च अंदाज पहा' : 'Estimate Cost'}
                </button>
                <button
                  onClick={() => {
                    const stitle = selectedService.title[currentLang];
                    setSelectedService(null);
                    onBookServiceDirect(stitle);
                  }}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg"
                >
                  {t.services.bookService}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
