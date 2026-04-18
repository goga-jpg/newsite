/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Unbounded"', '"Anton"', 'Impact', 'sans-serif'],
        condensed: ['"Anton"', 'Impact', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#000000',
        paper: '#FFFFFF',
        crimson: '#ca003d',
        'crimson-deep': '#7a0025',
        // per-product accents
        'acid': '#C9FF3B',
        'magenta': '#FF4DA6',
        'electric': '#4DC3FF',
        'ember': '#FF6B2C',
        'violet': '#9B5CFF',
        'jade': '#3BFF91',
      },
      letterSpacing: {
        tight2: '-0.05em',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-r': 'marquee-r 60s linear infinite',
        breathe: 'breathe 4s ease-in-out infinite',
        flicker: 'flicker 3s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-r': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '47%': { opacity: '1' },
          '49%': { opacity: '0.4' },
          '51%': { opacity: '1' },
          '53%': { opacity: '0.6' },
          '55%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
