import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
  parameters: {
<<<<<<< HEAD
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
=======
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
>>>>>>> 1399a95719ae77175922315a81e5131d7207480a
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const LoggedOut: Story = {};

<<<<<<< HEAD
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
=======
// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
>>>>>>> 1399a95719ae77175922315a81e5131d7207480a
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
