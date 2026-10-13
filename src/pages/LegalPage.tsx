import React from 'react';
import { Link } from '../context/RouterContext';
import { Shield, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="pt-20 bg-[#F7F5F0] text-[#1A1A1A]">
      {/* Header */}
      <section className="bg-[#0B1F3A] text-[#F7F5F0] py-20 border-b border-white/10">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="space-y-4">
            <Link
              to="/"
              className="text-xs text-[#C9A227] hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#F7F5F0]">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Use'}
            </h1>
            <p className="text-xs md:text-sm text-[#F7F5F0]/70">
              Mosun Investments Limited · Effective Date: October 2026 · Chicago, IL & Lagos, NG
            </p>
          </div>
        </div>
      </section>

      {/* Legal Prose */}
      <section className="py-16 max-w-[1000px] mx-auto px-6">
        <div className="bg-white border border-[#0B1F3A]/10 p-8 md:p-14 rounded-sm space-y-8 text-sm text-[#1A1A1A]/80 leading-relaxed font-light">
          {isPrivacy ? (
            <>
              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  1. Institutional Commitment to Privacy
                </h2>
                <p>
                  Mosun Investments Limited ("Mosun Investments," "we," "our," or "the Company"), a holding company operating in Chicago, Illinois, USA and Lagos, Nigeria, is committed to safeguarding the privacy and confidentiality of partners, clients, institutional collaborators, and site visitors.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  2. Scope & Data Collection
                </h2>
                <p>
                  This Privacy Policy applies to data collected across our corporate web portal (mosuninvestmentsltd.com), including enquiries submitted to our commercial brands (Mosun Foods, Mosun Drinks, MSD, Mosun Property) and the SDG Advisory Division. We collect only information voluntarily submitted through executive enquiry forms (e.g., name, corporate email, institutional affiliation, project scope) and anonymous aggregated visitor analytics.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  3. Use of Information
                </h2>
                <p>
                  Information gathered is utilized exclusively to evaluate bilateral trade opportunities, process wholesale and commercial requests, fulfill advisory mandates under the SDG Advisory Division, and maintain regulatory compliance with transatlantic commercial authorities. We do not sell, rent, or monetize your institutional information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  4. International Data Transfers
                </h2>
                <p>
                  As a bilateral holding company with offices in the United States and the Federal Republic of Nigeria, data provided may be accessed by authorized corporate officers located across both jurisdictions in accordance with standard international data governance safeguards.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  5. Contact Corporate Compliance
                </h2>
                <p>
                  Questions regarding this Privacy Policy or requests to remove your institutional contact records may be directed to our executive compliance officer at <span className="font-semibold text-[#0B1F3A]">compliance@mosuninvestmentsltd.com</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and utilizing this website (mosuninvestmentsltd.com), you acknowledge and agree to be bound by these Terms of Use on behalf of yourself and any organization you represent. If you do not accept these terms, you must refrain from utilizing this portal.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  2. Nature of Holding Company Information
                </h2>
                <p>
                  The materials, statistics, and editorial statements published on this portal are provided for informational and partner-orientation purposes regarding Mosun Investments Limited and its operating entities (Mosun Foods, Mosun Drinks, MSD, Mosun Property, and the SDG Advisory Division). Nothing herein constitutes a formal securities prospectus or binding bilateral contract until executed via signed definitive agreement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  3. Independent Operating Brands & External Sites
                </h2>
                <p>
                  Mosun Foods maintains an independent retail ecommerce storefront located at <a href="https://mosunfoods.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:underline font-semibold">mosunfoods.com</a>. Retail purchases, logistics terms, and individual consumer consumer returns are governed by the specific terms published on that respective commercial property.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  4. SDG Advisory Division Memoranda
                </h2>
                <p>
                  Institutional statements regarding the Sustainable Development Goals (SDGs 2, 3, 4, 8, 9) reflect advisory frameworks developed by the division led by Adebowale Adetule, MBA Marketing Management. Public-private partnerships and governmental co-advisory relationships are governed by explicit institutional memoranda of understanding (MoU).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  5. Governing Law
                </h2>
                <p>
                  These terms shall be governed and interpreted under the commercial statutes of the State of Illinois, United States of America, without prejudice to bilateral regulatory jurisdictions in the Federal Republic of Nigeria.
                </p>
              </div>
            </>
          )}

          <div className="pt-8 border-t border-[#0B1F3A]/10 text-xs text-[#1A1A1A]/60 flex items-center justify-between">
            <span>Mosun Investments Limited</span>
            <span>Chicago, IL • Lagos, NG</span>
          </div>
        </div>
      </section>
    </div>
  );
};
