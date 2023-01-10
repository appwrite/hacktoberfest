const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,svelte}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontSize: {
			...defaultTheme.fontSize
		},
		fontWeight: {
			...defaultTheme.fontWeight
		},
		extend: {
			colors: {
				secondary: {
					DEFAULT: '#ff0000'
				},
				primary: {
					DEFAULT: '#F02E65',
					100: '#F02E65',
					200: '#DA1A5B',
					300: '#C00D53'
				},
				neutral: {
					DEFAULT: '#616B7C',
					0: '#FFFFFF',
					5: '#FCFCFF',
					30: '#C4C6D7',
					150: '#373B4D',
					170: '#282A3B',
					190: '#1B1B28',
					200: '#14141F',
					300: '#1B1B28'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp')
	]
};
