import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center rounded-full bg-[#354438] text-[#F7F4EE] shadow-lg hover:bg-[#1E211E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4BF95] focus:ring-offset-2"
          style={{ width: 'clamp(2.75rem, 4vw, 3.25rem)', height: 'clamp(2.75rem, 4vw, 3.25rem)' }}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}