/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      backgroundImage: {
        patronblue: "url('/src/images/fondo2.jpg')",
        patrongray: "url('/src/images/tex_fondo.jpg')",
      },
      // font moncerrat
      dropShadow: {
        card: ["0 10px 8px rgba(0, 0, 0, 0.14)", "0 4px 3px rgb(0, 0, 0, 0.2)"],
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        blue_card: {
          1: "#009ADA",
          2: "#000E71",
        },
      },
    },
  },
  plugins: [],
};
