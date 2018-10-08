const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

// CSS 등 정적파일 로더 설정을 읽어옵니다.
// const vueLoaderConfig = require('../build/vue-loader.conf');

module.exports = (storybookBaseConfig, configType) => {
  // storybookBaseConfig.module.rules.find(rule => rule.test.source.includes('vue')).options = vueLoaderConfig;
  storybookBaseConfig.resolve  = {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      config: path.resolve(__dirname,'../build/config.js.json'),
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      lib: resolve('src/lib'),

    },
  };
  return storybookBaseConfig;
};
