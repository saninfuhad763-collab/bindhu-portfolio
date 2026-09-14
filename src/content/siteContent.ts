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
    title: 'Bindhu | Health Insurance Consultant',
    description:
      'Clear, thoughtful guidance for understanding health insurance options, questions, and next steps.',
    author: 'Bindhu',
    siteUrl: '', // Production domain pending confirmation
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
    imageAlt: 'Temporary demo portrait used for development preview.',
    imageSource: '/images/demo-bindhu-portrait.webp',
    imageStatus: 'demo',
    imagePlaceholderLabel: '[ Demo Photography Active — Client Photography Pending ]',
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
    imageSource: '/images/demo-bindhu-about.webp',
    imageAlt: 'Temporary demo consultation portrait used for development preview.',
    imageStatus: 'demo',
    imagePlaceholderLabel: '[ Demo Photography Active — Client Photography Pending ]',
    caption: 'Guidance rooted in patience, clarity, and genuine respect for your decisions.',
    verifiedBio: null,
    credentialsPlaceholder: 'Credentials to be listed upon client verification.',
  },

  careerRoadmap: {
    eyebrow: 'Career Roadmap',
    headline: 'Experience shaped by patient guidance and client advocacy.',
    description:
      'A steady progression centered on objective policy evaluation, deep understanding of carrier options, and an ongoing commitment to clear, unbiased healthcare counsel.',
    disclaimer:
      '[ Professional milestones below illustrate the advisory progression structure. Verified career dates and credentials will be confirmed upon client onboarding. ]',
    milestones: [
      {
        id: 'milestone-start',
        phase: '01',
        period: '[ Career Start ]',
        title: '[ Role / Foundation Experience ]',
        focus: '[ Healthcare Policy Fundamentals & Communication ]',
        description:
          '[ Initial professional foundation focused on understanding core healthcare policies, coverage terminology, and developing the client-first listening approach that defines current advisory work. ]',
      },
      {
        id: 'milestone-milestone',
        phase: '02',
        period: '[ Professional Milestone ]',
        title: '[ Role / Advisory Expansion ]',
        focus: '[ Comparative Analysis & Plan Structure Evaluation ]',
        description:
          '[ Expansion into comprehensive comparative plan evaluations, helping clients untangle complex network tiers, deductible thresholds, and out-of-pocket exposure across major options. ]',
      },
      {
        id: 'milestone-development',
        phase: '03',
        period: '[ Career Development ]',
        title: '[ Role / Specialized Practice ]',
        focus: '[ Life Transition Guidance & Household Coverage Planning ]',
        description:
          '[ Development of specialized consultation frameworks for families, individuals navigating career shifts, and clients requiring dedicated support through Medicare and individual marketplace choices. ]',
      },
      {
        id: 'milestone-focus',
        phase: '04',
        period: '[ Current Professional Focus ]',
        title: '[ Independent Health Insurance Consultant ]',
        focus: '[ Dedicated Private Advisory & Unhurried Client Counsel ]',
        description:
          '[ Established independent advisory practice providing unbiased, patient guidance to clients seeking transparent health coverage decisions without sales pressure or carrier quotas. ]',
      },
    ],
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

  faq: {
    eyebrow: 'Common Questions',
    headline: 'A little clarity before you begin.',
    description:
      'A few practical answers for anyone who is still figuring out what they need or what to ask.',
    items: [
      {
        id: 'faq-1',
        number: '01',
        question: 'What should I prepare before reaching out?',
        answer:
          'You do not need to have everything figured out. Start with the questions, concerns, or changes you would like to understand more clearly.',
        status: 'pending',
      },
      {
        id: 'faq-2',
        number: '02',
        question: 'Can I ask questions if I’m still exploring?',
        answer:
          'Yes. The conversation can begin with questions and uncertainty rather than a final decision.',
        status: 'pending',
      },
      {
        id: 'faq-3',
        number: '03',
        question: 'What should I expect from an initial conversation?',
        answer:
          'The conversation can begin by understanding your situation, priorities, and the questions you want to work through.',
        status: 'pending',
      },
      {
        id: 'faq-4',
        number: '04',
        question: 'Do I need to know exactly what I need beforehand?',
        answer:
          'No final decision is assumed at the beginning. The first step can simply be getting clearer about what matters to you.',
        status: 'pending',
      },
      {
        id: 'faq-5',
        number: '05',
        question: 'What happens after the conversation?',
        answer:
          'The next step depends on what you need and what remains unclear. The goal is to leave with a clearer sense of what to consider next.',
        status: 'pending',
      },
    ],
  },

  contact: {
    eyebrow: 'CONSULTATION',
    headline: 'A clearer next step starts with a conversation.',
    description:
      'Start with the questions, concerns, or changes you would like to understand more clearly.',
    expectations: [
      {
        id: 'exp-questions',
        title: 'Start with your questions',
        description:
          'You do not need to have everything figured out before beginning.',
      },
      {
        id: 'exp-share',
        title: 'Share what matters',
        description:
          'Begin with the situation, priorities, or questions you want to work through.',
      },
      {
        id: 'exp-next',
        title: 'Decide what comes next',
        description:
          'The conversation can help clarify the next step without unnecessary pressure.',
      },
    ],
    mode: 'placeholder',
    placeholderState: {
      badge: 'Consultation Inquiries',
      title: "Let's begin with a conversation.",
      description:
        'Contact details and consultation scheduling will be added here once they are confirmed.',
      guidanceTitle: 'Helpful things to keep in mind when preparing:',
      guidanceItems: [
        'Notes or questions about your current coverage or transition',
        'Key dates or changes in your timeline (if applicable)',
        'Any specific topics or priorities you would like to focus on',
      ],
    },
    form: {
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      inquiryLabel: 'What would you like to understand?',
      notesLabel: 'Additional context or questions (optional)',
      submitButtonLabel: 'Begin the Conversation',
    },
    directContact: {},
    privacyNotice:
      'Please do not include medical or other sensitive personal information.',
  },

  footer: {
    positioning: 'Clear guidance for important coverage decisions.',
    disclaimer:
      'Information provided on this website is for educational and informational purposes. Specific policy terms, conditions, and coverage details are governed by official plan documents.',
    regulatoryNote:
      'Licensing and regulatory registrations are maintained according to applicable jurisdiction guidelines. Details available upon confirmation.',
    legalNotice:
      'Privacy, terms, and accessibility information will be added when final site details are confirmed.',
    copyright: `© ${new Date().getFullYear()} Bindhu. All rights reserved.`,
    contactNote: 'Consultation details will be added here once confirmed.',
    contactCtaLabel: 'Book a Consultation',
    contactCtaHref: '#contact',
    navigationLinks: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'How It Works', href: '#process' },
      { label: 'Guidance', href: '#education' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Consultation', href: '#contact' },
    ],
  },
};
