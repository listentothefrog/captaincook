module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"]
      }, 
      colors: {
        'tan': '#e0cbaf',
        'red': '#FF6347',
        'hover-red': '#FF6F55',
        'disabled-red': '#D44C33',
      }, 
    },
    fontWeight: {
      normal: 400, 
      medium: 500, 
      semibold: 600, 
      bold: 700, 
      extrabold: 800, 
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
