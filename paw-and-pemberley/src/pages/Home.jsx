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
    <div className="overflow-x-hidden bg-ivory text-charcoal">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen w-full flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src={dog1}
            alt="Noble companion on British lawn"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white mt-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-semibold text-gold-light mb-3"
          >
            Private Pet Care • British Sophistication
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] mb-4"
          >
            Exceptional care <br />
            <span className="italic font-normal">for the companions</span> you cherish.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-sm sm:text-base md:text-lg text-cream font-normal max-w-2xl mx-auto mb-6 leading-relaxed"
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
              className="w-full sm:w-auto px-6 py-3 bg-cream text-charcoal text-xs sm:text-sm uppercase tracking-wider font-sans font-semibold hover:bg-white transition-all shadow-md"
            >
              Discover Our Services
            </Link>
            <Link
              to="/booking"
              className="w-full sm:w-auto px-6 py-3 border-2 border-cream/70 text-white text-xs sm:text-sm uppercase tracking-wider font-sans font-semibold hover:bg-white/15 transition-all backdrop-blur-xs"
            >
              Arrange a Consultation
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white/80 flex flex-col items-center gap-1">
          <span className="text-[11px] uppercase tracking-widest font-sans font-medium">Scroll to explore</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* 2. MINIMALIST TRUST BAR */}
      <section className="bg-cream/60 border-b border-cream/80 py-3.5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left items-center">
            <div className="flex flex-col md:flex-row items-center gap-2.5">
              <ShieldCheck className="text-forest shrink-0" size={20} />
              <div>
                <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-charcoal">Fully Insured</h4>
                <p className="text-[11px] text-charcoal/75 font-sans leading-tight">Professional indemnity</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2.5">
              <Sparkles className="text-forest shrink-0" size={20} />
              <div>
                <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-charcoal">DBS Checked</h4>
                <p className="text-[11px] text-charcoal/75 font-sans leading-tight">Vetted pet carers</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2.5">
              <HeartHandshake className="text-forest shrink-0" size={20} />
              <div>
                <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-charcoal">Tailored Care</h4>
                <p className="text-[11px] text-charcoal/75 font-sans leading-tight">Custom companion plan</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2.5">
              <MapPin className="text-forest shrink-0" size={20} />
              <div>
                <h4 className="text-xs uppercase font-sans font-bold tracking-wider text-charcoal">UK Based</h4>
                <p className="text-[11px] text-charcoal/75 font-sans leading-tight">Selected British counties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC EDITORIAL INTRODUCTION (THE PHILOSOPHY) */}
      <section className="pt-4 sm:pt-6 pb-6 lg:pb-8 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-3.5">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-gold font-sans font-bold">
              The Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.15]">
              More than pet care. <br />
              <span className="italic">A considered experience</span> for them — and complete peace of mind for you.
            </h2>
            <p className="font-sans text-charcoal/85 leading-relaxed text-sm sm:text-base">
              At Paw & Pemberley, we perceive our calling not as a generic sitting agency, but as an extension of your own devotion. Pets are acutely attuned to rhythm, quiet confidence, and dignified affection.
            </p>
            <p className="font-sans text-charcoal/80 leading-relaxed text-sm sm:text-base">
              Whether conducting unhurried single-companion walks across Richmond Park or staying overnight at a country estate, our presence is discreet, protective, and deeply loving.
            </p>
            <div className="pt-1">
              <Link
                to="/about"
                className="inline-flex items-center text-xs sm:text-sm uppercase tracking-luxury text-forest font-bold hover:text-charcoal transition-colors gap-2"
              >
                <span>Read our story & principles</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] overflow-hidden rounded-xs bg-cream/40 shadow-sm border border-cream">
              <img
                src={dog2}
                alt="Well groomed dog resting in luxury residence"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-ivory p-3.5 border border-cream shadow-xs hidden sm:block max-w-xs z-10">
              <p className="font-serif italic text-sm sm:text-base text-charcoal leading-snug">
                “Discretion, serenity, and unconditional affection.”
              </p>
              <p className="text-[10px] uppercase tracking-wider text-sage font-semibold mt-1">
                — Eleanor Pemberley-Cross
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID (OUR CURATED PROVISIONS) */}
      <section className="pt-8 pb-12 lg:pt-10 lg:pb-16 bg-cream/35 border-t border-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <SectionHeading
              eyebrow="Our Curated Provisions"
              title="Care, considered."
              subtitle="Every provision is calibrated to align effortlessly with your companion's temperaments."
            />
            <Link
              to="/services"
              className="text-xs sm:text-sm uppercase tracking-luxury text-forest font-bold hover:text-charcoal transition-colors mb-2 md:mb-0 inline-flex items-center gap-2"
            >
              <span>View All Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group bg-ivory border border-cream overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-gold/40"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full max-h-[190px] overflow-hidden bg-cream/40 flex items-center justify-center p-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain object-center"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-charcoal text-cream text-[11px] font-mono font-medium px-2 py-0.5 tracking-widest z-10">
                      {service.number}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-gold font-sans uppercase tracking-wider block mb-1 font-bold">
                      {service.price}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/80 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-xs uppercase tracking-luxury text-charcoal group-hover:text-forest transition-colors gap-1.5 font-semibold"
                  >
                    <span>Explore service</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED SIGNATURE: THE PEMBERLEY EXPERIENCE */}
      <section className="py-12 lg:py-16 bg-forest text-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold-light font-sans font-bold">
                Signature Offering
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.15]">
                The Pemberley Experience
              </h2>
              <p className="font-sans text-cream/90 text-sm sm:text-base leading-relaxed">
                An all-inclusive private care membership engineered for owners who travel frequently or require comprehensive support without ongoing administration.
              </p>
              
              <ul className="space-y-2 pt-1 font-sans text-xs sm:text-sm text-cream/95">
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

              <div className="pt-2">
                <Link
                  to="/booking"
                  className="inline-block px-6 py-3 bg-gold text-charcoal font-sans text-xs sm:text-sm uppercase tracking-luxury font-bold hover:bg-gold-light transition-all shadow-md"
                >
                  Discover The Pemberley Experience
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="relative aspect-[3/4] max-h-[340px] w-full overflow-hidden rounded-xs bg-white/10 flex items-center justify-center p-1">
                  <img
                    src={dog2}
                    alt="Companion walking proudly outdoors"
                    className="w-full h-full object-cover object-center rounded-xs shadow-md"
                  />
                </div>
                <div className="relative aspect-[3/4] max-h-[340px] w-full overflow-hidden rounded-xs bg-white/10 flex items-center justify-center p-1 sm:mt-6">
                  <img
                    src={dog3}
                    alt="Pet sleeping calmly indoors"
                    className="w-full h-full object-cover object-center rounded-xs shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT PREVIEW */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative aspect-[4/3] max-h-[340px] w-full overflow-hidden rounded-xs bg-cream/30 flex items-center justify-center p-1 border border-cream">
              <img
                src={p1}
                alt="Eleanor Pemberley-Cross Founder"
                className="w-full h-full object-cover object-center rounded-xs"
              />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-sans font-bold">
              Founded in Britain • Built around trust
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.15]">
              Care with character.
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed">
              Paw & Pemberley was created from an earnest love of animals and an uncompromising conviction that premium companion care should feel warm, intuitive, and deeply personal rather than transactional.
            </p>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              We vet every prospective caretaker with extreme scrutiny, maintaining strict animal first-aid accreditations, behavioural qualifications, and high companion-to-carer dedication.
            </p>
            <div className="pt-1">
              <Link
                to="/about"
                className="text-xs sm:text-sm uppercase tracking-luxury text-forest font-bold hover:text-charcoal transition-colors inline-flex items-center gap-2"
              >
                <span>Learn more about our team</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UK LOCATIONS SECTION */}
      <section className="py-12 lg:py-16 bg-cream/40 border-t border-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            centered
            eyebrow="Coverage Across Britain"
            title="Thoughtfully caring for pets across Britain."
            subtitle="Operating across selected counties and postcodes with dedicated regional stewards."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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
                className="p-4 sm:p-5 bg-ivory border border-cream hover:border-gold/50 transition-all text-center shadow-xs"
              >
                <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold block mb-1">
                  UNITED KINGDOM
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-charcoal font-medium">{city}</h4>
                <p className="text-xs text-sage font-sans font-medium mt-0.5">Private Stewards Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS QUOTE CARDS */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          centered
          eyebrow="Patron Impressions"
          title="Reflections from our patrons."
          subtitle="Honoured to care for the companions of discerning households throughout the UK."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {TESTIMONIALS.slice(0, 3).map((t, idx) => (
            <div
              key={idx}
              className="bg-cream/30 p-5 sm:p-6 border border-cream flex flex-col justify-between"
            >
              <p className="font-serif text-sm sm:text-base text-charcoal italic leading-relaxed mb-5">
                “{t.quote}”
              </p>
              <div className="border-t border-cream pt-3.5">
                <p className="font-sans font-bold text-xs sm:text-sm text-charcoal tracking-wide">{t.client}</p>
                <p className="font-sans text-xs text-sage font-medium mt-0.5">{t.location}</p>
                <p className="font-sans text-[11px] sm:text-xs text-charcoal/70 italic mt-0.5">Companion: {t.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. THE PEMBERLEY JOURNAL */}
      <section className="py-12 lg:py-16 bg-cream/40 border-t border-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeading
              eyebrow="The Pemberley Journal"
              title="Musings on canine wellness & life."
              subtitle="Essays, countryside guides, and behavioural insights from our directors."
            />
            <Link
              to="/journal"
              className="text-xs sm:text-sm uppercase tracking-luxury text-forest font-bold hover:text-charcoal transition-colors mb-2 md:mb-0 inline-flex items-center gap-2"
            >
              <span>Explore All Articles</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOURNAL_POSTS.map((post) => (
              <article key={post.slug} className="group flex flex-col">
                <div className="relative aspect-[16/10] w-full max-h-[190px] overflow-hidden rounded-xs bg-cream/40 flex items-center justify-center p-2 mb-3 border border-cream">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] uppercase font-sans tracking-widest text-gold font-bold mb-1">
                  {post.category} • {post.readTime}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-charcoal group-hover:text-forest transition-colors leading-snug mb-1.5">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-charcoal/80 leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to={`/journal/${post.slug}`}
                  className="mt-auto text-xs uppercase tracking-luxury font-bold text-charcoal inline-flex items-center gap-1 hover:text-forest"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}