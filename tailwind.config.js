/** @type {import('tailwindcss').Config} */

const colors = require('./styles/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
      '2xl': '1600px',
    },
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.primary,
        blue: colors.blue,
        bluedark: colors.bluedark,
        gray50: colors.gray50,
        gray100: colors.gray100,
        gray200: colors.gray200,
        gray300: colors.gray300,
        gray400: colors.gray400,
        gray500: colors.gray500,
        gray700: colors.gray700,
        purpledark: colors.purpledark,
        purple: colors.purple,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
