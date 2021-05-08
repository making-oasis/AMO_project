module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "react", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:mdx/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
      typescript: {
        config: "tsconfig.json",
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "react/prop-types": ["off"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", "mdx"] }],
    "import/order": ["error"],
  },
  overrides: [
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/overrides"],
    },
  ],
};
