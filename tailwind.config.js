/** @type {import('tailwindcss').Config} */
//const colors = require('tailwindcss/colors');

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      blue: '#2660A3',
      green: '#73B95B',
      yellow: '#F7EB60',
      gray: '#BDBDBD',
      'light-green': "#13FFC6",
      'blue-ative': '#1800E1',
      'light-pink': '#FFDB58',
      'yellow-light': '#FFDB58',
      'light-gray': '#BDBDBD',
      'v-light-gray': '#E0E0E0',
    },
    extend: {
      fontFamily: {
        'antique': ['Antique Olive', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}

