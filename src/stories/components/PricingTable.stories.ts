import type { Meta, StoryObj } from '@storybook/vue3';
import PricingTable from '../../components/PricingTable/PricingTable.vue';

const meta = {
  title: 'Components/PricingTable',
  component: PricingTable,
  tags: ['autodocs'],
} satisfies Meta<typeof PricingTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: 3,
    plans: [
      {
        name: 'Starter',
        price: '9',
        currency: '$',
        interval: 'month',
        features: ['5 projects', '10GB storage', 'Email support', 'Basic analytics'],
        ctaLabel: 'Start Free',
      },
      {
        name: 'Pro',
        price: '29',
        currency: '$',
        interval: 'month',
        features: ['Unlimited projects', '100GB storage', 'Priority support', 'Advanced analytics', 'Custom domains', 'API access'],
        highlighted: true,
        ctaLabel: 'Get Pro',
      },
      {
        name: 'Enterprise',
        price: '99',
        currency: '$',
        interval: 'month',
        features: ['Everything in Pro', 'Unlimited storage', 'Dedicated support', 'Custom integrations', 'SLA guarantee', 'SSO & SAML'],
        ctaLabel: 'Contact Sales',
      },
    ],
  },
};
