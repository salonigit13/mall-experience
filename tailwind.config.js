/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silk: '#E8E3D9',
        marble: '#E6E4E0',
        champagne: '#CBB38A',
        pearl: '#FDFDFB',
        velvet: '#2B3A5B',
        onyx: '#000000',
        'champagne-light': '#D4C49C',
        'champagne-dark': '#B89B6E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-sm': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading': ['3rem', { lineHeight: '1.2' }],
        'heading-sm': ['2rem', { lineHeight: '1.3' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '15vh',
        'container': '8vw',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}