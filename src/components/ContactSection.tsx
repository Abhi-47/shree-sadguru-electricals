import React, { useState, useEffect } from 'react';
import { SHOP_INFO, INDIAN_SERVICES_DATA } from '../data/mockData';
import { translations, Language } from '../translations';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle2, AlertCircle, Upload, Search, Store } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  initialService?: string;
  initialEstimateSummary?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  initialService = '',
  initialEstimateSummary = '',
}) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    villageOrArea: '',
    serviceType: initialService || INDIAN_SERVICES_DATA[0].title.mr,
    urgency: 'Normal',
    notes: '',
    photoName: '',
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.fullName.trim()) {
      setValidationError(currentLang === 'mr' ? 'कृपया आपले नाव टाका.' : 'Please provide your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setValidationError(
        currentLang === 'mr'
          ? 'कृपया अचूक १० अंकी मोबाईल नंबर टाका.'
          : 'Please provide a valid 10-digit mobile number.'
      );
      return;
    }

    const ref = `SADGURU-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedId(ref);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      villageOrArea: '',
      serviceType: INDIAN_SERVICES_DATA[0].title[currentLang],
      urgency: 'Normal',
      notes: '',
      photoName: '',
    });
    setSubmittedId(null);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2">
              {t.contact.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
              {t.contact.title}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone Numbers & Shop Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Store className="w-4 h-4 text-amber-400" />
                  <span>{t.contact.shopInfoTitle}</span>
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">बीड शहर</span>
              </div>

              {/* Primary Mobile Number 1 */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-slate-400 block font-medium">
                    {currentLang === 'mr' ? 'प्रमुख संपर्क क्रमांक १' : 'Primary Mobile 1'}
                  </span>
                  <a href={`tel:${SHOP_INFO.phone1}`} className="text-lg font-extrabold text-white hover:text-amber-400 font-mono tracking-wide">
                    {SHOP_INFO.phone1}
                  </a>
                  <div className="flex items-center gap-3 mt-1.5">
                    <a
                      href={`tel:${SHOP_INFO.phone1}`}
                      className="px-2.5 py-1 text-[11px] font-bold bg-amber-400 text-slate-950 rounded hover:bg-amber-300"
                    >
                      {currentLang === 'mr' ? 'कॉल करा' : 'Call'}
                    </a>
                    <a
                      href={`https://wa.me/${SHOP_INFO.phone1Raw}?text=${encodeURIComponent(t.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-700 text-white rounded hover:bg-emerald-600 flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Alternate Mobile Number 2 */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-slate-400 block font-medium">
                    {currentLang === 'mr' ? 'दुसरा संपर्क क्रमांक २' : 'Alternate Mobile 2'}
                  </span>
                  <a href={`tel:${SHOP_INFO.phone2}`} className="text-lg font-extrabold text-white hover:text-sky-400 font-mono tracking-wide">
                    {SHOP_INFO.phone2}
                  </a>
                  <div className="flex items-center gap-3 mt-1.5">
                    <a
                      href={`tel:${SHOP_INFO.phone2}`}
                      className="px-2.5 py-1 text-[11px] font-bold bg-sky-400 text-slate-950 rounded hover:bg-sky-300"
                    >
                      {currentLang === 'mr' ? 'कॉल करा' : 'Call'}
                    </a>
                    <a
                      href={`https://wa.me/${SHOP_INFO.phone2Raw}?text=${encodeURIComponent(t.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-700 text-white rounded hover:bg-emerald-600 flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 pt-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">{t.contact.addressLabel}</span>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium">
                    {t.contact.shopAddress}
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">{t.contact.timingLabel}</span>
                  <div className="text-xs text-slate-200">
                    {t.contact.shopTiming}
                  </div>
                </div>
              </div>

              {/* Areas Covered */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs font-mono font-bold text-amber-400 block mb-1">
                  {t.contact.areasCovered}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.contact.areasList}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Service Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl relative">
              {submittedId ? (
                /* Instant Confirmation Receipt */
                <div className="space-y-6 animate-in fade-in py-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                      {currentLang === 'mr' ? 'माहिती यशस्वीरित्या नोंदवली' : 'REQUEST LOGGED SUCCESSFULLY'}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {currentLang === 'mr'
                        ? `धन्यवाद, ${formData.fullName}!`
                        : `Thank you, ${formData.fullName}!`}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2">
                      {currentLang === 'mr'
                        ? `श्री सद्गुरु इलेक्ट्रिकल्सकडे तुमची विनंती पोहोचली आहे. संदर्भ क्रमांक (Ref ID): `
                        : `Shree Sadguru Electricals has received your request. Reference ID: `}
                      <span className="font-mono text-amber-400 font-bold">{submittedId}</span>.
                      {currentLang === 'mr'
                        ? ' आम्ही १० ते १५ मिनिटांत तुम्हाला फोन करू.'
                        : ' We will call you back within 10-15 minutes.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">{currentLang === 'mr' ? 'मोबाईल:' : 'Mobile:'}</span>
                      <span className="font-mono text-white font-bold">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">{currentLang === 'mr' ? 'पत्ता / गाव:' : 'Area / Village:'}</span>
                      <span className="text-white">{formData.villageOrArea || 'बीड शहर'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">{currentLang === 'mr' ? 'काम:' : 'Work:'}</span>
                      <span className="text-amber-400 font-semibold">{formData.serviceType}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={resetForm}
                      className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-lg"
                    >
                      {currentLang === 'mr' ? 'दुसरे काम नोंदवा' : 'Submit Another Request'}
                    </button>
                    <a
                      href={`tel:${SHOP_INFO.phone1}`}
                      className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-xs font-bold text-slate-950 rounded-lg text-center"
                    >
                      {currentLang === 'mr' ? `थेट फोन करा: ${SHOP_INFO.phone1}` : `Call: ${SHOP_INFO.phone1}`}
                    </a>
                  </div>
                </div>
              ) : (
                /* Active Booking Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {t.contact.formTitle}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{t.contact.formSubtitle}</p>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                      बीड शहर
                    </span>
                  </div>

                  {validationError && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={currentLang === 'mr' ? 'उदा. गणेश शिंदे' : 'e.g. Ganesh Shinde'}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="8080795343"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.contact.villageOrAreaLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.villageOrArea}
                        onChange={(e) => setFormData({ ...formData, villageOrArea: e.target.value })}
                        placeholder={currentLang === 'mr' ? 'उदा. सुभाष रोड / शाहू नगर / शेत शिवार' : 'e.g. Subhash Road / Shahu Nagar / Farm'}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.contact.serviceLabel}
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-hidden focus:border-amber-400"
                      >
                        {INDIAN_SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title[currentLang]}>
                            {s.title[currentLang]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contact.detailsLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={
                        currentLang === 'mr'
                          ? 'उदा. शेतातील बोरवेल स्टार्टर चालू होत नाही, किंवा घरात २ खोल्यांचे नवीन वायरिंग करायचे आहे...'
                          : 'e.g., Farm starter tripping, or need complete house wiring for 2-storey house...'
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  {/* Photo Attachment upload */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contact.attachPhoto}
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="px-3.5 py-2 bg-slate-950 border border-slate-700 hover:border-slate-600 rounded-lg text-xs text-slate-300 cursor-pointer flex items-center gap-2 transition-colors">
                        <Upload className="w-3.5 h-3.5 text-amber-400" />
                        <span>{formData.photoName ? 'फोटो बदलला' : (currentLang === 'mr' ? 'फोटो निवडा (JPG/PNG)' : 'Select Photo')}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setFormData({ ...formData, photoName: e.target.files[0].name });
                            }
                          }}
                          className="hidden"
                        />
                      </label>
                      {formData.photoName && (
                        <span className="text-xs font-mono text-emerald-400 truncate max-w-xs">
                          ✓ {formData.photoName}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.submitButton}</span>
                  </button>

                  <div className="pt-2 text-center text-xs text-slate-400">
                    <span>{t.contact.directCallTitle} </span>
                    <a href={`tel:${SHOP_INFO.phone1}`} className="text-amber-400 font-bold hover:underline font-mono">
                      {SHOP_INFO.phone1}
                    </a>
                    {' | '}
                    <a href={`tel:${SHOP_INFO.phone2}`} className="text-amber-400 font-bold hover:underline font-mono">
                      {SHOP_INFO.phone2}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
