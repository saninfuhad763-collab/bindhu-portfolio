import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { TrustValue } from './components/sections/TrustValue';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Education } from './components/sections/Education';
import { Container } from './components/layout/Container';
import { SectionHeading } from './components/ui/SectionHeading';
import { Button } from './components/ui/Button';
import { Stack } from './components/ui/Stack';
import { siteContent } from './content/siteContent';

/**
 * Main Application Shell with Header, Hero, TrustValue, About, Services, Process & Education
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

        {/* Foundation & Primitives Verification Block (To be replaced by subsequent sections) */}
        <div className="py-16 px-4 border-t border-border-subtle/80 bg-canvas-alt/30">
          <Container size="standard">
            <Stack direction="col" gap="10" align="start">
              <div className="border-b border-border-subtle pb-8 w-full">
                <SectionHeading
                  eyebrow="Phase 3 Foundation Active"
                  eyebrowVariant="default"
                  title={`${siteContent.client.name} — ${siteContent.client.professionalTitle}`}
                  titleAs="h2"
                  description="Design system tokens, typography pairing (Lora + Plus Jakarta Sans), and foundational UI primitives have been successfully initialized."
                />
              </div>

          {/* Design System Primitives Verification */}
          <section className="space-y-6 w-full" aria-labelledby="primitives-heading">
            <h2 id="primitives-heading" className="font-display text-card-h3 text-brand-primary">
              Interactive Primitives
            </h2>

            <div className="p-6 bg-surface border border-border-subtle rounded-lg shadow-card space-y-6">
              <p className="font-body text-body-regular text-content-secondary max-w-reading">
                Buttons meet the mandatory 48px touch target standard, feature accessible focus rings,
                and adhere strictly to the locked color tokens.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Primary Action (Eucalyptus)</Button>
                <Button variant="secondary">Secondary Action (Maritime Slate)</Button>
                <Button variant="advisory">Advisory Action (Terracotta)</Button>
                <Button variant="ghost">Ghost Action</Button>
              </div>
            </div>
          </section>

          {/* Content Architecture Verification */}
          <section className="space-y-4 w-full" aria-labelledby="content-heading">
            <h2 id="content-heading" className="font-display text-card-h3 text-brand-primary">
              Centralized Content Verification
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-surface border border-border-subtle rounded-lg shadow-card">
                <span className="font-body text-eyebrow font-semibold text-action-primary uppercase">
                  Safety Compliance Status
                </span>
                <p className="mt-2 font-body text-body-regular text-content-primary">
                  {siteContent.client.isVerified
                    ? 'Client credentials verified'
                    : 'Unverified claims strictly isolated as placeholders.'}
                </p>
                <p className="mt-1 font-body text-small-meta text-content-muted">
                  {siteContent.client.licenseStatusPlaceholder}
                </p>
              </div>

              <div className="p-6 bg-surface border border-border-subtle rounded-lg shadow-card">
                <span className="font-body text-eyebrow font-semibold text-advisory-accent uppercase">
                  Market Neutrality Status
                </span>
                <p className="mt-2 font-body text-body-regular text-content-primary">
                  Jurisdiction-specific concepts held as neutral placeholders.
                </p>
                <p className="mt-1 font-body text-small-meta text-content-muted">
                  {siteContent.education.topics[0]?.question}
                </p>
              </div>
            </div>
          </section>

          {/* Foundation Milestone Footer */}
          <footer className="pt-8 border-t border-border-subtle text-content-muted text-small-meta w-full">
            <p>
              Technical foundation ready for section-by-section composition in the subsequent phase.
            </p>
          </footer>
        </Stack>
      </Container>
      </div>
      </main>
    </div>
  );
};

export default App;
