import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | 'imprint' | null

  return (
    <>
      <footer className="bg-charcoal text-cream pt-14 pb-8 border-t border-charcoal">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-cream/10">
            {/* Brand Column */}
            <div className="md:col-span-4 space-y-4">
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] text-white block">
                  PAW & PEMBERLEY
                </span>
                <span className="text-[10px] tracking-[0.25em] text-cream/50 uppercase block mt-0.5">
                  Private Pet Care • Est. 2018
                </span>
              </div>
              <p className="text-cream/70 text-xs font-sans font-light leading-relaxed max-w-sm">
                Dedicated private pet care, bespoke companion concierge, and distinguished home pet services managed with utmost devotion, discretion, and dual UK/EU compliance.
              </p>
              <div className="flex items-center space-x-2 text-gold-light text-xs tracking-wider uppercase font-sans">
                <ShieldCheck size={16} />
                <span>UK & EU Regulated • Background Checked Stewards</span>
              </div>
            </div>

            {/* Navigation - Synced with App.jsx Routes */}
            <div className="md:col-span-2 space-y-3">
              <p className="text-[11px] font-sans font-semibold tracking-widest text-gold uppercase">Navigation</p>
              <ul className="space-y-2 text-xs tracking-wider uppercase font-sans text-cream/70">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
                <li><Link to="/booking" className="hover:text-white transition-colors">Consultation</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-[11px] font-sans font-semibold tracking-widest text-gold uppercase">Contact Concierge</p>
              
              <div className="space-y-1.5 text-xs font-sans text-cream/80">
                <p className="font-medium text-white tracking-wide">PAW & PEMBERLEY UK</p>
                <p className="text-cream/60">United Kingdom Operations</p>
                <p className="text-cream/70">Vijay Bhalla</p>
                <p className="flex items-center gap-1.5 text-cream/80 pt-0.5">
                  <Phone size={13} className="text-gold-light shrink-0" />
                  <a href="tel:+447791000000" className="hover:text-white transition-colors">
                    +44 7791 000000
                  </a>
                </p>
                <p className="flex items-center gap-1.5 text-cream/80">
                  <Mail size={13} className="text-gold-light shrink-0" />
                  <a href="mailto:info@pawandpemberley.com" className="hover:text-white transition-colors">
                    info@pawandpemberley.com
                  </a>
                </p>
              </div>

              <div className="pt-2 border-t border-cream/10 text-[11px] text-cream/60 leading-relaxed font-sans">
                <p className="flex items-start gap-1">
                  <MapPin size={13} className="text-gold-light shrink-0 mt-0.5" />
                  <span>United Kingdom & European Operations</span>
                </p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-[11px] font-sans font-semibold tracking-widest text-gold uppercase">The Pemberley Journal</p>
              <p className="text-xs font-sans text-cream/70 leading-relaxed font-light">
                Subscribe to receive seasonal pet care advisories, private updates, and regional journal dispatches.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-cream/5 border border-cream/20 px-3 py-2 text-xs text-white placeholder-cream/40 focus:outline-none focus:border-gold w-full"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to journal"
                  className="bg-gold px-3 text-charcoal hover:bg-gold-light transition-colors"
                >
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-cream/50 font-sans tracking-wider">
            <p>© 2026 Atsewa GmbH. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 sm:space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Instagram</span>
              </a>

              <button
                type="button"
                onClick={() => setActiveModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy (UK & EU GDPR)
              </button>
              <button
                type="button"
                onClick={() => setActiveModal('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
              <button
                type="button"
                onClick={() => setActiveModal('imprint')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Legal Notice & Impressum
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal View for Privacy / Terms / Legal Notice */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-ivory border border-cream text-charcoal w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xs p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-charcoal/60 hover:text-charcoal p-1 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Privacy Policy Modal */}
            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-sans tracking-widest text-gold font-semibold">
                  Paw & Pemberley • Regulatory Compliance
                </span>
                <h3 className="font-serif text-2xl font-medium text-charcoal">Privacy Policy (UK & EU GDPR)</h3>
                
                <div className="text-xs font-sans text-charcoal/80 space-y-4 leading-relaxed">
                  <p>
                    Paw & Pemberley (brand of <strong>Atsewa GmbH</strong>) operates under strict data protection protocols in full compliance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong>, the <strong>Data Protection Act 2018 (UK)</strong>, and the <strong>EU General Data Protection Regulation (Regulation (EU) 2016/679 - GDPR)</strong> along with the <strong>Austrian Data Protection Act (Datenschutzgesetz - DSG)</strong>.
                  </p>

                  <div className="border border-charcoal/10 p-3 rounded-xs space-y-2 bg-cream/20">
                    <p className="font-semibold text-charcoal text-[11px] uppercase tracking-wider text-gold">
                      1. Joint Data Controllers & Operations
                    </p>
                    <p>
                      <strong>United Kingdom:</strong> Paw & Pemberley UK, represented by Vijay Bhalla (Contact: <em>info@pawandpemberley.com</em>).<br />
                      <strong>European Union / Headquarters:</strong> Atsewa GmbH, Gerhardusgasse 29/15, 1200 Vienna, Austria (Corporate Contact: <em>info@atsewa.com</em>).
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-charcoal text-[11px] uppercase tracking-wider">
                      2. Categories of Personal Data & Legal Basis
                    </p>
                    <p>
                      Under <strong>Article 6(1)(b) UK & EU GDPR</strong> (Contractual Necessity), we collect identity details, residential access coordinates, concierge booking preferences, and canine medical/vaccination records exclusively to administer dedicated care services safely.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-charcoal text-[11px] uppercase tracking-wider">
                      3. Cross-Border Data Transfers (UK - EEA)
                    </p>
                    <p>
                      Data transfer between our UK branch and Austrian European headquarters operates pursuant to mutual <strong>Adequacy Regulations</strong> recognized under both UK law and the European Commission's adequacy decisions, ensuring an unbroken standard of protection without third-party exposure.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-charcoal text-[11px] uppercase tracking-wider">
                      4. Data Subject Rights & Supervisory Authorities
                    </p>
                    <p>
                      You retain rights to access, rectify, restrict, object to processing, or demand erasure of personal data under <strong>Articles 15–22 GDPR</strong>. UK residents may escalate concerns to the <strong>Information Commissioner's Office (ICO)</strong>, while European Union clients may contact the Austrian Data Protection Authority (<strong>Österreichische Datenschutzbehörde - DSB</strong>).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Terms & Conditions Modal */}
            {activeModal === 'terms' && (
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-sans tracking-widest text-gold font-semibold">
                  Paw & Pemberley Legal
                </span>
                <h3 className="font-serif text-2xl font-medium text-charcoal">Terms & Conditions (UK & European Framework)</h3>
                
                <div className="text-xs font-sans text-charcoal/80 space-y-4 leading-relaxed">
                  <p>
                    These Terms & Conditions govern private pet care services, consultations, and concierge bookings arranged through Paw & Pemberley, operated internationally under <strong>Atsewa GmbH</strong>.
                  </p>

                  <div className="space-y-1.5">
                    <p className="font-semibold text-charcoal text-[11px] uppercase tracking-wider">
                      1. Consumer Rights & Statutory Cooling-Off
                    </p>
                    <p>
                      In alignment with the <strong>UK Consumer Rights Act 2015</strong> and the <strong>EU Consumer Rights Directive (2011/83/EU)</strong>, clients booking digital consultations or pre-scheduled concierge services hold standard statutory cancellation rights, which may be modified upon express request for emergency/immediate service commencement.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p className="font-semibold text-charcoal text-[11px] uppercase tracking-wider">
                      2. Service Standards & Animal Welfare
                    </p>
                    <p>
                      Every pet assignment conforms directly to the <strong>UK Animal Welfare Act 2006</strong> and relevant <strong>European Animal Health & Welfare Regulations</strong>. All pets must possess up-to-date mandatory vaccinations and microchip documentation before service confirmation.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p className="font-semibold text-charcoal text-[11px] uppercase tracking-wider">
                      3. Cancellations & Rescheduling
                    </p>
                    <p>
                      Notice must be submitted a minimum of 24 hours prior to appointment execution for complete credit allocation or rescheduling. Late cancellations within 24 hours are subject to standard retainer fees.
                    </p>
                  </div>

                  <div className="border-t border-charcoal/10 pt-2 space-y-1">
                    <p className="font-semibold text-charcoal text-[11px] uppercase tracking-wider">
                      4. Applicable Law & Jurisdictional Split
                    </p>
                    <p>
                      <strong>United Kingdom:</strong> Engagements contracted via Paw & Pemberley UK are governed by the Laws of <strong>England and Wales</strong>.<br />
                      <strong>European Union / Cross-Border:</strong> Corporate agreements, licensing, and overarching holding actions are governed under <strong>Austrian substantive law</strong> (Commercial Court Vienna).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Legal Notice / Impressum Modal */}
            {activeModal === 'imprint' && (
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-sans tracking-widest text-gold font-semibold">
                  Corporate & Statutory Disclosures
                </span>
                <h3 className="font-serif text-2xl font-medium text-charcoal">Legal Notice & Impressum</h3>
                
                <div className="text-xs font-sans text-charcoal/80 space-y-4 leading-relaxed">
                  {/* UK Operations Section */}
                  <div className="border border-charcoal/15 p-3.5 rounded-xs space-y-1.5 bg-cream/30">
                    <p className="font-semibold text-charcoal tracking-widest uppercase text-[11px] text-gold">
                      United Kingdom Operations (UK Branch)
                    </p>
                    <p><strong>Trading Name:</strong> Paw & Pemberley UK (Private Pet Care • Est. 2018)</p>
                    <p><strong>Regional Director / Representative:</strong> Vijay Bhalla</p>
                    <p><strong>Contact Telephone:</strong> +44 7791 000000</p>
                    <p><strong>Direct Email:</strong> info@pawandpemberley.com</p>
                    <p><strong>Operating Territory:</strong> United Kingdom (England & Wales)</p>
                    <p><strong>Applicable UK Statutory Law:</strong> UK Companies Act 2006 • Consumer Rights Act 2015</p>
                  </div>

                  {/* European Operations / Impressum Section */}
                  <div className="border border-charcoal/15 p-3.5 rounded-xs space-y-1.5 bg-cream/30">
                    <p className="font-semibold text-charcoal tracking-widest uppercase text-[11px] text-gold">
                      European Headquarters & Holding (Impressum gem. § 5 ECG / § 14 UGB)
                    </p>
                    <p><strong>Legal Entity:</strong> Atsewa GmbH</p>
                    <p><strong>Registered Address:</strong> Gerhardusgasse 29/15, 1200 Vienna, Austria (Europe)</p>
                    <p><strong>Company Register Number:</strong> FN 587727f</p>
                    <p><strong>Commercial Register Court:</strong> Handelsgericht Wien (Commercial Court Vienna)</p>
                    <p><strong>VAT / UID Identification:</strong> ATU78535925</p>
                    <p><strong>Supervisory Trade Authority:</strong> Magistratisches Bezirksamt des XX. Bezirkes, Wien</p>
                    <p><strong>Chamber Membership:</strong> Austrian Federal Economic Chamber (WKO Wien)</p>
                    <p><strong>Corporate Contact:</strong> info@atsewa.com | www.atsewa.com</p>
                    <p><strong>Applicable Austrian & EU Law:</strong> Austrian Commercial Code (UGB), Trade Regulation Act (GewO), EU E-Commerce Directive (ECG)</p>
                  </div>

                  {/* Online Dispute Resolution */}
                  <div className="text-[11px] text-charcoal/70 space-y-1">
                    <p className="font-medium text-charcoal">European Online Dispute Resolution (ODR):</p>
                    <p>
                      Consumers in the European Union may resolve consumer disputes via the official European Commission platform: 
                      <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline ml-1 hover:text-charcoal">
                        ec.europa.eu/consumers/odr
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}