import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Route badalne par mobile drawer close karein
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Our Team', path: '/team' },
    { label: 'Journal', path: '/journal' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#EFE9DE] py-3.5 shadow-sm'
          : isHome
          ? 'bg-gradient-to-b from-[#1E211E]/80 via-[#1E211E]/25 to-transparent py-5'
          : 'bg-[#F7F4EE] border-b border-[#EFE9DE] py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 xl:px-12 flex items-center justify-between gap-6">
        
        {/* 1. Brand Logo / Crest (Left) */}
        <Link to="/" className="group flex flex-col shrink-0 select-none">
          <span
            className={`font-serif text-xl sm:text-2xl tracking-[0.2em] font-normal transition-colors duration-300 leading-tight ${
              isScrolled || !isHome ? 'text-[#1E211E]' : 'text-white'
            }`}
          >
            PAW & PEMBERLEY
          </span>
          <span
            className={`text-[8.5px] uppercase tracking-[0.2em] font-sans font-medium transition-colors duration-300 mt-0.5 ${
              isScrolled || !isHome ? 'text-[#7B8875]' : 'text-[#EFE9DE]/80'
            }`}
          >
            Private Pet Care • Est. 2018
          </span>
        </Link>

        {/* 2. Desktop Navigation (Center) - xl screens par auto-align */}
        <nav className="hidden xl:flex items-center space-x-7 2xl:space-x-9 text-[11px] uppercase tracking-[0.16em] font-sans font-medium">
          {navLinks.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            const textStyle =
              isScrolled || !isHome
                ? isActive
                  ? 'text-[#354438] font-semibold'
                  : 'text-[#1E211E]/75 hover:text-[#1E211E]'
                : isActive
                ? 'text-white font-semibold'
                : 'text-white/80 hover:text-white';

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 transition-colors duration-200 ${textStyle}`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] transition-all duration-300 ${
                      isScrolled || !isHome ? 'bg-[#354438]' : 'bg-[#D4BF95]'
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* 3. Actions / CTA Button (Right) */}
        <div className="hidden xl:flex items-center space-x-4 shrink-0">
          <Link
            to="/booking"
            className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] font-sans font-medium transition-all duration-300 border ${
              isScrolled || !isHome
                ? 'bg-[#354438] text-[#F7F4EE] border-[#354438] hover:bg-[#1E211E] hover:border-[#1E211E]'
                : 'bg-white/10 text-white border-white/40 hover:bg-white hover:text-[#1E211E] backdrop-blur-sm'
            }`}
          >
            Book a Consultation
          </Link>
        </div>

        {/* Medium Laptop / Tablet Screen Navigation (lg screens ke liye balanced layout) */}
        <div className="hidden lg:flex xl:hidden items-center space-x-6 text-[10px] uppercase tracking-[0.14em] font-sans font-medium">
          {navLinks.slice(0, 5).map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            const textStyle =
              isScrolled || !isHome
                ? isActive ? 'text-[#354438] font-bold' : 'text-[#1E211E]/75 hover:text-[#1E211E]'
                : isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white';

            return (
              <Link key={item.path} to={item.path} className={textStyle}>
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/booking"
            className={`px-3.5 py-2 text-[10px] uppercase tracking-wider font-sans border ${
              isScrolled || !isHome
                ? 'bg-[#354438] text-white border-[#354438]'
                : 'bg-white/10 text-white border-white/40'
            }`}
          >
            Consultation
          </Link>
        </div>

        {/* Mobile / Small Laptop Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className={`lg:hidden p-2 transition-colors focus:outline-none ${
            isScrolled || !isHome ? 'text-[#1E211E]' : 'text-white'
          }`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#F7F4EE] border-b border-[#EFE9DE] px-8 py-8 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 text-xs uppercase tracking-widest font-sans">
              {navLinks.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition-colors py-1 ${
                      isActive ? 'text-[#354438] font-bold' : 'text-[#1E211E] hover:text-[#354438]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[#EFE9DE] flex flex-col gap-3">
                <Link
                  to="/booking"
                  className="text-center w-full py-3 bg-[#354438] text-[#F7F4EE] text-xs uppercase tracking-luxury font-sans font-medium hover:bg-[#1E211E] transition-colors"
                >
                  Book a Consultation
                </Link>
                <div className="flex items-center justify-center gap-2 text-[#7B8875] text-[11px]">
                  <ShieldCheck size={14} />
                  <span>Licensed, Insured & DBS Vetted</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}