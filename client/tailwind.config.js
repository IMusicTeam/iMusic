module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,scss}', './public/index.html'],
  theme: {
    screens: {
      xs: '400px',
      sm: '793px',
      md: '893px',
      lg: '1123px',
      xl: '1297px',
      '5xl': '1298px',
      '1xl': '1362px',
      '1.5xl': '1366px',
      '2xl': '1416px',
      '13mac': '1440px',
      '3xl': '1616px',
      '4xl': '1920px'
    },
    colors: {
      iBlue:"#295D93" ,
      iLightBlue:"#DEEEFF",
      iDarkBlue:"#1B3D61",
      iOrange:"#EA7525",    
      iBlack:"#242424",
      iGray1:"#767676",
      iGray2:"#EEEEEE",
      iWhite:"#fff"
    },

    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
