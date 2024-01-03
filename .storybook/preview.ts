import type { Preview } from "@storybook/vue3";
import "../src/assets/typography.scss";
import "../src/assets/variables.scss";
import "../src/assets/colors.scss";

const preview: Preview = {
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
