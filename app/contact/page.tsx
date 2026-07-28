import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
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
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 md:py-28 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Get in Touch</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Secure Your Brand's Future in AI Search. {/*  */}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          Partner with the leading authority in Generative Engine Optimization. {/* [cite: 235] */}
        </p>
      </section>

      {/* Contact Form & Information Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Let's Discuss */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-slate-900">Frictionless discovery call booking. {/*  */}</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Let’s Discuss: {/* [cite: 236] */}
          </p>
          <ul className="space-y-6 text-slate-700 text-lg">
            <li className="flex items-start">
              <span className="text-blue-700 mr-4 font-bold">01</span> 
              Your current brand mentions in AI tools. {/* [cite: 236] */}
            </li>
            <li className="flex items-start">
              <span className="text-blue-700 mr-4 font-bold">02</span> 
              Competitor share of voice in ChatGPT and Gemini. {/* [cite: 237] */}
            </li>
            <li className="flex items-start">
              <span className="text-blue-700 mr-4 font-bold">03</span> 
              A custom roadmap for entity optimization. {/* [cite: 237] */}
            </li>
          </ul>

          <div className="mt-12 p-8 bg-blue-50 border border-blue-100 rounded-xl">
            <h3 className="font-semibold text-slate-900 mb-2">Our Consulting Framework</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We focus entirely on the future of search, helping brands build comprehensive digital entities rather than chasing legacy algorithms.
            </p>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name {/* [cite: 238] */}</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company {/* [cite: 238] */}</label>
                <input type="text" id="company" className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow" placeholder="Acme Corp" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1">Industry {/* [cite: 238] */}</label>
                <select id="industry" className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow bg-white">
                  <option>Select Industry</option>
                  <option>SaaS</option>
                  <option>Professional Services</option>
                  <option>Healthcare</option>
                  <option>Legal</option>
                  <option>Finance</option>
                  <option>E-commerce</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Website {/* [cite: 238] */}</label>
                <input type="url" id="website" className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow" placeholder="https://example.com" />
              </div>
            </div>

            <div>
              <label htmlFor="objective" className="block text-sm font-medium text-slate-700 mb-1">Core Objective {/* [cite: 239] */}</label>
              <textarea id="objective" rows={4} className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow" placeholder="Describe your current AI visibility challenges..."></textarea>
            </div>

            <button type="button" className="w-full bg-blue-700 text-white font-medium text-lg py-4 rounded shadow-lg hover:bg-blue-800 transition-all">
              Schedule Your Preliminary Assessment {/* [cite: 239] */}
            </button>
          </form>
        </div>

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
