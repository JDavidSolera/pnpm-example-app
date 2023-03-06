module.exports = {
  extends: ["next", "turbo", "airbnb", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "react/react-in-jsx-scope": "off",
    "no-shadow": "off",
    "class-methods-use-this": "off",
    "react/jsx-props-no-spreading": "off",
    "no-unused-vars": "off"
  },
};
