import globals from 'globals';
import pluginJs from '@eslint/js';
import configPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  configPrettier,
];