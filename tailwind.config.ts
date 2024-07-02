import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        consumer: '#909CB0',
        industrial: '#5677B0',
        milspec: '#4450CF',
        restricted: '#663BCF',
        classified: '#9C35B9',
        covert: '#D35147',
        contraband: '#C7903E',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

export default config
