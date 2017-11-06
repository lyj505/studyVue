import Vue from 'vue'
import Hello from '../components/HelloFromVux'
import Index from '../components/Index'
import imgShow from '../components/ImgShow' //识别大写字母开头的
import merchantDetail from '../components/merchantDetail'

export default [
  {
    path: '/hello',
    component: Hello
  }, {
    path: '/',
    component: Index
  }, {
    name: 'imgShow',
    path: '/imgShow',
    component: imgShow //路由没有配置component
  }, {
    name: 'merchantDetail',
    path: '/merchantDetail',
    component: merchantDetail
  },
  { path: '*', 
  component: Index }
]

