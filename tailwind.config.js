/** @type {import('tailwindcss').Config} */
const kebabcase = require("lodash.kebabcase");
const tokens = require("./src/__generated__/style-dictionary");

const colors = Object.fromEntries(
  Object.values(tokens)
    .filter((token) => !!token.type)
    .map(({ attributes, value }) => {
      return [kebabcase(attributes.category), value];
    })
);

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors,
  },
  plugins: [],
};
