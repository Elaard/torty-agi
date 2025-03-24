import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  "plugin:prettier/recommended", // Dodajemy Prettier jako rozszerzenie
];

const config = {
  ...eslintConfig,
  plugins: ["prettier"], // Dodajemy plugin Prettier
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5",
        semi: true,
        tabWidth: 2,
        printWidth: 150,
      },
    ],
    "no-console": "warn",
    "no-debugger": "warn",
  },
};

export default config;
