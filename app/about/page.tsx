import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">About Paradigm GEO</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Defining the Future of Digital Authority. {/* [cite: 190] */}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          We don't chase algorithms; we build comprehensive digital entities. {/* [cite: 190, 191] */}
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="bg-white p-12 rounded-xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We help businesses become the trusted answer in AI search. {/* [cite: 31, 143, 192, 283] */}
          </p>
        </div>

        <div className="bg-white p-12 rounded-xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Our Vision</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            To be the global standard for digital authority in the era of generative AI and answer engines. {/* [cite: 32, 144, 193] */}
          </p>
        </div>
      </section>

      {/* Philosophy & Positioning Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Philosophy</h2>
            <p className="text-blue-400 font-medium text-lg">
              The search landscape has permanently shifted.
            </p>
          </div>
          <div className="md:w-2/3 space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Instead of selling "SEO services," we sell AI visibility. {/* [cite: 34, 145, 194, 285] */} 
              If your main focus is GEO, then don't position yourself as an SEO agency that also does GEO. {/* [cite: 29, 197, 281] */}
            </p>
            <p>
              We position ourselves as an AI Visibility Agency or Generative Search Agency, with SEO and AEO supporting GEO. {/* [cite: 28, 146, 195, 196, 282] */} 
              By establishing that SEO and AEO are merely supporting mechanisms for GEO, we position our clients a full generation ahead of competitors who treat AI as an add-on service. {/* [cite: 147, 198] */}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">Secure Your Brand's Future</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Partner with the leading authority in Generative Engine Optimization and stop losing ground to competitors in LLM retrieval.
        </p>
        <Link href="/contact" className="inline-block bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded shadow-lg hover:bg-blue-800 transition-all">
          Schedule Your Assessment
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
