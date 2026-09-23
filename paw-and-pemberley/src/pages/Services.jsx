import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/siteData';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-24 pb-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-10 max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#8C6D23] font-medium tracking-tight leading-none mb-2.5">
            Our Disciplines
          </h1>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal font-normal leading-snug mb-2">
            Care, considered.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed max-w-xl">
            Explore our complete suite of bespoke, private pet services.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10">
          {SERVICES.map((s, idx) => (
            <div
              key={s.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-6 sm:p-8 bg-cream/20 border border-cream ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-1">
                  Service {s.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-2">
                  {s.title}
                </h3>
                <p className="text-sm font-serif italic text-forest mb-3">
                  {s.tagline}
                </p>
                <p className="text-xs sm:text-sm font-sans text-charcoal/80 font-light leading-relaxed mb-5">
                  {s.description}
                </p>

                <div className="mb-5 space-y-1.5">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-charcoal/70">
                      <Check size={14} className="text-forest shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3.5 border-t border-cream">
                  <span className="text-xs uppercase font-sans tracking-wider text-charcoal font-semibold">
                    {s.price}
                  </span>
                  <div className="flex gap-3">
                    <Link
                      to={`/services/${s.id}`}
                      className="text-[11px] uppercase tracking-luxury font-sans font-medium text-charcoal hover:text-forest py-2"
                    >
                      Learn More →
                    </Link>
                    <Link
                      to="/booking"
                      className="px-5 py-2 bg-forest text-cream text-[11px] uppercase tracking-luxury font-sans font-medium hover:bg-forest/90 transition-all"
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