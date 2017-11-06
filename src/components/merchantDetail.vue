<template>
    <div>
        <XHeader :left-options.backText="{backText: headerByCus}" :right-options="{showMore: true}" :left-options="{showBack: false}" class="theme-header-bg header-style">
            商家详情页
            <a slot="left" class="fcfff">{{headerByCus}}</a>
        </XHeader>
        <!--<div style="padding-top:40px;">
                                            <img src="../resource/外卖01_商品页.jpg"  class="width-percent-full">
                                       </div>-->
        <!--bottom tab bar-->
        <div class="detail-theme-header">
            <flexbox :gutter="0">
                <flexbox-item>
                    <div class="flex-demo ">图片</div>
                    <button v-on:click="testVif">testVif</button>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">
                        <flexbox orient="vertical">
                            <flexbox-item>
                                <div class="flex-demo"> 介绍</div>
                            </flexbox-item>
                            <flexbox-item>
                                <div class="flex-demo">产品</div>
                            </flexbox-item>
                            <flexbox-item>
                                <div class="flex-demo">质量</div>
                            </flexbox-item>
                        </flexbox>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">数量:4</div>
                </flexbox-item>
            </flexbox>
        </div>
    
        <divider>merchant news{{calHeight}}</divider>
        
        <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll swiper-theme-style" :show-dots="false">
            <span class="vertical-middlle">公告:</span>
            <swiper-item>
                <p>麻辣鸡排1 获得20金币</p>
            </swiper-item>
            <swiper-item>
                <p>麻辣鸡排2 消耗30金币</p>
            </swiper-item>
            <swiper-item>
                <p>麻辣鸡排3 获得30金币</p>
            </swiper-item>
            <swiper-item>
                <p>麻辣鸡排4 兑换【饿了么】畅享美食红包 消耗20金币</p>
            </swiper-item>
            <swiper-item>
                <p>麻辣鸡排5 兑换【饿了么】畅享美食红包 消耗20金币</p>
            </swiper-item>
            <swiper-item>
                <p>基本世神6 </p>
            </swiper-item>
        </swiper>
        <!--滑动餐品部分-->
        <!--左边部分滑动-->
        <div class="">
            <flexbox :gutter="0">
                <flexbox-item :span="3" class="goods-parent-scorll">
                    <scroller lock-x @on-scroll="onScroll" :style="{height:calHeight}" ref="scrollerEvent">
                        <div class="box2">
    
                            <p :class="{'a-active':index == currentIndex}" v-for="(i,index) in 10" style="padding:10px;border-bottom:1px dotted #fff;" v-on:click="goAnchor('#anchor-'+i,$refs.scrollerEvent,index)">
                                <!--i 是从 1开始的 index从 0开始的-->
                                <!--<a href="javascript:void(0)" > 
                                            原生锚点无法控制动画  </a>-->
                                餐拼 {{i}}
                                <!--<span v-show="index == currentIndex">激活</span>-->
                            </p>
                        </div>
                    </scroller>
                </flexbox-item>
                <flexbox-item class="goods-children-scorll">
                    <!--<button
                                  style="background:red;"
                                   type="primary" @click="$refs.scrollerEvent.reset({top:1000})">reset</button>-->
                    <scroller lock-x scrollbar-y @on-scroll="onScrollChild" :style="{height:calHeight}" ref="scrollerEvent">
                        <div class="box2">
                            <p v-for="i in 30" :id="'anchor-'+i" style="padding:10px;border-bottom:1px dotted grey;">
                                <panel :header="panelHeader(i)" :footer="footer" :list="list" :type="type"></panel>
                                <cell-form-preview :list="listCell"></cell-form-preview>
                            </p>
                        </div>
    
                    </scroller>
    
                </flexbox-item>
            </flexbox>
            <!--    
                        <div style="">
                            123
                        </div>-->
    
        </div>
        <!--右边部分滑动-->
    
    </div>
</template>

<script>
import {
    Swiper, SwiperItem, XHeader, ButtonTabItem, Flexbox, FlexboxItem, Divider, GroupTitle, Scroller
    , CellFormPreview, Panel
} from 'vux'

