const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      blue: colors.blue,
      cyan: colors.cyan,
      red: colors.red,
      rose: colors.rose,
      orange: colors.orange,
      pink: colors.pink,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      purple: colors.purple,
      violet: colors.violet
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


// const colors = require('tailwindcss/colors')

// module.exports = {
//   theme: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       black: colors.black,
//       white: colors.white,
//       gray: colors.trueGray,
//       indigo: colors.indigo,
//       blue: colors.blue,
//       cyan: colors.cyan,
//       red: colors.red,
//       rose: colors.rose,
//       orange: colors.orange,
//       pink: colors.pink,
//       lime: colors.lime,
//       green: colors.green,
//       emerald: colors.emerald
//     }
//   }
// }