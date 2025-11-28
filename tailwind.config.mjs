/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Poppins"', '"Montserrat"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				body: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				cream: '#F1F5FF',
				leaf: '#15C6C2',
				cta: '#0E2451',
				text: '#0C1224',
				ink: '#0E2451',
				muted: '#5E6B85',
			},
			boxShadow: {
				soft: '0 12px 30px rgba(0,0,0,0.08)',
				glow: '0 0 0 8px rgba(21,198,194,0.22)',
			},
		},
	},
	plugins: [],
};
