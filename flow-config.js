module.exports = {
  ...require("./index.json"),
  overrides: [
    {
      files: "*.js",
      options: { parser: "flow" }
    }
  ]
};
