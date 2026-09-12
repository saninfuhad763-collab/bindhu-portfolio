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

  header: {
    brandName: 'Bindhu',
    brandDescriptor: 'Health Insurance Consultant',
    navItems: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'How It Works', href: '#process' },
      { label: 'Guidance', href: '#education' },
      { label: 'FAQ', href: '#faq' },
    ],
    ctaLabel: 'Book a Consultation',
    ctaHref: '#contact',
  },

  hero: {
    eyebrow: 'Health Insurance Guidance',
    headline: 'Clear guidance for protecting what matters most.',
    subheadline:
      'Understand your options, ask the right questions, and move forward with greater confidence.',
    primaryCta: {
      label: 'Book a Consultation',
      href: '#contact',
    },
    secondaryCta: {
      label: 'Explore Guidance',
      href: '#education',
    },
    reassuranceNote: 'A clearer way to begin the conversation about your coverage.',
    imageAlt: 'Portrait area reserved for Bindhu, Health Insurance Consultant',
    imageSource: null,
    imageStatus: 'pending',
    imagePlaceholderLabel: '[ Authentic Client Photography Pending ]',
  },

  trustValue: {
    eyebrow: 'Why The Experience Feels Different',
    headline: 'Clarity first. Confidence follows.',
    description:
      'Good guidance starts by making complicated decisions easier to understand, one step at a time.',
    pillars: [
      {
        id: 'pillar-guidance',
        title: 'Clear Guidance',
        description:
          'Complex policy structures, deductibles, and benefits translated into plain, understandable terms before you make decisions.',
        iconName: 'compass',
      },
      {
        id: 'pillar-support',
        title: 'Personalized Support',
        description:
          'A consultation designed around your individual situation, health priorities, and budget—never a one-size-fits-all sales pitch.',
        iconName: 'userRound',
      },
      {
        id: 'pillar-process',
        title: 'Straightforward Process',
        description:
          'Knowing exactly what happens next at each stage, from initial questions to plan comparison, with zero pressure or rush.',
        iconName: 'route',
      },
      {
        id: 'pillar-explanations',
        title: 'Plain-Language Explanations',
        description:
          'Clear, open dialogue that demystifies industry acronyms and fine print, helping you choose coverage with genuine peace of mind.',
        iconName: 'messageCircle',
      },
    ],
  },

  about: {
    eyebrow: 'About Bindhu',
    headline: 'A calmer way to navigate complicated decisions.',
    paragraphs: [
      'Health coverage is one of the most essential protections you put in place for yourself or your family, yet the process often feels rushed, overwhelming, and laden with technical terms that make clear choices difficult.',
      'My consulting approach begins with listening rather than selling. We take the time to understand your circumstances, examine your priorities, and translate complex policy details into plain language so you can compare options with clarity.',
      'The goal is never to steer you toward a particular plan, but to create the space, context, and patient guidance you need to make decisions with genuine confidence.',
    ],
    philosophy: [
      {
        id: 'listen-first',
        title: 'Listen first',
        description:
          'Start with your personal situation, healthcare priorities, and questions—never an assumed recommendation.',
      },
      {
        id: 'explain-clearly',
        title: 'Explain clearly',
        description:
          'Demystify unfamiliar terms, coverage limits, and out-of-pocket costs in clear, plain language.',
      },
      {
        id: 'guide-thoughtfully',
        title: 'Guide thoughtfully',
        description:
          'Create an unhurried environment where you feel fully informed and in control of every decision.',
      },
    ],
    cta: {
      label: 'Explore advisory areas',
      href: '#services',
    },
    imageSource: null,
    imageAlt: 'Portrait placeholder for Bindhu, Health Insurance Consultant',
    imageStatus: 'pending',
    imagePlaceholderLabel: '[ Authentic Client Photography Pending ]',
    caption: 'Guidance rooted in patience, clarity, and genuine respect for your decisions.',
    verifiedBio: null,
    credentialsPlaceholder: 'Credentials to be listed upon client verification.',
  },

  services: {
    eyebrow: 'Advisory Services',
    headline: 'Guidance built around your situation.',
    description:
      'Coverage considerations vary widely depending on personal circumstances and priorities. Explore how a structured, consultative conversation helps clarify questions and guide thoughtful decisions.',
    cta: {
      label: 'Explore your situation',
      href: '#contact',
    },
    items: [
      {
        id: 'service-personal',
        number: '01',
        shortLabel: 'Personal Coverage',
        category: 'Personal Guidance',
        title: 'Personal Coverage Guidance',
        description:
          'A structured place to understand the questions and priorities involved in reviewing personal coverage options and finding a balanced path forward.',
        audience:
          'Individuals exploring, reviewing, or adjusting their personal coverage needs.',
        advisoryScope: [
          'Reviewing your current situation and healthcare priorities',
          'Identifying the questions you want answered before deciding',
          'Evaluating core protection considerations against budget preferences',
          '[Detailed service scope — pending client confirmation]',
        ],
        expectedOutcome:
          'A clearer understanding of what to consider next with zero pressure or confusing jargon.',
        verificationStatus: 'Pending client confirmation',
        verificationNotice: '[ Detailed service scope — pending client confirmation ]',
      },
      {
        id: 'service-family',
        number: '02',
        shortLabel: 'Family Coverage',
        category: 'Household Guidance',
        title: 'Family Coverage Guidance',
        description:
          'A thoughtful, organized process to examine shared and individual priorities across household members, helping families plan with clarity.',
        audience:
          'Families and households seeking to coordinate coverage considerations together.',
        advisoryScope: [
          'Mapping household coverage priorities across family members',
          'Examining shared versus individual protection considerations',
          'Structuring questions around routine and unexpected care planning',
          '[Detailed service scope — pending client confirmation]',
        ],
        expectedOutcome:
          'A structured overview of family priorities to help guide coordinated household decisions.',
        verificationStatus: 'Pending client confirmation',
        verificationNotice: '[ Detailed service scope — pending client confirmation ]',
      },
      {
        id: 'service-transition',
        number: '03',
        shortLabel: 'Transition Guidance',
        category: 'Transition Guidance',
        title: 'Life-Stage & Transition Guidance',
        description:
          'Patient, step-by-step guidance when personal circumstances change—such as career transitions, relocations, or approaching new life milestones.',
        audience:
          'Individuals experiencing career changes, relocations, or new life stages.',
        advisoryScope: [
          'Understanding key decision timeframes during transitions',
          'Reviewing continuity considerations when circumstances change',
          'Organizing essential questions and checklists before making changes',
          '[Detailed service scope — pending client confirmation]',
        ],
        expectedOutcome:
          'Confidence and clarity on transition timelines and considerations without feeling rushed.',
        verificationStatus: 'Pending client confirmation',
        verificationNotice: '[ Detailed service scope — pending client confirmation ]',
      },
      {
        id: 'service-specialized',
        number: '04',
        shortLabel: 'Specialized Guidance',
        category: 'Specialized Guidance',
        title: 'Specialized Coverage Guidance',
        description:
          'A dedicated discussion to evaluate distinct situations, supplemental considerations, or specific protection questions that require individual attention.',
        audience:
          'Individuals with specific coverage questions or exploring supplemental options.',
        advisoryScope: [
          'Identifying specific areas where additional guidance is helpful',
          'Clarifying the role of supplemental protection options',
          'Weighing personal risk preferences against cost considerations',
          '[Detailed service scope — pending client confirmation]',
        ],
        expectedOutcome:
          'A well-rounded perspective on specialized options tailored to your distinct priorities.',
        verificationStatus: 'Pending client confirmation',
        verificationNotice: '[ Detailed service scope — pending client confirmation ]',
      },
    ],
  },

  process: {
    eyebrow: 'How It Works',
    headline: 'A simple path toward greater clarity.',
    description:
      'A thoughtful conversation can start with your questions and end with a clearer understanding of what to consider next.',
    reassuranceText:
      'Questions are welcome, even when you’re still figuring out where to start.',
    steps: [
      {
        id: 'step-start',
        number: '01',
        shortLabel: 'START',
        title: 'Start with your situation',
        description:
          'Begin with the questions, priorities, and circumstances you want to understand more clearly.',
        outcome: 'A shared starting point.',
      },
      {
        id: 'step-clarify',
        number: '02',
        shortLabel: 'CLARIFY',
        title: 'Clarify what matters',
        description:
          'Identify the decisions, priorities, and information that deserve the most attention.',
        outcome: 'A clearer set of questions.',
      },
      {
        id: 'step-explore',
        number: '03',
        shortLabel: 'EXPLORE',
        title: 'Explore the possibilities',
        description:
          'Review the considerations and available directions that are relevant to your situation.',
        outcome: 'A better understanding of your options.',
      },
      {
        id: 'step-decide',
        number: '04',
        shortLabel: 'NEXT STEP',
        title: 'Decide what comes next',
        description:
          'Leave the conversation with a clearer sense of the next step that makes sense for you.',
        outcome: 'A clearer direction forward.',
      },
    ],
  },

  education: {
    eyebrow: 'Insurance Guidance',
    headline: 'Understand the questions before making a decision.',
    description:
      'A clearer conversation starts with knowing what to ask, what to compare, and which details deserve your attention.',
    topics: [
      {
        id: 'edu-1',
        number: '01',
        question: 'What should I understand before choosing coverage?',
        summary:
          'Key priorities and foundational questions to consider before evaluating specific options.',
        answer:
          '[Verified educational guidance pending client market confirmation.]',
        status: 'pending',
        statusLabel: 'Pending client confirmation',
      },
      {
        id: 'edu-2',
        number: '02',
        question: 'How should I compare different coverage options?',
        summary:
          'A thoughtful, structured way to weigh trade-offs and understand what each direction provides.',
        answer:
          '[Verified comparison guidance pending client market confirmation.]',
        status: 'pending',
        statusLabel: 'Pending client confirmation',
      },
      {
        id: 'edu-3',
        number: '03',
        question: 'What costs and trade-offs should I consider?',
        summary:
          'Balancing predictable ongoing commitments with potential out-of-pocket considerations.',
        answer:
          '[Verified cost guidance pending client market confirmation.]',
        status: 'pending',
        statusLabel: 'Pending client confirmation',
      },
      {
        id: 'edu-4',
        number: '04',
        question: 'What questions should I ask before making a change?',
        summary:
          'Essential considerations to clarify before transitioning between coverage arrangements.',
        answer:
          '[Verified decision guidance pending client market confirmation.]',
        status: 'pending',
        statusLabel: 'Pending client confirmation',
      },
    ],
  },

  socialProof: {
    eyebrow: 'Client Stories',
    headline: 'Real experiences belong here.',
    description:
      'Authentic client perspectives will be shared here once they are available and approved for publication.',
    supportingLine:
      'Trust is built from real conversations, real decisions, and real experiences.',
    availabilityNotice: {
      badge: 'Reserved Editorial Space',
      title: 'Real client experiences will appear here.',
      description:
        'Client privacy and trust come first. Stories will appear only after direct consultation feedback has been verified and authorized for publication.',
      commitments: [
        'No fabricated testimonials or placeholder quotes',
        'Direct client permission required prior to publication',
        'Full respect for personal healthcare confidentiality',
      ],
    },
    stories: [],
  },

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
