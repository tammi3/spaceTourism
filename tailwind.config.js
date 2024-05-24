/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/**/*.{html,js}"] ,
  theme: {
    extend: {
      fontSize: {
        '2.5xl': '28px',
        '10xl': '144px'},
      letterSpacing: {
        nav: "2.7px",
        heroText: "4px"
      },
      fontFamily: {
        barlowCondensed: ["Barlow Condensed"],
        Barlow: ["Barlow"],
        Bellefair: ["Bellefair"],
      },
      backdropBlur: {
        '4xl': '80px',
      },
      colors: {
        "light-blue": "#D0D6F9",
        "very-dark-navy": "#0B0D17",
        "dark-gray": "#979797"
      },
      spacing: {
        'center': '45%',
      }
    },
  },
  plugins: [],
};
