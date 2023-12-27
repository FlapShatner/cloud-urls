import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(213, 24%, 7%)',
        fg: 'hsl(195, 10%, 92%)',
      },
    },
  },
  plugins: [],
}
export default config
