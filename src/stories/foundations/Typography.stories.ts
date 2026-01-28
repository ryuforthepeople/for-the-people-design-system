import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, h } from 'vue';

const TypographyPage = defineComponent({
  name: 'TypographyPage',
  setup() {
    const headings = [
      { tag: 'h1', size: '48px', weight: '800', label: 'Heading 1' },
      { tag: 'h2', size: '36px', weight: '700', label: 'Heading 2' },
      { tag: 'h3', size: '28px', weight: '700', label: 'Heading 3' },
      { tag: 'h4', size: '22px', weight: '600', label: 'Heading 4' },
      { tag: 'h5', size: '18px', weight: '600', label: 'Heading 5' },
      { tag: 'h6', size: '16px', weight: '600', label: 'Heading 6' },
    ];

    const bodyStyles = [
      { name: 'Body Large', size: '18px', weight: '400', family: 'DM Sans' },
      { name: 'Body Default', size: '16px', weight: '400', family: 'DM Sans' },
      { name: 'Body Small', size: '14px', weight: '400', family: 'DM Sans' },
      { name: 'Caption', size: '12px', weight: '500', family: 'DM Sans' },
      { name: 'Overline', size: '11px', weight: '700', family: 'Manrope', transform: 'uppercase', spacing: '1.5px' },
    ];

    const sampleText = 'The quick brown fox jumps over the lazy dog';
    const row = `display: flex; align-items: baseline; gap: 24px; padding: 16px 0; border-bottom: 1px solid #1a2244;`;
    const label = `min-width: 140px; font-size: 12px; color: #525d8f; font-family: monospace;`;

    return () => h('div', { style: 'padding: 24px; max-width: 900px;' }, [
      h('h1', { style: 'font-size: 32px; margin-bottom: 8px; font-family: Manrope, sans-serif;' }, 'Typography'),
      h('p', { style: 'color: #9ea5c2; margin-bottom: 32px; font-size: 14px;' }, 'Manrope for headings & UI, DM Sans for body text.'),

      h('h2', { style: 'font-size: 20px; margin-bottom: 16px; color: #fbbf24;' }, 'Headings — Manrope'),
      ...headings.map(({ tag, size, weight, label: lbl }) =>
        h('div', { style: row }, [
          h('span', { style: label }, `${tag} · ${size} · ${weight}`),
          h(tag, { style: `font-family: Manrope, sans-serif; font-size: ${size}; font-weight: ${weight}; margin: 0;` }, lbl + ' — ' + sampleText),
        ])
      ),

      h('h2', { style: 'font-size: 20px; margin: 32px 0 16px; color: #fbbf24;' }, 'Body & UI — DM Sans'),
      ...bodyStyles.map(({ name, size, weight, family, transform, spacing }) =>
        h('div', { style: row }, [
          h('span', { style: label }, `${size} · ${weight}`),
          h('p', {
            style: `font-family: '${family}', sans-serif; font-size: ${size}; font-weight: ${weight}; margin: 0;
              ${transform ? `text-transform: ${transform};` : ''}
              ${spacing ? `letter-spacing: ${spacing};` : ''}`
          }, name + ' — ' + sampleText),
        ])
      ),
    ]);
  },
});

const meta = {
  title: 'Foundations/Typography',
  component: TypographyPage,
  tags: ['autodocs'],
} satisfies Meta<typeof TypographyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTypography: Story = {};
