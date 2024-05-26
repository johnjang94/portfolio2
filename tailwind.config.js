/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "white-to-black": "white-to-black 5s ease-in-out forwards",
      },
      backgroundImage: {
        glow: "url('/src/assets/accessory/background.png')",
        design: "url('/src/assets/design/televu.png')",
        animated: "url('/src/assets/accessory/background2.gif')",
        nightSky: "url('/src/assets/accessory/nightSky.jpeg')",
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
