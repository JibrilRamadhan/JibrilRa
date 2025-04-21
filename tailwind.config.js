/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Jost: ["Jost", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"]
      },
      animation: {
        'bounce-less': 'bounce-less 1s infinite'
      },
      keyframes: {
        'bounce-less': {
          '0%, 100%': { 
            transform: 'translateY(-10%)', 
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      colors: {
        primary: '#285430',
        secondary: '#5F8D4E',
        accent: '#A4BE7B',
        light: '#E5D9B6',
    },
    },
  },
  plugins: [],
}

