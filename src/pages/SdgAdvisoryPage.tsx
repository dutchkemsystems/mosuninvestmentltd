import React, { useState } from 'react';
import { SDG_GOALS, SDG_PARTNER_STATEMENT, LEADERSHIP, BRANDS, siteImages } from '../content/site';
import { Link } from '../context/RouterContext';
import {
  ShieldCheck,
  HeartPulse,
  Briefcase,
  Factory,
  UtensilsCrossed,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Building2,
  FileCheck,
  Send
} from 'lucide-react';

export const SdgAdvisoryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    focusArea: 'Health System Strengthening',
    projectScope: '',
    honeypot: '', // anti-spam bot trap
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [completedSubmission, setCompletedSubmission] = useState<any>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const adebowale = LEADERSHIP[0]; // Adebowale Adetule

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      console.warn('Bot submission prevented.');
      return;
    }

    // Rate limit check (minimum 5 seconds between submits)
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      alert('Please wait a moment before submitting again.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { submitEnquiry } = await import('../services/enquiryService');
      const result = await submitEnquiry({
        fullName: formData.fullName,
        email: formData.email,
        organisation: formData.organisation,
        subjectOrDomain: formData.focusArea,
        scopeOrMessage: formData.projectScope,
        type: 'SDG_ADVISORY',
      });

      setCompletedSubmission(result.submission);
      setSubmitStatus('success');
      setLastSubmitTime(now);
      setFormData({
        fullName: '',
        organisation: '',
        email: '',
        focusArea: 'Health System Strengthening',
        projectScope: '',
        honeypot: '',
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-[#F7F5F0] text-[#1A1A1A]">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B1F3A] text-[#F7F5F0] py-24 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227] flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <span>Independent Impact Advisory Division</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F7F5F0] leading-tight">
              SDG Advisory Division
            </h1>
            <p className="text-lg md:text-xl text-[#F7F5F0]/85 font-light leading-relaxed">
              Where private cross-border grocery enterprise informs institutional impact strategy. Advising development finance, health authorities, and international bodies on systemic resiliency across West Africa and transatlantic corridors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FOR PARTNER ORGANISATIONS BLOCK (Exact 2-sentence requirement for SWDC/UN) */}
      <section className="py-12 max-w-[1280px] mx-auto px-6">
        <div className="bg-white border-2 border-[#C9A227]/40 rounded-sm p-8 md:p-10 shadow-sm relative">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227] mb-3">
            <Building2 className="w-4 h-4" />
            <span>For Partner Organisations (UN / SWDC / Bilateral Institutions)</span>
          </div>
          <p className="text-base md:text-lg font-serif italic text-[#0B1F3A] leading-relaxed">
            "{SDG_PARTNER_STATEMENT}"
          </p>
          <div className="mt-4 pt-4 border-t border-[#0B1F3A]/10 flex flex-wrap items-center justify-between text-xs text-[#1A1A1A]/70 gap-2">
            <span>Official Institutional Memorandum Designation</span>
            <span>Mosun Investments Limited · Corporate Advisory Board</span>
          </div>
        </div>
      </section>

      {/* 3. GOALS GRID (SDG 2, 3, 4, 8, 9) */}
      <section className="py-16 max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227] mb-2">
            Target Alignments
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A]">
            Sustainable Development Goals Matrix
          </h2>
          <p className="text-sm text-[#1A1A1A]/75 max-w-2xl mt-2">
            Structured advisory engagements mapped to verified UN Sustainable Development Goals, anchored by private sector supply chain execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SDG_GOALS.map((goal) => (
            <div
              key={goal.number}
              className="bg-white border border-[#0B1F3A]/10 rounded-sm p-7 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Goal Number Stamp */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-serif font-bold text-[#C9A227] tabular-nums">
                  SDG {goal.number}
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#0B1F3A]/70 bg-[#F7F5F0] px-2.5 py-1 rounded-sm">
                  {goal.badge}
                </span>
              </div>

              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-serif font-bold text-[#0B1F3A]">
                  {goal.name}
                </h3>
                <div className="text-xs text-[#C9A227] font-semibold tracking-wide uppercase">
                  {goal.tieIn}
                </div>
                <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                  <span className="font-semibold text-[#1A1A1A]">Focus: </span>
                  {goal.angle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0B1F3A]/10">
                <div className="text-[11px] text-[#1A1A1A]/60 uppercase tracking-wider font-semibold mb-1">
                  Advisory Outcome
                </div>
                <p className="text-xs text-[#0B1F3A] font-medium leading-relaxed">
                  {goal.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "WHAT WE DO" — 3 COLUMNS */}
      <section className="py-20 bg-[#0B1F3A] text-[#F7F5F0] border-y border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227] mb-2">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F7F5F0]">
              What We Do
            </h2>
            <p className="text-sm text-[#F7F5F0]/75 mt-2">
              Translating real commercial supply chain data into high-leverage policy and institutional programme advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-white/[0.04] border border-white/10 p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#C9A227]/20 flex items-center justify-center text-[#C9A227]">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#F7F5F0]">
                Health System Strengthening
              </h3>
              <p className="text-xs md:text-sm text-[#F7F5F0]/75 leading-relaxed font-light">
                We advise health agencies on cold-chain integrity, last-mile pharmaceutical distribution, and maternal nutritional fortification. Our model draws from international perishable logistics to ensure vital supplies reach secondary and tertiary clinics reliably.
              </p>
              <ul className="pt-2 space-y-1.5 text-xs text-[#C9A227]">
                <li>· Cold chain transport protocol design</li>
                <li>· Community clinic nutrition supply audit</li>
                <li>· Public-private partnership framework</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-white/[0.04] border border-white/10 p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#C9A227]/20 flex items-center justify-center text-[#C9A227]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#F7F5F0]">
                Youth Employment
              </h3>
              <p className="text-xs md:text-sm text-[#F7F5F0]/75 leading-relaxed font-light">
                Structuring vocational pathways that absorb young graduates into technical agro-processing, quality assurance, and multimodal freight operations. We help development funds construct formal apprenticeship pipelines with verifiable wage guarantees.
              </p>
              <ul className="pt-2 space-y-1.5 text-xs text-[#C9A227]">
                <li>· Technical trade curriculum design</li>
                <li>· Export compliance apprenticeships</li>
                <li>· Diaspora mentoring & venture networks</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-white/[0.04] border border-white/10 p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#C9A227]/20 flex items-center justify-center text-[#C9A227]">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#F7F5F0]">
                Local Industrialization
              </h3>
              <p className="text-xs md:text-sm text-[#F7F5F0]/75 leading-relaxed font-light">
                Stopping value loss from raw commodity exports by guiding capital into domestic food-processing, standardized packaging facilities, and solar-supported aggregation hubs across Nigerian industrial corridors.
              </p>
              <ul className="pt-2 space-y-1.5 text-xs text-[#C9A227]">
                <li>· Post-harvest value-add factory modeling</li>
                <li>· FDA & international sanitary compliance</li>
                <li>· Clean energy warehousing integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP BIO FOR ADEBOWALE ADETULE */}
      <section className="py-20 max-w-[1280px] mx-auto px-6">
        <div className="bg-white border border-[#0B1F3A]/10 rounded-sm p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-80 rounded-sm overflow-hidden border border-[#0B1F3A]/10 shadow-md bg-[#0B1F3A]">
                <img
                  src={adebowale.image}
                  alt={adebowale.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227]">
                Division Leadership
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">
                {adebowale.name}
              </h2>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]/70 flex items-center gap-2">
                <span>{adebowale.title}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#C9A227]">{adebowale.credentials}</span>
              </div>
              <p className="text-sm md:text-base text-[#1A1A1A]/85 leading-relaxed pt-2">
                {adebowale.bio}
              </p>
              <p className="text-xs md:text-sm text-[#1A1A1A]/75 leading-relaxed">
                Adebowale brings rigorous corporate discipline and market analytics to complex socio-economic challenges. Having guided bilateral initiatives spanning North American diaspora markets and West African agro-ecosystems, his team delivers advisory that is culturally grounded, commercially sustainable, and institutionally defensible.
              </p>
              <div className="pt-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  Executive Board Member
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#C9A227]" />
                  Mosun Investments Limited
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "WORK WITH US" — ENQUIRY FORM */}
      <section id="advisory-enquiry" className="py-20 bg-[#EFECE6]/60 border-t border-[#0B1F3A]/10">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center space-y-3 mb-10">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227]">
              Institutional Engagement
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A]">
              Work With Our Advisory Team
            </h2>
            <p className="text-sm text-[#1A1A1A]/75 max-w-lg mx-auto">
              Initiate a confidential advisory dialogue for government bodies, multilateral institutions, or private foundation initiatives.
            </p>
          </div>

          <div className="bg-white border border-[#0B1F3A]/10 rounded-sm p-8 shadow-sm">
            {submitStatus === 'success' ? (
              <div className="text-center py-10 space-y-5">
                <CheckCircle2 className="w-12 h-12 text-[#C9A227] mx-auto" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#0B1F3A]">
                    Advisory Scope Registered
                  </h3>
                  <p className="text-xs text-[#C9A227] font-mono font-semibold uppercase tracking-wider mt-1">
                    Institutional Tracking: {completedSubmission?.trackingCode || 'SDG-2026-REG'}
                  </p>
                </div>

                <div className="bg-[#F7F5F0] border border-[#0B1F3A]/10 p-4 rounded-sm text-left max-w-md mx-auto space-y-2 text-xs text-[#1A1A1A]/80">
                  <div className="flex justify-between">
                    <span className="text-[#1A1A1A]/60">Advisory Domain:</span>
                    <span className="font-semibold text-[#0B1F3A]">{completedSubmission?.subjectOrDomain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1A1A1A]/60">Organization:</span>
                    <span className="font-semibold text-[#0B1F3A]">{completedSubmission?.organisation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1A1A1A]/60">Status:</span>
                    <span className="font-semibold text-[#C9A227]">Assigned to Executive Review</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1A1A1A]/60">Timestamp:</span>
                    <span className="font-mono text-[11px]">{completedSubmission?.timestamp ? new Date(completedSubmission.timestamp).toLocaleString() : 'Just now'}</span>
                  </div>
                </div>

                <p className="text-sm text-[#1A1A1A]/75 max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your institutional scope. Adebowale Adetule and the SDG Advisory Division will review the memorandum specifications and respond within 2 business days.
                </p>
                
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] rounded-sm hover:bg-[#d8b030] cursor-pointer"
                >
                  Submit Another Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="user_nickname_phone"
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
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Amina Bello"
                      className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                      Organization / Agency *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Regional Development Agency"
                      className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organisation.org"
                      className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                      Advisory Domain *
                    </label>
                    <select
                      value={formData.focusArea}
                      onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors cursor-pointer"
                    >
                      <option value="Health System Strengthening">Health System Strengthening (SDG 3)</option>
                      <option value="Youth Employment & Decent Work">Youth Employment & Decent Work (SDG 8)</option>
                      <option value="Local Agro-Industrialization">Local Agro-Industrialization (SDG 9)</option>
                      <option value="Vocational Education & Trade">Vocational Education & Trade (SDG 4)</option>
                      <option value="Food Security & Nutrition Corridor">Food Security & Nutrition (SDG 2)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                    Brief Project Scope / Institutional Request *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder="Describe program goals, geographical territory, timeline, and requested advisory deliverables..."
                    className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0]/50 border border-[#0B1F3A]/20 rounded-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] disabled:opacity-50 transition-colors rounded-sm cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Scope...</span>
                    ) : (
                      <>
                        <span>Submit Advisory Scope</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. RELATED BRANDS STRIP (Mosun Foods, Mosun Drinks) with SDG 2 rationale */}
      <section className="py-20 max-w-[1280px] mx-auto px-6 border-t border-[#0B1F3A]/10">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227] mb-1">
            Enterprise Grounding
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0B1F3A]">
            Commercial Enterprises Powering SDG 2 (Zero Hunger)
          </h3>
          <p className="text-xs md:text-sm text-[#1A1A1A]/75 mt-2">
            Our advisory recommendations are proven by active transatlantic operations in staple food access and natural botanical nutrition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mosun Foods */}
          <div className="bg-white border border-[#0B1F3A]/10 rounded-sm p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-serif font-bold text-[#0B1F3A]">Mosun Foods</h4>
                <span className="text-[11px] text-[#C9A227] font-semibold uppercase tracking-wider">SDG 2 Lead</span>
              </div>
              <p className="text-xs md:text-sm text-[#1A1A1A]/80 leading-relaxed">
                <span className="font-semibold text-[#0B1F3A]">How it supports SDG 2: </span>
                Guarantees direct commercial offtake contracts for rural Nigerian farmers while bringing affordable, protein-dense sun-dried catfish and authentic food staples to diaspora communities.
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-[#0B1F3A]/5">
              <Link to="/brands/mosun-foods" className="text-xs font-semibold text-[#0B1F3A] hover:text-[#C9A227] flex items-center gap-1">
                <span>View Brand</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <a
                href="https://mosunfoods.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C9A227] hover:underline flex items-center gap-1"
              >
                <span>mosunfoods.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Mosun Drinks */}
          <div className="bg-white border border-[#0B1F3A]/10 rounded-sm p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-serif font-bold text-[#0B1F3A]">Mosun Drinks</h4>
                <span className="text-[11px] text-[#C9A227] font-semibold uppercase tracking-wider">SDG 2 & 3 Support</span>
              </div>
              <p className="text-xs md:text-sm text-[#1A1A1A]/80 leading-relaxed">
                <span className="font-semibold text-[#0B1F3A]">How it supports SDG 2: </span>
                Utilizes smallholder-harvested Nigerian hibiscus petals (zobo) and ginger, providing sustainable agricultural income and preserving traditional herbal wellness drinks.
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-[#0B1F3A]/5">
              <Link to="/brands/mosun-drinks" className="text-xs font-semibold text-[#0B1F3A] hover:text-[#C9A227] flex items-center gap-1">
                <span>View Brand</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
