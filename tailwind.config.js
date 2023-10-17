/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['sora', 'sans'],

      },

    },
    colors: {
      'green': '#00C247',
      'green-1': '#B4E08E',
      'green-2': '#66BC51',
      'green-3': '#0E9658',
      'green-4': '#046639',
      'white': '#fff',
      'black': '#000',
      'gray': '#F5F5F5',
      'gray-button': '#FCFCFC',
      'gray-900': '#212121',
      'gray-400': '#BDBDBD',
      'gray-300': '#E0E0E0',

      'gray-600': '#757575',
      'gray-800': '#424242',
      "blue500": "#004ce8",
      'red': '#e64a19',
      'bluish-gray': '#BBC0CD66',

    }
  },
  plugins: [],
}

