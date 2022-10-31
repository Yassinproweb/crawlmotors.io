/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '637px',
      lg: '887px',
      xl: '1120px'
    },
    extend: {
      colors: {
        grey: '#9ca3af',
        grey_thru: '#9ca3af55',
        light: '#fafafa',
        light_thru: '#fafafa55',
        light_theme: '#fafafa11',
        dark: '#0c0c0c',
        dark_light: '#0c0c0c99',
        dark_thru: '#0c0c0c55',
        dark_theme: '#0c0c0ccc'
      }
    },
  },
  plugins: ['mixitup'],
}
