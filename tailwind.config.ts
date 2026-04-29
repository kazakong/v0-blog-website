import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config

export default config
