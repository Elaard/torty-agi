/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FAF7F2",
          100: "#F4EDE3",
          200: "#E9D9C7",
          300: "#DDBF9F", // Ciepły karmel/miód
          400: "#D4A574",
          500: "#C8935B", // Główny kolor - naturalny miód
          600: "#B17F4A",
          700: "#8B6338",
          800: "#6B4A2A",
          900: "#4A3420",
        },
        secondary: {
          50: "#FFF8F8",
          100: "#FFE8E8",
          200: "#FFD1D1",
          300: "#E6A5A5",
          400: "#B97676",
          500: "#8B3A3A", // Burgundowy/wiśniowy - jak naturalne owoce
          600: "#732E2E",
          700: "#5C2525",
          800: "#3D1818",
          900: "#2A1010",
        },
        accent: {
          50: "#F5F7F3",
          100: "#E8EDE3",
          200: "#D3DCC8",
          300: "#BCC9AB",
          400: "#A8B89F", // Oliwkowy zielony - świeżość
          700: "#6B7A64",
          800: "#4F5C4A",
          900: "#3A4437",
        },
        cream: "#FAF7F2", // Naturalna śmietana/len
        beige: "#F4EDE3",
        chocolate: "#6B4423", // Czekoladowy brąz
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Libre Baskerville", "Georgia", "serif"],
        handwritten: ["Caveat", "cursive"], // Delikatny accent, nie główny font
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.svg')",
        "footer-texture": "url('/images/footer-texture.svg')",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      spacing: {
        128: "8rem",
      },
      maxWidth: {
        "max-w-6xl": "72rem",
      },
      maxHeight: {
        "max-modal-h": "96vh",
      },
    },
  },
  plugins: [],
};
