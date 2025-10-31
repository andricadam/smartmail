import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				rainbow: {
					"0%": { "background-position": "0%" },
					"100%": { "background-position": "200%" },
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'shimmer': {
					'0%': {
						'background-position': '-1000% 0'
					},
					'100%': {
						'background-position': '1000% 0'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						'box-shadow': '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.2)'
					},
					'50%': {
						'box-shadow': '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)'
					}
				},
				'glow-pulse-outline': {
					'0%, 100%': {
						'box-shadow': '0 0 5px rgba(147, 197, 253, 0.5), 0 0 10px rgba(147, 197, 253, 0.3), 0 0 15px rgba(147, 197, 253, 0.2), inset 0 0 5px rgba(147, 197, 253, 0.1)'
					},
					'50%': {
						'box-shadow': '0 0 10px rgba(147, 197, 253, 0.8), 0 0 20px rgba(147, 197, 253, 0.6), 0 0 30px rgba(147, 197, 253, 0.4), inset 0 0 10px rgba(147, 197, 253, 0.2)'
					}
				},
				'scroll-left': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(calc(-100% / 3))'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				rainbow: "rainbow var(--speed, 2s) infinite linear",
				'shimmer': 'shimmer 3s infinite linear',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'glow-pulse-outline': 'glow-pulse-outline 2s ease-in-out infinite',
				'scroll-left': 'scroll-left 10s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
