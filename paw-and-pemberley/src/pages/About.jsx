import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { LOCATIONS } from '../data/siteData';

// Local Asset Import
import p1 from '../assets/p1.webp';

export default function About() {
  return (
    <div className="pt-28 pb-14 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ================================
            HERITAGE & PHILOSOPHY
        ================================= */}

        <SectionHeading
          eyebrow="Our Heritage & Philosophy"
          title="Care with character."
          subtitle="Founded in Britain, built on trust, warmth, and genuine love for animals."
        />

        {/* Main Heritage Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-14 -mt-12">

          {/* ================================
              LEFT — STORY
          ================================= */}

          <div className="lg:col-span-6 space-y-5 text-charcoal/80 font-sans font-light text-sm leading-relaxed">

            {/* Quote */}
            <p className="font-serif text-2xl sm:text-3xl text-charcoal italic leading-snug">
              “Where exceptional care meets a life well loved.”
            </p>

            {/* Story */}
            <p>
              Paw & Pemberley was born out of a simple observation:
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

            {/* Care Standards */}
            <p className="text-xs text-charcoal/70">
              Every carer within our circle is DBS-checked, vet-first-aid
              certified, and trained in gentle behavioural communication —
              ensuring uncompromised standards of care and discretion.
            </p>

          </div>


          {/* ================================
              RIGHT — FOUNDER IMAGE
          ================================= */}

          <div className="lg:col-span-6">

            <div className="relative aspect-[4/3] max-h-[380px] w-full overflow-hidden rounded-xs bg-cream/40 p-1 shadow-sm">

              <img
                src={p1}
                alt="Eleanor Pemberley-Cross"
                className="w-full h-full object-cover object-center"
              />

            </div>

            {/* Founder Caption */}
            <p className="text-[11px] text-sage font-sans uppercase tracking-widest mt-3 text-center lg:text-left">
              Eleanor Pemberley-Cross • Founder & Head of Care
            </p>

          </div>

        </div>


        {/* ================================
            UK LOCATIONS
        ================================= */}

        <div className="border-t border-cream pt-12">

          <SectionHeading
            eyebrow="Locations"
            title="Thoughtfully caring for pets across Britain."
            subtitle="Explore our active regional bases throughout England and Scotland."
          />

          {/* Locations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

            {LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="
                  p-5
                  bg-cream/30
                  border
                  border-cream
                  hover:border-gold/40
                  transition-all
                  duration-300
                "
              >

                {/* Region */}
                <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                  {loc.region}
                </span>

                {/* Location */}
                <h4 className="font-serif text-xl text-charcoal font-medium mt-1 mb-1.5">
                  {loc.name}
                </h4>

                {/* Description */}
                <p className="text-xs font-sans text-charcoal/70 font-light leading-relaxed">
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