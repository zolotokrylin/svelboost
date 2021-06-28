import ThemeProvider, { store } from '../src/stories/Theme.svelte';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: 'dark',
      },
      {
        name: 'light',
        value: 'light',
      },
    ],
  },
}

const withThemeProvider = (ctx) => {
  store.set(ctx.globals);
  return ThemeProvider;
}

export const decorators = [(_, ctx) => withThemeProvider(ctx)]