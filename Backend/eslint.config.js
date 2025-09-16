import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        process: 'readonly', // 👈 define process as global
        
        console: 'readonly', // (optional) often useful too
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier: prettier,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      'prettier/prettier': 'error',

      // Basic useful rules only
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'off', // allow any
      '@typescript-eslint/no-unsafe-assignment': 'off', // allow unsafe
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-floating-promises': 'off', // don’t force await
      '@typescript-eslint/explicit-function-return-type': 'off',
      'prefer-const': 'warn',
    },
  },
  {
    files: ['*.js', '*.mjs'],
    languageOptions: {
      sourceType: 'module',
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '*.d.ts'],
  },
];
