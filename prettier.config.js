export default {
  plugins: ['prettier-plugin-sh', 'prettier-plugin-tailwindcss'],
  printWidth: 150,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '.husky/*',
      options: { parser: 'sh' },
    },
  ],
};
