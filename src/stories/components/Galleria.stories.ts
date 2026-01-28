import type { Meta, StoryObj } from '@storybook/vue3';
import Galleria from '../../components/Galleria/Galleria.vue';

const sampleImages = [
  { src: 'https://picsum.photos/800/400?random=1', thumbnail: 'https://picsum.photos/100/60?random=1', alt: 'Image 1', title: 'Nature', description: 'Beautiful landscape' },
  { src: 'https://picsum.photos/800/400?random=2', thumbnail: 'https://picsum.photos/100/60?random=2', alt: 'Image 2', title: 'City', description: 'Urban skyline' },
  { src: 'https://picsum.photos/800/400?random=3', thumbnail: 'https://picsum.photos/100/60?random=3', alt: 'Image 3', title: 'Ocean', description: 'Waves crashing' },
  { src: 'https://picsum.photos/800/400?random=4', thumbnail: 'https://picsum.photos/100/60?random=4', alt: 'Image 4', title: 'Mountains', description: 'Snow-capped peaks' },
];

const meta = {
  title: 'Components/Galleria',
  component: Galleria,
  tags: ['autodocs'],
  argTypes: {
    activeIndex: { control: 'number' },
    fullscreen: { control: 'boolean' },
    showThumbnails: { control: 'boolean' },
    showItemNavigators: { control: 'boolean' },
    showIndicators: { control: 'boolean' },
    circular: { control: 'boolean' },
    autoplay: { control: 'boolean' },
    autoplayInterval: { control: 'number' },
    thumbnailsPosition: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  args: {
    items: sampleImages,
    showThumbnails: true,
    showItemNavigators: true,
    showIndicators: true,
    circular: true,
  },
} satisfies Meta<typeof Galleria>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithAutoplay: Story = { args: { autoplay: true, autoplayInterval: 3000 } };
export const NoThumbnails: Story = { args: { showThumbnails: false } };
export const IndicatorsOnly: Story = { args: { showThumbnails: false, showItemNavigators: false, showIndicators: true } };
