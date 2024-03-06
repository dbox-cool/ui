import LoginForm from '../../src/components/LoginForm/LoginForm';

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'DBOX/Auth/LoginForm',
    component: LoginForm,
    tags: ["autodocs"],
    parameters:{
        layout: "centered"
    },
    argTypes:{
        img_src: {
            control: {type: "text"}
        },
        system_name: {
            control: {type: "text"}
        }
    },
    args: {
        img_src: undefined,
        system_name: undefined
    },
};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {
};