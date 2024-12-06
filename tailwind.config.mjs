/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#5B9DFF",
				},
				secondary: {
					DEFAULT: "#3D68A9",
				},
				yellow: "#EBAD25",
				customWhite: "#F0F8FF",
				purple: "#5E7357",
			},
		},
	},
	plugins: [],
};
