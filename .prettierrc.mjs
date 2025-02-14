// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  tailwindStylesheet: "./src/assets/css/tailkit.css",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
