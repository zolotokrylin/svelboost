const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)"
  ],
  "addons": [
    "@storybook/addon-postcss",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "svelteOptions": {
    "preprocess": require("svelte-preprocess")()
  },
}