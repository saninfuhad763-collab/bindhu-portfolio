import React from 'react';
import { Container } from './components/layout/Container';
import { SectionHeading } from './components/ui/SectionHeading';
import { Button } from './components/ui/Button';
import { Stack } from './components/ui/Stack';
import { siteContent } from './content/siteContent';

/**
 * Foundation Verification App
 * Demonstrates and validates the design system foundation, tokens, typography,
 * and primitives without prematurely implementing full portfolio sections.
 */
export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4">
      <Container size="standard">
        <Stack direction="col" gap="10" align="start">
          {/* Foundation Status & Header */}
          <header className="border-b border-border-subtle pb-8 w-full">
            <SectionHeading
              eyebrow="Phase 3 Foundation Active"
              eyebrowVariant="default"
              title={`${siteContent.client.name} — ${siteContent.client.professionalTitle}`}
              titleAs="h1"
              description="Design system tokens, typography pairing (Lora + Plus Jakarta Sans), and foundational UI primitives have been successfully initialized."
            />
          </header>

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
                  {siteContent.education[0]?.topicTitle}
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
  );
};

export default App;
