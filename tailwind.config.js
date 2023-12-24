/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        navBar: "#ffff",
        primary: "#AC2B61",
        product: "#AED79F",
        body: "#DBB9C7",
        searchBar: "#6c8ca4",
        text: "#A96682",
      },
    },
  },
  plugins: [],
};
