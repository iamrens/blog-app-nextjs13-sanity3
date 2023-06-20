/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      fontFamily: {
        inter: ['var(--font-inter)'],
        open: ['var(--font-open-sans)'],
        roboto: ['var(--font-roboto-mono)'],
      },
      colors: {
        light: "#f5f5f5",
        dark: "#1b1b1b",
        textLight: "#7f7f7f",
        titleLight: "#666666",
        textDark: "#C2C2C2",
        titleDark: "#E0E0E0",
      },
    },
  },
  plugins: [],
}
