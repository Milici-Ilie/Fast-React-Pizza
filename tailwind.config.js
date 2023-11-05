/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      }, //this "fontSize" is just for fun, only as an exemple

      height: {
        screen: "100dvh",
      }, //this will make the screen 100% full, especially on the mobile screens
    },
  },
  plugins: [],
};
