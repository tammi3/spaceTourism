/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "2.5xl": "28px",
        "3.5xl": "32px",
        "5.5xl": "56px",
        "10xl": "144px",
      },
      letterSpacing: {
        nav: "2.7px",
        "2px": "2px",
        heroText: "4px",
      },
      fontFamily: {
        barlowCondensed: ["Barlow Condensed"],
        Barlow: ["Barlow"],
        Bellefair: ["Bellefair"],
      },
      backdropBlur: {
        "4xl": "150px",
        "5xl": "250px",
      },
      colors: {
        "light-blue": "#D0D6F9",
        "very-dark-navy": "#0B0D17",
        "dark-gray": "#979797",
      },
      spacing: {
        98: "400px",
      },
      animation: {
        'spin-slow': 'spin 250s linear infinite',
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
