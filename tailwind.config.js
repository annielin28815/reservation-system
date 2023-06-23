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
        200: '#395c87'
      },
      'purple': '#7e5bef',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'pink': '#f6d3da',
      'gray-dark': '#3e3d40',
      'gray': '#8492a6',
      'gray-light': '#87888a',
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
