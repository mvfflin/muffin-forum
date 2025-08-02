/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        walaweh: ["Walaweh"],
        montserrat: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
