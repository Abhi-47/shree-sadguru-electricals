import React, { useState } from 'react';
import { RESIDENTIAL_SERVICES_DATA, LocalizedService, SHOP_INFO } from '../data/mockData';
import { translations, Language } from '../translations';
import { Home, Wrench, BatteryCharging, Droplet, AlertTriangle, ShieldCheck, Check, ArrowRight, X, Phone, MessageSquare } from 'lucide-react';

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
    ? RESIDENTIAL_SERVICES_DATA
    : RESIDENTIAL_SERVICES_DATA.filter((s) => s.category === activeTab);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-5 h-5 text-amber-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-sky-400" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5 text-emerald-400" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-blue-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-400" />;
      default: return <Home className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <span>{t.services.kicker}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              {t.services.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl max-w-full overflow-x-auto mb-10 scrollbar-none">
          {[
            { id: 'all', label: t.services.tabs.all },
            { id: 'house_wiring', label: t.services.tabs.houseWiring },
            { id: 'home_repair', label: t.services.tabs.homeRepair },
            { id: 'inverter', label: t.services.tabs.inverter },
            { id: 'water_motor', label: t.services.tabs.waterMotor },
            { id: 'fault_finding', label: t.services.tabs.faultFinding },
            { id: 'earthing', label: t.services.tabs.earthing },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (Stylish, clean cards) */}
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
                className="group rounded-2xl border border-slate-800 bg-slate-900/80 hover:bg-slate-850/90 hover:border-amber-400/40 transition-all duration-300 p-6 flex flex-col justify-between shadow-lg hover:shadow-amber-500/5"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span className="text-amber-400 font-semibold">{formattedIndex}. {service.category.toUpperCase().replace('_', ' ')}</span>
                    {badge && (
                      <span className="text-[10px] bg-amber-400/15 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-sans font-bold">
                        {badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-sans">
                      {title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {shortDesc}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                    {features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
                        {t.services.startingFrom}
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-amber-400 font-sans tracking-tight">
                        {price}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      ⏱ {duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="flex-1 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl transition-colors border border-slate-700/60 cursor-pointer"
                    >
                      {t.services.viewDetails}
                    </button>
                    <button
                      onClick={() => onBookServiceDirect(title)}
                      className="flex-1 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-xs shadow-amber-400/20 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>{t.services.bookService}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    {selectedService.title[currentLang]}
                  </h3>
                  <span className="text-xs text-amber-400 font-mono font-semibold">
                    {selectedService.startingPrice[currentLang]}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedService.fullDesc[currentLang]}
              </p>

              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  {currentLang === 'mr' ? 'कामाचे प्रमुख पैलू व साहित्य:' : 'Key Features & Materials:'}
                </div>
                <ul className="space-y-2">
                  {selectedService.keyFeatures[currentLang].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <a
                  href={`tel:${SHOP_INFO.phone1}`}
                  className="flex-1 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>{SHOP_INFO.phone1}</span>
                </a>
                <button
                  onClick={() => {
                    onSelectServiceForEstimate(selectedService.id);
                    setSelectedService(null);
                  }}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-colors border border-slate-700 cursor-pointer"
                >
                  {currentLang === 'mr' ? 'अंदाजे खर्च पहा' : 'Estimate Cost'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
