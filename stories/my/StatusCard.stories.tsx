import StatusCard from '@compo/my/StatusCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatusCard> = {
  title: 'Components/my/StatusCard',
  component: StatusCard,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof StatusCard>;

export const Primary: Story = {
  args: {
    iconURL: 'icon',
    label: 'Proofs Power Second',
    amount: 0,
    unit: 'PPS',
  },
};
