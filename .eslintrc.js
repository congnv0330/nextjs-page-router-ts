/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
    'default-case': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
    'no-dupe-class-members': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
    'no-undef': 'off',
    // Add TypeScript specific rules (and turn off ESLint equivalents)
    '@typescript-eslint/consistent-type-assertions': 'warn',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'warn',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        'functions': false,
        'classes': false,
        'variables': false,
        'typedefs': false
      }
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
        'allowTaggedTemplates': true
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'args': 'none',
        'ignoreRestSiblings': true
      }
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',

    // React hooks
    'react-hooks/exhaustive-deps': 'warn',

    // simple-import-sort
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        'groups': [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Packages `next` related packages come first.
          ['^next', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)'],
        ],
      },
    ],
  },
};
