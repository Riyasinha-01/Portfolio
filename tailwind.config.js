/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: '#f8f7ff',
          teal: '#a8d8d8',
          blue: '#b8d4f0',
          lavender: '#d4c5f9',
          pink: '#f5c6d0',
          mint: '#c8f0e0',
          card: '#ffffff',
        },
        brand: {
          primary: '#2563a8',
          secondary: '#1e7f7f',
          accent: '#6d3fc9',
          dark: '#0f172a',
          muted: '#374151',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgba(37,99,168,0.14)',
        card: '0 2px 12px 0 rgba(100,100,160,0.12)',
        hover: '0 8px 32px 0 rgba(37,99,168,0.22)',
      },
    },
  },
  plugins: [],
}