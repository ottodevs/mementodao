/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    plugins: [require('rippleui')],
    /** @type {import('rippleui').Config} */
    rippleui: {
        defaultStyle: false,
        // removeThemes: ['dark'],
        themes: [
            {
                themeName: 'light',
                colorScheme: 'light',
                prefersColorScheme: true,
                colors: {
                    'backgroundPrimary': '#fcfcfc',
                    'backgroundSecondary': '#f8f8f8',
                    'black': '#000000',
                    'blackInverted': '#ffffff',
                    'blue-100': '#f5faff',
                    'blue-1000': '#006adc',
                    'blue-1100': '#00254d',
                    'blue-200': '#edf6ff',
                    'blue-300': '#e1f0ff',
                    'blue-400': '#cee7fe',
                    'blue-50': '#fbfdff',
                    'blue-500': '#b7d9f8',
                    'blue-600': '#96c7f2',
                    'blue-700': '#5eb0ef',
                    'blue-800': '#0091ff',
                    'blue-900': '#0081f1',
                    'border': '#e2e2e2',
                    'content1': '#666666', // custom
                    'content2': '#000000', // custom
                    'content3': '#969696',
                    'cyan-100': '#f2fcfd',
                    'cyan-1000': '#0c7792',
                    'cyan-1100': '#04313c',
                    'cyan-200': '#e7f9fb',
                    'cyan-300': '#d8f3f6',
                    'cyan-400': '#c4eaef',
                    'cyan-50': '#fafdfe',
                    'cyan-500': '#aadee6',
                    'cyan-600': '#84cdda',
                    'cyan-700': '#3db9cf',
                    'cyan-800': '#05a2c2',
                    'cyan-900': '#0894b3',
                    'error': '#f31260',
                    'gray-100': '#f8f8f8',
                    'gray-1000': '#6f6f6f',
                    'gray-1100': '#171717',
                    'gray-200': '#f3f3f3',
                    'gray-300': '#ededed',
                    'gray-400': '#e8e8e8',
                    'gray-50': '#fcfcfc',
                    'gray-500': '#e2e2e2',
                    'gray-600': '#dbdbdb',
                    'gray-700': '#c7c7c7',
                    'gray-800': '#8f8f8f',
                    'gray-900': '#858585',
                    'green-100': '#f2fcf5',
                    'green-1000': '#18794e',
                    'green-1100': '#153226',
                    'green-200': '#e9f9ee',
                    'green-300': '#ddf3e4',
                    'green-400': '#ccebd7',
                    'green-50': '#fbfefc',
                    'green-500': '#b4dfc4',
                    'green-600': '#92ceac',
                    'green-700': '#5bb98c',
                    'green-800': '#30a46c',
                    'green-900': '#299764',
                    'neutral': '#697177',
                    'pink-100': '#fff7fc',
                    'pink-1000': '#cd1d8d',
                    'pink-1100': '#3b0a2a',
                    'pink-200': '#feeef8',
                    'pink-300': '#fce5f3',
                    'pink-400': '#f9d8ec',
                    'pink-50': '#fffcfe',
                    'pink-500': '#f3c6e2',
                    'pink-600': '#ecadd4',
                    'pink-700': '#e38ec3',
                    'pink-800': '#d6409f',
                    'pink-900': '#d23197',
                    'primary': '#0072f5',
                    'purple-100': '#fdfaff',
                    'purple-1000': '#793aaf',
                    'purple-1100': '#2b0e44',
                    'purple-200': '#f9f1fe',
                    'purple-300': '#f3e7fc',
                    'purple-400': '#eddbf9',
                    'purple-50': '#fefcfe',
                    'purple-500': '#e3ccf4',
                    'purple-600': '#d3b4ed',
                    'purple-700': '#be93e4',
                    'purple-800': '#8e4ec6',
                    'purple-900': '#8445bc',
                    'red-100': '#fff8f8',
                    'red-1000': '#cd2b31',
                    'red-1100': '#381316',
                    'red-200': '#ffefef',
                    'red-300': '#ffe5e5',
                    'red-400': '#fdd8d8',
                    'red-50': '#fffcfc',
                    'red-500': '#f9c6c6',
                    'red-600': '#f3aeaf',
                    'red-700': '#eb9091',
                    'red-800': '#e5484d',
                    'red-900': '#dc3d43',
                    'secondary': '#9750dd',
                    'slate-100': '#f8f9fa',
                    'slate-1000': '#687076',
                    'slate-1100': '#11181c',
                    'slate-200': '#f1f3f5',
                    'slate-300': '#eceef0',
                    'slate-400': '#e6e8eb',
                    'slate-50': '#fbfcfd',
                    'slate-500': '#dfe3e6',
                    'slate-600': '#d7dbdf',
                    'slate-700': '#c1c8cd',
                    'slate-800': '#889096',
                    'slate-900': '#7e868c',
                    'success': '#17c964',
                    'warning': '#ffb800',
                    'white': '#ffffff',
                    'whiteInverted': '#000000',
                    'yellow-100': '#fffce8',
                    'yellow-1000': '#946800',
                    'yellow-1100': '#35290f',
                    'yellow-200': '#fffbd1',
                    'yellow-300': '#fff8bb',
                    'yellow-400': '#fef2a4',
                    'yellow-50': '#fdfdf9',
                    'yellow-500': '#f9e68c',
                    'yellow-600': '#efd36c',
                    'yellow-700': '#ebbc00',
                    'yellow-800': '#f5d90a',
                    'yellow-900': '#f7ce00',
                },
            },
        ],
    },
}