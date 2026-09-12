import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { TrustValue } from './components/sections/TrustValue';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Education } from './components/sections/Education';
import { SocialProof } from './components/sections/SocialProof';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

/**
 * Main Application Shell with Header, Hero, TrustValue, About, Services, Process, Education, SocialProof, FAQ, Contact & Footer
 */
export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-content-primary flex flex-col" id="top">
      {/* Skip to Content Link for WCAG 2.1 AA Compliance */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded focus:ring-2 focus:ring-focus-ring focus:shadow-md font-body text-sm font-medium"
      >
        Skip to main content
      </a>

      {/* Production Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Production Hero Section */}
        <Hero />

        {/* Production Trust & Value Anchor Section */}
        <TrustValue />

        {/* Production About Bindhu Section */}
        <About />

        {/* Production Advisory Services Section */}
        <Services />

        {/* Production Consultation Process Section */}
        <Process />

        {/* Production Insurance Education Section */}
        <Education />

        {/* Production Verified Social Proof Framework Section */}
        <SocialProof />

        {/* Production FAQ Section */}
        <FAQ />

        {/* Production Consultation & Contact Section */}
        <Contact />
      </main>

      {/* Production Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
