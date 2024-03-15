/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navbarColor':"#827D7D",
        'imgBg':'#242323'
      },
      width:{
        'imgWidth':'30%',
        'imgWidthMobile':'30%',
        'imgWidthIpad':'65%',
        'imgWidthXL':'20%',
        'imgWidthSmallest':'85%'
      },
      height:{
        'imgHeight':'40%',
        'imgHeightMobile':'80%',
        'imgHeightIpad':'50%',
        'imgHeightSmallest':'50%'
      }
    },
    
  },
  plugins: [],
}

