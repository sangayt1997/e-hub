/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // Adding the color variables which are not working in saflist
  safelist: [
    "mysticBlue"
  ],

  theme: {
    colors: {
      transparent: "transparent",
      white: withOpacityValue("--white"),
      black: withOpacityValue("--black"),
      success: withOpacityValue("--success"),
      warning: withOpacityValue("--warning"),
      danger: withOpacityValue("--danger"),
      info: withOpacityValue("--info"),
      mysticBlue: "var(--mystic-blue)",
      primary: {
        50: "var(--primary-50)",
        60: "var(--primary-60)",
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        250: "var(--primary-250)",
        300: "var(--primary-300)",
        400: "var(--primary-400)",
        500: "var(--primary-500)",
        600: "var(--primary-600)",
        700: "var(--primary-700)",
        800: "var(--primary-800)",
        900: "var(--primary-900)",
      },
      secondary: {
        50: "var(--secondary-50)",
        60: "var(--secondary-60)",
        100: "var(--secondary-100)",
        200: "var(--secondary-200)",
        250: "var(--secondary-250)",
        300: "var(--secondary-300)",
        400: "var(--secondary-400)",
        500: "var(--secondary-500)",
        600: "var(--secondary-600)",
      },
      neutral: {
        50: "var(--neutral-50)",
        100: "var(--neutral-100)",
        200: "var(--neutral-200)",
        300: "var(--neutral-300)",
        400: "var(--neutral-400)",
        500: "var(--neutral-500)",
        600: "var(--neutral-600)",
        700: "var(--neutral-700)",
      },
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins-regular)'],
        poppins_medium: ['var(--font-poppins-medium)'],
        poppins_bold: ['var(--font-poppins-bold)'],
      },
    },
  },
  plugins: [],
}
