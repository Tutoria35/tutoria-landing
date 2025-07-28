import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"PT Sans"', 'sans-serif'],
        headline: ['"PT Sans"', 'sans-serif'],
      },
      colors: {
        'primary': '#17A2B8',       // Turquoise from Style Guide
        'primary-hover': '#1491A5', // A slightly darker turquoise for hover
        'accent': '#1A759F',       // Accent Blue from Style Guide
        'action': '#FFC107',
        'dark': '#0D1B2A',         // Deep Navy for text
        'light': '#E0F8FA',         // Light Turquoise BG from Style Guide
        'white': '#ffffff',
        'muted': '#6C757D',
      },
      borderRadius: {
        xl: '1rem', 
      },
      boxShadow: {
        'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '2xl': '0 25px 50px -12px rgba(23, 162, 184, 0.15)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/aspect-ratio')],
} satisfies Config;
