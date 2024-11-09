/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				theme: {
					light: "#F0E4CA",
					lighthover: "#DFC6A2",
					DEFAULT: "#A28C69",
					hover: "#7D6846",
				},
				font: {
					light: "#8B7757",
					DEFAULT: "#7D6846",
					hover: "#735B34",
					dark: "#553B12",
					highlight: "#D79326",
					alert: "#DB372F",
				},
			},
		},
	},
	plugins: [],
};
