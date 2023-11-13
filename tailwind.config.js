import tailwindIsBrowser from "@igorkowalczyk/is-browser";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";

const tailwindConfig = {
 content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 darkMode: "class",
 theme: {
  extend: {
   backgroundImage: {
    hero: "radial-gradient(circle, rgb(77 103 255 / 22%) 0%, rgba(0,0,0,1) 52%)",
   },
  },
 },
 plugins: [
  // prettier
  tailwindAspectRatio,
  tailwindIsBrowser,
 ],
};

export default tailwindConfig;
