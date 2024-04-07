/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "white-to-black": "white-to-black 5s ease-in-out forwards",
      },
      backgroundImage: {
        glow: "url('/src/assets/background.png')",
        design: "url('/src/assets/televu.png')",
      },
    },
    keyframes: {
      "white-to-black": {
        "0%": { backgroundColor: "white", color: "black" },
        "100%": { backgroundColor: "black", color: "white" },
      },
    },
  },
  plugins: [],
};
