// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports',
    'check-file',
    'jsdoc',
    'custom',
  ],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  settings: {
    tailwindcss: {
      config: path.join(__dirname, './tailwind.config.ts'),
      whitelist: ['keen-slider', 'keen-slider.+'],
    },
  },
  rules: {
    'custom/no-missing-tests': [
      'warn',
      [
        {
          filePath: `${__dirname}/src/components/elements`,
        },
      ],
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'lodash',
        message: 'Please use a lodash package instead. E.g lodash.get',
      },
    ],
    'jsdoc/require-jsdoc': 'off',
    'no-console': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-arbitrary-value': 'warn',
    'tailwindcss/classnames-order': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-anonymous-default-export': 'error',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],

    //#region  //*=========== Unused Import ===========
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    //#endregion  //*======== Unused Import ===========

    //#region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'warn',
    // 'simple-import-sort/imports': [
    //   'error',
    //   {
    //     groups: [
    //       // ext library & side effect imports
    //       ['^@?\\w', '^\\u0000'],
    //       // {s}css files
    //       ['^.+\\.s?css$'],
    //       // Lib and hooks
    //       ['^@/lib', '^@/hooks'],
    //       // static data
    //       ['^@/data'],
    //       // components
    //       ['^@/components', '^@/container'],

    //       // zustand store
    //       ['^@/store'],
    //       // Other imports
    //       ['^@/'],
    //       // relative paths up until 3 level
    //       [
    //         '^\\./?$',
    //         '^\\.(?!/?$)',
    //         '^\\.\\./?$',
    //         '^\\.\\.(?!/?$)',
    //         '^\\.\\./\\.\\./?$',
    //         '^\\.\\./\\.\\.(?!/?$)',
    //         '^\\.\\./\\.\\./\\.\\./?$',
    //         '^\\.\\./\\.\\./\\.\\.(?!/?$)',
    //       ],
    //       ['^@/types'],
    //       // other that didnt fit in
    //       ['^'],
    //     ],
    //   },
    // ],
    //#endregion  //*======== Import Sort ===========
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.{js,jsx,ts,tsx}': '**/__test__/',
      },
    ],
    'check-file/filename-blocklist': [
      'error',
      {
        '**/*.stories.js': '*.stories.tsx',
      },
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        './src/components/{elements,widgets}/**/*.{jsx,tsx}': 'PASCAL_CASE',
        './src/components/{elements,widgets}/**/!(get*|use*).{js,ts}':
          'KEBAB_CASE',
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      rules: {
        'no-unused-vars': 'error',
      },
    },
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
      },
    },
    {
      files: ['./src/components/{elements,widgets}/**/*.{jsx,tsx}'],
      rules: {
        'jsdoc/require-jsdoc': [
          'warn',
          {
            checkConstructors: true,
            checkGetters: true,
            checkSetters: true,
            require: {
              ArrowFunctionExpression: false,
              ClassDeclaration: false,
              ClassExpression: false,
              FunctionDeclaration: false,
              FunctionExpression: false,
              MethodDefinition: false,
            },
            contexts: [
              ':not(BlockStatement) > FunctionDeclaration',
              'MethodDefinition',
              'TSMethodSignature',
              'TSPropertySignature',
              // 'TSPropertySignature > TSTypeAnnotation > TSFunctionType',
            ],
          },
        ],
      },
    },
    {
      files: [
        './src/components/{elements,widgets}/**/*.stories.{jsx,tsx}',
        './src/components/{elements,widgets}/**/*.test.{jsx,tsx}',
      ],
      rules: {
        'jsdoc/require-jsdoc': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/no-arbitrary-value': 'off',
      },
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
};
