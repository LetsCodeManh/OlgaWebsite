/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "hsl(81, 67%, 71%)",
        secondary: "hsl(81, 67%, 45%)",
        dark: "hsl(267, 73%, 3%)",
        light: "hsl(0, 0%, 100%)",
        neutral: "hsl(300, 1%, 44%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        ntr: ["NTR", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
