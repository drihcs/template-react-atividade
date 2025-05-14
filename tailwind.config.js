/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E5F2FF',
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66AFFF',
          400: '#3394FF',
          500: '#0A84FF', // Apple iOS blue
          600: '#0064D2',
          700: '#0054B0',
          800: '#00448D',
          900: '#00346B',
        },
        secondary: {
          50: '#EEEEFE',
          100: '#DEDDFD',
          200: '#BCBBFB',
          300: '#9B99F9',
          400: '#7977F7',
          500: '#5E5CE6', // Apple iOS purple
          600: '#4A48BF',
          700: '#3B3999',
          800: '#2C2B73',
          900: '#1D1C4D',
        },
        accent: {
          50: '#FFF4E5',
          100: '#FFEACC',
          200: '#FFD599',
          300: '#FFBF66',
          400: '#FFAF33',
          500: '#FF9F0A', // Apple iOS orange
          600: '#CC7C00',
          700: '#A86600',
          800: '#854F00',
          900: '#633B00',
        },
        success: {
          50: '#E9F9EF',
          100: '#D3F3DE',
          200: '#A7E7BD',
          300: '#7BDC9C',
          400: '#4FD07B',
          500: '#30D158', // Apple iOS green
          600: '#26A946',
          700: '#1D8839',
          800: '#14662B',
          900: '#0B441C',
        },
        warning: {
          50: '#FFF4E5',
          100: '#FFEACC',
          200: '#FFD599',
          300: '#FFBF66',
          400: '#FFAF33',
          500: '#FF9F0A', // Apple iOS yellow/orange
          600: '#CC7C00',
          700: '#A86600',
          800: '#854F00',
          900: '#633B00',
        },
        error: {
          50: '#FFECEB',
          100: '#FFD9D6',
          200: '#FFB3AD',
          300: '#FF8D85',
          400: '#FF675C',
          500: '#FF453A', // Apple iOS red
          600: '#CC372E',
          700: '#A82D25',
          800: '#85231D',
          900: '#631915',
        },
        gray: {
          50: '#F9F9F9',
          100: '#F2F2F7', // Apple iOS light gray
          200: '#E5E5EA',
          300: '#D1D1D6',
          400: '#C7C7CC',
          500: '#AEAEB2',
          600: '#8E8E93',
          700: '#636366',
          800: '#3A3A3C',
          900: '#1C1C1E', // Apple iOS dark gray
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'San Francisco',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      spacing: {
        '4xs': '2px',
        '3xs': '4px',
        '2xs': '8px',
        'xs': '16px',
        'sm': '24px',
        'md': '32px',
        'lg': '40px',
        'xl': '48px',
        '2xl': '56px',
        '3xl': '64px',
        '4xl': '72px',
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}