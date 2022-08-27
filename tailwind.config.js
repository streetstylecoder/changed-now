/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['template/**/*.html'],
	theme: {
		extend: {},
		letterSpacing: {
			veryWide: '20px',
			tight: '3px',
		},
		lineHeight: {
      20: '100px',
      7: '27px',
		},
		colors: {
			'regal-blue': '#243c5a',
		},
		transitionProperty: {
			ease: 'ease',
		},
		spacing: {
			'32px': '32px',
		},
	},
	plugins: [],
};
