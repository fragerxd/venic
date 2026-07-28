import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">
          <Link href="/">Paradigm GEO<span className="text-blue-700">.</span></Link>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
          <Link href="/services" className="text-slate-900 transition-colors">GEO Services</Link>
          <Link href="/industries" className="hover:text-slate-900 transition-colors">Industries</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-start border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Proprietary Framework</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Enterprise-Grade Generative Engine Optimization.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          We offer a proprietary framework designed to systematically improve your brand's digital entity footprint.
        </p>
      </section>

      <section className="px-8 py-24 max-w-7xl mx-auto border-b border-slate-200">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Primary Consulting Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-slate-900">1. AI Visibility Audit</h3>
            <p className="text-slate-600 text-sm mb-4">Understand how AI platforms currently represent a brand.</p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li>• Brand mentions in AI tools</li>
              <li>• Citation analysis</li>
              <li>• Competitor comparison</li>
              <li>• Entity strength assessment</li>
              <li>• Improvement roadmap</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-slate-900">2. AI Search Optimisation</h3>
            <p className="text-slate-600 text-sm mb-4">Optimise websites and content so AI systems can better understand and reference them.</p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li>• Content restructuring</li>
              <li>• Semantic & entity optimisation</li>
              <li>• Schema markup & topic clustering</li>
              <li>• Knowledge graph alignment</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-slate-900">3. AI Citation Strategy</h3>
            <p className="text-slate-600 text-sm mb-4">Increase the likelihood that AI systems cite your brand across trusted sources.</p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li>• Authoritative content creation</li>
              <li>• Digital PR</li>
              <li>• Industry directory optimisation</li>
              <li>• Expert contribution opportunities</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-slate-900">4. Entity Optimisation</h3>
            <p className="text-slate-600 text-sm mb-4">Build a strong, structured digital identity for your brand.</p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li>• Brand entity development</li>
              <li>• Person & organization schema</li>
              <li>• Knowledge panel improvements</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-slate-900">5. AI Content Strategy</h3>
            <p className="text-slate-600 text-sm mb-4">Create content designed to answer real user questions and support AI retrieval.</p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li>• Question-based content</li>
              <li>• Comparison pages & FAQs</li>
              <li>• Expert guides & industry glossaries</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-slate-900">6. GEO Monitoring</h3>
            <p className="text-slate-600 text-sm mb-4">Track AI visibility and share of voice over time.</p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li>• AI citation frequency</li>
              <li>• Competitor visibility metrics</li>
              <li>• Continuous improvement roadmap</li>
            </ul>
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