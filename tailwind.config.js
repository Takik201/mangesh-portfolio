/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        night: "#0a101c",
        steel: "#152033",
        mint: "#1ee3a5",
        aqua: "#4dd8ff",
        saffron: "#f4c95d",
        frost: "#f6fbff"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(30, 227, 165, 0.18)",
        panel: "0 22px 70px rgba(0, 0, 0, 0.32)"
      }
    }
  },
  plugins: []
};
