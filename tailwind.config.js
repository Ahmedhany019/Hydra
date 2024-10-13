/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      linear: "linear-gradient(to bottom, #343045, #C0B7E8)",
      linearR: "linear-gradient(to right, #8176AF, #C0B7E8)",
      radial: "radial-gradient( #3a3456, #211e2e)",
      // buildSection: 'url("/src/Images/pexels-rodnae-productions-8097332 1.svg")',
    },
    colors: {
      primary: "#343045",
      secondary:"#C0B7E8",
    },
    keyframes:{
      animate:{
        '0%, 100%':{ transform: 'translateX(0px)'},
        ' 50%':{ transform: 'translateX(-20px)'},
      }
    },
    animation: {
      'animate': 'animate 1s linear infinite alternate',
    },
    extend: {},
  },
  plugins: [],
};
