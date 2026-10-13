import React from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { BRANDS, LEADERSHIP, TRADE_CORRIDOR_STATS, siteImages } from '../content/site';
import { ArrowRight, ArrowUpRight, ShieldCheck, Globe, Building2, Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-[#F7F5F0] text-[#1A1A1A]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0B1F3A]">
        {/* Full-bleed 4K image with measured contrast scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={siteImages.heroChicagoLagos}
            alt="Chicago and Lagos Transatlantic Trade Corridor"
            className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.88] contrast-[1.05]"
            loading="eager"
            fetchPriority="high"
          />
          {/* Measured multi-stop scrim ensuring WCAG AA legibility across all displays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/70 to-[#0B1F3A]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#C9A227]">
              <span>Chicago, IL</span>
              <span aria-hidden="true">·</span>
              <span>Lagos, Nigeria</span>
              <span aria-hidden="true">·</span>
              <span>Transatlantic HoldCo</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#F7F5F0] leading-[1.08] tracking-tight text-balance">
              Trade with purpose. <br />
              <span className="italic font-normal text-[#C9A227]">Build with intent.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#F7F5F0]/85 font-light leading-relaxed max-w-2xl text-balance">
              Parent holding company stewarding Mosun Foods, Mosun Drinks, MSD, and Mosun Property across premier global commerce hubs.
            </p>

            {/* Two CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/brands')}
                className="px-7 py-3.5 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] active:scale-[0.98] transition-all rounded-sm shadow-md whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <span>Explore our brands</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/sdg-advisory')}
                className="px-7 py-3.5 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#F7F5F0] bg-transparent border border-[#F7F5F0]/40 hover:border-[#C9A227] hover:text-[#C9A227] active:scale-[0.98] transition-all rounded-sm whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <span>SDG Advisory</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND STRIP (4 commercial brand cards) */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-[#0B1F3A]/10 pb-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227] mb-2">
              Commercial Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A]">
              Our Operating Sub-Brands
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md">
            Four specialized enterprises united under institutional governance, cross-border logistics, and capital stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="bg-white border border-[#0B1F3A]/10 rounded-sm overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden bg-[#0B1F3A]/5">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-white tracking-wider uppercase">
                  {brand.id === 'mosun-foods' ? 'Staples & Grocery' : brand.id === 'mosun-drinks' ? 'Beverage Arts' : brand.id === 'msd' ? 'Holding & Capital' : 'Real Estate'}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#0B1F3A] mb-2 flex items-center justify-between">
                    <span>{brand.name}</span>
                    {brand.externalUrl && (
                      <span className="text-xs text-[#C9A227] font-sans font-medium">mosunfoods.com</span>
                    )}
                  </h3>
                  <p className="text-xs md:text-sm text-[#1A1A1A]/75 leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B1F3A]/5 flex items-center justify-between">
                  <Link
                    to={`/brands/${brand.slug}`}
                    className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] hover:text-[#C9A227] transition-colors flex items-center gap-1.5"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {brand.externalUrl && (
                    <a
                      href={brand.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#C9A227] hover:underline flex items-center gap-1"
                    >
                      <span>Visit Site</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SPLIT SECTION: "From Chicago to Lagos" */}
      <section className="bg-[#0B1F3A] text-[#F7F5F0] py-24 border-y border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227]">
                Transatlantic Corridor
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F7F5F0] leading-tight">
                From Chicago to Lagos: <br />
                <span className="italic font-normal text-[#C9A227]">Bilateral commerce with enduring integrity.</span>
              </h2>
              <div className="space-y-4 text-sm md:text-base text-[#F7F5F0]/80 leading-relaxed font-light">
                <p>
                  For over a decade, Mosun Investments Limited has engineered a resilient Atlantic bridge. We operate where global trade meets sovereign food security—connecting Nigeria’s agricultural producers directly with Midwest commercial markets.
                </p>
                <p>
                  By controlling cross-border cold chain compliance, FDA-registered import channels, and localized warehousing in Cook County, Illinois, our operations protect both authentic cultural heritage and community nutrition.
                </p>
              </div>

              {/* Stat Row */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10">
                {TRADE_CORRIDOR_STATS.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-[#C9A227] tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-[#F7F5F0] uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#F7F5F0]/60 leading-tight">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual editorial card */}
            <div className="lg:col-span-5 bg-white/[0.04] border border-white/10 p-8 rounded-sm space-y-6">
              <div className="flex items-center gap-3 text-[#C9A227]">
                <Globe className="w-6 h-6" />
                <h4 className="text-base font-serif font-semibold text-[#F7F5F0]">
                  Corridor Stewardship
                </h4>
              </div>
              <p className="text-xs md:text-sm text-[#F7F5F0]/75 leading-relaxed">
                "Our cross-border infrastructure transforms transatlantic diaspora commerce from fragmented informal imports into an institutional, traceable supply chain with verified community access."
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F7F5F0]/60">
                <span>Direct Farmer Collectives</span>
                <span aria-hidden="true">·</span>
                <span>Chicago Cold Storage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SDG ADVISORY TEASER (Strictly 1 wide card. NO goal detail on homepage!) */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
        <div className="relative bg-gradient-to-br from-[#0B1F3A] to-[#122b4d] text-[#F7F5F0] border border-[#C9A227]/30 rounded-sm p-8 md:p-14 overflow-hidden">
          {/* Subtle gold accent ornament */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Impact Advisory</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F7F5F0]">
              Impact, advised.
            </h2>

            <p className="text-base md:text-lg text-[#F7F5F0]/85 font-light leading-relaxed">
              Advising development agencies, institutional partners, and governments on health system strengthening, youth employment, and local agro-industrialization.
            </p>

            <div className="pt-3">
              <Link
                to="/sdg-advisory"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] active:scale-[0.98] transition-all rounded-sm cursor-pointer shadow-md"
              >
                <span>Visit SDG Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP SECTION */}
      <section className="py-20 bg-[#EFECE6]/60 border-t border-[#0B1F3A]/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227] mb-2">
              Executive Governance
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A]">
              Leadership & Mandate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {LEADERSHIP.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#0B1F3A]/10 rounded-sm overflow-hidden flex flex-col sm:flex-row gap-6 p-6 items-center sm:items-start"
              >
                <div className="w-32 h-40 sm:w-36 sm:h-48 shrink-0 rounded-sm overflow-hidden bg-[#0B1F3A]/10 shadow-sm">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <div className="text-xs text-[#C9A227] font-semibold tracking-wider uppercase">
                    {leader.division}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0B1F3A]">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#1A1A1A]/70 uppercase tracking-wide">
                    {leader.title}
                  </p>
                  <p className="text-xs text-[#C9A227] font-medium">
                    {leader.credentials}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/75 leading-relaxed pt-2">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL / QUOTE BLOCK */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
        <div className="bg-white border border-[#0B1F3A]/10 p-10 md:p-16 rounded-sm text-center max-w-4xl mx-auto space-y-6">
          <span className="text-4xl font-serif text-[#C9A227]">“</span>
          <blockquote className="text-xl md:text-2xl font-serif italic text-[#0B1F3A] leading-relaxed text-balance">
            "Mosun Investments exemplifies how private transatlantic enterprise can build commercial strength while preserving community culinary dignity and opening avenues for systemic regional industrialization."
          </blockquote>
          <div className="pt-2 text-xs uppercase tracking-widest text-[#1A1A1A]/60 font-semibold">
            Institutional Partner & Trade Ecosystem Advisor · Chicago & West Africa
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA BAND */}
      <section className="bg-[#0B1F3A] text-[#F7F5F0] py-20 border-t border-white/10 text-center">
        <div className="max-w-[1280px] mx-auto px-6 space-y-6">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227]">
            Transatlantic Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F7F5F0]">
            Let's build the corridor.
          </h2>
          <p className="text-sm md:text-base text-[#F7F5F0]/80 max-w-xl mx-auto leading-relaxed">
            Connect with our executive leadership team regarding bilateral distribution, property co-ventures, or advisory engagements.
          </p>
          <div className="pt-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] active:scale-[0.98] transition-all rounded-sm cursor-pointer shadow-lg"
            >
              Contact Mosun Investments
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
