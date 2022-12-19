/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Fira Mono']
			},
			colors: {
				tealish: '#9FC4CC',
				greyish: '#7A8D9C'
			}
		}
	},
	plugins: [require('tailwind-children')]
};
