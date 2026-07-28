import React from 'react';
import './globals.css'; // If you have a global CSS file, otherwise remove or adapt

export const metadata = {
  title: 'Paradigm GEO | Enterprise AI Search & Visibility',
  description: 'We help businesses increase their visibility across ChatGPT, Gemini, Claude, Perplexity, and Google AI Overviews.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}