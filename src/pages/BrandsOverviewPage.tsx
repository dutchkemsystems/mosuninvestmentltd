import React from 'react';
import { BRANDS } from '../content/site';
import { Link } from '../context/RouterContext';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const BrandsOverviewPage: React.FC = () => {
  return (
    <div className="pt-24 bg-[#F7F5F0] text-[#1A1A1A]">
      {/* Hero Header */}
      <section className="bg-[#0B1F3A] text-[#F7F5F0] py-20 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227]">
              Parent Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F7F5F0]">
              Commercial Brands & Ventures
            </h1>
            <p className="text-base md:text-lg text-[#F7F5F0]/80 font-light leading-relaxed">
              Operating specialized enterprises in grocery staples, premium botanical beverages, capital holding, and real estate development across Chicago and Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Brands List */}
      <section className="py-20 max-w-[1280px] mx-auto px-6 space-y-20">
        {BRANDS.map((brand, idx) => (
          <div
            key={brand.id}
            id={brand.slug}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image container */}
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative rounded-sm overflow-hidden border border-[#0B1F3A]/10 shadow-sm bg-white aspect-[4/3]">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-sm">
                  {brand.name}
                </div>
              </div>
            </div>

            {/* Content container */}
            <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="text-xs uppercase tracking-[0.15em] font-semibold text-[#C9A227]">
                Commercial Division 0{idx + 1}
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">
                {brand.name}
              </h2>
              <p className="text-sm md:text-base text-[#1A1A1A]/85 leading-relaxed">
                {brand.fullOverview}
              </p>

              {/* Products preview */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]/70 mb-2">
                  Key Products & Scope
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {brand.keyProducts.slice(0, 4).map((item, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={`/brands/${brand.slug}`}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] transition-colors rounded-sm inline-flex items-center gap-1.5"
                >
                  <span>Explore {brand.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {brand.externalUrl && (
                  <a
                    href={brand.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] border border-[#0B1F3A]/20 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors rounded-sm inline-flex items-center gap-1.5"
                  >
                    <span>Visit mosunfoods.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
