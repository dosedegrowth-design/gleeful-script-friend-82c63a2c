/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0e0f12",
          2: "#12141a",
          3: "#1a1d26",
        },
        gold: {
          DEFAULT: "#ad8957",
          m: "#a58d67",
          l: "#cead84",
          xl: "#e8d5b0",
        },
        navy: "#0f1f41",
        teal: "#407e8d",
        white: {
          DEFAULT: "#f9f5ec",
          70: "rgba(249,245,236,.7)",
          35: "rgba(249,245,236,.35)",
          12: "rgba(249,245,236,.12)",
          05: "rgba(249,245,236,.05)",
        },
        border: {
          DEFAULT: "rgba(173,137,87,.18)",
          2: "rgba(173,137,87,.35)",
        },
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -2%)" },
          "20%": { transform: "translate(2%, -2%)" },
          "30%": { transform: "translate(-2%, 2%)" },
          "40%": { transform: "translate(2%, 2%)" },
          "50%": { transform: "translate(-2%, -2%)" },
          "60%": { transform: "translate(2%, -2%)" },
          "70%": { transform: "translate(-2%, 2%)" },
          "80%": { transform: "translate(2%, 2%)" },
          "90%": { transform: "translate(-2%, -2%)" },
        },
      },
    },
  },
  plugins: [],
};
