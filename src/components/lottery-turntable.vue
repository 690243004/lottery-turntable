<template>
  <div class="xh-lottery">
    <!-- 奖品等分区域 -->
    <div class="wheel-main">
      <div class="price-list">
        <div
          :key="i"
          v-for="(c, i) in new Array(10).fill(10)"
          class="price-list-item"
        >
          奖品{{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.xh-lottery {
  .wheel-main {
    width: 300px;
    height: 300px;
    background : #66ccff;
  }

}
</style>