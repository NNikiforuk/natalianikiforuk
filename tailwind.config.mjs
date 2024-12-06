/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#2563eb",
					dark: "#1d4ed8",
				},
				secondary: {
					DEFAULT: "#4f46e5",
					dark: "#4338ca",
				},
				yellow: "#EBAD25",
				customWhite: "#F0F8FF",
			},
		},
	},
	plugins: [],
};
