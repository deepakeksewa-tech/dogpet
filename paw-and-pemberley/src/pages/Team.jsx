import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { TEAM_MEMBERS } from '../data/siteData';

export default function Team() {
  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The Custodians"
          title="Experienced, vetted, and genuinely devoted."
          subtitle="Meet the individuals directing our clinical procedures and companion happiness."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="bg-cream/20 border border-cream p-6 flex flex-col">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-cream">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                {member.role}
              </span>
              <h3 className="font-serif text-2xl text-charcoal mt-1 mb-3">
                {member.name}
              </h3>
              <p className="text-xs font-sans text-charcoal/70 font-light leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}