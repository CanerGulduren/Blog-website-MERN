/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        lg:  "30rem",
        xl: "60rem",
        blogW: "45rem",
        fullH: "100vh"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

