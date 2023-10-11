module.exports = {
    env: {
        es2021: true,
    },
    extends: [
        'prettier',      // /base, /essential, /strongly-recommended, /recommended
        'plugin:prettier/recommended',   // turns off all ESLINT rules that are unnecessary due to Prettier or might conflict with Prettier. 
        'eslint:recommended'
      ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.js'],
            },
        ],
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
    },
};