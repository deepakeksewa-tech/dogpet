import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Initiate Contact"
          title="Let’s talk about their care."
          subtitle="Tell us a little about your companion and what exceptional care looks like for you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-cream/30 border border-cream space-y-6">
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-widest text-gold uppercase block mb-1">
                  Private Liaison
                </span>
                <p className="font-serif text-xl text-charcoal">Paw & Pemberley Concierge</p>
              </div>

              <div className="flex items-start gap-4 text-xs font-sans text-charcoal/80">
                <MapPin size={18} className="text-forest shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal">London Environs</p>
                  <p>42 Berkeley Square, Mayfair, London, W1J 5AW</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-xs font-sans text-charcoal/80">
                <Phone size={18} className="text-forest shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal">Telephone</p>
                  <p>+44 (0) 20 7946 0123</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-xs font-sans text-charcoal/80">
                <Mail size={18} className="text-forest shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal">Electronic Dispatch</p>
                  <p>hello@pawandpemberley.co.uk</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-forest text-cream text-xs font-sans leading-relaxed">
              <p className="font-semibold uppercase tracking-wider text-gold-light mb-1">
                Discretion Assured
              </p>
              We routinely uphold private estate non-disclosure agreements for all high-profile UK households.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white/40 border border-cream p-8 sm:p-12">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle size={48} className="text-forest mx-auto" />
                <h3 className="font-serif text-3xl text-charcoal">Thank you.</h3>
                <p className="text-xs font-sans text-charcoal/70 max-w-md mx-auto">
                  Your inquiry has been received by our head of care. We will review your companion's details and reach out within 12 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-sans text-charcoal/80 mb-2">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-ivory border border-cream px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-forest"
                      placeholder="e.g. Lady Clara Sterling"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-sans text-charcoal/80 mb-2">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-ivory border border-cream px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-forest"
                      placeholder="clara@residence.co.uk"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-sans text-charcoal/80 mb-2">
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-ivory border border-cream px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-forest"
                      placeholder="+44 7..."
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-sans text-charcoal/80 mb-2">
                      Location / Postcode *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-ivory border border-cream px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-forest"
                      placeholder="e.g. SW1X or Cobham"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-sans text-charcoal/80 mb-2">
                      Pet Name & Type
                    </label>
                    <input
                      type="text"
                      className="w-full bg-ivory border border-cream px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-forest"
                      placeholder="e.g. Jasper (Canine / Labrador)"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-sans text-charcoal/80 mb-2">
                      Service Required
                    </label>
                    <select className="w-full bg-ivory border border-cream px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-forest">
                      <option>Private Dog Walking</option>
                      <option>Home Pet Sitting</option>
                      <option>Luxury Boarding</option>
                      <option>Grooming & Spa</option>
                      <option>Puppy Care</option>
                      <option>Bespoke Concierge</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-sans text-charcoal/80 mb-2">
                    Preferred Date & Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-ivory border border-cream px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-forest"
                    placeholder="Tell us about your upcoming travel dates, routine requirements, or specific temperaments..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-forest text-cream text-xs uppercase tracking-luxury font-sans font-medium hover:bg-charcoal transition-colors"
                >
                  Request a Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}