<template>
  <div id="app" style="height:100%;">
    <loading v-model="isLoading"></loading>

    <view-box ref="viewBox" 
    body-padding-top="46px" body-padding-bottom="55px">
    <!--body padding top 没用上-->
      <!--header-->
      <!-- v-bind:style="{ paddingTop: this.$store.state.appOptions.showHeader?'46px':'0px'}"-->
      <x-header
      
       slot="header" class="theme-header-bg header-style" v-if="this.$store.state.appOptions.showHeader"></x-header>
      <!--body-->
      <transition>
        <router-view class="router-view">
  
        </router-view>
      </transition>
      <!--bottom-->
      <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="true" slot="bottom">
        <tabbar-item :link="{path:'/hello'}" :selected="route.path === '/hello'">
          <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
          <span slot="label">{{('Hello')}}</span>
        </tabbar-item>
        <tabbar-item badge="9" :link="{path:'/merchantDetail'}" :selected="route.path === '/merchantDetail'" >
          <span class="demo-icon-22" slot="icon">&#xe633;</span>
          <span slot="label">
            <!--<span v-if="true" class="vux-demo-tabbar-component">{{('componentName')}}</span>-->
            <!--<span v-else>{{('Demo')}}</span>-->
            <span>{{('点餐')}}</span>
          </span>
        </tabbar-item>
        <tabbar-item show-dot :link="{path:'/'}" :selected="route.path === '/'">
          <span class="demo-icon-22" slot="icon">&#xe630;</span>
          <span slot="label">{{('首页')}}</span>
        </tabbar-item>
        <!--轮播循环例子-->
        <tabbar-item :link="{name:'imgShow'}" :selected="route.path === '/imgShow'">
          <span class="demo-icon-22" slot="icon">&#xe631;</span>
          <span slot="label">{{('imgShow')}}</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem, ViewBox,Loading  } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    XHeader, Tabbar, TabbarItem, ViewBox,Loading
  },
  data() {
    return {
      test: true,
      headOption: this.$store.state.appOptions.showHeader //这种事赋值操作没用
    }
  },
  methods: {
    headOption1() {
      //  this.$store.commit('incrementByPayload', {
      //   amount: 10
      // })
      //second fun
      return this.$store.state.appOptions.showHeader;
    },
    viewBoxPdt(){
     return   this.$store.state.appOptions.showHeader? '46px':'0px'
    }
  },
  watch: {
    path(path) {
      if (path === '/component/demo') {
        this.$router.replace('/demo')
        return
      }
      if (path === '/demo') {

      }
      if (path === '/') {
        this.$router.replace('/')
      }
      else {
        this.box && this.box.removeEventListener('scroll', this.handler, false)
      }
    }
  },
  computed: {
    ...mapState({
      route: (state) => state.route,//在这里引用state.route 必须要在main.js使用sync异步
      path: (state) => state.route.path, //vuex取得并使用
      isLoading: state => state.vux.isLoading 
    })
  },
  mounted() {
    this.g.ceshi();
    // console.log(this.route);
    console.log("route",this.$route);
  }
  // computed: {
  //   ...mapState({
  //     route: state => state.route,
  //     path: state => state.route.path,
  //     deviceready: state => state.app.deviceready,
  //     demoTop: state => state.vux.demoScrollTop,
  //     isLoading: state => state.vux.isLoading,
  //     direction: state => state.vux.direction
  //   }),
  //   isShowBar() {
  //     if (/component/.test(this.path)) {
  //       return true
  //     }
  //     return false
  //   },
  //   leftOptions() {
  //     return {
  //       showBack: this.route.path !== '/'
  //     }
  //   },
  //   rightOptions() {
  //     return {
  //       showMore: true
  //     }
  //   },
  //   headerTransition() {
  //     return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
  //   },
  //   componentName() {
  //     if (this.route.path) {
  //       const parts = this.route.path.split('/')
  //       if (/component/.test(this.route.path) && parts[2]) return parts[2]
  //     }
  //   },
  //   isDemo() {
  //     return /component|demo/.test(this.route.path)
  //   },
  //   isTabbarDemo() {
  //     return /tabbar/.test(this.route.path)
  //   },
  //   title() {
  //     if (this.route.path === '/') return 'Home'
  //     if (this.route.path === '/project/donate') return 'Donate'
  //     if (this.route.path === '/demo') return 'Demo list'
  //     return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
  //   }
  // },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less'; //引入的方法问题,其实是没问题的,官方的包就按官方的更新,
@import '~vux/src/styles/1px.less';////自己的包自己引入就好了,所以从modules 里面的内容没有必要去变化
@import '~vux/src/styles/tap.less'; //关于主题的东西 再看吧
@import url('./assets/css/reset-user.less');

//上面是微信的ui reset 改了个名字封装在里面
//封装less文件 公用类


.vux-header .vux-header-left a.fcfff {
  color: #000;
}

.vux-header.theme-header-bg {
  background-color: red;
}



.vux-header.theme-header-bg .vux-header-left a,
.vux-header.theme-header-bg .vux-header-left button,
.vux-header.theme-header-bg .vux-header-right a,
.vux-header.theme-header-bg .vux-header-right button {
  color: #fff;
}

.vux-header.theme-header-bg .vux-header-left .left-arrow:before {
  border: 1px solid #fff;
  border-width: 1px 0 0 1px;
}



// reset
body {
  background-color: #fbf9fe;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}

.weui-tabbar.vux-demo-tabbar {
  /** backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);**/
}

.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #F70968;
}

.vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}

.demo-icon-22:before {
  content: attr(icon);
}

.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}

.weui-tabbar__icon+.weui-tabbar__label {
  margin-top: 0!important;
}

.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

@font-face {
  font-family: 'vux-demo';
  /* project id 70323 */
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
}

.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #04BE02;
}

.demo-icon-big {
  font-size: 28px;
}

.demo-icon:before {
  content: attr(icon);
}

.router-view {
  width: 100%;
  top: 46px;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.menu-title {
  color: #888;
}

// common css
.width-percent-full {
  width: 100%;
}

.vux-header.header-style {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}

.vertical-middlle{
  vertical-align: middle;
}
</style>
