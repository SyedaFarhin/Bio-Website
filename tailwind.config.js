/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f4efe7",
        clay: "#d7c0ae",
        sage: "#a6b8a2",
        charcoal: "#2f3437",
        mist: "#e8f0ec",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(17, 24, 39, 0.25)",
      },
    },
  },
  plugins: [],
};