export default {
    components: {
        XHeader, Flexbox, FlexboxItem, Swiper, SwiperItem, Divider, GroupTitle, Scroller, CellFormPreview, Panel
    },
    data() {
        return {
            msg: 'Hello World!',
            headerByCus: 'ele',
            calHeight: (window.innerHeight - 250) + 'px',
            calHeight2: (window.innerHeight - 200) + 'px',
            listCell: [{
                label: 'price',
                value: '3.29'
            }, {
                label: 'disCount',
                value: '1.04'
            }, {
                label: 'count',
                value: '8.00'
            }],
            type: '1',
            list: [{
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title: '美味美食',
                desc: '自制鸡排byQT boy (好评如潮)',
                url: '/component/cell'
            }],
            footer: {
                title: '查看详情',
                url: 'http://vux.li'
            },
            chiledScrollTop: 0,
            currentIndex: 0, //初始化为0 因为第一个被触发
            elHTML:[]
        }
    },
    methods: {
        testVif(event) {
            console.log(event);
        },
        activeFun(el) {

            console.log('testelis', el);
        },
        goAnchor(selector, eventRe, index) {
            //v for 如何传递event
            this.currentIndex = index;
            let anchor = this.$el.querySelector(selector)
            // event.reset({top:anchor.offsetTop-100})
            // event.reset({top:anchor.offsetTop-50})
            eventRe.reset({ top: anchor.offsetTop }, 500)
            //  var interval =setInterval("test",50);
            //  function test(){

            //  }
            //this.chiledScrollTop   当前top
            // anchor.offsetTop  要设置的top
            // event.reset({top:anchor.offsetTop-100})
            // event.reset({top:anchor.offsetTop})

            //  console.log(this.chiledScrollTop);
            // this.chiledScrollTop = anchor.offsetTop
            // console.log(this.chiledScrollTop);

        },
        itemHref(i) {
            return '#item' + i
        },
        itemId(i) {
            return 'item' + i
        },
        panelHeader(i) {
            return '菜品' + i;
        },
        SetDefaultHeader(boolean) {
            //  this.$store.commit('incrementByPayload', {
            //   amount: 10
            // })
            //second fun
            this.$store.commit({
                type: 'setDefaultHeader',
                boolean: boolean
            })
        },
        onScroll(pos) {
            this.scrollTop = pos.top
        },
        onScrollChild(pos) {

            //控制this.currentIndex   滚动到对应的区域 ,让this.currentIndex 等于右边的区域的i
        //当用户点击的时候触发了这个方法....
          this.chiledScrollTop = pos.top  //少滑动了2px
           // this.elHTML 
           console.log(this.elHTML);
            for(let i=0;i<this.elHTML.length;i++){
              console.log('当前元素距离顶部的高度',this.elHTML[i]);
               console.log('滚动距离当前scroll顶部的距离',this.chiledScrollTop);
               //chiledScrollTop :用户滚动的距离
               //用户滚动距离小于 固定值:元素离顶部距离(195)+90的时候
               //滑动距离取最近接的一个
               //292 是第一个元素的高度 有20px pd 差值
               //
               if(  this.elHTML[i+1]  - this.elHTML[0]-(i+1)*2> this.chiledScrollTop ){
                         // console.log('我现在是几',i);                       
                          this.currentIndex = i;
                          console.log('xianzai???',this.currentIndex);
                          return false;
               }
            }
    //         if ($(item).offset().top <= scroll   Top ) {
    //     $target = $(item);
    //     //return false; // break
    //   }
           
          //  console.log(this.chiledScrollTop);
        },
    },
    mounted() {
        this.SetDefaultHeader(false)
        console.log('index html mounted', this.$store.state.appOptions.showHeader);
        //SetDefaultHeader
        // this.$store.state.appOptions.showHeader = false;


     //   console.log(this.$el.querySelector('#anchor-1'));

        for (let i = 1; i < 11; i++) {
           // console.log('push的值',this.$el.querySelector('#anchor-' + i).offsetTop);
            this.elHTML[i]=this.$el.querySelector('#anchor-' + i).offsetTop;
        }
        //移除第一个元素
        this.elHTML.shift();
        console.log(this.elHTML );
    },
    destroyed() {
        this.SetDefaultHeader(true);
    }

}
</script>

<style scoped>
.vux-header .vux-header-left a.fcfff {
    color: #fff;
}

.vux-header.theme-header-bg {
    background-color: #1c9cff;
}


.flex-demo {
    text-align: center;
    color: #fff;
}

.detail-theme-header {
    background-color: grey;
}

.swiper-theme-style {
    line-height: 30px;
}

.text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
}

.text-scroll p {
    font-size: 12px;
    text-align: center;
    line-height: 30px;
}

.calMiddleHeight {
    height: calc(100% - 10px);
}

.goods-parent-scorll {
    background-color: lightskyblue;
    color: #fff;
    text-align: center;
}

.goods-children-scorll {
    color: #000;
    text-align: center;
}

.goods-parent-scorll a:active {
    background: red;
}

.a-active {
    background: lightcoral;
}

.a-active a {
    color: #fff;
}
</style>
