import React from 'react';
import { RESIDENTIAL_REVIEWS_DATA } from '../data/mockData';
import { Language } from '../translations';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC<{ currentLang: Language }> = ({ currentLang }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{currentLang === 'mr' ? 'स्थानिक ग्राहकांचे अनुभव' : 'LOCAL CUSTOMER REVIEWS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              {currentLang === 'mr' ? 'बीड शहरातील समाधानी कुटुंबे' : 'Trusted by Families Across Beed City'}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="flex text-amber-400">★★★★★</span>
            <span className="font-bold text-white">5.0 Star Rating</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'mr' ? '१००% घरपोच सेवा' : '100% Doorstep Service'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESIDENTIAL_REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                  <span className="text-amber-400 font-semibold">{rev.projectType[currentLang]}</span>
                  <span>{rev.date[currentLang]}</span>
                </div>

                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{rev.content[currentLang]}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.author[currentLang]}</h4>
                  <div className="text-xs text-slate-400">
                    {rev.role[currentLang]} · {rev.location[currentLang]}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{currentLang === 'mr' ? 'खरे ग्राहक' : 'Verified'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
