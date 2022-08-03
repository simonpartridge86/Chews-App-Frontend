/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-color': '#FD2B46',
      'light-color': '#FFFFFF',
      'dark-color': '#32373B',
    },
    fontFamily: {
       "nunito": ["nunito", "sans-serif"],
       "permanent-marker": ["permanent-marker", "sans-serif"]
    }
  },
  plugins: [],
}

// Remember to include paths to all pages and components using tailwind here
