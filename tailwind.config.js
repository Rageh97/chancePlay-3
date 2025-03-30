module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "fade-in 1s ease-out forwards", // ← اربط الكي فريم هنا
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
