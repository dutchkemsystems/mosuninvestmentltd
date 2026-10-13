import React, { useState, useEffect } from 'react';
import { Mail, MapPin, CheckCircle2, Send, Clock, Hash } from 'lucide-react';
import { submitEnquiry, EnquirySubmission } from '../services/enquiryService';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'General Holding Company Enquiry',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [completedSubmission, setCompletedSubmission] = useState<EnquirySubmission | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  // Automatically read URL parameters on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const brand = params.get('brand');
      const subjectParam = params.get('subject');

      if (brand === 'mosun-foods' || subjectParam?.includes('Foods')) {
        setFormData((prev) => ({ ...prev, subject: 'Mosun Foods Wholesale & Distribution' }));
      } else if (brand === 'mosun-drinks' || subjectParam?.includes('Drinks')) {
        setFormData((prev) => ({ ...prev, subject: 'Mosun Drinks Hospitality Partnership' }));
      } else if (brand === 'msd' || subjectParam?.includes('MSD')) {
        setFormData((prev) => ({ ...prev, subject: 'MSD Strategic Ventures & Capital' }));
      } else if (brand === 'mosun-property' || subjectParam?.includes('Property')) {
        setFormData((prev) => ({ ...prev, subject: 'Mosun Property Development' }));
      } else if (brand === 'sdg-advisory' || subjectParam?.includes('SDG')) {
        setFormData((prev) => ({ ...prev, subject: 'SDG Advisory Division Partnership' }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn('Spam submission detected.');
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      alert('Please wait a moment before sending another message.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitEnquiry({
        fullName: formData.name,
        email: formData.email,
        organisation: formData.organization,
        subjectOrDomain: formData.subject,
        scopeOrMessage: formData.message,
        type: 'COMMERCIAL_CONTACT',
      });

      setCompletedSubmission(result.submission);
      setSubmitStatus('success');
      setLastSubmitTime(now);
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: 'General Holding Company Enquiry',
        message: '',
        honeypot: '',
      });
    } catch (err) {
      console.error('Submission failed', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-[#F7F5F0] text-[#1A1A1A]">
      {/* Hero Header */}
      <section className="bg-[#0B1F3A] text-[#F7F5F0] py-24 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227]">
              Executive Dialogue
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F7F5F0]">
              Partner with Mosun Investments
            </h1>
            <p className="text-lg md:text-xl text-[#F7F5F0]/85 font-light leading-relaxed">
              Engage our transatlantic corporate office regarding bilateral distribution contracts, property ventures, or institutional advisory mandates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-20 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#0B1F3A]/10 p-8 rounded-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-[#0B1F3A] border-b border-[#0B1F3A]/10 pb-3">
                Headquarters & Regional Offices
              </h3>

              {/* Chicago */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>North America Headquarters</span>
                </div>
                <h4 className="font-serif font-bold text-[#0B1F3A] text-lg">
                  Chicago, Illinois
                </h4>
                <p className="text-xs md:text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Cook County, Illinois, United States of America
                </p>
                <p className="text-xs text-[#1A1A1A]/60">
                  Focus: Midwest Cold Storage Logistics, Food Import Compliance & Executive Holding
                </p>
              </div>

              {/* Lagos */}
              <div className="space-y-2 pt-4 border-t border-[#0B1F3A]/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>West Africa Headquarters</span>
                </div>
                <h4 className="font-serif font-bold text-[#0B1F3A] text-lg">
                  Lagos, Nigeria
                </h4>
                <p className="text-xs md:text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Lekki Phase 1 / Lagos Island, Lagos State, Nigeria
                </p>
                <p className="text-xs text-[#1A1A1A]/60">
                  Focus: Sourcing Collectives, Export Quality Assurance, Real Estate Assets
                </p>
              </div>

              {/* Direct Mail */}
              <div className="pt-4 border-t border-[#0B1F3A]/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Corporate Inquiries</span>
                </div>
                <p className="text-sm font-medium text-[#0B1F3A]">
                  contact@mosuninvestmentsltd.com
                </p>
                <p className="text-xs text-[#1A1A1A]/60">
                  Primary Domain: mosuninvestmentsltd.com
                </p>
              </div>
            </div>

            {/* Existing Brand Callout */}
            <div className="bg-[#0B1F3A] text-[#F7F5F0] p-6 rounded-sm space-y-3">
              <h4 className="text-base font-serif font-bold text-[#F7F5F0]">
                Looking for Retail Grocery Orders?
              </h4>
              <p className="text-xs text-[#F7F5F0]/80 leading-relaxed">
                For customer orders of dried catfish, peppers, and pantry provisions, please order directly through the retail store:
              </p>
              <a
                href="https://mosunfoods.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] px-4 py-2 rounded-sm transition-colors"
              >
                Visit mosunfoods.com ↗
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#0B1F3A]/10 p-8 md:p-10 rounded-sm shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0B1F3A]">
                  Executive Enquiry Form
                </h2>
                <p className="text-xs md:text-sm text-[#1A1A1A]/70 mt-1">
                  Please provide details about your organization and area of commercial or advisory interest.
                </p>
              </div>

              {submitStatus === 'success' ? (
                <div className="text-center py-10 space-y-5">
                  <CheckCircle2 className="w-12 h-12 text-[#C9A227] mx-auto" />
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#0B1F3A]">
                      Enquiry Registered
                    </h3>
                    <p className="text-xs text-[#C9A227] font-mono font-semibold uppercase tracking-wider mt-1">
                      Tracking Reference: {completedSubmission?.trackingCode || 'MOS-2026-REC'}
                    </p>
                  </div>
                  
                  <div className="bg-[#F7F5F0] border border-[#0B1F3A]/10 p-4 rounded-sm text-left max-w-md mx-auto space-y-2 text-xs text-[#1A1A1A]/80">
                    <div className="flex justify-between">
                      <span className="text-[#1A1A1A]/60">Assigned Division:</span>
                      <span className="font-semibold text-[#0B1F3A]">{completedSubmission?.subjectOrDomain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1A1A1A]/60">Status:</span>
                      <span className="font-semibold text-[#C9A227]">{completedSubmission?.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1A1A1A]/60">Timestamp:</span>
                      <span className="font-mono text-[11px]">{completedSubmission?.timestamp ? new Date(completedSubmission.timestamp).toLocaleString() : 'Just now'}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#1A1A1A]/75 max-w-md mx-auto leading-relaxed">
                    Your enquiry has been automatically logged in our corporate pipeline. An executive officer will review your proposal and respond directly.
                  </p>
                  
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] rounded-sm hover:bg-[#d8b030] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="contact_bot_field"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="First and Last Name"
                        className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Company or Institution
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Organization Name"
                        className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Subject / Division *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors cursor-pointer"
                      >
                        <option value="General Holding Company Enquiry">General Holding Company Enquiry</option>
                        <option value="Mosun Foods Wholesale & Distribution">Mosun Foods (Wholesale / Trade)</option>
                        <option value="Mosun Drinks Hospitality Partnership">Mosun Drinks (Beverage Distribution)</option>
                        <option value="MSD Strategic Ventures & Capital">MSD (Investment & Trade Financing)</option>
                        <option value="Mosun Property Development">Mosun Property (Real Estate Holdings)</option>
                        <option value="SDG Advisory Division Partnership">SDG Advisory Division (Institutional Impact)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                      Message / Proposal Scope *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the nature of your interest, timeline, and expectations..."
                      className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-sm border border-red-200">
                      An error occurred while submitting your message. Please try again or email us directly at contact@mosuninvestmentsltd.com.
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] disabled:opacity-50 transition-colors rounded-sm cursor-pointer shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Executive Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
