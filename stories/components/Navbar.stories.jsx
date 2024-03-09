import { withRouter } from 'storybook-addon-react-router-v6';
import Navbar from '../../src/components/Navbar/Navbar';

/** @type {import('@storybook/react').Meta} */
export default {
    title: 'DBOX/Navbar',
    decorators: [withRouter],
    component: Navbar,
    // tags: ["autodocs"],
    args: {
    }
};

/** @type {import('@storybook/react').StoryObj} */
export const Primary = {
};