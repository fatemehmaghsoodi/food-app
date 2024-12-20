/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl':' 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
      },
      colors:{
        secondary:{
          100:'rgb(var(--color-secondary-100))',
          200:'rgb(var(--color-secondary-200))'
        },
        dark:{
          100:'rgb(var(--color-dark-100))',
          200:'rgb(var(--color-dark-200))',
          300:'rgb(var(--color-dark-300))'
        },
        basicgray:'rgb(175, 175, 175)'
        
      },
      keyframes:{
        "jump":{
          "0%": {
            top: "19%"
          },
          "100%": {
            top: "21%"
        },
        }
      },
      animation: {
        jumping: 'jump 2s ease-in-out infinite alternate-reverse '
      }
    },
  },
  plugins: [],
}

