module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary':'#F75C03',
      'secundary':'#FFFFFF',
      'terciary':"#F8FFF4"
    }),
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
