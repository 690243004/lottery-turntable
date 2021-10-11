<template>
  <div id="app">
    <LotterTurnable />
  </div>
</template>
<script>
import LotterTurnable from "./components/lottery-turntable.vue";
export default {
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