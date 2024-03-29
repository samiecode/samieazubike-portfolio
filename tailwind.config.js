/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/MAT_6779.png')",
			}
		},
		screens: {
			xs: "270px",
			xm: "570px",
			xml: "420px",
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
