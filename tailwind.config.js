const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

