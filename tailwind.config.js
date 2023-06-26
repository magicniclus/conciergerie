/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#1E1F22",
        white: "#FFFFFF",
        beige: "#F2E6D0",
        orange: "#F27E63",
        purple: "#585FCC",
        blue: "#CAE6FE",
        blueLight: "#DCE0F2",
        green: "#8FD8B4",
        gray: "#8A909A",
        yellow: "#FABF47",
      },
    },
  },
  plugins: [],
};
