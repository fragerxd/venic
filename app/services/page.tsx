import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="px-8 py-20 md:py-28 max-w-7xl mx-auto flex flex-col items-start border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Methodology & Execution</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Architecting Your <br className="hidden md:block"/> Digital Entity.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
          We offer a proprietary, enterprise-grade framework designed to systematically improve your brand's digital entity footprint.
        </p>
      </section>

      {/* Primary Services Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core GEO Services [cite: 279]</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Our primary consulting frameworks are built to align your brand presence with Large Language Model retrieval processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Service 1 */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3">1. AI Visibility Audit [cite: 279]</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Understand how AI platforms currently represent a brand[cite: 279].
            </p>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-900 mb-3">Deliverables [cite: 280]</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Brand mentions in AI tools [cite: 280]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Citation analysis [cite: 280]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Competitor comparison [cite: 280]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Entity strength assessment [cite: 280]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> AI search performance report [cite: 280]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Improvement roadmap [cite: 280]</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3">2. AI Search Optimisation [cite: 280]</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Optimise websites and content so AI systems can better understand and reference them[cite: 280].
            </p>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-900 mb-3">Includes [cite: 281]</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Content restructuring [cite: 281]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Semantic optimisation [cite: 281]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Entity optimisation [cite: 281]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Schema markup [cite: 281]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Internal linking [cite: 281]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Topic clustering [cite: 281]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Knowledge graph alignment [cite: 281]</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3">3. AI Citation Strategy [cite: 282]</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Increase the likelihood that AI systems cite your brand by strengthening its presence across trusted sources[cite: 282].
            </p>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-900 mb-3">Includes [cite: 283]</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Authoritative content creation [cite: 283]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Digital PR [cite: 283]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Industry directory optimisation [cite: 283]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Expert contribution opportunities [cite: 283]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Consistent brand information across the web [cite: 283]</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3">4. Entity Optimisation [cite: 283]</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Build a strong digital identity for your brand[cite: 283].
            </p>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-900 mb-3">Includes [cite: 284]</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Brand entity development [cite: 284]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Person and organisation schema [cite: 284]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Consistent brand profiles [cite: 284]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Knowledge panel improvements [cite: 284]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Structured data implementation [cite: 284]</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3">5. AI Content Strategy [cite: 284]</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Create content designed to answer real user questions and support AI retrieval[cite: 284].
            </p>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-900 mb-3">Includes [cite: 285]</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Question-based content [cite: 285]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Topic clusters [cite: 285]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Comparison pages [cite: 285]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Evergreen resources [cite: 285]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> FAQs [cite: 285]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Expert guides [cite: 285]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Industry glossaries [cite: 285]</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3">6. GEO Monitoring & Reporting [cite: 286]</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Track AI visibility over time[cite: 286]. 
            </p>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-900 mb-3">Reports could include [cite: 286]</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> AI citation frequency [cite: 286]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Brand mentions in AI responses [cite: 286]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Competitor visibility [cite: 286]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Search trend changes [cite: 286]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Content performance [cite: 286]</li>
              <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span> Recommendations for improvement [cite: 286]</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Supporting Services Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Supporting Services [cite: 286]</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              These support your GEO work rather than being the headline offering[cite: 286]. At Paradigm GEO, we utilize traditional technical search mechanisms strictly as a foundational layer to advance your generative visibility.
            </p>
          </div>
          <div className="bg-slate-800 p-10 rounded-xl border border-slate-700">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-300">
              <li className="flex items-center"><span className="text-blue-500 mr-3">■</span> Technical SEO [cite: 287]</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3">■</span> Schema markup [cite: 287]</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3">■</span> Core Web Vitals [cite: 287]</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3">■</span> Local SEO [cite: 287]</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3">■</span> Content optimisation [cite: 287]</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3">■</span> Digital PR [cite: 287]</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3">■</span> E-E-A-T improvements [cite: 287]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">Ready to audit your AI visibility?</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Schedule a preliminary assessment to map your current entity standing across ChatGPT, Gemini, and Claude.
        </p>
        <Link href="/contact" className="inline-block bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded shadow-lg hover:bg-blue-800 transition-all">
          Book Your Assessment
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
