import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, Sparkles, HeartHandshake, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES, TESTIMONIALS, JOURNAL_POSTS } from '../data/siteData';

// Local Assets Imports
import p1 from '../assets/p1.webp';
import dog1 from '../assets/dog1.webp';
import dog2 from '../assets/dog2.webp';
import dog3 from '../assets/dog3.webp';

export default function Home() {
  return (
    <div className="overflow-hidden bg-ivory">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[85vh] min-h-[580px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src={dog1}
            alt="Noble companion on British lawn"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white mt-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs uppercase tracking-[0.3em] font-sans text-gold-light mb-4"
          >
            Private Pet Care • British Sophistication
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] mb-4"
          >
            Exceptional care <br />
            <span className="italic font-normal">for the companions</span> you cherish.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-sm sm:text-base md:text-lg text-cream/90 font-light max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            Private, personalised pet care for discerning owners across London, Surrey, and renowned British estates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-3 bg-cream text-charcoal text-xs uppercase tracking-widest font-sans font-medium hover:bg-white transition-all shadow-md"
            >
              Discover Our Services
            </Link>
            <Link
              to="/booking"
              className="w-full sm:w-auto px-6 py-3 border border-cream/50 text-white text-xs uppercase tracking-widest font-sans font-medium hover:bg-white/10 transition-all backdrop-blur-xs"
            >
              Arrange a Consultation
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white/60 flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest font-sans">Scroll to explore</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* 2. MINIMALIST TRUST BAR */}
      <section className="bg-cream/70 border-b border-cream py-5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-2.5">
              <ShieldCheck className="text-forest shrink-0" size={22} />
              <div>
                <h4 className="text-xs uppercase font-sans font-semibold tracking-wider text-charcoal">Fully Insured</h4>
                <p className="text-[11px] text-charcoal/60 font-sans">Professional specialist indemnity</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2.5">
              <Sparkles className="text-forest shrink-0" size={22} />
              <div>
                <h4 className="text-xs uppercase font-sans font-semibold tracking-wider text-charcoal">DBS Checked</h4>
                <p className="text-[11px] text-charcoal/60 font-sans">Trusted, carefully selected carers</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2.5">
              <HeartHandshake className="text-forest shrink-0" size={22} />
              <div>
                <h4 className="text-xs uppercase font-sans font-semibold tracking-wider text-charcoal">Tailored Care</h4>
                <p className="text-[11px] text-charcoal/60 font-sans">Individual companion care plan</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2.5">
              <MapPin className="text-forest shrink-0" size={22} />
              <div>
                <h4 className="text-xs uppercase font-sans font-semibold tracking-wider text-charcoal">UK Based</h4>
                <p className="text-[11px] text-charcoal/60 font-sans">Selected locations across Britain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC EDITORIAL INTRODUCTION */}
      <section className="py-14 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-sans font-semibold">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-[1.15]">
              More than pet care. <br />
              <span className="italic">A considered experience</span> for them — and complete peace of mind for you.
            </h2>
            <p className="font-sans text-charcoal/80 leading-relaxed font-light text-sm pt-1">
              At Paw & Pemberley, we perceive our calling not as a generic sitting agency, but as an extension of your own devotion. Pets are acutely attuned to rhythm, quiet confidence, and dignified affection.
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed font-light text-sm">
              Whether conducting unhurried single-companion walks across Richmond Park or staying overnight at a country estate, our presence is discreet, protective, and deeply loving.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center text-xs uppercase tracking-luxury text-forest font-semibold hover:text-charcoal transition-colors gap-2"
              >
                <span>Read our story & principles</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full max-h-[420px] overflow-hidden rounded-xs bg-cream/30 flex items-center justify-center p-1">
              <img
                src={dog2}
                alt="Well groomed dog resting in luxury residence"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-ivory p-4 border border-cream shadow-sm hidden sm:block max-w-xs z-10">
              <p className="font-serif italic text-base text-charcoal">
                “Discretion, serenity, and unconditional affection.”
              </p>
              <p className="text-[10px] uppercase tracking-widest text-sage mt-1">
                — Eleanor Pemberley-Cross
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="py-14 bg-cream/35 border-t border-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeading
              eyebrow="Our Curated Provisions"
              title="Care, considered."
              subtitle="Every provision is calibrated to align effortlessly with your companion's temperaments."
            />
            <Link
              to="/services"
              className="text-xs uppercase tracking-luxury text-forest font-semibold hover:text-charcoal transition-colors mb-4 md:mb-0 inline-flex items-center gap-2"
            >
              <span>View All Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-ivory border border-cream overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-gold/40"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full max-h-[220px] overflow-hidden bg-cream/40 flex items-center justify-center p-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain object-center"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-charcoal/85 text-cream text-[10px] font-mono px-2 py-0.5 tracking-widest z-10">
                      {service.number}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] text-gold font-sans uppercase tracking-wider block mb-1 font-semibold">
                      {service.price}
                    </span>
                    <h3 className="font-serif text-xl text-charcoal font-medium mb-2">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/70 text-xs font-sans leading-relaxed mb-4 font-light line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-[11px] uppercase tracking-luxury text-charcoal group-hover:text-forest transition-colors gap-1.5 font-medium"
                  >
                    <span>Explore service</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED SIGNATURE: THE PEMBERLEY EXPERIENCE */}
      <section className="py-14 bg-forest text-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] uppercase tracking-widest text-gold-light font-sans font-semibold">
                Signature Offering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-[1.15]">
                The Pemberley Experience
              </h2>
              <p className="font-sans text-cream/80 text-sm leading-relaxed font-light">
                An all-inclusive private care membership engineered for owners who travel frequently or require comprehensive support without ongoing administration.
              </p>
              
              <ul className="space-y-2 pt-1 font-sans text-xs text-cream/90 font-light">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Private care with dedicated single pet carer
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Personalised daily routine & nutritional monitoring
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Regular botanical coat conditioning & grooming
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Daily written reports & photographic journals
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Flexible scheduling with priority concierge booking
                </li>
              </ul>

              <div className="pt-3">
                <Link
                  to="/booking"
                  className="inline-block px-6 py-3 bg-gold text-charcoal font-sans text-xs uppercase tracking-luxury font-medium hover:bg-gold-light transition-all shadow-md"
                >
                  Discover The Pemberley Experience
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="relative aspect-[3/4] max-h-[350px] w-full overflow-hidden rounded-xs bg-white/10 flex items-center justify-center p-1">
                  <img
                    src={dog2}
                    alt="Companion walking proudly outdoors"
                    className="w-full h-full object-contain object-center shadow-md"
                  />
                </div>
                <div className="relative aspect-[3/4] max-h-[350px] w-full overflow-hidden rounded-xs bg-white/10 flex items-center justify-center p-1 sm:mt-6">
                  <img
                    src={dog3}
                    alt="Pet sleeping calmly indoors"
                    className="w-full h-full object-contain object-center shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT PREVIEW */}
      <section className="py-14 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] max-h-[360px] w-full overflow-hidden rounded-xs bg-cream/30 flex items-center justify-center p-1">
              <img
                src={p1}
                alt="Eleanor Pemberley-Cross Founder"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-gold font-sans font-semibold">
              Founded in Britain • Built around trust
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-[1.15]">
              Care with character.
            </h2>
            <p className="font-sans text-sm text-charcoal/80 font-light leading-relaxed">
              Paw & Pemberley was created from an earnest love of animals and an uncompromising conviction that premium companion care should feel warm, intuitive, and deeply personal rather than transactional.
            </p>
            <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">
              We vet every prospective caretaker with extreme scrutiny, maintaining strict animal first-aid accreditations, behavioural qualifications, and high companion-to-carer dedication.
            </p>
            <div className="pt-1">
              <Link
                to="/about"
                className="text-xs uppercase tracking-luxury text-forest font-semibold hover:text-charcoal transition-colors inline-flex items-center gap-2"
              >
                <span>Learn more about our team</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UK LOCATIONS SECTION */}
      <section className="py-14 bg-cream/40 border-t border-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            centered
            eyebrow="Coverage Across Britain"
            title="Thoughtfully caring for pets across Britain."
            subtitle="Operating across selected counties and postcodes with dedicated regional stewards."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              'London',
              'Surrey',
              'Cheshire',
              'Manchester',
              'Edinburgh',
              'Bristol',
              'Berkshire',
              'Oxfordshire'
            ].map((city) => (
              <div
                key={city}
                className="p-4 bg-ivory border border-cream hover:border-gold/50 transition-all text-center"
              >
                <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold block mb-1">
                  UNITED KINGDOM
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-charcoal font-normal">{city}</h4>
                <p className="text-[11px] text-sage font-sans mt-1">Private Stewards Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS QUOTE CARDS */}
      <section className="py-14 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          centered
          eyebrow="Patron Impressions"
          title="Reflections from our patrons."
          subtitle="Honoured to care for the companions of discerning households throughout the UK."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {TESTIMONIALS.slice(0, 3).map((t, idx) => (
            <div
              key={idx}
              className="bg-cream/30 p-6 border border-cream flex flex-col justify-between"
            >
              <p className="font-serif text-lg sm:text-xl text-charcoal italic font-light leading-relaxed mb-6">
                “{t.quote}”
              </p>
              <div className="border-t border-cream pt-3">
                <p className="font-sans font-medium text-xs text-charcoal tracking-wide">{t.client}</p>
                <p className="font-sans text-[11px] text-sage mt-0.5">{t.location}</p>
                <p className="font-sans text-[11px] text-charcoal/50 italic mt-0.5">Companion: {t.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. THE PEMBERLEY JOURNAL */}
      <section className="py-14 bg-cream/40 border-t border-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeading
              eyebrow="The Pemberley Journal"
              title="Musings on canine wellness & life."
              subtitle="Essays, countryside guides, and behavioural insights from our directors."
            />
            <Link
              to="/journal"
              className="text-xs uppercase tracking-luxury text-forest font-semibold hover:text-charcoal transition-colors mb-4 md:mb-0 inline-flex items-center gap-2"
            >
              <span>Explore All Articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOURNAL_POSTS.map((post) => (
              <article key={post.slug} className="group flex flex-col">
                <div className="relative aspect-[16/10] w-full max-h-[220px] overflow-hidden rounded-xs bg-cream/40 flex items-center justify-center p-2 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] uppercase font-sans tracking-widest text-gold font-semibold mb-1">
                  {post.category} • {post.readTime}
                </span>
                <h3 className="font-serif text-xl text-charcoal group-hover:text-forest transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-xs font-sans text-charcoal/70 font-light leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to={`/journal/${post.slug}`}
                  className="mt-auto text-[11px] uppercase tracking-luxury font-medium text-charcoal inline-flex items-center gap-1 hover:text-forest"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}