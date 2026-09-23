import React from 'react';
import { TESTIMONIALS } from '../data/siteData';

export default function TestimonialsPage() {
  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section: Exact Match with Site Hierarchy */}
        <div className="mb-14 max-w-4xl">
          {/* Main Hero: Serif, Dark Rich Gold & Primary Focus */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#8C6D23] font-medium tracking-tight leading-none mb-3">
            Patron Testimonials
          </h1>

          {/* Subheading: Balanced size */}
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal font-normal leading-snug mb-3">
            Reflections from our cherished clients.
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed max-w-xl">
            Honoured to care for the companions of Britain’s most discerning owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="p-8 sm:p-12 bg-cream/30 border border-cream flex flex-col justify-between">
              <p className="font-serif text-2xl text-charcoal italic font-light leading-relaxed mb-8">
                “{t.quote}”
              </p>
              <div className="border-t border-cream pt-4">
                <p className="font-sans font-medium text-sm text-charcoal">{t.client}</p>
                <p className="font-sans text-xs text-sage mt-0.5">{t.location}</p>
                <p className="font-sans text-xs text-charcoal/60 italic mt-0.5">Companion: {t.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}