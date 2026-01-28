import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, h } from 'vue';

const primitiveColors: Record<string, Record<string, string>> = {
  neutral: { '0': '#ffffff', '50': '#fafafa', '100': '#f5f5f5', '200': '#e5e5e5', '300': '#d4d4d4', '400': '#a3a3a3', '500': '#737373', '600': '#525252', '700': '#404040', '800': '#262626', '900': '#171717', '950': '#0a0a0a' },
  navy: { '50': '#e8eaf2', '100': '#c5c9db', '200': '#9ea5c2', '300': '#7680a9', '400': '#525d8f', '500': '#2e3b75', '600': '#242e5c', '700': '#1a2244', '800': '#11162d', '900': '#0a0e1f', '950': '#060813' },
  blue: { '50': '#eff6ff', '100': '#dbeafe', '200': '#bfdbfe', '300': '#93c5fd', '400': '#60a5fa', '500': '#3b82f6', '600': '#2563eb', '700': '#1d4ed8', '800': '#1e40af', '900': '#1e3a8a' },
  purple: { '50': '#f5f3ff', '100': '#ede9fe', '200': '#ddd6fe', '300': '#c4b5fd', '400': '#a78bfa', '500': '#8b5cf6', '600': '#7c3aed', '700': '#6d28d9', '800': '#5b21b6', '900': '#4c1d95' },
  orange: { '50': '#fff7ed', '100': '#ffedd5', '200': '#fed7aa', '300': '#fdba74', '400': '#fb923c', '500': '#f97316', '600': '#ea580c', '700': '#c2410c', '800': '#9a3412', '900': '#7c2d12' },
  amber: { '50': '#fffbeb', '100': '#fef3c7', '200': '#fde68a', '300': '#fcd34d', '400': '#fbbf24', '500': '#f59e0b', '600': '#d97706', '700': '#b45309', '800': '#92400e', '900': '#78350f' },
  yellow: { '50': '#fefce8', '100': '#fef9c3', '200': '#fef08a', '300': '#fcd34d', '400': '#facc15', '500': '#eab308', '600': '#ca8a04', '700': '#a16207', '800': '#854d0e', '900': '#713f12' },
  green: { '50': '#f0fdf4', '100': '#dcfce7', '200': '#bbf7d0', '300': '#86efac', '400': '#4ade80', '500': '#22c55e', '600': '#16a34a', '700': '#15803d', '800': '#166534', '900': '#14532d' },
  red: { '50': '#fef2f2', '100': '#fee2e2', '200': '#fecaca', '300': '#fca5a5', '400': '#f87171', '500': '#ef4444', '600': '#dc2626', '700': '#b91c1c', '800': '#991b1b', '900': '#7f1d1d' },
  pink: { '50': '#fdf2f8', '100': '#fce7f1', '200': '#fbcfe8', '300': '#f9a8d4', '400': '#f472b6', '500': '#ec4899', '600': '#db2777', '700': '#be185d', '800': '#9d174d', '900': '#831843' },
  teal: { '50': '#f0fdfa', '100': '#ccfbf1', '200': '#99f6e4', '300': '#5eead4', '400': '#2dd4bf', '500': '#14b8a6', '600': '#0d9488', '700': '#0f766e', '800': '#115e59', '900': '#134e4a' },
};

const semanticColors: Record<string, Record<string, { value: string; ref: string }>> = {
  surface: {
    canvas: { value: '#0a0e1f', ref: 'navy.900' },
    panel: { value: '#11162d', ref: 'navy.800' },
    elevated: { value: '#1a2244', ref: 'navy.700' },
    muted: { value: '#060813', ref: 'navy.950' },
    inverse: { value: '#ffffff', ref: 'neutral.0' },
  },
  text: {
    default: { value: '#ffffff', ref: 'neutral.0' },
    secondary: { value: '#9ea5c2', ref: 'navy.200' },
    muted: { value: '#7680a9', ref: 'navy.300' },
    subtle: { value: '#525d8f', ref: 'navy.400' },
    link: { value: '#fb923c', ref: 'orange.400' },
  },
  border: {
    subtle: { value: '#1a2244', ref: 'navy.700' },
    default: { value: '#242e5c', ref: 'navy.600' },
    strong: { value: '#2e3b75', ref: 'navy.500' },
    focus: { value: '#f97316', ref: 'orange.500' },
  },
  feedback: {
    success: { value: '#22c55e', ref: 'green.500' },
    warning: { value: '#f59e0b', ref: 'amber.500' },
    error: { value: '#ef4444', ref: 'red.500' },
    info: { value: '#3b82f6', ref: 'blue.500' },
  },
  brand: {
    primary: { value: '#11162d', ref: 'navy.800' },
    secondary: { value: '#f97316', ref: 'orange.500' },
    accent: { value: '#fbbf24', ref: 'amber.400' },
  },
};

const SwatchStyle = `
  display: inline-flex; flex-direction: column; align-items: center; margin: 4px;
`;
const BoxStyle = (color: string) => `
  width: 56px; height: 56px; border-radius: 8px; background: ${color};
  border: 1px solid rgba(255,255,255,0.1);
`;
const LabelStyle = `font-size: 10px; color: #9ea5c2; margin-top: 4px; text-align: center;`;
const ValueStyle = `font-size: 9px; color: #525d8f; font-family: monospace;`;

const ColorsPage = defineComponent({
  name: 'ColorsPage',
  setup() {
    return () => h('div', { style: 'padding: 24px; max-width: 1200px;' }, [
      h('h1', { style: 'font-size: 32px; margin-bottom: 8px; font-family: Manrope, sans-serif;' }, 'Color Tokens'),
      h('p', { style: 'color: #9ea5c2; margin-bottom: 32px; font-size: 14px;' }, 'Primitive color scales and semantic mappings for the design system.'),

      h('h2', { style: 'font-size: 24px; margin-bottom: 16px; color: #fbbf24;' }, 'Primitive Scales'),
      ...Object.entries(primitiveColors).map(([name, shades]) =>
        h('div', { style: 'margin-bottom: 24px;' }, [
          h('h3', { style: 'font-size: 16px; margin-bottom: 8px; text-transform: capitalize;' }, name),
          h('div', { style: 'display: flex; flex-wrap: wrap;' },
            Object.entries(shades).map(([shade, hex]) =>
              h('div', { style: SwatchStyle }, [
                h('div', { style: BoxStyle(hex) }),
                h('span', { style: LabelStyle }, shade),
                h('span', { style: ValueStyle }, hex),
              ])
            )
          ),
        ])
      ),

      h('h2', { style: 'font-size: 24px; margin: 32px 0 16px; color: #fbbf24;' }, 'Semantic Tokens'),
      ...Object.entries(semanticColors).map(([category, tokens]) =>
        h('div', { style: 'margin-bottom: 24px;' }, [
          h('h3', { style: 'font-size: 16px; margin-bottom: 8px; text-transform: capitalize;' }, category),
          h('div', { style: 'display: flex; flex-wrap: wrap;' },
            Object.entries(tokens).map(([name, { value, ref }]) =>
              h('div', { style: SwatchStyle }, [
                h('div', { style: BoxStyle(value) }),
                h('span', { style: LabelStyle }, name),
                h('span', { style: ValueStyle }, ref),
              ])
            )
          ),
        ])
      ),
    ]);
  },
});

const meta = {
  title: 'Foundations/Colors',
  component: ColorsPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};
