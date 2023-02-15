/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: ["valentine"],
  },
};
