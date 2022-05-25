module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: { 
      colors:{
        'light-blue':'#f5f7fb',
        'light-gray':'#e6e7e9',
        'pink':'#d6336c',
        'tblr-blue':'#206bc4',
      }
    },
    maxWidth: {
      '8xl': '82.5rem',
     }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
