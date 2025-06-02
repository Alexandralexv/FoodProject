// babel.config.cjs
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // Убираем targets, если проблема сохраняется
        modules: "commonjs",
      },
    ],
  ],
};
