import React from 'react';
import Link from 'next/link';

export default function InsightsPage() {
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
          <Link href="/insights" className="text-slate-900 transition-colors">Insights</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Insights & Strategy</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          The Forefront of Generative Search.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          High-level thought leadership on LLM retrieval and AEO.
        </p>
      </section>

      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">LLM Retrieval Teardowns</h3>
            <p className="text-slate-600 text-sm">Technical analysis of how Claude, Perplexity, and ChatGPT formulate answers.</p>
          </div>
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Entity Engineering</h3>
            <p className="text-slate-600 text-sm">Best practices for robust schema and Knowledge Graph alignment.</p>
          </div>
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Executive Briefings</h3>
            <p className="text-slate-600 text-sm">Strategic guides for CMOs navigating the AI-first web.</p>
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