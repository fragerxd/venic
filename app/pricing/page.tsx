import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
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
          <Link href="/pricing" className="text-slate-900 transition-colors">Pricing</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Engagement Models</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Scalable Frameworks for AI Dominance. {/* [cite: 221] */}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          Transparent retainers structured for your business's maturity stage. {/* [cite: 222] */}
        </p>
      </section>

      {/* Introduction */}
      <section className="px-8 py-20 max-w-7xl mx-auto text-center">
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We structure our retainers to cater to different maturity stages of businesses, ensuring scalable and repeatable frameworks. {/*  */}
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tier 1: GEO Essentials */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">GEO Essentials</h3>
            <p className="text-slate-500 text-sm mb-6 h-10">Target Customer: Local Businesses, Startups {/* [cite: 225] */}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">£500 – £1,500</span>
              <span className="text-slate-500"> / mo</span> {/* [cite: 225] */}
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-900 mb-4">Inclusions</h4>
              <ul className="space-y-3 text-slate-600 text-sm mb-8">
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> AI visibility audit {/* [cite: 224] */}</li>
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> Entity analysis {/* [cite: 224] */}</li>
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> Basic optimisation {/* [cite: 224] */}</li>
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> AI search report {/* [cite: 224] */}</li>
              </ul>
            </div>
            <Link href="/contact" className="block w-full py-3 px-4 bg-slate-50 text-slate-900 text-center font-medium rounded border border-slate-200 hover:bg-slate-100 transition-colors">
              Request Audit
            </Link>
          </div>

          {/* Tier 2: GEO Growth */}
          <div className="bg-slate-900 p-10 rounded-xl border border-slate-800 shadow-lg flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">GEO Growth</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">Target Customer: SMEs, SaaS, Professional Services {/* [cite: 227] */}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">£2,000 – £5,000</span>
              <span className="text-slate-400"> / mo</span> {/* [cite: 227] */}
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-300 mb-4">Inclusions</h4>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-start"><span className="text-blue-400 mr-3">✓</span> Everything in Essentials {/* [cite: 226] */}</li>
                <li className="flex items-start"><span className="text-blue-400 mr-3">✓</span> Content strategy {/* [cite: 226] */}</li>
                <li className="flex items-start"><span className="text-blue-400 mr-3">✓</span> Entity optimisation {/* [cite: 226] */}</li>
                <li className="flex items-start"><span className="text-blue-400 mr-3">✓</span> Citation strategy {/* [cite: 226] */}</li>
                <li className="flex items-start"><span className="text-blue-400 mr-3">✓</span> Monthly reporting {/* [cite: 226] */}</li>
              </ul>
            </div>
            <Link href="/contact" className="block w-full py-3 px-4 bg-blue-600 text-white text-center font-medium rounded hover:bg-blue-700 transition-colors">
              Start Growing
            </Link>
          </div>

          {/* Tier 3: GEO Authority */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">GEO Authority</h3>
            <p className="text-slate-500 text-sm mb-6 h-10">Target Customer: Enterprise, Major E-commerce, Global Brands {/* [cite: 229] */}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">£6,000 – £10,000+</span>
              <span className="text-slate-500"> / mo</span> {/* [cite: 229] */}
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-900 mb-4">Inclusions</h4>
              <ul className="space-y-3 text-slate-600 text-sm mb-8">
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> Full GEO programme {/* [cite: 228] */}</li>
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> Digital PR {/* [cite: 228] */}</li>
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> Knowledge graph strategy {/* [cite: 228] */}</li>
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> Advanced schema {/* [cite: 228] */}</li>
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> Executive thought leadership {/* [cite: 228] */}</li>
                <li className="flex items-start"><span className="text-blue-700 mr-3">✓</span> Continuous optimisation {/* [cite: 228] */}</li>
              </ul>
            </div>
            <Link href="/contact" className="block w-full py-3 px-4 bg-slate-50 text-slate-900 text-center font-medium rounded border border-slate-200 hover:bg-slate-100 transition-colors">
              Contact Sales
            </Link>
          </div>

        </div>
      </section>

      {/* Expectation Management Section */}
      <section className="px-8 py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">A Note on Expectations</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            It's important to be transparent with clients: no agency can guarantee that ChatGPT, Gemini, or other AI assistants will mention or cite a brand. {/* [cite: 317] */}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Your value is in improving the factors that increase the likelihood of visibility—such as authoritative content, strong entities, structured data, credible citations, and topical expertise—rather than promising inclusion in AI responses. {/* [cite: 318] */}
          </p>
          <p className="text-slate-700 font-medium">
            That positioning is both more accurate and more sustainable. {/* [cite: 319] */}
          </p>
        </div>
      </section>

      {/* Footer */}
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
