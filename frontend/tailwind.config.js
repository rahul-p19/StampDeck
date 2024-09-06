/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#050315',
        'background': '#ffecb5',
        'primary': '#780116',
        'secondary': '#f7b438c5',
        'accent': '#c32f27',
       },
       fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "worksans": ["Work Sans", "sans-serif"]
       }       
    },
  },
  plugins: [],
}

