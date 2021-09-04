module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,svelte}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/aspect-ratio')]
};
