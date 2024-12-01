/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
    },
  },
  plugins: [],
}

