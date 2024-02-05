const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: [{
			custom: {
				'color-scheme': 'light',

				primary: defaultColors.sky[300],
				'primary-content': 'black',

				secondary: defaultColors.lime[300],
				'secondary-content': 'black',

				// accent: '#ebdc99',
				// 'accent-content': '#282425',

				// neutral: '#7d7259',
				// 'neutral-content': '#e4d8b4',

				'base-0': defaultColors.white,
				'base-100': defaultColors.gray[100],
				'base-200': defaultColors.gray[200],
				'base-300': defaultColors.gray[300],
				'base-content': defaultColors.gray[700],

				info: defaultColors.sky[900],
				'info-content': '#ffffff',

				// success: '#21CC51',
				// 'success-content': '#ffffff',

				// warning: '#FF6154',
				// 'warning-content': '#ffffff',

				// error: '#DE1C8D',
				// 'error-content': '#ffffff',

				'--rounded-box': '1rem',
				'--rounded-btn': '99rem',
				'--rounded-badge': '1rem',

				// '--animation-btn': '0',
				// '--animation-input': '0',

				'--tab-radius': '99rem'
			}
		}]
	}
}
