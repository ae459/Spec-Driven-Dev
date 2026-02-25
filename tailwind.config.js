const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#111827',
        muted: '#F3F4F6',
        'muted-foreground': '#6B7280',
        accent: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [],
};
