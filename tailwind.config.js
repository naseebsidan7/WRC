/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
          lightGray: 'rgba(220, 215, 215, 0.35)',
          gray_70: '#EEECEC',
          white_70: 'rgba(255, 255, 255, 0.7)',
          white_35: 'rgba(255, 255, 255, 0.4)',

          backgroundLight: '#f6F6F6',
          backgroundDark: 'rgba(18, 17, 17, 94)',
          primaryLight: '#00D5FA',
          primaryDark: '#00353F',

          themeBtnIconBg: 'rgba(220, 215, 215, .35)',
          blackThemeCard: '#1C1C23 ', // 20202A 
          darkBlackThemeCard: '#15151F',
          lightGrayThemeCard: '#414147',

      },
       backgroundImage: {
        // Custom linear gradient
        'lgBackgroundDark': 'linear-gradient(180deg, rgba(32,32,40,1) 0%, rgba(45,45,55,1) 100%)',
        'lgBackgroundDark2': 'linear-gradient(45deg, rgba(32,32,40,1) 0%, rgba(0,0,0,0.8) 50%, rgba(32,32,40,1) 100%)',
        'linearGradient_text': 'linear-gradient(90deg, #9698FF 0%, #F7ADCC 55%)',
 
        'lgApprach_card': 'linear-gradient(145deg, rgba(126,126,150,1) 0%, rgba(32,32,40,0) 56%, rgba(126,126,150,1) 100%)',
        'lgSmallCard': 'linear-gradient(193deg, rgba(148,150,187,0.7) 0%, rgba(0,0,0,0.8) 100%)',
        'footer': 'linear-gradient(100deg, #0C0C0E 0%, rgba(32,32,40,.7) 100%)',
        'navbar': 'linear-gradient(90deg, rgba(19,18,22,0.59) 0%, rgba(19,18,22,0.69) 100%)',
        'navbar-white': 'linear-gradient(93deg, rgba(236,235,238,0.59) 0%, rgba(236,235,238,0.69) 100%)',
        'white-card': 'linear-gradient(93deg, rgba(246,246,246,0.49) 0%, rgba(227,227,227,0.48) 100%)',
        'activeWhite': 'linear-gradient(93deg, rgba(221,220,224,0.8279644621520483) 0%, rgba(255,255,255,1) 100%)',
  
        'grayWhiteText': 'linear-gradient(0deg, #f6F6F6  0%, #ffffff 100%)',
        'grayDarkText': 'linear-gradient(0deg, #ffffff  0%, #1f1f1f  100%)',
       
        'grayDarkLine': 'linear-gradient(0deg, rgba(199,198,198,1) 0%, rgba(142,137,137,1) 100%)',
        'lgLink': 'linear-gradient(90deg, #6F86FF 0%, #61d9f9 100%)',
   
         'gradient-border': 'linear-gradient(193deg, rgba(148,150,187,0.7) 0%, rgba(0,0,0,0.8) 100%)',
         'lgApproachCard-redblue' : 'linear-gradient(145deg, #E4E7F9  0%, #16123A 56%,  #F7737A 100%)'
      },
      boxShadow: {
          'even-md': '3px 3px 18px 0 rgba(0, 0, 0, 0.06)',  // Customize shadow values
      },
      fontFamily: {
         'poppins':[ 'poppins', 'sans-serif'],
         'forum':[ 'Forum', 'sans-serif'],
         'nunito': ['Nunito Sans', 'sans-serif'],
         'inter': ['Inter', 'sans-serif'],
         'shippori': ['Shippori Antique', 'sans-serif'],
         'numans': ['Numans', 'sans-serif'],
      },
      
    
    },
  },
  darkMode:'class',
  plugins: [],
}

