module.exports = {
 content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 darkMode: "class",
 theme: {
  extend: {
   fontFamily: {
    inter: ["Inter", "sans-serif"],
   },
   backgroundImage: {
    hero: "radial-gradient(circle, rgb(77 103 255 / 22%) 0%, rgba(0,0,0,1) 52%)",
   },
  },
 },
 plugins: [require("@igorkowalczyk/is-browser"), require("@tailwindcss/aspect-ratio")],
};
