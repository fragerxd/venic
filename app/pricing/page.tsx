import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
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
          <Link href="/pricing" className="text-slate-900 transition-colors">Pricing</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Investment Tiers</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Scalable Frameworks for AI Dominance.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          Transparent retainers structured for your business's maturity stage.
        </p>
      </section>

      <section className="px-8 py-24 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">GEO Essentials</span>
              <div className="text-4xl font-bold text-slate-900 my-4">£1,500 <span className="text-sm font-normal text-slate-500">/mo</span></div>
              <p className="text-slate-600 text-sm mb-6">Ideal for local businesses and emerging startups.</p>
              <ul className="space-y-3 text-sm text-slate-700 mb-8">
                <li>✓ AI Visibility Audit</li>
                <li>✓ Entity analysis</li>
                <li>✓ Basic optimization</li>
                <li>✓ AI search report</li>
              </ul>
            </div>
            <Link href="/contact" className="w-full bg-slate-900 text-white text-center py-3 rounded font-medium hover:bg-slate-800 transition-colors">
              Get Started
            </Link>
          </div>

          <div className="bg-white p-10 rounded-xl border-2 border-blue-700 shadow-md flex flex-col justify-between relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">GEO Growth</span>
              <div className="text-4xl font-bold text-slate-900 my-4">£4,000 <span className="text-sm font-normal text-slate-500">/mo</span></div>
              <p className="text-slate-600 text-sm mb-6">Designed for growing SMEs, SaaS, and professional services.</p>
              <ul className="space-y-3 text-sm text-slate-700 mb-8">
                <li>✓ Everything in Essentials</li>
                <li>✓ Advanced content strategy</li>
                <li>✓ Entity & schema optimization</li>
                <li>✓ Citation strategy & reporting</li>
              </ul>
            </div>
            <Link href="/contact" className="w-full bg-blue-700 text-white text-center py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              Secure Growth Tier
            </Link>
          </div>

          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">GEO Authority</span>
              <div className="text-4xl font-bold text-slate-900 my-4">£8,000+ <span className="text-sm font-normal text-slate-500">/mo</span></div>
              <p className="text-slate-600 text-sm mb-6">Full enterprise program for major e-commerce & global brands.</p>
              <ul className="space-y-3 text-sm text-slate-700 mb-8">
                <li>✓ Full GEO program</li>
                <li>✓ Aggressive Digital PR</li>
                <li>✓ Knowledge graph strategy</li>
                <li>✓ Executive thought leadership</li>
              </ul>
            </div>
            <Link href="/contact" className="w-full bg-slate-900 text-white text-center py-3 rounded font-medium hover:bg-slate-800 transition-colors">
              Contact Enterprise
            </Link>
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