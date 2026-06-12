/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f5',
          100: '#e9e9e9',
          500: '#666666',
          900: '#111111',
        },
        notebook: {
          dark: '#0A0A0A',
          light: '#FFFFFF',
          border: '#D9D9D9',
          text: '#111111',
          secondary: '#666666',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      backgroundColor: {
        'notebook-dark': '#0A0A0A',
        'notebook-light': '#FFFFFF',
      },
      borderColor: {
        'notebook': '#D9D9D9',
      },
      boxShadow: {
        'notebook': '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)',
        'notebook-hover': '0 10px 15px rgba(0, 0, 0, 0.15), 0 20px 30px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        'paper-small': '12px',
        'paper-medium': '24px',
        'paper-large': '48px',
      },
      animation: {
        'slideUp': 'slideUp 0.3s ease-out',
        'fadeIn': 'fadeIn 0.3s ease-out',
        'paperFlip': 'paperFlip 0.5s ease-out',
      },
      keyframes: {
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        paperFlip: {
          '0%': { opacity: '0', transform: 'rotateY(-10deg) scale(0.95)' },
          '100%': { opacity: '1', transform: 'rotateY(0deg) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
