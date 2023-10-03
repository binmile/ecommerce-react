/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "color-grey" : "#262626",
        "dark-secondary" : "#C4C4C4",
        "secondary" : "#555555",
        "light-tritary-text":"#9D9D9D",
        "light-primary-text":"#262626"
      }
    },
  },
  plugins: [],
}

