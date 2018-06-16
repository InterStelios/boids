module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
};
