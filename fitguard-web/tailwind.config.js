/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',   // emerald-500
        secondary: '#7c3aed', // violet-600
        danger: '#f43f5e',    // rose-500
        warning: '#fbbf24',   // amber-400
        background: '#f8fafc',// slate-50
        dark: '#0f172a',      // slate-900
      }
    },
  },
  plugins: [],
}
