/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Merriweather: 'Merriweather Sans',
      Montserrat: 'Montserrat',
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'labemCeleste': '#377EF9',
        'labemAmarillo': '#FFD124',
        'labemOscuro': '#192445',
        'labemRosa': '#ff006e'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}