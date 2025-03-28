/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF9F9",
          100: "#FFE8EE",
          200: "#FFD1DD",
          300: "#F8B0C2", // Soft rose pink
          400: "#F48FB1",
          500: "#EC6A9C",
          600: "#DB2777",
          700: "#BE185D",
          800: "#9D174D",
          900: "#831843",
        },
        secondary: {
          50: "#F8F5F2",
          100: "#EFE6DD",
          200: "#E0D0C0",
          300: "#C4A68A",
          400: "#A67C52",
          500: "#8B5E3C",
          600: "#5C4033", // Rich chocolate brown
          700: "#3C2A21",
          800: "#2C1F19",
          900: "#1A120B",
        },
        accent: {
          50: "#FFFDF5",
          100: "#FFFBE6",
          200: "#FFF7CC",
          300: "#FFF0A3",
          400: "#F9E27A",
          500: "#F2C94C", // Warm honey gold
          600: "#E6B325",
          700: "#CB9A18",
          800: "#A37D13",
          900: "#7A5E0F",
        },
        cream: "#FFF9F0",
        beige: "#F5EFE6",
        darkBrown: "#3C2A21",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        cursive: ["Dancing Script", "cursive"],
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
