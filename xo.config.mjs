import eslintPluginAstro from 'eslint-plugin-astro';

/** @type {import("xo").FlatXoConfig} */
const config = [
  {
    ignores: ['dist'],
  },
  {
    space: 2,
    prettier: true,
    semicolon: true,
    rules: {
      'import-x/extensions': 'off',
    },
  },
  {
    files: ['**/*.tsx', '**/*.astro'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
          checkDirectories: false,
          ignore: ['index.astro', /^\[[^\]]+\]\.astro$/v],
        },
      ],
      'n/file-extension-in-import': 'off',
    },
  },
  {
    files: ['src/pages/**/*.astro'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          checkDirectories: false,
          ignore: [/^\[[^\]]+\]\.astro$/v],
        },
      ],
    },
  },
  ...eslintPluginAstro.configs['flat/recommended'],
];

export default config;
