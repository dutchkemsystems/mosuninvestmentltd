import React from 'react';
import { BRANDS } from '../content/site';
import { Link, useRouter } from '../context/RouterContext';
import { ArrowLeft, ArrowUpRight, CheckCircle2, MapPin, Building, ShieldCheck } from 'lucide-react';

interface BrandDetailPageProps {
  slug: string;
}

export const BrandDetailPage: React.FC<BrandDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const brand = BRANDS.find((b) => b.slug === slug);

  if (!brand) {
    return (
      <div className="pt-32 pb-24 text-center max-w-[1280px] mx-auto px-6">
        <h1 className="text-3xl font-serif font-bold text-[#0B1F3A] mb-4">Brand Not Found</h1>
        <p className="text-sm text-[#1A1A1A]/70 mb-6">The requested brand does not exist in our portfolio.</p>
        <Link
          to="/brands"
          className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] px-6 py-2.5 rounded-sm inline-block"
        >
          Return to Brands Overview
        </Link>
      </div>
    );
  }

  const isMosunFoods = brand.id === 'mosun-foods';

  return (
    <div className="pt-20 bg-[#F7F5F0] text-[#1A1A1A]">
      {/* Breadcrumb / Top Bar */}
      <div className="bg-[#0B1F3A]/5 border-b border-[#0B1F3A]/10 py-3">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between text-xs">
          <Link
            to="/brands"
            className="text-[#0B1F3A] hover:text-[#C9A227] flex items-center gap-1 font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Brands</span>
          </Link>
          <span className="text-[#1A1A1A]/50">Mosun Investments Limited Portfolio</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-[#0B1F3A] text-[#F7F5F0] py-20 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227]">
              Commercial Subsidiary
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F7F5F0]">
              {brand.name}
            </h1>
            <p className="text-lg text-[#F7F5F0]/85 font-light leading-relaxed">
              {brand.tagline}
            </p>

            {/* If Mosun Foods, prominent banner to visit existing site mosunfoods.com */}
            {isMosunFoods && (
              <div className="pt-4">
                <a
                  href="https://mosunfoods.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] active:scale-[0.98] transition-all rounded-sm shadow-md"
                >
                  <span>Visit Official Website — mosunfoods.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image and Key Metrics */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-sm overflow-hidden border border-[#0B1F3A]/10 shadow-sm bg-white">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-80 object-cover"
                loading="eager"
              />
            </div>

            {/* Brand Metrics */}
            <div className="bg-white border border-[#0B1F3A]/10 p-6 rounded-sm space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#C9A227]">
                Operational Benchmarks
              </h4>
              <div className="space-y-3">
                {brand.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex items-center justify-between border-b border-[#0B1F3A]/5 pb-2 text-xs">
                    <span className="text-[#1A1A1A]/70">{metric.label}</span>
                    <span className="font-semibold text-[#0B1F3A] font-mono tabular-nums">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hubs */}
            <div className="bg-white border border-[#0B1F3A]/10 p-6 rounded-sm space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#C9A227]">
                Geographic Presence
              </h4>
              <div className="space-y-2">
                {brand.operationalHubs.map((hub, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-[#1A1A1A]/80">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                    <span>{hub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Overview and Scope */}
          <div className="lg:col-span-7 space-y-8">
            {isMosunFoods && (
              <div className="bg-[#C9A227]/10 border border-[#C9A227]/40 p-6 rounded-sm">
                <h3 className="text-base font-serif font-bold text-[#0B1F3A] mb-1">
                  Primary E-Commerce & Retail Store
                </h3>
                <p className="text-xs md:text-sm text-[#1A1A1A]/80 leading-relaxed mb-4">
                  For retail orders, wholesale catfish cartons, and pantry deliveries across the United States, please visit the official Mosun Foods retail platform at <span className="font-semibold text-[#0B1F3A]">mosunfoods.com</span>.
                </p>
                <a
                  href="https://mosunfoods.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] px-4 py-2 rounded-sm transition-colors"
                >
                  <span>Open mosunfoods.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0B1F3A]">
                Overview & Operations
              </h2>
              <p className="text-sm md:text-base text-[#1A1A1A]/85 leading-relaxed">
                {brand.fullOverview}
              </p>
            </div>

            {/* Key Products / Scope */}
            <div className="bg-white border border-[#0B1F3A]/10 p-8 rounded-sm space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#0B1F3A]">
                Core Product Lines & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {brand.keyProducts.map((prod, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#1A1A1A]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>{prod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tie-in with parent company */}
            <div className="border-t border-[#0B1F3A]/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#1A1A1A]/60">Commercial Division of</p>
                <p className="text-sm font-serif font-bold text-[#0B1F3A]">Mosun Investments Limited</p>
              </div>
              <button
                onClick={() => navigate(`/contact?brand=${brand.slug}`)}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] rounded-sm transition-colors cursor-pointer"
              >
                Inquire Regarding {brand.name}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
