import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}`}
    >
      {eyebrow && (
        <span 
          style={{ fontSize: '13px' }} 
          className="uppercase tracking-[0.2em] text-gold font-sans font-bold mb-3 block"
        >
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal leading-[1.2] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p 
          style={{ fontSize: '16px' }} 
          className="font-sans text-charcoal/85 font-normal leading-relaxed"
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}