module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    // "extends": [
    //     "eslint:recommended",
    //     "plugin:@typescript-eslint/recommended"
    // ],
    /**
     * Use React - eslint-config-airbnb
     * Not React - eslint-config-airbnb-base
     * airbnb support TypeScript: eslint-config-airbnb-typescript
     * [https://www.npmjs.com/package/eslint-config-airbnb-typescript]
     */
    extends: [
        'airbnb-base', // use React: airbnb
        'airbnb-typescript/base',
        'plugin:jest/recommended', // npm i eslint-plugin-jest -D
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // project: './tsconfig.json'
        project: './tsconfig.eslint.json'
    },
    plugins: ['@typescript-eslint', 'jest', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'off'
    }
}
