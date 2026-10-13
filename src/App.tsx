/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BrandsOverviewPage } from './pages/BrandsOverviewPage';
import { BrandDetailPage } from './pages/BrandDetailPage';
import { SdgAdvisoryPage } from './pages/SdgAdvisoryPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

import { AUTO_CONFIG } from './config/autoEnv';

function PageRenderer() {
  const { currentPath } = useRouter();

  // Normalize path (handle trailing slashes, query parameters, and hashes)
  const normalizedPath = currentPath.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';

  // Per-route title and automatic canonical updater for dynamic SEO
  useEffect(() => {
    let title = 'Mosun Investments Limited — International Grocery & Development';
    if (normalizedPath === '/about') {
      title = 'About Us — Mosun Investments Limited';
    } else if (normalizedPath === '/brands') {
      title = 'Commercial Brands — Mosun Investments Limited';
    } else if (normalizedPath === '/brands/mosun-foods') {
      title = 'Mosun Foods — Nigerian Foods, Catfish & Staples | Mosun Investments';
    } else if (normalizedPath === '/brands/mosun-drinks') {
      title = 'Mosun Drinks — Artisanal Botanicals & Refreshment | Mosun Investments';
    } else if (normalizedPath === '/brands/msd') {
      title = 'MSD — Commercial Holding & Expansion | Mosun Investments';
    } else if (normalizedPath === '/brands/mosun-property') {
      title = 'Mosun Property — Real Estate & Logistics Assets | Mosun Investments';
    } else if (normalizedPath === '/sdg-advisory') {
      title = 'SDG Advisory Division — Health Systems, Youth & Industry | Mosun Investments';
    } else if (normalizedPath === '/contact') {
      title = 'Partner With Us — Mosun Investments Limited';
    } else if (normalizedPath === '/legal/privacy') {
      title = 'Privacy Policy — Mosun Investments Limited';
    } else if (normalizedPath === '/legal/terms') {
      title = 'Terms of Use — Mosun Investments Limited';
    }
    document.title = title;

    // Automatic canonical URL resolution
    const activeUrl = `${AUTO_CONFIG.appUrl}${normalizedPath === '/' ? '' : normalizedPath}`;
    let canonicalTag = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = activeUrl;

    const ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) {
      ogUrl.setAttribute('content', activeUrl);
    }
  }, [normalizedPath]);

  // Route routing logic
  if (normalizedPath === '/' || normalizedPath === '') {
    return <HomePage />;
  }

  if (normalizedPath === '/about') {
    return <AboutPage />;
  }

  if (normalizedPath === '/brands') {
    return <BrandsOverviewPage />;
  }

  if (normalizedPath.startsWith('/brands/')) {
    const slug = normalizedPath.replace('/brands/', '');
    return <BrandDetailPage slug={slug} />;
  }

  if (normalizedPath === '/sdg-advisory') {
    return <SdgAdvisoryPage />;
  }

  if (normalizedPath === '/contact') {
    return <ContactPage />;
  }

  if (normalizedPath === '/legal/privacy') {
    return <LegalPage type="privacy" />;
  }

  if (normalizedPath === '/legal/terms') {
    return <LegalPage type="terms" />;
  }

  // Fallback 404
  return (
    <div className="pt-32 pb-24 text-center max-w-[1280px] mx-auto px-6">
      <h1 className="text-4xl font-serif font-bold text-[#0B1F3A] mb-3">Page Not Found</h1>
      <p className="text-sm text-[#1A1A1A]/70 mb-6">
        The requested page does not exist within the Mosun Investments portal.
      </p>
      <a
        href="/"
        className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#C9A227] hover:bg-[#d8b030] rounded-sm inline-block transition-colors"
      >
        Return to Homepage
      </a>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#1A1A1A] font-sans selection:bg-[#C9A227]/30 selection:text-[#0B1F3A]">
        <Navbar />
        <main className="flex-grow">
          <PageRenderer />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
