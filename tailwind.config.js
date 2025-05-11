import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'var(--font-sans)'
				],
				mono: [
					'var(--font-mono)'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'marquee': 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				shine: 'shine 3s ease-out infinite',
				'gradient-flow': 'gradientFlow 10s ease 0s infinite normal none running',
			},
			keyframes: {
				marquee: {
					'from': { transform: 'translateX(0)' },
					'to': { transform: 'translateX(calc(-100% - var(--gap)))' },
				},
				'marquee-vertical': {
					'from': { transform: 'translateY(0)' },
					'to': { transform: 'translateY(calc(-100% - var(--gap)))' },
				},
				shine: {
					'0%': { backgroundPosition: '200% 0' },
					'25%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '-200% 0' },
				},
				gradientFlow: {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' },
				},
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%',
						img: {
							marginTop: '1.5em',
							marginBottom: '1.5em',
						},
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
					},
				},
			},
		}
	},
	darkMode: ["class", 'class'],
	plugins: [heroui(), require("tailwindcss-animate"), require('@tailwindcss/typography')],
}

module.exports = config;