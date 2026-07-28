import React from 'react';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">
          <Link href="/">Paradigm GEO<span className="text-blue-700">.</span></Link>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
          <Link href="/services" className="hover:text-slate-900 transition-colors">GEO Services</Link>
          <Link href="/industries" className="hover:text-slate-900 transition-colors">Industries</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
          <Link href="/case-studies" className="text-slate-900 transition-colors">Case Studies</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Client Success</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Data-Backed Proof of Entity Growth.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          See how we transform traditional search footprints into dominant AI share-of-voice.
        </p>
      </section>

      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-64 bg-slate-900 p-8 flex flex-col justify-between">
              <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase">SaaS / Enterprise Tech</span>
              <h3 className="text-3xl font-bold text-white leading-tight">Securing the Primary Recommendation in ChatGPT and Claude.</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-600 mb-6 leading-relaxed">
                By restructuring product features into semantic topic clusters and injecting robust organization schema, we moved this B2B SaaS platform from being ignored by generative engines to top recommendation status.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-64 bg-slate-100 p-8 flex flex-col justify-between border-b border-slate-200">
              <span className="text-blue-700 font-semibold text-xs tracking-widest uppercase">Financial Services</span>
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">Engineering Absolute Trust for Answer Engines.</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-600 mb-6 leading-relaxed">
                We executed digital PR and citation strategies across trusted financial hubs, establishing an airtight digital identity that made this firm the default answer in Perplexity.
              </p>
            </div>
          </article>
        </div>
      </section>

      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-8">
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