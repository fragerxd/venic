import React from 'react';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Client Success</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Data-Backed Proof of Entity Growth. {/*  */}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          See how we transform traditional search footprints into dominant AI share-of-voice. {/* [cite: 218] */}
        </p>
      </section>

      {/* Metrics Overview */}
      <section className="px-8 py-20 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <div className="text-5xl font-bold text-blue-700 mb-4">+312%</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Citation Frequency</h3>
            <p className="text-slate-600 text-sm">Average increase in brand mentions in AI responses across tracked LLMs. {/* [cite: 331] */}</p>
          </div>
          <div className="p-8 border-y md:border-y-0 md:border-x border-slate-200">
            <div className="text-5xl font-bold text-blue-700 mb-4">8.4x</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Knowledge Graph Expansion</h3>
            <p className="text-slate-600 text-sm">Growth in recognized semantic entities and knowledge panel improvements. {/* [cite: 329] */}</p>
          </div>
          <div className="p-8">
            <div className="text-5xl font-bold text-blue-700 mb-4">#1</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Competitor Visibility</h3>
            <p className="text-slate-600 text-sm">Achieving primary recommendation status for high-intent industry queries. {/* [cite: 331] */}</p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Teardowns</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Case Study 1 */}
          <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-64 bg-slate-800 p-8 flex flex-col justify-between">
              <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase">SaaS / Enterprise Tech</span>
              <h3 className="text-3xl font-bold text-white leading-tight">Securing the Primary Recommendation in ChatGPT and Claude.</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-600 mb-6 leading-relaxed">
                By restructuring their product features into clear, semantic topic clusters and injecting robust organization schema, we moved this B2B SaaS platform from being completely ignored by generative engines to the top recommended solution.
              </p>
              <div className="flex space-x-6 border-t border-slate-100 pt-6">
                <div>
                  <span className="block text-2xl font-bold text-slate-900">+415%</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Brand Mentions</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-slate-900">3 Months</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Time to Impact</span>
                </div>
              </div>
            </div>
          </article>

          {/* Case Study 2 */}
          <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-64 bg-slate-100 p-8 flex flex-col justify-between border-b border-slate-200">
              <span className="text-blue-700 font-semibold text-xs tracking-widest uppercase">Financial Services</span>
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">Engineering Absolute Trust (E-E-A-T) for Answer Engines.</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-600 mb-6 leading-relaxed">
                We executed a high-level digital PR and citation strategy across trusted financial hubs. By establishing an airtight digital identity, this wealth management firm became the default answer for complex advisory queries in Perplexity.
              </p>
              <div className="flex space-x-6 border-t border-slate-100 pt-6">
                <div>
                  <span className="block text-2xl font-bold text-slate-900">#1</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Share of Voice</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-slate-900">22</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">New Trusted Citations</span>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto text-center bg-blue-50 rounded-2xl border border-blue-100 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">Ready to become the trusted answer?</h2>
        <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
          Let’s map your current brand entity and build a strategy to dominate your market's generative search results.
        </p>
        <Link href="/contact" className="inline-block bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded shadow-lg hover:bg-blue-800 transition-all">
          Request an Audit
        </Link>
      </section>

      {/* Footer */}
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
