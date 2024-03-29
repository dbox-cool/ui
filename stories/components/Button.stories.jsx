import Button from "../../src/components/shadcn/Button/Button";

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'SHADCN/Button',
    component: Button,
    // tags: ["autodocs"],
    parameters:{
        layout: "centered"
    },
    argTypes:{
        variant: {
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'outline-primary' ],
            control: {type: 'select'}
        },
        hover: {
            options: ['default', 'outline'],
            control: {type: 'select'}
        },
        size: {
            options: ['default', 'lg', 'sm', 'icon'],
            control: {type: 'select'}
        },
        asChild: {
            control: {type: 'boolean'}
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