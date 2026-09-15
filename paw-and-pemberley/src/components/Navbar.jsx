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
          ? 'bg-gradient-to-b from-[#1E211E]/85 via-[#1E211E]/30 to-transparent py-5'
          : 'bg-[#F7F4EE] border-b border-[#EFE9DE] py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 xl:px-12 flex items-center justify-between gap-6">
        
        {/* 1. Brand Logo / Crest (Left) */}
        <Link to="/" className="group flex flex-col shrink-0 select-none">
          <span
            className={`font-serif text-2xl sm:text-3xl tracking-[0.18em] font-medium transition-colors duration-300 leading-tight ${
              isScrolled || !isHome ? 'text-[#1E211E]' : 'text-white'
            }`}
          >
            PAW & PEMBERLEY
          </span>
          <span
            style={{ fontSize: '12px' }}
            className={`uppercase tracking-[0.2em] font-sans font-semibold transition-colors duration-300 mt-1 ${
              isScrolled || !isHome ? 'text-[#7B8875]' : 'text-[#EFE9DE]'
            }`}
          >
            Private Pet Care • Est. 2018
          </span>
        </Link>

        {/* 2. Desktop Navigation (Center) */}
        <nav 
          style={{ fontSize: '13.5px' }}
          className="hidden xl:flex items-center space-x-7 2xl:space-x-9 uppercase tracking-[0.16em] font-sans font-semibold"
        >
          {navLinks.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            const textStyle =
              isScrolled || !isHome
                ? isActive
                  ? 'text-[#354438] font-bold'
                  : 'text-[#1E211E]/85 hover:text-[#1E211E]'
                : isActive
                ? 'text-white font-bold'
                : 'text-white/90 hover:text-white';

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 transition-colors duration-200 ${textStyle}`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
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
            style={{ fontSize: '13px' }}
            className={`px-6 py-3 uppercase tracking-[0.16em] font-sans font-bold transition-all duration-300 border ${
              isScrolled || !isHome
                ? 'bg-[#354438] text-[#F7F4EE] border-[#354438] hover:bg-[#1E211E] hover:border-[#1E211E]'
                : 'bg-white/15 text-white border-white/60 hover:bg-white hover:text-[#1E211E] backdrop-blur-sm shadow-sm'
            }`}
          >
            Book a Consultation
          </Link>
        </div>

        {/* Medium Laptop / Tablet Screen Navigation */}
        <div 
          style={{ fontSize: '13px' }}
          className="hidden lg:flex xl:hidden items-center space-x-6 uppercase tracking-[0.14em] font-sans font-semibold"
        >
          {navLinks.slice(0, 5).map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            const textStyle =
              isScrolled || !isHome
                ? isActive ? 'text-[#354438] font-bold' : 'text-[#1E211E]/85 hover:text-[#1E211E]'
                : isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white';

            return (
              <Link key={item.path} to={item.path} className={textStyle}>
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/booking"
            style={{ fontSize: '12px' }}
            className={`px-4 py-2 uppercase tracking-wider font-sans font-bold border ${
              isScrolled || !isHome
                ? 'bg-[#354438] text-white border-[#354438]'
                : 'bg-white/20 text-white border-white/60'
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
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
            <nav 
              style={{ fontSize: '15px' }}
              className="flex flex-col space-y-4 uppercase tracking-widest font-sans font-semibold"
            >
              {navLinks.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition-colors py-1.5 ${
                      isActive ? 'text-[#354438] font-bold' : 'text-[#1E211E] hover:text-[#354438]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-5 border-t border-[#EFE9DE] flex flex-col gap-3.5">
                <Link
                  to="/booking"
                  style={{ fontSize: '14px' }}
                  className="text-center w-full py-3.5 bg-[#354438] text-[#F7F4EE] uppercase tracking-wider font-sans font-bold hover:bg-[#1E211E] transition-colors"
                >
                  Book a Consultation
                </Link>
                <div 
                  style={{ fontSize: '13px' }}
                  className="flex items-center justify-center gap-2 text-[#7B8875] font-medium"
                >
                  <ShieldCheck size={16} />
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