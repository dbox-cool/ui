import { Loading } from '../../src/components/Loading';

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'DBOX/Loading',
    component: Loading,
    tags: ["autodocs"],
    parameters:{
        layout: "centered"
    },
    argTypes:{
        variant: {
            options: ['default', 'accent' ],
            control: {type: 'select'}
        },
        size: {
            options: ['sm', 'default', 'lg'],
            control: {type: 'select'}
        }
    },
};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {
};