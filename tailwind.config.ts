module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    //enable remove unused CSS only in production
    enabled: process.env.NODE_ENV === "production",
    //any file containing the reference of CSS styles by class name.
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
  },
};
