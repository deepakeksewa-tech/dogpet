import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}
    >
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-widest text-gold font-sans font-semibold mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal leading-[1.15] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-sm sm:text-base text-charcoal/70 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}