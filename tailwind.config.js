module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'gray-750':'#3f495a',
        'gray-850':'#222733',
      },
      spacing: {
        '14':'3.5rem',
        '22':'5.5rem',
        '72':'18rem'
      },
      width:{},
      fontSize:{}
    },
    maxWidth: {
      '8xl': '82.5rem',
     }
  },
  plugins: [],
}
