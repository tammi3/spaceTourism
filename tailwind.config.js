/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/**/*.{html,js}"],
  theme: {
    extend: {
      letterSpacing: {
        nav: "2.7px",
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
      },
    },
  },
  plugins: [],
};
