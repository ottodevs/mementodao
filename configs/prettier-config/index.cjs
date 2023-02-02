// @ts-check
module.exports = {
    arrowParens: 'avoid',
    printWidth: 120,
    endOfLine: 'lf',
    bracketSpacing: true,
    bracketSameLine: true,
    jsxSingleQuote: true,
    tabWidth: 4,
    useTabs: false,
    quoteProps: 'consistent',
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    proseWrap: 'preserve',
    plugins: ['./node_modules/prettier-plugin-solidity', './node_modules/prettier-plugin-jsdoc'],
    overrides: [
        { files: '*.json', options: { parser: 'json' } },
        { files: '*.yaml', options: { parser: 'yaml' } },
        { files: '*.sol', options: { parser: 'solidity-parse' } },
        {
            files: 'app.json',
            options: {
                tabWidth: 2,
                parser: 'json',
            },
        },
    ],
}
