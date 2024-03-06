import LoginForm from '../../src/components/LoginForm/LoginForm';

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'DBOX/LoginForm',
    component: LoginForm,
    tags: ["autodocs"],
    parameters:{
        layout: "centered"
    },
    args: {
        img_src: ""
    },
};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {
};