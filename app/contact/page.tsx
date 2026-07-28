import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
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
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Secure Your Brand's Future in AI Search.
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Partner with the leading authority in Generative Engine Optimization. Let's evaluate your entity footprint across ChatGPT, Gemini, and Claude.
          </p>
        </div>

        <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Schedule Your Assessment</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
              <input type="email" className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="name@company.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Company Website</label>
              <input type="text" className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="https://example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Core Objective</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your AI visibility challenges..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-700 text-white font-medium text-lg py-4 rounded shadow-lg hover:bg-blue-800 transition-all">
              Request Preliminary Audit
            </button>
          </form>
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