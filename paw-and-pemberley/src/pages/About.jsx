import React from 'react';
import { LOCATIONS } from '../data/siteData';
import p1 from '../assets/p1.webp';

export default function About() {
  return (
    <div className="pt-24 pb-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* HERITAGE & PHILOSOPHY HEADER */}
        <div className="mb-8 max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#8C6D23] font-medium tracking-tight leading-none mb-2.5">
            Our Heritage &amp; Philosophy
          </h1>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal font-normal leading-snug mb-2">
            Care with character.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed max-w-xl">
            Founded in Britain, built on trust, warmth, and genuine love for animals.
          </p>
        </div>

        {/* MAIN HERITAGE CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12">
          {/* LEFT — STORY */}
          <div className="lg:col-span-6 space-y-4 text-charcoal/90 font-sans text-base leading-relaxed">
            <p className="font-serif text-xl sm:text-2xl text-charcoal italic leading-snug">
              “Where exceptional care meets a life well loved.”
            </p>
            <p>
              Paw &amp; Pemberley was born out of a simple observation:
              conventional pet sitting and commercial kennel boarding were
              utterly inadequate for companion animals accustomed to love,
              quiet stability, and refined living environments.
            </p>
            <p>
              Founded in 2018 by Eleanor Pemberley-Cross, our ethos is
              inspired by classic British country estate hospitality. We
              provide private, unhurried care calibrated to your companion’s
              psychological security.
            </p>
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Every carer within our circle is DBS-checked, vet-first-aid
              certified, and trained in gentle behavioural communication —
              ensuring uncompromised standards of care and discretion.
            </p>
          </div>

          {/* RIGHT — FOUNDER IMAGE */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] max-h-[360px] w-full overflow-hidden rounded-xs bg-cream/40 p-1 shadow-sm">
              <img
                src={p1}
                alt="Eleanor Pemberley-Cross"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-xs uppercase tracking-widest text-sage font-sans font-semibold mt-2.5 text-center lg:text-left">
              Eleanor Pemberley-Cross • Founder &amp; Head of Care
            </p>
          </div>
        </div>

        {/* UK LOCATIONS */}
        <div className="border-t border-cream pt-8">
          <div className="mb-6 max-w-4xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C6D23] font-medium tracking-tight leading-none mb-2">
              Locations
            </h2>
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal font-normal leading-snug mb-1.5">
              Thoughtfully caring for pets across Britain.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed max-w-xl">
              Explore our active regional bases throughout England and Scotland.
            </p>
          </div>

          {/* LOCATIONS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="p-5 bg-cream/30 border border-cream hover:border-gold/40 transition-all duration-300"
              >
                <span className="text-[11px] uppercase tracking-widest text-gold font-sans font-bold block mb-1">
                  {loc.region}
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-charcoal font-medium mt-0.5 mb-1.5">
                  {loc.name}
                </h4>
                <p className="text-xs sm:text-sm font-sans text-charcoal/85 leading-relaxed">
                  {loc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}