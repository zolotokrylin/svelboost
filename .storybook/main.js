module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "svelteOptions": {
    "preprocess": require("svelte-preprocess")({
      replace: [[/<template(.+)\/>/gim, '<template$1></template>']],
      pug: true,
    })
  }
}