/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        text_1: "#B1B1B1",
        text_2: "#718EBF",
        text_3: "#232323",
        primary_1: "#2D60FF",
        primary_2: "#343C6A",
        background_1: "#F5F7FA",
        blue_1: "#0A06F4",
        blue_2: "#4C49ED",
        blue_3: "#1814F3"
      }
    }
  },
  plugins: []
};
