<template>
  <div class="hello">
   <h1>let u see 1111111</h1>
   <swiper auto loop :list="List" :index="index" @on-index-change="onIndexChange"></swiper>
   <!--<img class="logo" src="../resource/外卖01_商品页.jpg">-->
   <!--页面上无所谓,由于使用了webpack ,在js引用的话必须要去import一次-->
  </div>
</template>

<script>
import  {Swiper, GroupTitle, SwiperItem, XButton, Divider}  from 'vux'

import logoSrc from '../resource/外卖05_评价页.jpg' //只要import了的文件才会去打包b uild生成
//import 或者require 图片进来 由于使用了webpack的方式...


const baseList = [{
  url: 'javascript:',
  img: logoSrc,
  // require('https://static.vux.li/demo/1.jpg') 

  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: require('../resource/外卖06_商家页.jpg'),
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]


//轮播点击放大的功能...？
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  title: `(可点击)${item.title}`
}))


export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      List:urlList,
      index:0
    }
  },
  components:{
   Swiper, GroupTitle, SwiperItem, XButton, Divider
  },
  methods:{
    onIndexChange(index){
       this.index = index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
