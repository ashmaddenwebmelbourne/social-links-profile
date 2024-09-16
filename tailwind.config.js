/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: 'Inter, sans-serif',
			},
		},
		colors: {
			'grey-900': '#141414',
			'grey-800': '#1f1f1f',
			'grey-700': '#333333',
			green: '#c4f82a;',
		},
	},
	plugins: [],
};
