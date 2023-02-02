module.exports = {
    // extends: ['next/core-web-vitals', 'prettier'],
    rules: {
        // '@next/next/no-html-link-for-pages': 'off',
        // 'react/jsx-key': 'off',
    },
    overrides: [
        {
            files: ['*.md'],
            parser: 'eslint-plugin-markdownlint/parser',
            extends: ['plugin:markdownlint/recommended'],
        },
    ],
}
