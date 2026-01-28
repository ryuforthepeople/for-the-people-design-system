import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const ftpTheme = create({
  base: 'dark',
  brandTitle: 'For The People Design System',
  brandUrl: 'https://forthepeople.nl',

  // Colors
  colorPrimary: '#f97316',
  colorSecondary: '#f59e0b',

  // UI
  appBg: '#0a0e1f',
  appContentBg: '#11162d',
  appBorderColor: '#1a2244',
  appBorderRadius: 8,

  // Text
  textColor: '#ffffff',
  textInverseColor: '#0a0e1f',
  textMutedColor: '#9ea5c2',

  // Toolbar
  barTextColor: '#9ea5c2',
  barSelectedColor: '#f97316',
  barBg: '#11162d',
  barHoverColor: '#f59e0b',

  // Form
  inputBg: '#1a2244',
  inputBorder: '#242e5c',
  inputTextColor: '#ffffff',
  inputBorderRadius: 5,

  // Font
  fontBase: '"Manrope", sans-serif',
  fontCode: 'monospace',
});

addons.setConfig({
  theme: ftpTheme,
});
