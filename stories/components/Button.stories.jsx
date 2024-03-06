// import { Meta, StoryObj } from "@storybook/react";
// eslint-disable-next-line no-unused-vars
import {Button, buttonVariants} from "../../src/components/Button/Button";

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'DBOX/Button',
    component: Button,
    tags: ["autodocs"],
    parameters:{
        layout: "centered"
    },
    args: {
        variants: buttonVariants
    }

};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {

};