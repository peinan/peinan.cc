const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '0.650rem',
      sm: '0.750rem',
      tiny: '0.875rem',
      basesm: '0.925rem',
      base: '1.000rem',
      lg: '1.100rem',
      xl: '1.200rem',
      '2xl': '1.300rem',
      '3xl': '1.400rem',
      '4xl': '1.500rem',
      '5xl': '1.750rem',
      '6xl': '2.000rem',
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    fontFamily: false,
    fontWeight: false,
    listStyleType: false,
  },
  plugins: [],
}
