import type { Meta, StoryObj } from '@storybook/vue3';
import Testimonial from '../../components/Testimonial/Testimonial.vue';

const meta = {
  title: 'Components/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['card', 'minimal'] },
    rating: { control: { type: 'range', min: 0, max: 5 } },
  },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    quote: 'This design system has completely transformed how our team builds UI. We ship 3x faster now.',
    author: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechCorp',
    avatar: 'https://i.pravatar.cc/96?img=1',
    rating: 5,
    variant: 'card',
  },
};

export const Minimal: Story = {
  args: {
    quote: 'Clean, consistent, and a joy to work with. Best investment we made this year.',
    author: 'Marcus Johnson',
    role: 'Lead Designer',
    company: 'DesignStudio',
    rating: 4,
    variant: 'minimal',
  },
};
