import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Check, AlertCircle } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    petName: '',
    petType: 'Canine',
    petAge: '',
    service: 'Private Dog Walking',
    preferredDate: '',
    requirements: '',
    termsAgreed: false,
  });

  const stepsList = [
    'About You',
    'About Your Pet',
    'Choose Service',
    'Preferred Date',
    'Requirements',
    'Confirmation',
  ];

  // =========================
  // VALIDATION
  // =========================
  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Full name is required.';
      } else if (formData.name.trim().length < 3) {
        newErrors.name = 'Name must be at least 3 characters.';
      }

      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required.';
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
      ) {
        newErrors.email = 'Please enter a valid email address.';
      }

      if (!formData.phone.trim()) {
        newErrors.phone = 'Telephone number is required.';
      } else if (
        !/^(?:(?:\+44\s?|0)(?:\d\s?){9,10}|\+?[0-9\s-]{10,15})$/.test(
          formData.phone.trim()
        )
      ) {
        newErrors.phone =
          'Please provide a valid phone number (e.g. +44 7... or 07...).';
      }

      if (!formData.postcode.trim()) {
        newErrors.postcode = 'Postal code is required.';
      } else if (formData.postcode.trim().length < 3) {
        newErrors.postcode = 'Please enter a valid postal area code.';
      }
    }

    if (currentStep === 2) {
      if (!formData.petName.trim()) {
        newErrors.petName = "Pet's name is required.";
      }

      if (!formData.petType.trim()) {
        newErrors.petType = 'Please specify breed or companion type.';
      }
    }

    if (currentStep === 3) {
      if (!formData.service) {
        newErrors.service = 'Please select a service option.';
      }
    }

    if (currentStep === 4) {
      if (!formData.preferredDate.trim()) {
        newErrors.preferredDate =
          'Please state your requested starting date or schedule.';
      }
    }

    if (currentStep === 6) {
      if (!formData.termsAgreed) {
        newErrors.termsAgreed =
          'Please confirm and accept consultation terms to proceed.';
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // =========================
  // NEXT STEP
  // =========================
  const nextStep = () => {
    if (validateStep(step)) {
      setStep((p) => Math.min(p + 1, 6));

      window.scrollTo({
        top: 120,
        behavior: 'smooth',
      });
    }
  };

  // =========================
  // PREVIOUS STEP
  // =========================
  const prevStep = () => {
    setErrors({});
    setStep((p) => Math.max(p - 1, 1));
  };

  // =========================
  // SUBMIT TO BACKEND
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(6)) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      console.log('📩 Sending consultation request...');

      const response = await fetch(
        'https://dogpet-1.onrender.com/api/booking',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.name,
            email: formData.email,
            phone: formData.phone,
            postcode: formData.postcode,
            petName: formData.petName,
            petType: formData.petType,
            petAge: formData.petAge,
            service: formData.service,
            preferredDate: formData.preferredDate,
            requirements: formData.requirements,
          }),
        }
      );

      const data = await response.json();

      console.log('📨 Backend response:', data);

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || 'Unable to submit consultation request.'
        );
      }

      console.log('✅ Consultation submitted successfully.');

      setIsSubmitted(true);
    } catch (error) {
      console.error('❌ Submission error:', error);

      setErrors({
        submit:
          error.message ||
          'Something went wrong while submitting your consultation.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // =========================
  // RESET FORM
  // =========================
  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    setErrors({});

    setFormData({
      name: '',
      email: '',
      phone: '',
      postcode: '',
      petName: '',
      petType: 'Canine',
      petAge: '',
      service: 'Private Dog Walking',
      preferredDate: '',
      requirements: '',
      termsAgreed: false,
    });

    window.scrollTo({
      top: 120,
      behavior: 'smooth',
    });
  };

  return (
    <div className="pt-28 pb-24 bg-ivory min-h-screen">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">

        {/* =========================
            PAGE HEADING
        ========================= */}
        <SectionHeading
          centered
          eyebrow="Initial Intake"
          title="Begin their Pemberley experience."
          subtitle="A tailored consultation intake ensuring complete peace of mind."
        />

        {/* =========================
            STEP PROGRESS
        ========================= */}
        <div className="flex justify-between items-center mb-10 border-b border-cream pb-6 overflow-x-auto gap-3">
          {stepsList.map((label, idx) => {
            const stepNum = idx + 1;
            const active = step === stepNum;
            const completed = step > stepNum;

            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 shrink-0"
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-medium transition-colors ${
                    active
                      ? 'bg-forest text-white'
                      : completed
                      ? 'bg-gold text-white'
                      : 'bg-cream text-charcoal/60'
                  }`}
                >
                  {completed ? <Check size={14} /> : stepNum}
                </span>

                <span
                  className={`text-xs uppercase tracking-wider hidden md:inline ${
                    active
                      ? 'text-charcoal font-bold'
                      : 'text-charcoal/50 font-medium'
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* =========================
            FORM CARD
        ========================= */}
        <div className="bg-white/60 border border-cream p-8 sm:p-12 shadow-xs rounded-xs">

          {/* =========================
              SUCCESS SCREEN
          ========================= */}
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">

              <div className="w-14 h-14 bg-forest/10 text-forest mx-auto rounded-full flex items-center justify-center">
                <Check size={28} />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
                Consultation Lodged
              </h3>

              <p className="text-base font-sans text-charcoal/80 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our concierge
                director will review{' '}
                <strong>{formData.petName}'s</strong> profile and reach out
                to schedule an in-home acquaintance visit.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-7 py-3 bg-charcoal text-cream text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-charcoal/80 transition-colors"
                >
                  Schedule Another Consultation
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* =========================
                  SUBMISSION ERROR
              ========================= */}
              {errors.submit && (
                <div className="mb-6 border border-red-200 bg-red-50/60 px-4 py-3">
                  <p className="flex items-center gap-2 text-sm text-red-600 font-medium">
                    <AlertCircle size={16} />
                    {errors.submit}
                  </p>
                </div>
              )}

              {/* =========================
                  STEP 1
              ========================= */}
              {step === 1 && (
                <div className="space-y-6">

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                    1. About You
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* NAME */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                        Full Name <span className="text-red-600">*</span>
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-ivory border px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-cream focus:border-forest'
                        }`}
                        placeholder="e.g. Charlotte Woodhouse"
                      />

                      {errors.name && (
                        <p className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1.5">
                          <AlertCircle size={14} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-ivory border px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-cream focus:border-forest'
                        }`}
                        placeholder="charlotte@domain.co.uk"
                      />

                      {errors.email && (
                        <p className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1.5">
                          <AlertCircle size={14} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* PHONE */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                        Telephone <span className="text-red-600">*</span>
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-ivory border px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-cream focus:border-forest'
                        }`}
                        placeholder="+44 7..."
                      />

                      {errors.phone && (
                        <p className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1.5">
                          <AlertCircle size={14} />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* POSTCODE */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                        Postcode / Area <span className="text-red-600">*</span>
                      </label>

                      <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className={`w-full bg-ivory border px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none transition-colors ${
                          errors.postcode
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-cream focus:border-forest'
                        }`}
                        placeholder="e.g. KT11, W1, or 1200 Vienna"
                      />

                      {errors.postcode && (
                        <p className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1.5">
                          <AlertCircle size={14} />
                          {errors.postcode}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* =========================
                  STEP 2
              ========================= */}
              {step === 2 && (
                <div className="space-y-6">

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                    2. About Your Companion
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* PET NAME */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                        Pet's Name <span className="text-red-600">*</span>
                      </label>

                      <input
                        type="text"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        className={`w-full bg-ivory border px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none transition-colors ${
                          errors.petName
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-cream focus:border-forest'
                        }`}
                        placeholder="e.g. Clementine"
                      />

                      {errors.petName && (
                        <p className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1.5">
                          <AlertCircle size={14} />
                          {errors.petName}
                        </p>
                      )}
                    </div>

                    {/* PET TYPE */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                        Pet Type / Breed <span className="text-red-600">*</span>
                      </label>

                      <input
                        type="text"
                        name="petType"
                        value={formData.petType}
                        onChange={handleChange}
                        className={`w-full bg-ivory border px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none transition-colors ${
                          errors.petType
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-cream focus:border-forest'
                        }`}
                        placeholder="e.g. Hungarian Vizsla / French Bulldog"
                      />

                      {errors.petType && (
                        <p className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1.5">
                          <AlertCircle size={14} />
                          {errors.petType}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* PET AGE */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                      Pet Age & Temperament (Optional)
                    </label>

                    <input
                      type="text"
                      name="petAge"
                      value={formData.petAge}
                      onChange={handleChange}
                      className="w-full bg-ivory border border-cream px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none focus:border-forest"
                      placeholder="e.g. 4 Years Old, calm and social"
                    />
                  </div>
                </div>
              )}

              {/* =========================
                  STEP 3
              ========================= */}
              {step === 3 && (
                <div className="space-y-6">

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                    3. Choose Your Service
                  </h3>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                      Desired Provision{' '}
                      <span className="text-red-600">*</span>
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full bg-ivory border px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none transition-colors ${
                        errors.service
                          ? 'border-red-500'
                          : 'border-cream focus:border-forest'
                      }`}
                    >
                      <option value="Private Dog Walking">
                        Private Dog Walking
                      </option>

                      <option value="Home Pet Sitting">
                        Home Pet Sitting
                      </option>

                      <option value="Luxury Countryside Boarding">
                        Luxury Countryside Boarding
                      </option>

                      <option value="Atelier Grooming">
                        Atelier Grooming
                      </option>

                      <option value="Puppy Care">
                        Puppy Care
                      </option>

                      <option value="Bespoke Pet Concierge">
                        Bespoke Pet Concierge
                      </option>
                    </select>

                    {errors.service && (
                      <p className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1.5">
                        <AlertCircle size={14} />
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* =========================
                  STEP 4
              ========================= */}
              {step === 4 && (
                <div className="space-y-6">

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                    4. Preferred Date or Schedule
                  </h3>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                      Commencing Dates / Frequency{' '}
                      <span className="text-red-600">*</span>
                    </label>

                    <input
                      type="text"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full bg-ivory border px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none transition-colors ${
                        errors.preferredDate
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-cream focus:border-forest'
                      }`}
                      placeholder="e.g. Starting 15th October, Monday to Friday mornings"
                    />

                    {errors.preferredDate && (
                      <p className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1.5">
                        <AlertCircle size={14} />
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* =========================
                  STEP 5
              ========================= */}
              {step === 5 && (
                <div className="space-y-6">

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                    5. Additional Requirements
                  </h3>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans font-bold text-charcoal/90 mb-2">
                      Specific Diet, Medication, or Sensitive Preferences
                    </label>

                    <textarea
                      rows={4}
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      className="w-full bg-ivory border border-cream px-4 py-3 text-sm sm:text-base text-charcoal focus:outline-none focus:border-forest"
                      placeholder="e.g. Raw diet routine, allergic to grain, prefers quiet woodland routes..."
                    />
                  </div>
                </div>
              )}

              {/* =========================
                  STEP 6
              ========================= */}
              {step === 6 && (
                <div className="space-y-6 text-sm sm:text-base font-sans text-charcoal">

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium mb-2">
                    6. Review & Lodgement
                  </h3>

                  <p className="text-charcoal/80 leading-relaxed">
                    Please review your booking details before lodging. Our
                    concierge director will coordinate an in-home acquaintance
                    visit.
                  </p>

                  {/* REVIEW */}
                  <div className="bg-ivory p-6 border border-cream space-y-3 text-sm sm:text-base">

                    <p>
                      <strong>Owner:</strong> {formData.name} ({formData.email})
                    </p>

                    <p>
                      <strong>Telephone:</strong> {formData.phone}
                    </p>

                    <p>
                      <strong>Location / Postcode:</strong>{' '}
                      {formData.postcode}
                    </p>

                    <p>
                      <strong>Companion:</strong> {formData.petName} (
                      {formData.petType}{' '}
                      {formData.petAge
                        ? `— ${formData.petAge}`
                        : ''}
                      )
                    </p>

                    <p>
                      <strong>Selected Provision:</strong>{' '}
                      {formData.service}
                    </p>

                    <p>
                      <strong>Schedule:</strong>{' '}
                      {formData.preferredDate}
                    </p>

                    {formData.requirements && (
                      <p>
                        <strong>Notes:</strong>{' '}
                        {formData.requirements}
                      </p>
                    )}
                  </div>

                  {/* TERMS */}
                  <div className="pt-2">

                    <label className="flex items-start gap-2.5 cursor-pointer select-none">

                      <input
                        type="checkbox"
                        name="termsAgreed"
                        checked={formData.termsAgreed}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 accent-forest rounded-xs cursor-pointer"
                      />

                      <span className="text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                        I agree to Paw & Pemberley's consultation terms and
                        confirm that my companion has up-to-date vaccinations.
                      </span>

                    </label>

                    {errors.termsAgreed && (
                      <p className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1.5">
                        <AlertCircle size={14} />
                        {errors.termsAgreed}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* =========================
                  NAVIGATION
              ========================= */}
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mt-10 pt-6 border-t border-cream">

                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={isSubmitting}
                    className="order-2 sm:order-1 flex-1 sm:flex-none sm:min-w-[160px] px-8 py-3.5 border border-cream text-xs sm:text-sm uppercase tracking-wider font-semibold text-charcoal hover:bg-cream/40 transition-colors disabled:opacity-50"
                  >
                    Previous
                  </button>
                ) : (
                  <div className="hidden sm:block sm:flex-none sm:min-w-[160px]" />
                )}

                {step < 6 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="order-1 sm:order-2 flex-1 sm:flex-none sm:min-w-[160px] px-8 py-3.5 bg-forest text-cream text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-forest/90 transition-colors"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="order-1 sm:order-2 flex-1 sm:flex-none sm:min-w-[160px] px-8 py-3.5 bg-gold text-charcoal text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? 'Sending...'
                      : 'Confirm Consultation'}
                  </button>
                )}

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}