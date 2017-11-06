<template>
  <div>
      
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
      <img class="logo" src="../resource/外卖01_商品页.jpg">
    </div>
    <group title="cell demo " class="fromh1111111111111111111">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>
  </div>
</template>
  
<script>
import { Group, Cell,XHeader } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XHeader
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      headerByCus:'welcome to new world'
    }
  }
}
</script>

<style scoped>

.fromh1111111111111111111{
background-color: red;
}
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
