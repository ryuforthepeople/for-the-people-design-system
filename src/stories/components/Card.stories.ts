import type { Meta, StoryObj } from '@storybook/vue3';
import Card from '../../components/Card/Card.vue';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'highlighted'] },
  },
  args: { variant: 'default' },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Card },
    setup() { return { args }; },
    template: `
      <Card v-bind="args">
        <template #title>Card Title</template>
        <template #subtitle>Subtitle text</template>
        <template #content><p>Card content goes here. This is a basic card component.</p></template>
        <template #footer><span style="color: #9ea5c2; font-size: 13px;">Footer content</span></template>
      </Card>
    `,
  }),
};

export const Highlighted: Story = {
  render: (args) => ({
    components: { Card },
    setup() { return { args }; },
    template: `
      <Card v-bind="args">
        <template #title>Highlighted Card</template>
        <template #content><p>This card uses the highlighted variant.</p></template>
      </Card>
    `,
  }),
  args: { variant: 'highlighted' },
};

export const WithHeader: Story = {
  render: (args) => ({
    components: { Card },
    setup() { return { args }; },
    template: `
      <Card v-bind="args">
        <template #header><img src="https://placehold.co/600x200/11162d/f97316?text=Header+Image" style="width:100%;border-radius:8px 8px 0 0;" /></template>
        <template #title>Card with Header</template>
        <template #content><p>This card has an image header slot.</p></template>
      </Card>
    `,
  }),
};
