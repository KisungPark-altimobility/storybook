import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

<<<<<<< HEAD
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
=======
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
>>>>>>> 1399a95719ae77175922315a81e5131d7207480a
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

<<<<<<< HEAD
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
=======
// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
>>>>>>> 1399a95719ae77175922315a81e5131d7207480a
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
