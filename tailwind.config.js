/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      alert: "#E67C0B",
      cream: "#F5EBD5",
      rust: "#C67F43",
      neutral: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      sage: {
        50: "#CBD8C6",
        100: "#B9CAB3",
        200: "#A8BDA0",
        300: "#96B08E",
        400: "#86A47C",
        500: "#6F9064",
        600: "#5D7854",
        700: "#4A6043",
        800: "#384832",
        900: "#253021",
      },
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        Capriola: ["Capriola", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
