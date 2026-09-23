import React from 'react';
import { TEAM_MEMBERS } from '../data/siteData';

export default function Team() {
  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-14 max-w-4xl">
          {/* THE CUSTODIANS - Darker Rich Gold Color + Serif Font */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#8C6D23] font-medium tracking-tight leading-none mb-3">
            The Custodians
          </h1>

          {/* Subheading */}
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal font-normal leading-snug mb-3">
            Experienced, vetted, and genuinely devoted.
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed max-w-xl">
            Meet the individuals directing our clinical procedures and companion happiness.
          </p>
        </div>

        {/* Team Grid */}
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