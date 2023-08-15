// postcss.config.js
module.exports = {
  // 插件
  plugins: {
    // "postcss-px-to-viewport": {
    //   // 插件的配置
    //   viewportWidth: 375, // UI设计稿的宽度
    // },

    "postcss-pxtorem": {
      // 375 =》 37.5
      // 750 =》 75
      // rootValue: 75, // UI设计搞 / 10
      rootValue({ file }) {
        return file.indexOf("vant") !== -1 ? 37.5 : 75;
      },
      propList: ["*"],
    },
  },
};
