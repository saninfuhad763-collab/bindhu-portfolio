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
  imageAlt: string;
  imageSource: string | null;
  imageStatus: 'pending' | 'verified';
  imagePlaceholderLabel: string;
}

export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  iconName: 'compass' | 'userRound' | 'route' | 'messageCircle';
}

export interface TrustValueContent {
  eyebrow: string;
  headline: string;
  description: string;
  pillars: TrustPillar[];
}

export interface AboutPhilosophy {
  id: string;
  title: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  philosophy: AboutPhilosophy[];
  cta: {
    label: string;
    href: string;
  };
  imageSource: string | null;
  imageAlt: string;
  imageStatus: 'pending' | 'verified';
  imagePlaceholderLabel: string;
  caption?: string;
  verifiedBio?: string | null;
  credentialsPlaceholder?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  shortLabel: string;
  category: string;
  title: string;
  description: string;
  audience: string;
  advisoryScope: string[];
  expectedOutcome: string;
  verificationStatus: string;
  verificationNotice?: string;
}

export interface ServicesContent {
  eyebrow: string;
  headline: string;
  description: string;
  items: ServiceItem[];
  cta: {
    label: string;
    href: string;
  };
}

export interface ProcessStep {
  id: string;
  number: string;
  shortLabel: string;
  title: string;
  description: string;
  outcome: string;
}

export interface ProcessContent {
  eyebrow: string;
  headline: string;
  description: string;
  reassuranceText: string;
  steps: ProcessStep[];
}

export interface EducationTopic {
  id: string;
  number: string;
  question: string;
  summary: string;
  answer: string;
  status: 'pending' | 'verified';
  statusLabel: string;
}

export interface EducationContent {
  eyebrow: string;
  headline: string;
  description: string;
  topics: EducationTopic[];
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

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderContent {
  brandName: string;
  brandDescriptor: string;
  navItems: NavItem[];
  ctaLabel: string;
  ctaHref: string;
}

export interface SiteContent {
  meta: MetaContent;
  client: ClientProfile;
  header: HeaderContent;
  hero: HeroContent;
  trustValue: TrustValueContent;
  trustPillars?: TrustPillar[];
  about: AboutContent;
  services: ServicesContent;
  process: ProcessContent;
  education: EducationContent;
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
  contact: ContactContent;
  footer: FooterContent;
}
