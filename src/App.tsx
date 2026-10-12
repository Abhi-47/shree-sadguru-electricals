/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { EmergencyBanner } from './components/EmergencyBanner';
import { HeroSection } from './components/HeroSection';
import { RateCardSection } from './components/RateCardSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CostEstimator } from './components/CostEstimator';
import { CredentialsSection } from './components/CredentialsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language } from './translations';
import { SHOP_INFO } from './data/mockData';

export default function App() {
  // Primary language default is Marathi ('mr') as requested by user
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('sadguru_lang');
      return saved === 'en' ? 'en' : 'mr';
    } catch {
      return 'mr';
    }
  });

  const [targetEstimatorService, setTargetEstimatorService] = useState('house-wiring');
  const [targetContactService, setTargetContactService] = useState('');
  const [appliedEstimateSummary, setAppliedEstimateSummary] = useState('');

  const toggleLanguage = () => {
    const nextLang: Language = currentLang === 'mr' ? 'en' : 'mr';
    setCurrentLang(nextLang);
    try {
      localStorage.setItem('sadguru_lang', nextLang);
    } catch {
      // ignore
    }
  };

  const scrollToRates = () => {
    const el = document.getElementById('rates');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectServiceForEstimate = (serviceId: string) => {
    setTargetEstimatorService(serviceId);
    scrollToEstimator();
  };

  const handleBookServiceDirect = (serviceTitle: string) => {
    setTargetContactService(serviceTitle);
    scrollToContact();
  };

  const handleApplyEstimateToContact = (summary: string) => {
    setAppliedEstimateSummary(summary);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navigation with Marathi / English Switcher & Phone Quick Bar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenEstimate={scrollToEstimator}
        onOpenContact={scrollToContact}
      />

      {/* Emergency Alert Banner */}
      <EmergencyBanner currentLang={currentLang} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onScrollToEstimator={scrollToEstimator}
          onScrollToContact={scrollToContact}
          onScrollToRates={scrollToRates}
        />

        {/* Transparent & Lowered Rate Card Section */}
        <RateCardSection
          currentLang={currentLang}
          onBookRateItem={handleBookServiceDirect}
        />

        {/* 100% Home Services & Capabilities */}
        <ServicesSection
          currentLang={currentLang}
          onSelectServiceForEstimate={handleSelectServiceForEstimate}
          onBookServiceDirect={handleBookServiceDirect}
        />

        {/* Project Photos & Before/After Slider with Lightbox */}
        <ProjectsSection
          currentLang={currentLang}
          onSelectProjectForEstimate={scrollToEstimator}
        />

        {/* Cost Estimator in INR (₹) with Lowered Rates */}
        <CostEstimator
          currentLang={currentLang}
          initialServiceId={targetEstimatorService}
          onApplyEstimateToContact={handleApplyEstimateToContact}
        />

        {/* Why Choose Shree Sadguru Electricals (100% Home Service & Low Prices) */}
        <CredentialsSection currentLang={currentLang} />

        {/* Verified Local Reviews from Beed Families */}
        <TestimonialsSection currentLang={currentLang} />

        {/* FAQ Section */}
        <FAQSection currentLang={currentLang} />

        {/* Contact & Booking Section */}
        <ContactSection
          currentLang={currentLang}
          initialService={targetContactService}
          initialEstimateSummary={appliedEstimateSummary}
        />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Floating Call & WhatsApp Quick Bar on Mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800 p-2.5 flex items-center gap-2 backdrop-blur-md">
        <a
          href={`tel:${SHOP_INFO.phone1}`}
          className="flex-1 py-2.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/20"
        >
          <span>📞 {SHOP_INFO.phone1}</span>
        </a>
        <a
          href={`tel:${SHOP_INFO.phone2}`}
          className="flex-1 py-2.5 bg-slate-800 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 border border-slate-700"
        >
          <span>📞 {SHOP_INFO.phone2}</span>
        </a>
        <a
          href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(
            currentLang === 'mr'
              ? 'नमस्कार, मला श्री सद्गुरु इलेक्ट्रिकल्स यांच्याकडून घरगुती कामाची माहिती हवी आहे.'
              : 'Hello, I want to inquire about home electrical work from Shree Sadguru Electricals.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20"
          aria-label="WhatsApp"
        >
          <span className="text-sm">💬</span>
        </a>
      </div>
    </div>
  );
}
