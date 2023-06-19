import presetWeapp from "unocss-preset-weapp";
import { defineConfig } from "unocss";
import { transformerAttributify, transformerClass, defaultAttributes } from "unocss-preset-weapp/transformer";

const transformRules = {
  '.': '-ddd-',
  '/': '-ss-',
  ':': '-cc-',
  '%': '-pp-'
}

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      // h5兼容
      // 只开发小程序可删除
      platform: "uniapp",
      isH5: process.env.UNI_PLATFORM === "h5",
      prefix: 'sx-', // 为了避免原子化组件冲突，添加自定义前缀
    }),
  ],
  shortcuts: [
    {
      "sx-border-base": "sx-border sx-border-gray-500_10",
      "sx-wh-full": "sx-w-full sx-h-full",
      'sx-fcc': 'sx-flex sx-justify-center sx-items-center',
      "sx-icon-btn": 'sx-text-16 sx-inline-block sx-cursor-pointer sx-select-none sx-opacity-75 sx-transition sx-duration-200 sx-ease-in-out sx-hover-cc-opacity-100 sx-hover-cc-text-primary sx-outline-none'
    },
  ],

  theme: {
    colors: {
      primary: 'var(--primary-color)',
      base: 'var($uni-theme-base)',
    },
  },

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      classPrefix: 'sx-',
      attributes: [...defaultAttributes]
    }),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(
      {
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]my-folder[\\/]/],
        include: [/\.vue$/, /\.vue\?vue/],
        transformEscape: true,
        transformRules: transformRules
      }
    ),
  ],
});
