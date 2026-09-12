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

export interface ClientStory {
  id: string;
  status: 'pending' | 'verified';
  clientName?: string;
  clientContext?: string;
  situation?: string;
  quote?: string;
  outcome?: string;
  date?: string;
  approvedForPublication: boolean;
}

export interface SocialProofContent {
  eyebrow: string;
  headline: string;
  description: string;
  supportingLine?: string;
  availabilityNotice: {
    badge: string;
    title: string;
    description: string;
    commitments: string[];
  };
  stories: ClientStory[];
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  status: 'pending' | 'verified';
}

export interface FAQContent {
  eyebrow: string;
  headline: string;
  description: string;
  items: FAQItem[];
}

export interface ContactExpectation {
  id: string;
  title: string;
  description: string;
}

export interface ContactFormConfig {
  nameLabel: string;
  emailLabel: string;
  inquiryLabel: string;
  notesLabel?: string;
  submitButtonLabel: string;
}

export interface DirectContactConfig {
  phone?: string;
  email?: string;
  bookingUrl?: string;
  preferredContactMethod?: string;
}

export interface ContactPlaceholderConfig {
  badge: string;
  title: string;
  description: string;
  guidanceTitle: string;
  guidanceItems: string[];
}

export interface ContactContent {
  eyebrow: string;
  headline: string;
  description: string;
  expectations: ContactExpectation[];
  mode: 'placeholder' | 'direct' | 'form';
  placeholderState: ContactPlaceholderConfig;
  form?: ContactFormConfig;
  directContact?: DirectContactConfig;
  privacyNotice: string;
}

export interface FooterContent {
  positioning: string;
  disclaimer: string;
  regulatoryNote: string;
  legalNotice: string;
  copyright: string;
  contactNote: string;
  contactCtaLabel: string;
  contactCtaHref: string;
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
  socialProof: SocialProofContent;
  faq: FAQContent;
  faqs?: FAQItem[];
  contact: ContactContent;
  footer: FooterContent;
}
