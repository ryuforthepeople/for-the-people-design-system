import type { Meta, StoryObj } from '@storybook/vue3';
import Form from '../../components/Form/Form.vue';
import FormField from '../../components/Form/FormField.vue';

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: ['vertical', 'horizontal'] },
  },
  args: { layout: 'vertical' },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: (args) => ({
    components: { Form, FormField },
    setup: () => ({ args }),
    template: `
      <Form v-bind="args" style="max-width: 400px;">
        <FormField label="Name" required hint="Enter your full name" html-for="name">
          <input id="name" type="text" placeholder="John Doe" style="padding: 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: #fff; width: 100%;" />
        </FormField>
        <FormField label="Email" required html-for="email">
          <input id="email" type="email" placeholder="john@example.com" style="padding: 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: #fff; width: 100%;" />
        </FormField>
        <FormField label="Bio" hint="Optional" html-for="bio">
          <textarea id="bio" rows="3" style="padding: 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: #fff; width: 100%; resize: vertical;"></textarea>
        </FormField>
      </Form>
    `,
  }),
};

export const Horizontal: Story = {
  args: { layout: 'horizontal' },
  render: (args) => ({
    components: { Form, FormField },
    setup: () => ({ args }),
    template: `
      <Form v-bind="args" style="max-width: 500px;">
        <FormField label="Username" required html-for="user">
          <input id="user" type="text" placeholder="johndoe" style="padding: 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: #fff; width: 100%;" />
        </FormField>
        <FormField label="Password" required html-for="pass">
          <input id="pass" type="password" style="padding: 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: #fff; width: 100%;" />
        </FormField>
      </Form>
    `,
  }),
};

export const WithErrors: Story = {
  render: () => ({
    components: { Form, FormField },
    template: `
      <Form style="max-width: 400px;">
        <FormField label="Email" required error="Please enter a valid email address" html-for="err-email">
          <input id="err-email" type="email" value="invalid" style="padding: 8px; border-radius: 6px; border: 1px solid #ef4444; background: rgba(255,255,255,0.05); color: #fff; width: 100%;" />
        </FormField>
        <FormField label="Name" required error="Name is required" html-for="err-name">
          <input id="err-name" type="text" style="padding: 8px; border-radius: 6px; border: 1px solid #ef4444; background: rgba(255,255,255,0.05); color: #fff; width: 100%;" />
        </FormField>
      </Form>
    `,
  }),
};
