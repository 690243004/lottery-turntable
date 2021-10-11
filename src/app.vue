<template>
  <div id="app">
    <LotterTurnable :prices="prices" />
  </div>
</template>
<script>
import LotterTurnable from "./components/lottery-turntable.vue";
import { prices } from './components/mock'
export default {
  data() { 
    return { 
      prices
    }
  },
  components: {
    LotterTurnable,
  },
};
</script>
<style lang='scss' >
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
}
#app {
  background: url(./images/1020628.jpg) no-repeat;
  background-size: cover;
}
</style>