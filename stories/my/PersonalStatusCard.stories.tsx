import PersonalStatusCard from '@compo/my/PersonalStatusCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PersonalStatusCard> = {
  title: 'Components/my/PersonalStatusCard',
  component: PersonalStatusCard,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PersonalStatusCard>;

export const Gold: Story = {
  args: {
    color: 'gold',
    label: '초대인원',
    amount: 0,
    unit: '명',
    iconURL: 'icon',
  },
};

export const Navy: Story = {
  args: {
    color: 'darkNavy',
    label: '총투자',
    amount: 30000,
    unit: '$',
    iconURL: 'icon',
  },
};
