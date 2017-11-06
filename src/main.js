
console.log(process.env); // 存在

if(process.env.NODE_ENV == 'production'){

}else{
  console.log(VERSION)
}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//如果不使用相对路径或者绝对路径，node默认会去node_modules/文件夹下去找，例如：
import FastClick from 'fastclick'//移动端快速点击
import VueRouter from 'vue-router'
import * as App_vue from './App' //export default 挂载点app 这个app 挂载点的Vue的位置也可以放在文件夹内部
//export declare function sync
import { sync } from 'vuex-router-sync'  // 只能这么引入sync
import routes from './router/index'

/// export default 一个数组
Vue.use(VueRouter) //在启动页面启用vue 路由 
import Store1 from './store/store1'

////////////////


/////////////////
//ajax
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)  
require('es6-promise').polyfill()

///使用axios
const store = Store1;


const router = new VueRouter({
  mode: 'history', //服务器还是需要解决。单页应用为什么不好seo？？？？去掉了之后是否可以解决这个问题
  routes,
  //  scrollBehavior (to, from, savedPosition) {
  //     // 如果你的連結是帶 # 這種
  //     // to.hash 就會有值(值就是連結)
  //     // 例如 #3
  //     if (to.hash) {
    //       return {
      //         // 這個是透過 to.hash 的值來找到對應的元素
  //         // 照你的 html 來看是不用多加處理這樣就可以了
  //         // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
  //         selector: to.hash
  //       }
  //     }
  //   }
})

////增加loading的缓冲
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  console.log("init")
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

FastClick.attach(document.body)  //快速点击

Vue.config.productionTip = true; //vue 生产环境的提示


sync(store, router)//把全局变量和路由方巾sync处理

////


import method from './util/g'

Vue.prototype.g = method;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App_vue)
}).$mount('#app-box')  //通过index.html的app-box 启动的 相当于这个是启动页面
