module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    fontFamily: {
      'sans': ['Baloo 2'],
      'logo': ['Courgette'],
      'sans-tc': ['Noto Sans TC']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': {
        100: '#1fb6ff',
        600: '#0073B4',
        700: '#395c87',
        800: '#044467',
      },
      'green': {
        100: '#ADD4D8',
        700: '#668f75'
      },
      'yellow': '#ffc82c',
      'pink': '#f6d3da',
      'gray': {
        100: '#f2f2f2',
        500: '8492a6',
        700: '#7d7d7d',
        800: '#3e3d40'
      },
      'skin': '#f4ede4',
      'brown': '#a29078'
    },
  },
  plugins: ['macros', require("tw-elements/dist/plugin")],
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.includeLanguages": {
    "plaintext": "html"
  }
}
