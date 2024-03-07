import ForgotPasswordForm from '../../src/components/ForgotPasswordForm/ForgotPasswordForm';

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'DBOX/Auth/ForgotPasswordForm',
    component: ForgotPasswordForm,
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