import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { JOURNAL_POSTS } from '../data/siteData';

export default function Journal() {
  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The Pemberley Journal"
          title="Dispatches on British Pet Life"
          subtitle="Care guides, behavioural etiquette, and seasonal countryside itineraries."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {JOURNAL_POSTS.map((post) => (
            <article key={post.slug} className="group border border-cream bg-white/40 p-6 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-cream mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase font-sans tracking-widest text-gold mb-2">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal group-hover:text-forest transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-xs font-sans text-charcoal/70 font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>
              <Link
                to={`/journal/${post.slug}`}
                className="text-[11px] uppercase tracking-luxury font-medium text-charcoal hover:text-forest"
              >
                Read Complete Essay →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}