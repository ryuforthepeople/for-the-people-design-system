import type { Meta, StoryObj } from '@storybook/vue3';
import Section from '../../components/Section/Section.vue';

const meta = {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'muted', 'accent', 'dark'] },
    padding: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Why choose us', subtitle: 'We build tools that teams love to use.', variant: 'default', padding: 'lg' },
  render: (args) => ({
    components: { Section },
    setup: () => ({ args }),
    template: `<Section v-bind="args"><p style="color: #9ea5c2; text-align: center;">Section content goes here.</p></Section>`,
  }),
};

export const Muted: Story = { args: { ...Default.args, variant: 'muted' }, render: Default.render };
export const Accent: Story = { args: { ...Default.args, variant: 'accent' }, render: Default.render };
export const Dark: Story = { args: { ...Default.args, variant: 'dark' }, render: Default.render };
