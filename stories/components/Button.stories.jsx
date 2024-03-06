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
    argTypes:{
        variant: {
            // options: Object.keys(buttonVariants ),
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link' ],
            control: {type: 'select'}
        },
        size: {
            options: ['default', 'lg', 'sm', 'icon'],
            control: {type: 'select'}
        }
    },
    args: {
        variant: 'default',
        children: "hey"
    }

};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {

};