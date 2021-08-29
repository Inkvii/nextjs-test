module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "sm": {"max": "639px"}
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
