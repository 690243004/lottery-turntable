<template>
  <div class="xh-lottery">

    <LotterySector :radius="150" :size="0.1" />


    <!-- 奖品等分区域 -->
<!--     <div class="sector">
      <div class="sector-inner1"></div>
      <div class="sector-inner2"></div>
    </div> -->
  </div>
</template>

<script>
import LotterySector from './lottery-sector.vue'
/**
 *
 */
export default {
  props: {
    prices: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
  components : { 
    LotterySector
  }
};
</script>

<style lang="scss" >
.xh-lottery {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .lottery-sector { 
    position: absolute;
    transform-origin: left bottom;
    &:nth-child(1) { 
      // transform: rotate(45deg);
      z-index: 100;
    }
  }
}

</style>
