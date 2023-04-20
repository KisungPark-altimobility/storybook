import type { Meta, StoryObj } from "@storybook/react";

import { NextImage } from "../components/NextImage";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NextImage> = {
    title: "Example/NextImage",
    component: NextImage,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NextImage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {},
};
