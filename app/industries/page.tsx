import React from 'react';
import Link from 'next/link';

export default function IndustriesPage() {
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
          <Link href="/industries" className="text-slate-900 transition-colors">Industries</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
        </div>
        <Link href="/contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-slate-800 transition-colors">
          Book Discovery Call
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-slate-200">
        <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-4">Sector Expertise</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
          Specialized AI Visibility for Complex Markets. {/* [cite: 213] */}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
          Aligning your brand presence with the specific retrieval processes of your industry. {/* [cite: 214] */}
        </p>
      </section>

      {/* Introduction Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Where Discovery Drives Revenue</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We focus on businesses where AI-driven discovery can influence customer decisions. {/*  */} As generative engines increasingly handle complex, high-stakes queries, establishing absolute digital authority in these sectors is no longer optional—it is a commercial imperative.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* SaaS Companies */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">SaaS Companies {/* [cite: 216] */}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Software buyers are using LLMs to compare platforms, request feature breakdowns, and find alternatives. We optimize your product entities to ensure you are the recommended solution in generative comparisons.
            </p>
          </div>

          {/* Professional Services */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Professional Services {/* [cite: 216] */}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Consultancies, agencies, and B2B service companies {/* [cite: 216] */} rely on trust. We engineer your digital footprint to highlight your firm's methodologies, leadership, and case studies to AI research tools.
            </p>
          </div>

          {/* Healthcare Providers */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Healthcare {/* [cite: 216] */}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              In YMYL (Your Money or Your Life) sectors, E-E-A-T is paramount. We build robust organizational schema and authoritative citations for healthcare providers to safely dominate AI-generated medical inquiries.
            </p>
          </div>

          {/* Legal */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Law Firms {/* [cite: 216] */}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              When users ask Perplexity or ChatGPT for legal precedents or top-tier representation, your firm’s expertise must be universally recognized. We structure your partner profiles and practice areas for maximum LLM comprehension.
            </p>
          </div>

          {/* Finance */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Financial Advisers {/* [cite: 216] */}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Wealth management and fintech brands require unquestionable digital credibility. We optimize your financial insights and institutional knowledge graph so generative engines cite you as a primary financial authority.
            </p>
          </div>

          {/* E-commerce */}
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">E-commerce Brands {/* [cite: 216] */}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Conversational commerce is the new storefront. We optimize your product catalogs, reviews, and brand entities to ensure high visibility when consumers ask AI for purchasing recommendations.
            </p>
          </div>

        </div>
      </section>

      {/* Additional Sectors List */}
      <section className="bg-slate-900 text-white py-24">
        <div className="px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Also Specializing In:</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Generative Engine Optimization is universally applicable to any entity seeking to establish authority on the modern web. Our frameworks adapt to your specific market demands.
            </p>
          </div>
          <div className="md:w-1/2 w-full bg-slate-800 p-10 rounded-xl border border-slate-700">
            <ul className="space-y-4 text-slate-300 text-lg font-medium">
              <li className="flex items-center border-b border-slate-700 pb-3"><span className="text-blue-500 mr-4">■</span> Local Businesses {/* [cite: 216] */}</li>
              <li className="flex items-center border-b border-slate-700 pb-3"><span className="text-blue-500 mr-4">■</span> Consultants {/* [cite: 216] */}</li>
              <li className="flex items-center border-b border-slate-700 pb-3"><span className="text-blue-500 mr-4">■</span> Personal Brands {/* [cite: 216] */}</li>
              <li className="flex items-center pt-1"><span className="text-blue-500 mr-4">■</span> Enterprise Startups</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">Dominate Your Industry's AI Search</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Discover how generative engines currently perceive your brand compared to your direct market competitors. 
        </p>
        <Link href="/contact" className="inline-block bg-blue-700 text-white px-10 py-4 text-lg font-medium rounded shadow-lg hover:bg-blue-800 transition-all">
          Request an Industry Teardown
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
