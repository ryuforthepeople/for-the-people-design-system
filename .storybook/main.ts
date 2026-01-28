import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.stories.ts',
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-design-token',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return config;
  },
};

export default config;
