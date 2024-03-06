// import { Meta, StoryObj } from "@storybook/react";
import Button from "../../src/components/Button/Button";

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'DBOX/Button',
    component: Button,
    tags: ["autodocs"],
    parameters:{
        layout: "centered"
    },
    args: {
        /** Just a Label */
        label: 'Hello World'
    },
};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {
    args: {
        /** Just a Label */
        label: 'Hello World'
    },
};