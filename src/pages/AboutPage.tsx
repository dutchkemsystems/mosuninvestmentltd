import React from 'react';
import { LEADERSHIP, TRADE_CORRIDOR_STATS, siteImages } from '../content/site';
import { Link } from '../context/RouterContext';
import { Shield, Globe, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 bg-[#F7F5F0] text-[#1A1A1A]">
      {/* Hero Header */}
      <section className="bg-[#0B1F3A] text-[#F7F5F0] py-24 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227]">
              Company Genesis & Mandate
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F7F5F0]">
              About Mosun Investments
            </h1>
            <p className="text-lg md:text-xl text-[#F7F5F0]/85 font-light leading-relaxed">
              A private holding company established to bridge bilateral commerce, essential consumer access, and sustainable capital development between North America and Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Trade Corridor */}
      <section className="py-20 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227]">
              The Chicago–Lagos Corridor
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1F3A] leading-tight">
              Built on Bilateral Trade, Sustained by Cultural Heritage
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Mosun Investments Limited was founded on the fundamental principle that international trade between emerging and mature markets should foster resilience on both ends. What began as a dedicated logistics effort to bring authentic, high-quality West African staples to Chicago has evolved into a diversified group holding company.
              </p>
              <p>
                Today, our operations encompass four commercial sub-brands and a specialized advisory arm. Across commercial grocery distribution (Mosun Foods), artisanal tropical drinks (Mosun Drinks), capital holding (MSD), and strategic commercial real estate (Mosun Property), we maintain disciplined capital allocation and regulatory transparency.
              </p>
              <p>
                Concurrently, our SDG Advisory Division leverages ground-level supply chain data to counsel bilateral bodies, healthcare authorities, and economic developers on structural capacity building.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-[#0B1F3A]/10 shadow-lg">
              <img
                src={siteImages.heroChicagoLagos}
                alt="Chicago and Lagos Maritime Logistics"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/70 to-transparent p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
                  Atlantic Bridge Infrastructure
                </p>
                <p className="text-sm font-serif italic text-white/90">
                  Connecting Midwest distribution hubs with Lagos maritime trade routes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 pt-10 border-t border-[#0B1F3A]/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {TRADE_CORRIDOR_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#C9A227] tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-xs text-[#1A1A1A]/60">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Profile Section */}
      <section className="py-20 bg-[#EFECE6]/60 border-t border-[#0B1F3A]/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227] mb-2">
              Executive Governance
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A]">
              Leadership & Advisory Board
            </h2>
            <p className="text-sm text-[#1A1A1A]/75 max-w-xl mt-2">
              Seasoned executive direction ensuring operational compliance, strategic growth, and stakeholder alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#0B1F3A]/10 rounded-sm p-8 flex flex-col sm:flex-row gap-6 shadow-sm"
              >
                <div className="w-36 h-48 shrink-0 rounded-sm overflow-hidden bg-[#0B1F3A]/10">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
                    {leader.division}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0B1F3A]">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-medium text-[#1A1A1A]/70 uppercase tracking-wide">
                    {leader.title} · <span className="text-[#C9A227] font-semibold">{leader.credentials}</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#1A1A1A]/75 leading-relaxed pt-2">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Principles */}
      <section className="py-20 max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A227] mb-2">
            Institutional Values
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">
            Core Corporate Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#0B1F3A]/10 p-8 rounded-sm space-y-3">
            <Award className="w-6 h-6 text-[#C9A227]" />
            <h3 className="text-lg font-serif font-bold text-[#0B1F3A]">Direct Provenance</h3>
            <p className="text-xs md:text-sm text-[#1A1A1A]/75 leading-relaxed">
              We insist on full traceability from smallholder farms in Ondo and Benue to diaspora kitchens in Chicago and Indianapolis.
            </p>
          </div>

          <div className="bg-white border border-[#0B1F3A]/10 p-8 rounded-sm space-y-3">
            <Shield className="w-6 h-6 text-[#C9A227]" />
            <h3 className="text-lg font-serif font-bold text-[#0B1F3A]">Rigorous Compliance</h3>
            <p className="text-xs md:text-sm text-[#1A1A1A]/75 leading-relaxed">
              Every shipment strictly conforms to FDA food safety modernization protocols, agricultural health inspection, and federal trade standards.
            </p>
          </div>

          <div className="bg-white border border-[#0B1F3A]/10 p-8 rounded-sm space-y-3">
            <Globe className="w-6 h-6 text-[#C9A227]" />
            <h3 className="text-lg font-serif font-bold text-[#0B1F3A]">Reciprocal Prosperity</h3>
            <p className="text-xs md:text-sm text-[#1A1A1A]/75 leading-relaxed">
              Trade must generate durable prosperity in West Africa through local processing rather than extractive commodity cycles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
