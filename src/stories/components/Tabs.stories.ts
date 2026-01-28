import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Tabs from '../../components/Tabs/Tabs.vue';
import TabPanel from '../../components/Tabs/TabPanel.vue';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    activeIndex: { control: 'number' },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Tabs, TabPanel },
    setup() {
      const active = ref(0);
      return { args, active };
    },
    template: `
      <Tabs v-bind="args" v-model:activeIndex="active">
        <TabPanel header="Overview">
          <p style="color: #9ea5c2; padding: 16px 0;">Overview content goes here.</p>
        </TabPanel>
        <TabPanel header="Details">
          <p style="color: #9ea5c2; padding: 16px 0;">Details content with more information.</p>
        </TabPanel>
        <TabPanel header="Settings">
          <p style="color: #9ea5c2; padding: 16px 0;">Settings panel content.</p>
        </TabPanel>
      </Tabs>
    `,
  }),
};
