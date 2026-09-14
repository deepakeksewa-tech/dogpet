import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../data/siteData';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Our Disciplines"
          title="Care, considered."
          subtitle="Explore our complete suite of bespoke, private pet services."
        />

        <div className="space-y-16">
          {SERVICES.map((s, idx) => (
            <div
              key={s.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 bg-cream/20 border border-cream ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-1">
                  Service {s.number}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal mb-3">
                  {s.title}
                </h3>
                <p className="text-sm font-serif italic text-forest mb-4">
                  {s.tagline}
                </p>
                <p className="text-xs sm:text-sm font-sans text-charcoal/80 font-light leading-relaxed mb-6">
                  {s.description}
                </p>

                <div className="mb-6 space-y-2">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-charcoal/70">
                      <Check size={14} className="text-forest shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-cream">
                  <span className="text-xs uppercase font-sans tracking-wider text-charcoal font-semibold">
                    {s.price}
                  </span>
                  <div className="flex gap-4">
                    <Link
                      to={`/services/${s.id}`}
                      className="text-[11px] uppercase tracking-luxury font-sans font-medium text-charcoal hover:text-forest py-2.5"
                    >
                      Learn More →
                    </Link>
                    <Link
                      to="/booking"
                      className="px-6 py-2.5 bg-forest text-cream text-[11px] uppercase tracking-luxury font-sans font-medium hover:bg-forest/90 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-xs">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}