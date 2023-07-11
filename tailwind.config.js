/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'fs-100': '0.75rem', /* 12px bm */
      'fs-300': '0.9375rem', /* 15px hm */
      'fs-200': '0.8125rem', /* 13px bl */
      'fs-100': '0.75rem', /* 12px bm */
      'fs-400': '1.125rem', /* 18px hl */
      'fs-800': '2.125rem', /* 18px hxl */
      'fs-custom': 'clamp(1.2rem, 3vw, 1.5rem)'
    },
    fontWeight: {
      medium: 500,
      bold: 700
    },
    boxShadow: {
      'task-shadow': '0px 4px 6px rgba(54, 78, 126, 0.101545)',
      'modal-shadow': '0px 10px 20px rgba(54, 78, 126, 0.25)'
    },
    colors: {
      black: '#000000',
      white: '#ffffff',

      red: '#EA5555',
      'blue-100': '#f0effa',
      'blue-200': '#A8A4FF',
      'blue-300': '#635FC7',
      'blue-300-opacity': 'rgba(99, 95, 199, 0.25)',


      'gray-100': '#F4F7FD',
      "gray-200": '#E4EBFA',
      "gray-300": '#828fa3',
      'gray-300-opacity': 'rgba(130, 143, 163, 0.4)',
      'gray-300-gradient': 'linear-gradient(to bottom, rgba(121, 132, 147, 0.2), rgba(130, 143, 163, 0.1), rgba(130, 143, 163, 0))',
      "main-gray-400": '#2B2C37',
      "gray-500": '#3E3F4E',
      "gray-600": '#20212C',


      "cardShadow": 'rgba(54, 78, 126, 0.101545)',
      "overlay": 'rgba(0, 0, 0, 0.5)',


      // 'primary-color': '#635fc7',
      // 'primary-hover-color': '#a8a4ff',

      // 'clr-destructive': '#ea5555',
      // 'clr-destructive-hover': '#ff9898',

      // 'secondary-btn': '#625fc721',
      // 'secondary-hover-btn': '#625fc70a',

      // 'sidebar-board-hover': '#625fc71e',

      // 'input-border': '1px solid #828fa340 !important',


      // 'gray-300': '#828fa3',
      // mediumGrayOpacity: 'rgba(130,143,163,0.4)'
    },
    extend: {
      letterSpacing: {
        'spacing-sidebar': '2.4px'
      },
      width: {
        'sidebar-width': '300px',
        'card-width': '17.5rem'
      },
      minWidth: {
        'sidebar-width': '300px'
      },
      height: {
        'header-height': '6rem'
      },
      minHeight: {
        'card-height': '5.5rem'
      }
      ,
      borderWidth: {
        '1': '1px'
      },
      variants: {
        fill: ['hover'],
      },
      flex: {
        1: 1
      }
    },

  },


  plugins: [],
}

