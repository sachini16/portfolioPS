/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        primary:   '#2563EB',
        'blue-50':  '#EFF6FF',
        'blue-100': '#DBEAFE',
        'blue-200': '#BFDBFE',
        'blue-300': '#93C5FD',
        'blue-400': '#60A5FA',
        'blue-500': '#3B82F6',
        'blue-600': '#2563EB',
        'blue-700': '#1D4ED8',
        'blue-800': '#1E40AF',
        'blue-900': '#1E3A8A',
        dark:      '#0F172A',
        secondary: '#475569',
        border:    '#E2E8F0',
        success:   '#22C55E',
      },
      borderRadius: {
        '2xl': '20px',
      },
      boxShadow: {
        card:       '0px 10px 30px rgba(37,99,235,0.08)',
        'card-hover':'0px 20px 50px rgba(37,99,235,0.18)',
      },
    },
  },
  plugins: [],
}
