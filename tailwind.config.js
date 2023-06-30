/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {

     colors: {
      bg: "#fff",
      text: "#000",
      transparent: "#ffffff00",
      green: "#33BEAF",
      gray: "#96999E",
      shadow: "#CDD2DA",
      pink:"#EF476F"
    },
   

    fontFamily: {
      'sans': ['Lora'],
      'roboto': ['Roboto', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
}

