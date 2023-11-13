/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'introduction': "url('./src/assets/img/bg-introduction.svg')",
      }
    },
    fontFamily: {
      'questrial': 'Questrial',
      'lato': 'Lato',
    },
  },
  plugins: [],
}

