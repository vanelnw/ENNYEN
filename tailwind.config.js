/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      blue: '#2660A3',
      green: '#73B95B',
      yellow: '#F7EB60',
      gray: '#BDBDBD',
      red: colors.red,
      'light-green': '#13FFC6',
      'blue-ative': '#1800E1',
      'light-pink': '#FFDB58',
      'yellow-light': '#FFDB58',
      'light-gray': '#BDBDBD',
      'v-light-gray': '#E0E0E0',
      white: colors.white,

      black: 'var(--black)',
      //  blue: 'var(--blue)',
      'blue-100': 'var(--blue-100)',
      'blue-200': 'var(--blue-200)',
      'blue-300': 'var(--blue-300)',
      'blue-400': 'var(--blue-400)',
      'blue-50': 'var(--blue-50)',
      'blue-500': 'var(--blue-500)',
      'blue-600': 'var(--blue-600)',
      'blue-700': 'var(--blue-700)',
      'blue-800': 'var(--blue-800)',
      'blue-900': 'var(--blue-900)',
      'gray-100': 'var(--gray-100)',
      'gray-2': 'var(--gray-2)',
      'gray-200': 'var(--gray-200)',
      'gray-300': 'var(--gray-300)',
      // green: 'var(--green)',
      'green-100': 'var(--green-100)',
      'green-200': 'var(--green-200)',
      'green-300': 'var(--green-300)',
      'green-400': 'var(--green-400)',
      'green-50': 'var(--green-50)',
      'green-500': 'var(--green-500)',
      'green-600': 'var(--green-600)',
      'green-700': 'var(--green-700)',
      'green-800': 'var(--green-800)',
      'green-900': 'var(--green-900)',
      red: 'var(--red)',
      // white: 'var(--white)',
      'yellow-100': 'var(--yellow-100)',
      'yellow-200': 'var(--yellow-200)',
      'yellow-300': 'var(--yellow-300)',
      'yellow-400': 'var(--yellow-400)',
      'yellow-50': 'var(--yellow-50)',
      'yellow-500': 'var(--yellow-500)',
    },
    fontFamily: {
      'heading-h1': 'var(--heading-h1-font-family)',
      'heading-h2': 'var(--heading-h2-font-family)',
      'large-title': 'var(--large-title-font-family)',
    },

    extend: {
      fontFamily: {
        antique: ['Antique Olive', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
