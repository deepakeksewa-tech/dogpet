import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNAL_POSTS } from '../data/siteData';
import { ArrowLeft } from 'lucide-react';

export default function JournalArticle() {
  const { slug } = useParams();
  const post = JOURNAL_POSTS.find((p) => p.slug === slug) || JOURNAL_POSTS[0];

  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-sage hover:text-forest mb-8"
        >
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        <span className="text-xs uppercase tracking-widest text-gold font-sans font-semibold block mb-3">
          {post.category} • {post.date}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-charcoal leading-tight mb-8">
          {post.title}
        </h1>

        <div className="aspect-[16/9] overflow-hidden mb-12 shadow-sm">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-stone font-sans text-charcoal/80 font-light leading-relaxed space-y-4 text-sm sm:text-base">
          <p className="font-serif text-xl sm:text-xl  text-charcoal italic leading-relaxed">
            “True wellness in canine companions begins not with indulgence, but with consistent rhythm, peaceful predictability, and attuned human stewardship.”
          </p>
          <p>
            Domestic pets thrive when environmental friction and sensory overstimulation are deliberately minimised. In fast-paced metropolitan settings, high cortisol levels in dogs often manifest as restlessness, barrier reactivity, or digestive issues.
          </p>
          <h3 className="font-serif text-2xl text-charcoal pt-4 font-normal">
            1. Olfactory Decompression Over Distance
          </h3>
          <p>
            Rather than marching on rigid high-pace schedules, allowing a dog to engage in deliberate scent tracking activates the parasympathetic nervous system, lowering resting cardiac rates and fostering authentic mental calm.
          </p>
          <h3 className="font-serif text-2xl text-charcoal pt-4 font-normal">
            2. The Quiet Security of Home Routines
          </h3>
          <p>
            Boarding facilities frequently create baseline tension through unfamiliar smells and continuous proximity to other animals. Maintaining home routines allows companions to retain their biological security, resting in rhythm with their natural habits.
          </p>
        </div>
      </div>
    </div>
  );
}