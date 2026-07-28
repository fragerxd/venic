import React from 'react';
import Link from 'next/link';

export default function InsightsPage() {
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
          <Link href="/insights" className="text-slate-900 transition-colors">Insights</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Insights & Strategy</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          The Forefront of Generative Search.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          High-level thought leadership on LLM retrieval and AEO.
        </p>
      </section>

      {/* Content Categories Grid */}
      <section className="px-8 py-24 max-w-7xl mx-auto border-b border-slate-200">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Core Disciplines</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Category 1 */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="w-12 h-12 bg-slate-900 text-white rounded flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">LLM Retrieval Teardowns</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Technical analysis of how Claude, Perplexity, and ChatGPT formulate answers.
            </p>
          </div>

          {/* Category 2 */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="w-12 h-12 bg-slate-900 text-white rounded flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Entity Engineering</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Best practices for robust schema and Knowledge Graph alignment.
            </p>
          </div>

          {/* Category 3 */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="w-12 h-12 bg-slate-900 text-white rounded flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Executive Briefings</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Strategic guides for CMOs navigating the AI-first web.
            </p>
          </div>

        </div>
      </section>

      {/* Recent Articles Placeholder */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Latest Intelligence</h2>
          <Link href="#" className="text-blue-700 font-medium hover:text-blue-800 transition-colors">View All →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Article 1 */}
          <article className="group cursor-pointer">
            <div className="h-64 bg-slate-200 rounded-xl mb-6 overflow-hidden">
              <div className="w-full h-full bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <span className="text-blue-700 font-semibold text-xs tracking-widest uppercase mb-3 block">Executive Briefings</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">The 2026 Guide to LLM Retrieval for SaaS Brands</h3>
            <p className="text-slate-600 mb-4 line-clamp-2 text-sm leading-relaxed">
              Software buyers are using LLMs to compare platforms. Discover how to optimize your product entities to ensure you are the recommended solution in generative comparisons.
            </p>
            <span className="text-slate-400 text-sm font-medium">Read Article</span>
          </article>

          {/* Article 2 */}
          <article className="group cursor-pointer">
            <div className="h-64 bg-slate-200 rounded-xl mb-6 overflow-hidden">
              <div className="w-full h-full bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <span className="text-blue-700 font-semibold text-xs tracking-widest uppercase mb-3 block">LLM Retrieval Teardowns</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Analyzing Perplexity's Citation Selection Logic</h3>
            <p className="text-slate-600 mb-4 line-clamp-2 text-sm leading-relaxed">
              A deep technical dive into how Perplexity scores and surfaces domains as trusted citations when answering complex B2B queries.
            </p>
            <span className="text-slate-400 text-sm font-medium">Read Article</span>
          </article>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="bg-slate-900 text-white py-24 mt-12">
        <div className="px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Stay Ahead of the Search Curve</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Subscribe to our weekly briefing for CMOs. Get actionable insights on entity engineering and Generative Engine Optimization delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="flex-grow px-6 py-4 rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required 
            />
            <button type="submit" className="bg-blue-600 text-white px-8 py-4 font-medium rounded hover:bg-blue-700 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </form>
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
