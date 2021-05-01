module.exports = {
  extends: ["jungai-ts-react"],
  rules: {
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["src/**/*.ts"],
      rules: {
        "import/prefer-default-export": 0,
        "no-shadow": "off",
      },
    },
  ],
};
