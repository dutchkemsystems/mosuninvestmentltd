import React from 'react';
import { Link } from '../context/RouterContext';
import { Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1F3A] text-[#F7F5F0] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Mandatory Header Banner / Badge */}
        <div className="border border-[#C9A227]/30 bg-white/[0.03] p-5 mb-14 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs md:text-sm font-medium text-[#C9A227] tracking-wide">
            SDG Advisory Division of Mosun Investments Limited — International Grocery & Development | Chicago, IL • Lagos, NG
          </p>
          <div className="flex items-center gap-2 text-xs text-[#F7F5F0]/70 shrink-0">
            <span>Transatlantic Trade Corridor</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2012</span>
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#F7F5F0] tracking-wide">
              MOSUN INVESTMENTS
            </h4>
            <p className="text-sm text-[#F7F5F0]/70 leading-relaxed max-w-sm">
              Parent holding company stewarding international grocery trade, consumer staples, property development, and institutional impact advisory across North America and West Africa.
            </p>
            <div className="pt-2 text-xs text-[#C9A227] flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0 text-[#C9A227]" />
              <span>Chicago, IL, USA • Lagos, Nigeria</span>
            </div>
          </div>

          {/* Col 2: Commercial Brands */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C9A227]">
              Commercial Brands
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F7F5F0]/80">
              <li>
                <Link to="/brands/mosun-foods" className="hover:text-[#C9A227] transition-colors flex items-center justify-between group">
                  <span>Mosun Foods</span>
                  <span className="text-xs text-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity">mosunfoods.com ↗</span>
                </Link>
              </li>
              <li>
                <Link to="/brands/mosun-drinks" className="hover:text-[#C9A227] transition-colors">
                  Mosun Drinks
                </Link>
              </li>
              <li>
                <Link to="/brands/msd" className="hover:text-[#C9A227] transition-colors">
                  MSD Holding
                </Link>
              </li>
              <li>
                <Link to="/brands/mosun-property" className="hover:text-[#C9A227] transition-colors">
                  Mosun Property
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/brands" className="text-xs text-[#C9A227] hover:underline flex items-center gap-1">
                  <span>View Brands Overview</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: SDG Advisory */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C9A227]">
              SDG Advisory
            </h4>
            <p className="text-xs text-[#F7F5F0]/70 leading-relaxed">
              Advising development agencies, NGOs, and governments on health system strengthening, youth employment, and local industrialization.
            </p>
            <ul className="space-y-2 text-xs text-[#F7F5F0]/80">
              <li>
                <Link to="/sdg-advisory" className="hover:text-[#C9A227] transition-colors block">
                  SDG 3 · Health Systems
                </Link>
              </li>
              <li>
                <Link to="/sdg-advisory" className="hover:text-[#C9A227] transition-colors block">
                  SDG 4 & 8 · Youth & Decent Work
                </Link>
              </li>
              <li>
                <Link to="/sdg-advisory" className="hover:text-[#C9A227] transition-colors block">
                  SDG 9 · Local Industrialization
                </Link>
              </li>
              <li>
                <Link to="/sdg-advisory" className="hover:text-[#C9A227] transition-colors block">
                  SDG 2 · Grocery & Nutrition Tie-in
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Dialogue */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C9A227]">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-[#F7F5F0]/80">
              <div>
                <p className="font-medium text-[#F7F5F0]">Chicago Executive Office</p>
                <p className="text-xs text-[#F7F5F0]/70">Cook County, Illinois, USA</p>
              </div>
              <div>
                <p className="font-medium text-[#F7F5F0]">Lagos Regional Office</p>
                <p className="text-xs text-[#F7F5F0]/70">Lekki Peninsula / Lagos Island, NG</p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] px-4 py-2 rounded-sm transition-colors uppercase tracking-wider"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Enquiry</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5F0]/60">
          <p>
            © {new Date().getFullYear()} Mosun Investments Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#F7F5F0] transition-colors">
              About
            </Link>
            <Link to="/legal/privacy" className="hover:text-[#F7F5F0] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal/terms" className="hover:text-[#F7F5F0] transition-colors">
              Terms of Use
            </Link>
            <a
              href="https://mosunfoods.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A227] transition-colors flex items-center gap-1"
            >
              <span>mosunfoods.com</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
