import React from 'react';
import Link from 'next/link';

// --- Sub-Components for Modularity ---

const NavBar = () => (
  <header className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
    <nav className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
      <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900 hover:opacity-80 transition-opacity">
        Paradigm GEO<span className="text-blue-700">.</span>
      </Link>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
        <Link href="/about" className="hover:text-blue-700 transition-colors">About</Link>
        <Link href="/services" className="hover:text-blue-700 transition-colors">GEO Services</Link>
        <Link href="/industries" className="hover:text-blue-700 transition-colors">Industries</Link>
        <Link href="/pricing" className="hover:text-blue-700 transition-colors">Pricing</Link>
      </div>
      <Link 
        href="/contact" 
        className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded-md hover:bg-slate-800 active:scale-95 transition-all shadow-sm"
      >
        Book Discovery Call
      </Link>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-start bg-gradient-to-b from-slate-50 to-white">
    <span className="text-blue-700 font-bold tracking-wider uppercase text-xs mb-6 px-3 py-1 bg-blue-100/50 rounded-full">
      Enterprise AI Search & Visibility
    </span>
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl text-balance">
      Be Found in <br className="hidden md:block"/> AI Search.
    </h1>
    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed text-balance">
      We help businesses increase their visibility across ChatGPT, Gemini, Claude, Perplexity, and Google AI Overviews.
    </p>
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
      <Link 
        href="/contact" 
        className="bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-md shadow-lg hover:bg-blue-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
      >
        Schedule an Audit
      </Link>
      <Link 
        href="/services" 
        className="bg-white border border-slate-200 text-slate-900 px-8 py-4 text-lg font-medium rounded-md hover:bg-slate-50 hover:border-slate-300 transition-all text-center"
      >
        Explore Methodology
      </Link>
    </div>
  </section>
);

const TheProblemSection = () => (
  <section className="bg-white border-y border-slate-200">
    <div className="px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance text-slate-900">
          The search landscape has shifted permanently.
        </h2>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          Your customers are asking AI tools for recommendations. If your brand isn't understood or referenced by Large Language Models, you're missing critical commercial opportunities.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          The market is saturated with legacy SEO agencies treating AI as an afterthought. At Paradigm GEO, we focus entirely on the future of search. We don't chase blue links; we build comprehensive digital entities.
        </p>
      </div>
      <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="font-semibold text-xl mb-6 text-slate-900">The Shift to Answer Engines</h3>
        <ul className="space-y-5 text-slate-600">
          {[
            "From traditional keywords to semantic entity understanding.",
            "From chasing clicks to becoming the trusted answer.",
            "From basic link building to authoritative AI citation strategies."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 mr-4 mt-0.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const MethodologyCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <article className="p-8 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </article>
);

const CoreServicesSection = () => (
  <section className="bg-slate-900 text-white py-24">
    <div className="px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between items-start">
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Core GEO Services</h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          We position SEO and AEO as supporting mechanisms for our primary offering: Generative Engine Optimization.
        </p>
        <Link href="/services" className="inline-flex items-center text-white border-b border-white pb-1 font-medium hover:text-blue-400 hover:border-blue-400 transition-colors group">
          View All Services 
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
      <div className="w-full lg:w-1/2">
        <ul className="space-y-2">
          {["AI Visibility Audit", "Entity Optimisation", "AI Content Strategy", "Citation Strategy", "AI Monitoring & Reporting"].map((service, idx) => (
            <li key={idx} className="flex items-center text-lg md:text-xl font-medium border-b border-slate-800 py-4 hover:pl-2 transition-all cursor-default">
              <span className="text-blue-500 mr-6 font-mono text-sm">0{idx + 1}</span> 
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 py-12 px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
      <div className="font-bold text-slate-900 text-lg">
        Paradigm GEO<span className="text-blue-700">.</span>
      </div>
      <p className="text-center md:text-right">
        &copy; {new Date().getFullYear()} Paradigm GEO. The Global Standard for Digital Authority.
      </p>
    </div>
  </footer>
);

// --- Main Page Component ---

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-900 selection:text-white">
      
      <NavBar />
      <HeroSection />
      <TheProblemSection />

      {/* Methodology Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">How We Help</h2>
          <p className="text-lg text-slate-600">Our enterprise-grade framework systematically improves your brand's digital entity footprint.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MethodologyCard 
            number="1" 
            title="Audit" 
            description="We understand how AI platforms currently represent your brand by conducting rigorous prompt-based visibility testing." 
          />
          <MethodologyCard 
            number="2" 
            title="Optimise" 
            description="We restructure content and technical foundations (Schema, Knowledge Graph) to ensure AI systems can better understand and reference them." 
          />
          <MethodologyCard 
            number="3" 
            title="Build Authority" 
            description="We strengthen digital PR and industry citations in high-trust hubs to solidify digital validation." 
          />
          <MethodologyCard 
            number="4" 
            title="Measure" 
            description="We systematically analyze citation frequency, brand mentions in AI responses, and share of voice." 
          />
        </div>
      </section>

      <CoreServicesSection />

      {/* Results / Testimonials Placeholder */}
      <section className="px-8 py-24 max-w-7xl mx-auto bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Data-Backed Proof of Entity Growth</h2>
          <p className="text-lg text-slate-600">See how we transform traditional search footprints into dominant AI share-of-voice.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center text-slate-500 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
           <svg className="w-12 h-12 text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
           <p className="font-semibold text-xl text-slate-700">Case Studies & Metrics Dashboard</p>
           <p className="text-sm mt-3 text-slate-500 max-w-md mx-auto">Displaying real-time shifts in AI citation frequency and knowledge panel triggering across LLMs.</p>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="px-8 py-16 mb-24 max-w-5xl mx-auto">
        <div className="bg-blue-50/50 rounded-2xl border border-blue-100 p-8 md:p-10">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-3 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Our Transparency & Ethics Guarantee
          </h3>
          <p className="text-slate-700 leading-relaxed text-sm md:text-base text-balance">
            It is important to be transparent: no agency can guarantee that ChatGPT, Gemini, or other AI assistants will specifically mention or cite a brand. Our value lies in improving the core factors that drastically increase the <em className="font-semibold text-slate-900">likelihood</em> of visibility—such as authoritative content, strong entities, structured data, credible citations, and topical expertise—rather than making false promises regarding inclusion in AI responses. This positioning is both more accurate and infinitely more sustainable.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
