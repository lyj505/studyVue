import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)  //在这里也要use 一次

const  store1 =  new Vuex.Store({
    state: {
      appOptions: {
        showHeader: true
      }
    },
    mutations: {
      setDefaultHeader(state, payload) {
        state.appOptions.showHeader = payload.boolean;
      }
    }
  })

  store1.registerModule('vux', { // 名字自己定义
    state: {
      isLoading: false
    },
    mutations: {
      updateLoadingStatus (state, payload) {
        state.isLoading = payload.isLoading
      }
    }
  })


export default store1;
