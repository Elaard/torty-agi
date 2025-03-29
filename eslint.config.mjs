import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'eslint:recommended',
      'next',
      'plugin:react-hooks/recommended', // Włącza reguły react-hooks
    ],
    rules: {
      // Niestandardowe reguły
      quotes: ['error', 'single'], // Wymusza używanie pojedynczych cudzysłowów
      'no-unused-vars': [
        'error',
        {
          args: 'none',
        },
      ], // Ignorowanie zmiennych zaczynających się od "_"
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Ostrzega o użyciu console.log, ale dopuszcza console.warn i console.error
      'no-debugger': 'error', // Zabrania używania debugger
      'react/jsx-no-target-blank': 'error', // Zapobiega używaniu atrybutu target="_blank" bez rel="noopener noreferrer"
      'react/jsx-uses-react': 'off', // Wyłącza wymóg użycia React w JSX (React 17 i wyższy)
      'react/react-in-jsx-scope': 'off', // React 17 już nie wymaga tego importu
      'no-duplicate-imports': 'error', // Zapobiega wielokrotnym importom tych samych modułów
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
          ],
        },
      ], // Uporządkowanie importów
      'consistent-return': 'error', // Wymusza zwracanie wartości w funkcjach
      'no-undef': 'error', // Zabrania używania niezdefiniowanych zmiennych
      'react/jsx-curly-brace-presence': ['error', { props: 'never' }], // Wymusza używanie nawiasów klamrowych w JSX
      'react-hooks/exhaustive-deps': 'error', // Wymusza poprawne ustawienie zależności w hookach (np. useEffect, useCallback, useMemo)
    },
  }),
];

export default eslintConfig;
