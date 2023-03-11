module.exports = {
 content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
   backgroundImage: {
    hero: "radial-gradient(circle, rgb(77 103 255 / 22%) 0%, rgba(0,0,0,1) 52%)",
   },
  },
 },
 plugins: [require("tailwindcss-text-fill"), require("@headlessui/tailwindcss"), require("@igorkowalczyk/is-browser"), require("@tailwindcss/aspect-ratio")],
};
