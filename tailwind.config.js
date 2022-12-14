module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {   
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      JAMTypeDesign: ['JamGrotesque']
    },
    screens: {
      '4xl': '1800px',
      '3xl': '2000px',
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [
    require('./src/assets/css/plugins')
  ],
}
