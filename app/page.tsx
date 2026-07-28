import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">
          Paradigm GEO<span className="text-blue-700">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
          <Link href="/services" className="hover:text-slate-900 transition-colors">GEO Services</Link>
          <Link href="/industries" className="hover:text-slate-900 transition-colors">Industries</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-start">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Enterprise AI Search & Visibility</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Be Found in <br className="hidden md:block"/> AI Search.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          We help businesses increase their visibility across ChatGPT, Gemini, Claude, Perplexity, and Google AI Overviews.
        </p>
        <div className="flex space-x-4">
          <Link href="/contact" className="bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded shadow-lg hover:bg-blue-800 transition-all">
            Schedule an Audit
          </Link>
          <Link href="/services" className="bg-white border border-slate-200 text-slate-900 px-8 py-4 text-lg font-medium rounded hover:bg-slate-50 transition-all">
            Explore Methodology
          </Link>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-white border-y border-slate-200">
        <div className="px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">The search landscape has shifted permanently.</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Your customers are asking AI tools for recommendations. If your brand isn't understood or referenced by Large Language Models, you're missing critical commercial opportunities.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              The market is saturated with legacy SEO agencies treating AI as an afterthought. At Paradigm GEO, we focus entirely on the future of search. We don't chase blue links; we build comprehensive digital entities.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-xl mb-4 text-slate-900">The Shift to Answer Engines</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <span className="text-blue-700 mr-3">✓</span>
                From traditional keywords to semantic entity understanding.
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-3">✓</span>
                From chasing clicks to becoming the trusted answer.
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-3">✓</span>
                From basic link building to authoritative AI citation strategies.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How We Help</h2>
          <p className="text-lg text-slate-600">Our enterprise-grade framework systematically improves your brand's digital entity footprint.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Audit */}
          <div className="p-8 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center font-bold text-xl mb-6">1</div>
            <h3 className="text-xl font-bold mb-3">Audit</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We understand how AI platforms currently represent your brand by conducting rigorous prompt-based visibility testing.</p>
          </div>
          {/* Optimise */}
          <div className="p-8 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center font-bold text-xl mb-6">2</div>
            <h3 className="text-xl font-bold mb-3">Optimise</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We restructure content and technical foundations (Schema, Knowledge Graph) to ensure AI systems can better understand and reference them.</p>
          </div>
          {/* Build Authority */}
          <div className="p-8 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center font-bold text-xl mb-6">3</div>
            <h3 className="text-xl font-bold mb-3">Build Authority</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We strengthen digital PR and industry citations in high-trust hubs to solidify digital validation.</p>
          </div>
          {/* Measure */}
          <div className="p-8 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center font-bold text-xl mb-6">4</div>
            <h3 className="text-xl font-bold mb-3">Measure</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We systematically analyze citation frequency, brand mentions in AI responses, and share of voice.</p>
          </div>
        </div>
      </section>

      {/* Core Services List */}
      <section className="bg-slate-900 text-white py-24">
        <div className="px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 justify-between items-start">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Core GEO Services</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We position SEO and AEO as supporting mechanisms for our primary offering: Generative Engine Optimization.
            </p>
            <Link href="/services" className="text-white border-b border-white pb-1 font-medium hover:text-blue-400 hover:border-blue-400 transition-colors">
              View All Services →
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="space-y-6">
              <li className="flex items-center text-xl font-medium border-b border-slate-700 pb-4">
                <span className="text-blue-500 mr-4">01</span> AI Visibility Audit
              </li>
              <li className="flex items-center text-xl font-medium border-b border-slate-700 pb-4">
                <span className="text-blue-500 mr-4">02</span> Entity Optimisation
              </li>
              <li className="flex items-center text-xl font-medium border-b border-slate-700 pb-4">
                <span className="text-blue-500 mr-4">03</span> AI Content Strategy
              </li>
              <li className="flex items-center text-xl font-medium border-b border-slate-700 pb-4">
                <span className="text-blue-500 mr-4">04</span> Citation Strategy
              </li>
              <li className="flex items-center text-xl font-medium border-b border-slate-700 pb-4">
                <span className="text-blue-500 mr-4">05</span> AI Monitoring & Reporting
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results / Testimonials Placeholder */}
      <section className="px-8 py-24 max-w-7xl mx-auto bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Data-Backed Proof of Entity Growth</h2>
          <p className="text-lg text-slate-600">See how we transform traditional search footprints into dominant AI share-of-voice.</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-12 text-center text-slate-500">
           {/* Replace this div with real case studies, metrics, and testimonials as you build them. */}
           <p className="font-medium text-lg">Case Studies & Metrics Dashboard</p>
           <p className="text-sm mt-2">Displaying shifts in AI citation frequency and knowledge panel triggering.</p>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="px-8 py-16 max-w-5xl mx-auto bg-blue-50 rounded-xl border border-blue-100 my-12">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Our Transparency & Ethics Guarantee
        </h3>
        <p className="text-slate-700 leading-relaxed text-sm md:text-base">
          It is important to be transparent: no agency can guarantee that ChatGPT, Gemini, or other AI assistants will specifically mention or cite a brand. Our value lies in improving the core factors that drastically increase the <em>likelihood</em> of visibility—such as authoritative content, strong entities, structured data, credible citations, and topical expertise—rather than making false promises regarding inclusion in AI responses. This positioning is both more accurate and infinitely more sustainable.
        </p>
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