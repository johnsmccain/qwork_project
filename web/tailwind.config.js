/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        primary: "#052A74",
        social_icons: "#0954E8"
      },
      // fontFamily:{
      //   axiform:[axiform]
      // },
      fontSize:{

        12:["12px", "19.2px"],
        14:["14px", "24px"],
        16:["16px", "26.1px"],
        b16:["16px", "24px"],
        b20:["20px", "24px"],
        l20:["20px", "32px"],
        25:["25px", "40px"],
        28:["28px", "30px"],
        l28:["28px", "44.91px"],
        32:["32px", "51.3px"],
        35:["35px", "43.76px"],
      },
      backgroundColor:{
        mainColor: "#0954E8",
        mainColor2: "#5B8DF0",
        mainColor4: "#3271EC",
        mainDeepColor: "#06389B",
        lighBlue: "#F3F7FF",

      }

    },
  },
  plugins: [],
}