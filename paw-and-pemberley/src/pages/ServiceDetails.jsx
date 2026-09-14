import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/siteData';
import { ArrowLeft, CheckCircle2, Shield, Clock } from 'lucide-react';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id) || SERVICES[0];

  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-sage hover:text-forest mb-8"
        >
          <ArrowLeft size={14} /> Back to All Services
        </Link>

        <span className="text-xs uppercase tracking-widest text-gold font-sans font-semibold block mb-2">
          Service Protocol {service.number}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-charcoal mb-4">
          {service.title}
        </h1>
        <p className="font-serif italic text-xl text-forest mb-8">
          {service.tagline}
        </p>

        <div className="aspect-[16/9] overflow-hidden rounded-xs mb-12 shadow-sm">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6 text-charcoal/80 font-sans font-light leading-relaxed">
            <h3 className="font-serif text-2xl text-charcoal font-normal">Our Protocol</h3>
            <p>{service.description}</p>
            <p>
              We schedule an initial introductory meeting in your private residence prior to the first booking. This allows us to observe your companion in their natural home environment, review feeding preferences, and answer any questions.
            </p>

            <div className="pt-4 space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-charcoal">
                Included Within Every Session:
              </h4>
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-charcoal/80">
                  <CheckCircle2 size={16} className="text-forest shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 bg-cream/40 border border-cream space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block mb-1">
                  Pricing Framework
                </span>
                <p className="font-serif text-3xl text-charcoal">{service.price}</p>
                <p className="text-[11px] text-charcoal/60 mt-1">Inclusive of VAT and specialist insurance</p>
              </div>

              <div className="space-y-3 text-xs text-charcoal/70 border-t border-cream pt-4">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-forest" />
                  <span>Flexible single session or regular monthly retainer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={15} className="text-forest" />
                  <span>Fully insured under private British underwriter</span>
                </div>
              </div>

              <Link
                to="/booking"
                className="block text-center w-full py-3.5 bg-forest text-cream text-xs uppercase tracking-luxury font-sans font-medium hover:bg-forest/90 transition-all"
              >
                Arrange a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}