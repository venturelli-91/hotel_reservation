/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

module.exports = {
	content: [
		"./node_modules/flowbite/**/*.js",
		"./src/**/*.{js,jsx,ts,tsx}",
		flowbite.content(),
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [flowbite.plugin()],
};
