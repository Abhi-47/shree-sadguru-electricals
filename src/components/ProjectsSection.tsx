import React, { useState, useEffect, useCallback } from 'react';
import { RESIDENTIAL_PROJECTS_DATA, LocalizedProject, SHOP_INFO } from '../data/mockData';
import { translations, Language } from '../translations';
import { BeforeAfterSlider, ProjectGraphicRenderer } from './ElectricalGraphics';
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  X,
  Phone,
  MessageSquare,
  Maximize2,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Info
} from 'lucide-react';

interface ProjectsSectionProps {
  currentLang: Language;
  onSelectProjectForEstimate: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  currentLang,
  onSelectProjectForEstimate,
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'all' | string>('all');
  const [activeModalProject, setActiveModalProject] = useState<LocalizedProject | null>(null);

  // Lightbox State
  const [lightboxProjectIndex, setLightboxProjectIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filteredProjects = activeTab === 'all'
    ? RESIDENTIAL_PROJECTS_DATA
    : RESIDENTIAL_PROJECTS_DATA.filter((p) => p.category === activeTab);

  const activeLightboxProject = lightboxProjectIndex !== null
    ? filteredProjects[lightboxProjectIndex]
    : null;

  const openLightbox = (project: LocalizedProject) => {
    const idx = filteredProjects.findIndex((p) => p.id === project.id);
    setLightboxProjectIndex(idx !== -1 ? idx : 0);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setLightboxProjectIndex(null);
    setZoomLevel(1);
  };

  const nextLightboxProject = useCallback(() => {
    if (lightboxProjectIndex === null) return;
    setLightboxProjectIndex((prev) => ((prev! + 1) % filteredProjects.length));
    setZoomLevel(1);
  }, [lightboxProjectIndex, filteredProjects.length]);

  const prevLightboxProject = useCallback(() => {
    if (lightboxProjectIndex === null) return;
    setLightboxProjectIndex((prev) => ((prev! - 1 + filteredProjects.length) % filteredProjects.length));
    setZoomLevel(1);
  }, [lightboxProjectIndex, filteredProjects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxProjectIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxProject();
      if (e.key === 'ArrowLeft') prevLightboxProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxProjectIndex, nextLightboxProject, prevLightboxProject]);

  return (
    <section id="projects" className="py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2">
              {t.projects.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Featured Before/After Slider Spotlight */}
        <div className="mb-16 rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <BeforeAfterSlider lang={currentLang} />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <div className="text-xs font-mono text-amber-400 uppercase">
                {currentLang === 'mr' ? 'घरपोच काम · सुरक्षित मॉड्युलर बदल' : 'DOORSTEP CASE · SAFE RETROFIT'}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.projects.sliderTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentLang === 'mr'
                  ? 'घरातील जुन्या लाकडी फ्युज बोर्डमुळे वारंवार स्पार्किंग होत होते व विजेचा धक्का बसण्याची भीती होती. आम्ही जुना धोकादायक बोर्ड काढून हॅवेल्सचा ८-वे एमसीबी डीबी बॉक्स आणि अँकर रोमा मॉड्युलर स्विचेस बसवले.'
                  : 'Old wooden board had frequent sparks and risk of severe shock. We replaced it with an 8-way Havells MCB box and Anchor Roma modular switches with safe protection.'}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">{currentLang === 'mr' ? 'ठिकाण:' : 'Location:'}</span>
                  <span className="font-semibold text-white">शाहू नगर, बीड (Shahu Nagar, Beed)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">{currentLang === 'mr' ? 'मजुरी खर्च:' : 'Labor Cost:'}</span>
                  <span className="font-mono text-emerald-400">वाजवी स्थानिक दर (Affordable)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">{currentLang === 'mr' ? 'अर्थिंग तपासणी:' : 'Earth Resistance:'}</span>
                  <span className="font-mono text-amber-400">&lt; 1 Ohm Safe</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${SHOP_INFO.phone1}`}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{currentLang === 'mr' ? 'असे काम करायचे असल्यास फोन करा' : 'Call for Similar Work'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => openLightbox(RESIDENTIAL_PROJECTS_DATA[0])}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg flex items-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentLang === 'mr' ? 'मोठ्या आकारात पहा' : 'View in Lightbox'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => {
            const title = proj.title[currentLang];
            const loc = proj.location[currentLang];
            const date = proj.completionDate[currentLang];
            const summary = proj.summary[currentLang];

            return (
              <div
                key={proj.id}
                className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Clickable Image Container that Triggers Lightbox */}
                  <div
                    onClick={() => openLightbox(proj)}
                    className="relative aspect-[4/3] bg-slate-950 overflow-hidden border-b border-slate-800 cursor-pointer group/img"
                    title={currentLang === 'mr' ? 'मोठ्या आकारात फोटो पाहण्यासाठी क्लिक करा' : 'Click to view in high-resolution lightbox'}
                  >
                    <ProjectGraphicRenderer
                      type={proj.svgType}
                      className="w-full h-full object-cover group-hover/img:scale-[1.03] transition-transform duration-300"
                    />

                    <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 backdrop-blur-xs">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{currentLang === 'mr' ? 'घरपोच काम पूर्ण' : 'DOORSTEP WORK'}</span>
                    </div>

                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-xs">
                      <div className="bg-slate-900/90 border border-amber-400/50 text-amber-400 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-2xl scale-95 group-hover/img:scale-100 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                        <span>{currentLang === 'mr' ? 'मोठ्या आकारात फोटो उघडा' : 'Enlarge High-Res Photo'}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 bg-slate-950/80 border border-slate-700 text-slate-300 p-1.5 rounded-lg group-hover/img:text-amber-400 group-hover/img:border-amber-400 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                      <span className="flex items-center gap-1 text-amber-400">
                        <MapPin className="w-3 h-3" />
                        <span>{loc}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{date}</span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {summary}
                    </p>

                    <div className="space-y-1.5 p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
                      {proj.specifications.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="flex justify-between items-center text-slate-400">
                          <span>{s.label[currentLang]}:</span>
                          <span className="font-mono text-slate-200 font-semibold">{s.value[currentLang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => openLightbox(proj)}
                    className="flex-1 py-2 text-xs font-semibold text-amber-400 hover:text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{currentLang === 'mr' ? 'फोटो पहा' : 'View Photo'}</span>
                  </button>
                  <button
                    onClick={() => setActiveModalProject(proj)}
                    className="flex-1 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{t.projects.inspectDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN HIGH-RESOLUTION LIGHTBOX MODAL OVERLAY */}
      {activeLightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between animate-in fade-in select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Lightbox Top Control Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800/80 bg-slate-950/80 z-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                ⚡
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md">
                  {activeLightboxProject.title[currentLang]}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <MapPin className="w-3 h-3" />
                  <span>{activeLightboxProject.location[currentLang]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-400">
                    {currentLang === 'mr'
                      ? `फोटो ${lightboxProjectIndex! + 1} / ${filteredProjects.length}`
                      : `Photo ${lightboxProjectIndex! + 1} of ${filteredProjects.length}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Controls (Zoom & Close) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.2))}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-300 px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(2.0, z + 0.2))}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {zoomLevel !== 1 && (
                  <button
                    type="button"
                    onClick={() => setZoomLevel(1)}
                    className="p-1.5 text-amber-400 hover:bg-slate-800 rounded transition-colors"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  const proj = activeLightboxProject;
                  closeLightbox();
                  setActiveModalProject(proj);
                }}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              >
                <Info className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentLang === 'mr' ? 'तपशील' : 'Details'}</span>
              </button>

              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image Stage */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            <button
              type="button"
              onClick={prevLightboxProject}
              className="absolute left-2 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 shadow-2xl transition-all hover:scale-105"
              title="Previous Photo (Left Arrow)"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-5xl w-full aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <ProjectGraphicRenderer
                type={activeLightboxProject.svgType}
                className="w-full h-full object-contain"
              />

              <div className="absolute top-4 left-4 bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400 flex items-center gap-2 backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{currentLang === 'mr' ? 'श्री सद्गुरु इलेक्ट्रिकल्स - घरपोच सेवा' : 'Shree Sadguru - Home Service'}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={nextLightboxProject}
              className="absolute right-2 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 shadow-2xl transition-all hover:scale-105"
              title="Next Photo (Right Arrow)"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption & Instant Inquire Strip */}
          <div className="px-4 sm:px-6 py-4 border-t border-slate-800/80 bg-slate-950/90 flex flex-col md:flex-row items-center justify-between gap-4 z-10">
            <div className="flex flex-wrap items-center gap-3 text-xs max-w-2xl">
              <span className="font-semibold text-white">
                {activeLightboxProject.summary[currentLang]}
              </span>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                {activeLightboxProject.specifications.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-slate-300"
                  >
                    {s.label[currentLang]}: <strong className="text-amber-400">{s.value[currentLang]}</strong>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
              <a
                href={`tel:${SHOP_INFO.phone1}`}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{currentLang === 'mr' ? `कॉल: ${SHOP_INFO.phone1}` : `Call: ${SHOP_INFO.phone1}`}</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(
                  `नमस्कार, मला तुमच्या "${activeLightboxProject.title.mr}" कामाबद्दल चौकशी करायची आहे.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{activeModalProject.location[currentLang]}</span>
              <span aria-hidden="true">·</span>
              <span>{activeModalProject.completionDate[currentLang]}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {activeModalProject.title[currentLang]}
            </h3>

            <div
              onClick={() => {
                const proj = activeModalProject;
                setActiveModalProject(null);
                openLightbox(proj);
              }}
              className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-slate-800 mb-6 bg-slate-950 cursor-pointer relative group/inner"
              title={currentLang === 'mr' ? 'मोठ्या आकारात पाहण्यासाठी क्लिक करा' : 'Click to view in lightbox'}
            >
              <ProjectGraphicRenderer type={activeModalProject.svgType} className="w-full h-full object-cover group-hover/inner:scale-[1.02] transition-transform" />
              <div className="absolute top-3 right-3 bg-slate-950/80 border border-slate-700 text-amber-400 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 opacity-90 group-hover/inner:opacity-100">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{currentLang === 'mr' ? 'लाईटबॉक्समध्ये पहा' : 'Enlarge'}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-2">
                  {currentLang === 'mr' ? 'आधीची अडचण' : 'The Problem'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.challenge[currentLang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  {currentLang === 'mr' ? 'श्री सद्गुरु इलेक्ट्रिकल्सचे काम' : 'Our Work'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.solution[currentLang]}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                {currentLang === 'mr' ? 'कामाचे तपशील' : 'Details'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {activeModalProject.specifications.map((s, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">{s.label[currentLang]}</span>
                    <span className="font-mono font-semibold text-white">{s.value[currentLang]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`tel:${SHOP_INFO.phone1}`}
                className="w-full sm:w-auto px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{currentLang === 'mr' ? `कॉल करा: ${SHOP_INFO.phone1}` : `Call: ${SHOP_INFO.phone1}`}</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(
                  `नमस्कार, मला "${activeModalProject.title.mr}" प्रमाणे घरपोच कामाची चौकशी करायची आहे.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{currentLang === 'mr' ? 'व्हॉट्सअॅपवर विचारा' : 'Inquire on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
