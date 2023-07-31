/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {
        section:
          'linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%);',
      },
      colors: {
        body: '#020F08',
        bg_mobile: '#010A05',
      },
      boxShadow: {
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        gallery: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        enter: 'enter 0.3s ease-in-out',
      },
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
