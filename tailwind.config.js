const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Marcellus', ...defaultTheme.fontFamily.serif],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
