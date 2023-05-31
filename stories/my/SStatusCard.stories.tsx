import type { Meta, StoryObj } from '@storybook/react';
import SStatusCard from '@compo/my/SStatusCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SStatusCard> = {
  title: 'Components/my/SStatusCard',
  component: SStatusCard,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SStatusCard>;

const Icon = () => <i>icon</i>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    icon: <Icon />,
    label: '총 스토리지 파워',
    data: '102.75',
    unit: 'TB',
    alignMode: 'vertical',
    themeType: 'light',
  },
};
