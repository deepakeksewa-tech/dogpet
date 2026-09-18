import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Drawer khula ho to background scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const isHome = location.pathname === '/';
  const light = isScrolled || !isHome; // light background => dark text

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Our Team', path: '/team' },
    { label: 'Journal', path: '/journal' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#EFE9DE] shadow-sm'
          : isHome
          ? 'bg-gradient-to-b from-[#1E211E]/85 via-[#1E211E]/30 to-transparent'
          : 'bg-[#F7F4EE] border-b border-[#EFE9DE]'
      }`}
      style={{ paddingTop: isScrolled ? '0.85rem' : '1.15rem', paddingBottom: isScrolled ? '0.85rem' : '1.15rem' }}
    >
      <div
        className="mx-auto flex max-w-[1500px] items-center justify-between px-5 sm:px-7 xl:px-10"
        style={{ gap: 'clamp(0.75rem, 2vw, 2.5rem)' }}
      >
        {/* 1. Brand Logo */}
        <Link to="/" className="group flex min-w-0 shrink flex-col select-none">
          <span
            className={`whitespace-nowrap font-serif font-medium leading-tight transition-colors duration-300 ${
              light ? 'text-[#1E211E]' : 'text-white'
            }`}
            style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.85rem)', letterSpacing: 'clamp(0.06em, 0.14vw, 0.18em)' }}
          >
            PAW &amp; PEMBERLEY
          </span>
          <span
            className={`mt-1 whitespace-nowrap font-sans font-semibold uppercase transition-colors duration-300 ${
              light ? 'text-[#7B8875]' : 'text-[#EFE9DE]'
            }`}
            style={{ fontSize: 'clamp(0.56rem, 0.72vw, 0.75rem)', letterSpacing: 'clamp(0.1em, 0.16vw, 0.2em)' }}
          >
            Private Pet Care • Est. 2018
          </span>
        </Link>

        {/* 2. Desktop Navigation — saare links, har width pe */}
        <nav
          className="hidden shrink-0 items-center font-sans font-semibold uppercase lg:flex"
          style={{
            gap: 'clamp(0.85rem, 1.55vw, 2.25rem)',
            fontSize: 'clamp(0.66rem, 0.84vw, 0.85rem)',
            letterSpacing: 'clamp(0.06em, 0.12vw, 0.16em)',
          }}
        >
          {navLinks.map((item) => {
            const isActive = isActivePath(item.path);
            const textStyle = light
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
                className={`relative whitespace-nowrap py-2 transition-colors duration-200 ${textStyle}`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                      light ? 'bg-[#354438]' : 'bg-[#D4BF95]'
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* 3. CTA */}
        <Link
          to="/booking"
          className={`hidden shrink-0 whitespace-nowrap border font-sans font-bold uppercase transition-all duration-300 lg:inline-block ${
            light
              ? 'bg-[#354438] text-[#F7F4EE] border-[#354438] hover:bg-[#1E211E] hover:border-[#1E211E]'
              : 'bg-white/15 text-white border-white/60 backdrop-blur-sm shadow-sm hover:bg-white hover:text-[#1E211E]'
          }`}
          style={{
            fontSize: 'clamp(0.64rem, 0.8vw, 0.82rem)',
            letterSpacing: 'clamp(0.06em, 0.12vw, 0.16em)',
            padding: 'clamp(0.6rem, 0.8vw, 0.8rem) clamp(0.9rem, 1.6vw, 1.5rem)',
          }}
        >
          Book a Consultation
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
          className={`shrink-0 p-2 transition-colors focus:outline-none lg:hidden ${
            light ? 'text-[#1E211E]' : 'text-white'
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
            className="overflow-hidden border-b border-[#EFE9DE] bg-[#F7F4EE] shadow-xl lg:hidden"
          >
            <nav className="flex max-h-[75svh] flex-col gap-4 overflow-y-auto px-7 py-7 font-sans text-[15px] font-semibold uppercase tracking-widest">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-1.5 transition-colors ${
                    isActivePath(item.path)
                      ? 'text-[#354438] font-bold'
                      : 'text-[#1E211E] hover:text-[#354438]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex flex-col gap-3.5 border-t border-[#EFE9DE] pt-5">
                <Link
                  to="/booking"
                  className="w-full bg-[#354438] py-3.5 text-center text-[14px] font-bold uppercase tracking-wider text-[#F7F4EE] transition-colors hover:bg-[#1E211E]"
                >
                  Book a Consultation
                </Link>
                <div className="flex items-center justify-center gap-2 text-[13px] font-medium normal-case tracking-normal text-[#7B8875]">
                  <ShieldCheck size={16} />
                  <span>Licensed, Insured &amp; DBS Vetted</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}