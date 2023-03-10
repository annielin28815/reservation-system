module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
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
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'pink': '#f6d3da',
      'gray-dark': '#3e3d40',
      'gray': '#8492a6',
      'gray-light': '#87888a',
      'skin': '#c1b2ab',
      'brown': '#a29078'
    },
  },
  plugins: ['macros'],
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
