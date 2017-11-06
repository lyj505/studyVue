
'use strict';
module.exports = {
  plugins: [
    'vux-ui', 'inline-manifest', 'progress-bar', 'duplicate-style',
    {
      name: 'less-theme',
      path: './src/assets/css/theme.less' //路径坑爹。。
    }
    // {
    //   name: 'i18n',
    //   vuxStaticReplace: false,
    //   staticReplace: false,
    //   extractToFiles: 'src/locales/components.yml',
    //   localeList: ['en', 'zh-CN']
    // },
  ]
}
