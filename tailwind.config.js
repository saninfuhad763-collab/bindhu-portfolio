/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FBFBF9', // Warm Ivory base
          alt: '#F4F3EE',     // Soft Linen alternate
        },
        surface: {
          DEFAULT: '#FFFFFF', // Pure White card/input surface
          alt: '#F4F3EE',
        },
        brand: {
          primary: '#1A2B3C', // Deep Maritime Slate
          hover: '#121E2B',
        },
        action: {
          primary: '#2E6F5E', // Calming Eucalyptus
          hover: '#235649',
        },
        advisory: {
          accent: '#C46849',  // Warm Terracotta guidance accent
          hover: '#AB5336',
        },
        content: {
          primary: '#1E293B',   // Charcoal Slate primary text
          secondary: '#475569', // Balanced Slate
          muted: '#64748B',     // Soft Slate
        },
        border: {
          subtle: '#E2E0D8',    // Soft Pebble hairline
        },
        focus: {
          ring: '#1E5A8A',      // Accessible Ocean blue
        },
        feedback: {
          success: '#2E6F5E',
          warning: '#B45309',
          error: '#B91C1C',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'eyebrow': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'small-meta': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.005em' }],
        'button': ['0.9375rem', { lineHeight: '1', letterSpacing: '0.01em' }],
        'body-small': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.005em' }],
        'body-regular': ['1.0625rem', { lineHeight: '1.65', letterSpacing: '0' }],
        'body-large': ['1.1875rem', { lineHeight: '1.65', letterSpacing: '-0.005em' }],
        'body-lead': ['1.1875rem', { lineHeight: '1.65', letterSpacing: '-0.005em' }],
        'h4': ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'card-h3': ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
        'section-h2': ['clamp(1.875rem, 3.2vw, 2.625rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'hero-h1': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.16', letterSpacing: '-0.025em' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '30': '120px',
      },
      maxWidth: {
        'container': '1200px',
        'reading': '65ch',
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(26, 43, 60, 0.05)',
        'card-hover': '0 8px 30px -4px rgba(26, 43, 60, 0.08)',
        'elevated': '0 12px 36px -4px rgba(26, 43, 60, 0.12)',
      },
    },
  },
  plugins: [],
};
