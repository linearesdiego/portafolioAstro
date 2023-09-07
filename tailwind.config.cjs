/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'custom-color': 'rgba(38, 95, 117, 0.089);', // Color personalizado con opacidad del 50%
			},
		},
	},
	plugins: [],
}
