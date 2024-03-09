import "../src/index.css"
import { withRouter } from "storybook-addon-react-router-v6";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [withRouter],  
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
