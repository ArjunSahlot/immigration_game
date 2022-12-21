/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html'],
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