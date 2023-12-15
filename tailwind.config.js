/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark": "#151c2c",
      "darkSoft": "#182237",
      "white": "#fff",
      "whiteSoft":"#b7bac1"
    },
  },
  plugins: [],
};
