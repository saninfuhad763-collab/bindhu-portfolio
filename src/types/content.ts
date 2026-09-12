/**
 * SiteContent Type Definitions — Bindhu Portfolio
 * Strictly adheres to the Content Authenticity & Market Neutrality guidelines.
 */

export interface MetaContent {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
}

export interface ClientProfile {
  name: string;
  professionalTitle: string;
  isVerified: boolean;
  phonePlaceholder: string;
  emailPlaceholder: string;
  locationPlaceholder: string;
  licenseStatusPlaceholder: string;
  carrierNoticePlaceholder: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  reassuranceNote: string;
}

export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  iconName: 'shield' | 'search' | 'clock' | 'heartHandshake';
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  principles: Array<{
    title: string;
    description: string;
  }>;
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  audience: string;
  advisoryScope: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface EducationalTopic {
  id: string;
  topicTitle: string;
  summary: string;
  keyTakeaway: string;
  isPlaceholderMarketTopic: boolean;
}

export interface TestimonialItem {
  id: string;
  clientInitials: string;
  caseDescription: string;
  feedbackText: string;
  isPlaceholderStory: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactContent {
  eyebrow: string;
  headline: string;
  description: string;
  privacyNotice: string;
  fields: {
    nameLabel: string;
    contactMethodLabel: string;
    coverageInterestLabel: string;
    coverageOptions: string[];
    notesLabel: string;
    submitButtonLabel: string;
  };
}

export interface FooterContent {
  disclaimer: string;
  regulatoryNote: string;
  copyright: string;
  navigationLinks: Array<{
    label: string;
    href: string;
  }>;
}

export interface SiteContent {
  meta: MetaContent;
  client: ClientProfile;
  hero: HeroContent;
  trustPillars: TrustPillar[];
  about: AboutContent;
  services: ServiceItem[];
  process: ProcessStep[];
  education: EducationalTopic[];
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
  contact: ContactContent;
  footer: FooterContent;
}
