export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        'primary-dark': '#5568d3',
        secondary: '#764ba2',
        accent: '#f5576c',
      },
      gradients: {
        linear: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }
    },
  },
  plugins: [],
}
