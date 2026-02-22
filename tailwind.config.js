/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F2B6C',
        secondary: '#159EEC',
        Accent: '#BFD2F8',
      },
    },
  },
  plugins: [],
};

//npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
