module.exports = {
 content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 darkMode: "class",
 theme: {
  extend: {
   keyframes: {
    rotate: {
     "0%": { transform: "rotate(0deg)" },
     "80%": { transform: "rotate(0deg)" },
     "100%": { transform: "rotate(180deg)" },
    },
   },
   animation: {
    rotate: "rotate 6s ease-in-out infinite",
   },
   fontFamily: {
    blont: ["Blont", "sans-serif"],
   },
  },
 },
 plugins: [require("@headlessui/tailwindcss"), require("@igorkowalczyk/is-browser"), require("@tailwindcss/aspect-ratio")],
};
