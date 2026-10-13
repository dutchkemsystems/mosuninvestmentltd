import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Brands', href: '/brands' },
    { label: 'SDG Advisory', href: '/sdg-advisory' },
    { label: 'Contact', href: '/contact' },
  ];

  const isLightHero = currentPath === '/' && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#0B1F3A]/95 backdrop-blur-md border-b border-white/10 shadow-sm'
          : currentPath === '/'
          ? 'bg-gradient-to-b from-[#0B1F3A]/80 via-[#0B1F3A]/40 to-transparent'
          : 'bg-[#0B1F3A] border-b border-white/10'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="text-lg md:text-xl font-serif font-bold tracking-[0.12em] text-[#F7F5F0] hover:text-[#C9A227] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>MOSUN INVESTMENTS LIMITED</span>
        </Link>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#F7F5F0]/90">
          {navLinks.map((link) => {
            const isActive =
              currentPath === link.href ||
              (link.href !== '/' && currentPath.startsWith(link.href));
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#C9A227] ${
                  isActive ? 'text-[#C9A227] font-semibold' : 'text-[#F7F5F0]/85'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A227]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] active:scale-[0.98] transition-all rounded-sm shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Partner with us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#F7F5F0] hover:text-[#C9A227] transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B1F3A] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.href ||
                (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base py-2 transition-colors ${
                    isActive ? 'text-[#C9A227] font-semibold' : 'text-[#F7F5F0]/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                navigate('/contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] rounded-sm hover:bg-[#d8b030] transition-colors cursor-pointer"
            >
              Partner with us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
