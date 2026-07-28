import React from 'react';
import Link from 'next/link';

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">
          <Link href="/">Paradigm GEO<span className="text-blue-700">.</span></Link>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
          <Link href="/services" className="hover:text-slate-900 transition-colors">GEO Services</Link>
          <Link href="/industries" className="text-slate-900 transition-colors">Industries</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-start border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Target Sectors</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Specialized AI Visibility for Complex Markets.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          Aligning your brand presence with the specific retrieval processes of your industry.
        </p>
      </section>

      <section className="px-8 py-24 max-w-7xl mx-auto border-b border-slate-200">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Where AI-Driven Discovery Matters</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-3xl leading-relaxed">
          We focus on businesses where AI-driven discovery can influence customer decisions. Our expertise spans across high-stakes vertical markets:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-2">B2B & SaaS</h3>
            <p className="text-slate-600 text-sm">Ensuring software buyers find your platform in LLM feature comparisons.</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Services & Legal</h3>
            <p className="text-slate-600 text-sm">Establishing absolute authority and E-E-A-T signals for advisory practices.</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Healthcare & Finance</h3>
            <p className="text-slate-600 text-sm">Structuring sensitive entity data for accurate answer engine retrieval.</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="mb-4 md:mb-0 font-bold text-slate-900 text-lg">
            Paradigm GEO<span className="text-blue-700">.</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Paradigm GEO. The Global Standard for Digital Authority.
          </div>
        </div>
      </footer>
    </div>
  );
}