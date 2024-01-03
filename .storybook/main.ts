import type { StorybookConfig } from "@storybook/vue3-vite";
import ElementPlus from "unplugin-element-plus/vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // async viteFinal(config, { configType }) {
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [ElementPlus({})],
      modules: {},
      assetsInclude: ["/sb-preview/runtime.js"],
    });
  },
};
export default config;
