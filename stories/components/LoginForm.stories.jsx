import LoginForm from '../../src/components/LoginForm/LoginForm';

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'DBOX/Auth/LoginForm',
    component: LoginForm,
    tags: ["autodocs"],
    parameters:{
        layout: "centered"
    },
    args: {
        img_src: "",
        system_name: ""
    },
};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {
};