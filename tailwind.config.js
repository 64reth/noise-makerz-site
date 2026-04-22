/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nmBlack: "#050505",
        nmGreen: "#97B83B",
        nmRed: "#C92020",
        nmWhite: "#F5F5F5",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 30px rgba(151,184,59,0.25)",
      },
      fontFamily: {
        monoBrand: ['"IBM Plex Mono"', "monospace"],
        sansBody: ['"Inter"', "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
}