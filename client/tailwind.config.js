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
      iBlack1:'#060D14',
      iGray1:"#767676",
      iGray2:"#EEEEEE",
      iGray3:'#818B9C',
      iWhite:"#fff",
      iNavyBlue:'#000116',
      iGray4:"#707070",
      iWhite:"#fff",
      igray: "#EBEBEB",
      igray1:'#2E374E',
      igray2:'#32CD32',
      igray3:'#CDFFCD',
      // 'c' refers to coyni,ib refers to ibaas, 'gy' refers to Gray color

         ibgy1: "#404040",

         ibgy2: "#767676",
      
         ibgy3: "#B7B7B7",
      
         ibgy4: "#CCCCCC",
      
         ibgy5: "#ADADAD",
      
         ibgy6: "#707070",
      
         ibgy7: "#00000029",
      
         ibgy8: "#666666",
      
         ibgy9: "#4C4C4C",
      
         // ib refers to ibaas, gn refers to green
      
         cgy1: "#CCCCCC",
      
         cgy2: "#ADADAD",
      
         cgy3: "#767676",
      
         cgy4: "#000000",
      
         cgy5: "#4D4D4D",
      
         cgy6: "#00000026",
      
         cgy7: "#0000001A",
      
         cgy8: "#4c4c4c",
      
         cgy9: "#828282",
      
         cgy10: "#E5F6F6",
      
         cgy11: "#f8f8f8",
      
         cgy12: "#e5e5e5",
      
         cgy13: "#747474",
      
         cgy14: "#000000B3",
      
         cgy15: "#363636",
      
         cgy16: "#B3D7FE",
      
         cgy17: "#4C4C4C",
      
         // 'c' refers to coyni,ib refers to ibaas, 'm' refers to Main color
      
         ibm1: "#295D93",
      
         ibm2: "#EA7625",
      
         ibm3: "#000000",
      
         ibm4: "#FCEBDF",
      
         ibm6: "#295D9333",
      
         ibm7: "#0000001A",
      
         ibm8: "#FFF4EC",
      
         ibm9: "#FFA500",
      
         ibm10: "#000000B3",
      
         ibm11: "#F1F4F9",
      
         ibm14: "#D5EAFF",
      
         ibm15: "#FFFFFF",
      
         cm1: "#F1F4F9",
      
         cm2: "#D8E2F0",
      
         cm3: "#295D93",
      
         cm4: "#00908C",
      
         cm5: "#ECF3FD",
      
         cm6: "#30797D",
      
         cm7: "#0c3c3b",
      
         cm8: "#13A6A2",
      
         cm9: "#F5F5F5",
      
         cm10: "#F2F5F8",
      
         // c refers to coyni,ib refers to ibaas, 'gn' refers to green color
      
         ibgn1: "#008A05",
      
         ibgn2: "#19951E",
      
         ibgn3: "#00A6A2",
      
         ibgn4: "#E5F3E5",
      
         cgn1: "#E5F3E5",
      
         cgn2: "#00cc6e",
      
         cgn5: "#008A05",
      
         cgn6: "#007B04",
      
         cgn7: "#00cc6e10",
      
         cgn8: "#129C97",
      
         cgn9: "#008A05",
      
         // c refers to coyni, ib refers to ibaas, 'rd' refers to red color
      
         ibrd1: "#E32B25",
      
         ibrd2: "#D54848",
      
         ibrd3: "#FC0D0D",
      
         ibrd4: "#d45858",
      
         ibrd5: "#F6E6E6",
      
         ibrd6: "#FCE3D1",
      
         ibrd7: "#D45858",
      
         crd1: "#FCE9E8",
      
         crd2: "#d45858",
      
         crd3: "#d13e32",
      
         crd4: "#f9eae8",
      
         crd5: "#E32B25",
      
         crd6: "#D54848",
      
         crd7: "#DB5759",
      
         // c refers to coyni,ib refers to ibaas 'or' refers to orange color
      
         ibor1: "#f7e5d7",
      
         ibor2: "#FFA70F",
      
         ibor3: "#F3EAE4",
      
         cor1: "#FFEFD8",
      
         cor2: "#FFA728",
      
         cor3: "#EA7625",
      
         cor5: "#FFA70F",
      
         cor6: "#FFECD4",
      
      
      
      
         // c refers to coyni, 'bl' refers to blue color
      
         ibl1: "#D8E2F0",
      
         ibl2: "#0079A8",
      
         ibl3: "#D3DEED",
      
         ibl4: "#295D9380",
      
         ibl5: "#C4E1FF",
      
         ibl6: "#D5EAFF",
      
         cbl1: "#E8F3F9",
      
         cbl2: "#f2f5f8",
      
         cbl3: "#d3deed",
      
         cbl4: "#295D93",
      
         cbl5: "#1D86BE",
      
         cbl6: "#4587E3",
      
         cbl7: "#eff2f8",
      
         ibo1: "#FFF4EC", //ib-ibaas, o-orange
      
         ibo2: "#FFEFD8",
      
         ibo3: "FFA70F",
      
         // c refers to coyni, 'cy refers to cyan color
      
         ccy1: "#35BAB6",
      
         // c refers to coyni, 'bc refers to black color
      
         cbc4: "#4D4D4D",
      
         cbc5: "#1d1e2e",
      
         cbc6: "#000000B3",
      
         cbc8: "#00000066",
      
      
      
      
         ibwhite: "#ffff",
      
         cwhitesmoke: "#efefef",
      
         cwhite: "#fff",
      
         cBlack: "#00000040",
    },

    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
