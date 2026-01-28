import type { Meta, StoryObj } from '@storybook/vue3';
import Carousel from '../../components/Carousel/Carousel.vue';

const sampleItems = [
  { title: 'Slide 1', description: 'First slide content', color: '#6366f1' },
  { title: 'Slide 2', description: 'Second slide content', color: '#8b5cf6' },
  { title: 'Slide 3', description: 'Third slide content', color: '#a855f7' },
  { title: 'Slide 4', description: 'Fourth slide content', color: '#d946ef' },
  { title: 'Slide 5', description: 'Fifth slide content', color: '#ec4899' },
];

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    numVisible: { control: { type: 'number', min: 1, max: 5 } },
    numScroll: { control: { type: 'number', min: 1, max: 5 } },
    circular: { control: 'boolean' },
    autoplay: { control: 'boolean' },
    autoplayInterval: { control: { type: 'number', min: 1000, max: 10000 } },
    showNavigators: { control: 'boolean' },
    showIndicators: { control: 'boolean' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() { return { args, sampleItems }; },
    template: `
      <Carousel v-bind="args" :items="sampleItems">
        <template #item="{ data }">
          <div :style="{ background: data.color, padding: '2rem', borderRadius: '8px', color: 'white', textAlign: 'center', margin: '0.5rem' }">
            <h3>{{ data.title }}</h3>
            <p>{{ data.description }}</p>
          </div>
        </template>
      </Carousel>
    `,
  }),
};

export const Autoplay: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() { return { args, sampleItems }; },
    template: `
      <Carousel v-bind="args" :items="sampleItems" :autoplay="true" :autoplay-interval="3000" :circular="true">
        <template #item="{ data }">
          <div :style="{ background: data.color, padding: '2rem', borderRadius: '8px', color: 'white', textAlign: 'center', margin: '0.5rem' }">
            <h3>{{ data.title }}</h3>
          </div>
        </template>
      </Carousel>
    `,
  }),
};

export const MultipleVisible: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() { return { args, sampleItems }; },
    template: `
      <Carousel v-bind="args" :items="sampleItems" :num-visible="3" :num-scroll="1">
        <template #item="{ data }">
          <div :style="{ background: data.color, padding: '2rem', borderRadius: '8px', color: 'white', textAlign: 'center', margin: '0.5rem' }">
            <h3>{{ data.title }}</h3>
          </div>
        </template>
      </Carousel>
    `,
  }),
};
