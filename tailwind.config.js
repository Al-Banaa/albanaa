/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFCFA',
          100: '#F8F6F2',
          200: '#F0EDE7',
          300: '#E5E0D8',
          400: '#D4CEC4',
        },
        brand: {
          50:  '#f2f7ee',
          100: '#deecd3',
          200: '#bed9aa',
          300: '#97c079',
          400: '#74a752',
          500: '#568a37',
          600: '#4a7830',
          700: '#3d6228',
          800: '#345222',
          900: '#2b421c',
          950: '#1a2d0e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
