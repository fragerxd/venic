import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">
          <Link href="/">Paradigm GEO<span className="text-blue-700">.</span></Link>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <Link href="/about" className="text-slate-900 transition-colors">About</Link>
          <Link href="/services" className="hover:text-slate-900 transition-colors">GEO Services</Link>
          <Link href="/industries" className="hover:text-slate-900 transition-colors">Industries</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-start border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">About Paradigm GEO</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Defining the Future of Digital Authority.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          We don't chase algorithms; we build comprehensive digital entities.
        </p>
      </section>

      <section className="px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-b border-slate-200">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            <strong>Mission:</strong> We help businesses become the trusted answer in AI search.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Vision:</strong> To be the global standard for digital authority in the era of generative AI and answer engines.
          </p>
        </div>
        <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Our Philosophy</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Instead of selling &quot;SEO services,&quot; we sell AI visibility. We position ourselves as an AI Visibility Agency or Generative Search Agency, with SEO and AEO supporting GEO.
          </p>
          <p className="text-slate-600 leading-relaxed">
            By establishing that SEO and AEO are merely supporting mechanisms for GEO, we position our clients a full generation ahead of competitors who treat AI as an add-on service.
          </p>
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