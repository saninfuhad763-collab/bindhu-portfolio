import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { TrustValue } from './components/sections/TrustValue';
import { About } from './components/sections/About';
import { CareerRoadmap } from './components/sections/CareerRoadmap';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Education } from './components/sections/Education';
import { SocialProof } from './components/sections/SocialProof';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { ScrollSystem } from './components/motion/ScrollSystem';

/**
 * Main Application Shell with Header, Hero, TrustValue, About, Services, Process, Education, SocialProof, FAQ, Contact & Footer
 * Integrated with GSAP ScrollSmoother & Motion System
 */
export const App: React.FC = () => {
  const skipLink = (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded focus:ring-2 focus:ring-focus-ring focus:shadow-md font-body text-sm font-medium"
    >
      Skip to main content
    </a>
  );

  return (
    <div className="min-h-screen bg-canvas text-content-primary flex flex-col" id="top">
      <ScrollSystem header={<Header />} skipLink={skipLink}>
        {/* Main Content Area */}
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {/* Production Hero Section */}
          <Hero />

          {/* Production Trust & Value Anchor Section */}
          <TrustValue />

          {/* Production About Bindhu Section */}
          <About />

          {/* Production Career Roadmap Section */}
          <CareerRoadmap />

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
      </ScrollSystem>
    </div>
  );
};

export default App;
