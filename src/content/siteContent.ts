import { SiteContent } from '../types/content';

/**
 * Centralized Site Content for Bindhu Portfolio
 *
 * SAFETY COMPLIANCE RULES:
 * 1. Unverified claims: Kept strictly as neutral structural trust language or explicit placeholders.
 * 2. Jurisdiction neutrality: No hardcoded U.S. or regional specific concepts until market confirmation.
 */
export const siteContent: SiteContent = {
  meta: {
    title: 'Bindhu — Health Insurance Consultant | Clear Guidance & Personal Support',
    description: 'Personalized health insurance consulting. Unbiased guidance, plain-language policy reviews, and dedicated client advocacy.',
    author: 'Bindhu',
    siteUrl: 'https://example.com', // To be updated with production domain
  },

  client: {
    name: 'Bindhu',
    professionalTitle: 'Health Insurance Consultant',
    isVerified: false,
    phonePlaceholder: '(555) 000-0000 [Pending Client Verification]',
    emailPlaceholder: 'hello@example.com [Pending Client Verification]',
    locationPlaceholder: 'Office Location [Pending Client Confirmation]',
    licenseStatusPlaceholder: 'Professional License # [Pending Verification]',
    carrierNoticePlaceholder: 'Carrier details to be listed upon market verification.',
  },

  hero: {
    eyebrow: 'Personal Health Insurance Advisory',
    headline: "Navigating Health Coverage Doesn't Have to Be Overwhelming.",
    subheadline:
      'Clear guidance, personalized plan evaluations, and dedicated advocacy to help you protect what matters most—without confusion or pressure.',
    primaryCta: {
      label: 'Request a Policy Review',
      href: '#contact',
    },
    secondaryCta: {
      label: 'Explore Advisory Areas',
      href: '#services',
    },
    reassuranceNote: 'Confidential consultations focused entirely on your specific needs.',
  },

  trustPillars: [
    {
      id: 'pillar-1',
      title: 'Clear Guidance',
      description: 'Translating complex policy wording and coverage details into plain, understandable language.',
      iconName: 'shield',
    },
    {
      id: 'pillar-2',
      title: 'Objective Comparisons',
      description: 'Reviewing plan options thoroughly to identify solutions that align with your health and financial priorities.',
      iconName: 'search',
    },
    {
      id: 'pillar-3',
      title: 'Personalized Attention',
      description: 'Taking the time to understand your individual, family, or business circumstances before recommending a path.',
      iconName: 'heartHandshake',
    },
    {
      id: 'pillar-4',
      title: 'Ongoing Support',
      description: 'Available to assist with questions, coverage adjustments, and annual reviews as your needs evolve.',
      iconName: 'clock',
    },
  ],

  about: {
    eyebrow: 'About Bindhu',
    headline: 'Dedicated to Bringing Clarity and Calm to Health Insurance Decisions.',
    paragraphs: [
      'Choosing health coverage is one of the most important decisions an individual or family can make, yet the process is frequently complicated by dense terminology, confusing tiers, and uncertainty.',
      'My consulting approach centers on human connection, active listening, and thorough analysis. Rather than rushing into a plan, we examine your priorities, explain your options clearly, and ensure you feel completely confident in your coverage.',
    ],
    principles: [
      {
        title: 'Client-First Focus',
        description: 'Focusing exclusively on what serves your personal health and financial security best.',
      },
      {
        title: 'Complete Transparency',
        description: 'Plain explanations of plan limitations, out-of-pocket considerations, and policy structures.',
      },
      {
        title: 'Patient Demystification',
        description: 'Taking the time to answer every question thoroughly so you never feel rushed.',
      },
    ],
  },

  services: [
    {
      id: 'service-individual',
      category: 'Personal Advisory',
      title: 'Individual & Family Coverage Planning',
      description: 'Helping individuals and households navigate available coverage options to balance monthly premiums with comprehensive protection.',
      audience: 'Families, self-employed professionals, and individuals seeking dependable coverage.',
      advisoryScope: [
        'Evaluating network coverage and provider access',
        'Balancing deductibles with expected healthcare usage',
        'Reviewing prescription and wellness benefits',
      ],
    },
    {
      id: 'service-transition',
      category: 'Life Stage Transitions',
      title: 'Senior & Retirement Coverage Transitions',
      description: 'Providing structured, patient guidance for individuals approaching retirement or transitioning between coverage systems.',
      audience: 'Individuals preparing for retirement or evaluating supplemental protection.',
      advisoryScope: [
        'Step-by-step transition timelines and enrollment rules',
        'Evaluating supplemental coverage needs',
        'Preventing coverage gaps and avoidable administrative delays',
      ],
    },
    {
      id: 'service-business',
      category: 'Organization Solutions',
      title: 'Small Business & Team Health Solutions',
      description: 'Assisting small employers and teams in structuring attractive, sustainable health benefits for their staff.',
      audience: 'Small business owners, startups, and growing teams.',
      advisoryScope: [
        'Budget-conscious group benefit structuring',
        'Employee onboarding and educational guidance',
        'Annual renewal evaluations and market reviews',
      ],
    },
    {
      id: 'service-supplemental',
      category: 'Extended Protection',
      title: 'Supplemental & Ancillary Health Benefits',
      description: 'Reviewing specialized coverage areas such as dental, vision, disability, and critical illness protection.',
      audience: 'Anyone looking to bridge specific coverage gaps.',
      advisoryScope: [
        'Identifying vulnerabilities in primary health coverage',
        'Targeted supplemental protection analysis',
        'Cost-effective benefit additions',
      ],
    },
  ],

  process: [
    {
      stepNumber: '01',
      title: 'Discovery & Needs Assessment',
      description: 'We discuss your current situation, health priorities, preferred doctors, and budget parameters in a low-pressure conversation.',
      deliverable: 'Clear summary of your coverage requirements.',
    },
    {
      stepNumber: '02',
      title: 'Market Analysis & Comparison',
      description: 'I conduct an objective review of available plans in your market, filtering for network compatibility and overall value.',
      deliverable: 'Side-by-side comparison of top matching options.',
    },
    {
      stepNumber: '03',
      title: 'Plain-Language Review',
      description: 'Together, we review the strengths and trade-offs of each option so you understand exactly what is covered and how costs work.',
      deliverable: 'Informed selection with zero confusion.',
    },
    {
      stepNumber: '04',
      title: 'Enrollment & Year-Round Support',
      description: 'Assistance with enrollment paperwork, followed by ongoing availability for questions, claim questions, and life changes.',
      deliverable: 'Dedicated ongoing advisory relationship.',
    },
  ],

  education: [
    {
      id: 'edu-1',
      topicTitle: '[Coverage Concepts — Pending Client Market Confirmation]',
      summary: 'Understanding the relationship between deductibles, premiums, and out-of-pocket maximums.',
      keyTakeaway: 'A lower premium is not always the most economical choice if routine medical care is required.',
      isPlaceholderMarketTopic: true,
    },
    {
      id: 'edu-2',
      topicTitle: '[Network Structures — Pending Client Market Confirmation]',
      summary: 'How provider networks function, in-network vs. out-of-network considerations, and referral mechanisms.',
      keyTakeaway: 'Verifying hospital and physician participation before enrolling protects against surprise costs.',
      isPlaceholderMarketTopic: true,
    },
    {
      id: 'edu-3',
      topicTitle: '[Enrollment Timelines — Pending Client Market Confirmation]',
      summary: 'Understanding qualifying life events, standard enrollment windows, and transition periods.',
      keyTakeaway: 'Knowing your timeline prevents coverage lapses and potential late-enrollment penalties.',
      isPlaceholderMarketTopic: true,
    },
  ],

  testimonials: [
    {
      id: 'test-1',
      clientInitials: 'M. & R. S.',
      caseDescription: 'Family Coverage Planning [Placeholder Scenario]',
      feedbackText:
        '"Working through our family options with Bindhu completely removed the stress from the process. Every question was answered clearly and patiently."',
      isPlaceholderStory: true,
    },
    {
      id: 'test-2',
      clientInitials: 'D. K.',
      caseDescription: 'Self-Employed Consultant [Placeholder Scenario]',
      feedbackText:
        '"As an independent worker, finding health insurance was intimidating. Bindhu helped me find a plan that fit my exact health needs and monthly budget."',
      isPlaceholderStory: true,
    },
    {
      id: 'test-3',
      clientInitials: 'E. L.',
      caseDescription: 'Retirement Coverage Transition [Placeholder Scenario]',
      feedbackText:
        '"The transition into retirement coverage has so many moving parts. Having an expert guide us step-by-step gave us total peace of mind."',
      isPlaceholderStory: true,
    },
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'What is the role of an independent health insurance consultant?',
      answer:
        'An independent consultant works with you to evaluate available coverage options across multiple providers, helping you understand differences and select a plan that matches your specific circumstances.',
    },
    {
      id: 'faq-2',
      question: 'How do consultations typically work?',
      answer:
        'Consultations are conversational and informational. We begin by reviewing your healthcare priorities, budget, and any preferred providers, then examine matching plans together at your own pace.',
    },
    {
      id: 'faq-3',
      question: 'Can I keep my current doctors and specialists?',
      answer:
        'During our review, provider network verification is a top priority. We check that your key physicians, facilities, and medications are included in the plans under consideration.',
    },
    {
      id: 'faq-4',
      question: 'What information should I have ready for our initial conversation?',
      answer:
        'Having a basic list of current doctors, regular prescriptions, and an idea of your monthly budget is helpful, but not required for an introductory conversation.',
    },
  ],

  contact: {
    eyebrow: 'Get In Touch',
    headline: 'Schedule a Conversational Policy Review',
    description:
      'Have questions about your coverage or exploring new options? Send an inquiry below to start a friendly, zero-pressure conversation.',
    privacyNotice: 'Your information is treated with strict confidentiality and never shared with third parties.',
    fields: {
      nameLabel: 'Your Full Name',
      contactMethodLabel: 'Email Address or Phone Number',
      coverageInterestLabel: 'Primary Coverage Interest',
      coverageOptions: [
        'Individual / Family Coverage',
        'Senior / Retirement Transition',
        'Small Business / Team Coverage',
        'General Policy Review / Questions',
      ],
      notesLabel: 'Tell me a bit about your situation (optional)',
      submitButtonLabel: 'Send Review Request',
    },
  },

  footer: {
    disclaimer:
      'Disclaimer: Information provided on this website is for educational and informational purposes. Specific policy terms, conditions, and coverage details are governed by official plan documents.',
    regulatoryNote: 'Licensing and regulatory registrations are maintained according to applicable jurisdiction guidelines. Details available upon confirmation.',
    copyright: `© ${new Date().getFullYear()} Bindhu. All rights reserved.`,
    navigationLinks: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Education', href: '#education' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};
