import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'header-transparan': '#1E1E1EA6',
      },
      fontFamily: {
        'menu' : 'Montserrat',
      },
      letterSpacing: {
        'menu' : '0.32em',
      },
      fontSize : {
        'footer' : '10px',
      }
    },
  },
  plugins: [],
}
export default config
