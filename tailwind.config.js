/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-name': "url('/src/assets/beautyhome.jpg')",
      }
    },
  },
  plugins: [],
}

