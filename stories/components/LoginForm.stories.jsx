import LoginForm from '../../src/components/LoginForm/LoginForm';

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'DBOX/Auth/LoginForm',
    component: LoginForm,
    // tags: ["autodocs"],
    parameters:{
        layout: "centered"
    },
    args: {
        onSubmit: async () => { await new Promise( res => setTimeout(res, 3000) )  }
    }
};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {
};