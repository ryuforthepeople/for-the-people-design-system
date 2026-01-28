import type { Meta, StoryObj } from '@storybook/vue3';
import ImageCompare from '../../components/ImageCompare/ImageCompare.vue';

const meta = {
  title: 'Components/ImageCompare',
  component: ImageCompare,
  tags: ['autodocs'],
  argTypes: {
    initialPosition: { control: { type: 'range', min: 0, max: 100 } },
    ariaLabel: { control: 'text' },
  },
  args: {
    initialPosition: 50,
  },
} satisfies Meta<typeof ImageCompare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ImageCompare },
    setup() {
      return { args };
    },
    template: `
      <ImageCompare v-bind="args" style="width: 600px; height: 400px; position: relative;">
        <template #before>
          <img src="https://picsum.photos/600/400?grayscale&random=1" alt="Before" style="width:100%;height:100%;object-fit:cover" />
        </template>
        <template #after>
          <img src="https://picsum.photos/600/400?random=1" alt="After" style="width:100%;height:100%;object-fit:cover" />
        </template>
      </ImageCompare>
    `,
  }),
};

export const StartLeft: Story = {
  ...Default,
  args: { initialPosition: 25 },
};

export const StartRight: Story = {
  ...Default,
  args: { initialPosition: 75 },
};
