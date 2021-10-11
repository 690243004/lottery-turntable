<template>
  <div class="xh-lottery">
    <!-- 奖品等分区域 -->
    <div class="wheel-main">
      <div class="price-list">
        <div
          :style="item.style"
          :key="i"
          v-for="(item, i) in dePrices"
          class="price-list-item"
        >
          <div :style="item.textStyle" class="text">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 奖品数量必须大于 4
 *
 * 分割圆 会用到 skewY 属性
 * - skewY值 = 90deg - 360deg/奖品数量，例如 奖品数量为4，则 skewY = 0
 * - 各个扇形的旋转值 = 360deg / 奖品数量
 * - 文字旋转值 = 180 / 奖品数量
 */
export default {
  props: {
    prices: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dePrices: [],
      skewY: 0,
      avgRotate: 0,
    };
  },
  methods: {
    calSkeY() {
      this.skewY = 90 - 360 / this.prices.length;
    },

    calAvgRotate() {
      this.avgRotate = 360 / this.prices.length;
    },

    pricesAdapter() {
      let countRotate = 0;
      this.dePrices = this.prices.map((item,index) => {
        const res = {
          ...item,
          style: {
            transform: `skewY(-${this.skewY}deg) rotate(${countRotate}deg)`,
            zIndex : index
          },
          textStyle: {
            transform: `skewY(${this.skewY}deg) rotate(${
              180 / this.prices.length
            }deg)`,
          },
        };

        countRotate += this.avgRotate;

        return res;
      });
    },
  },

  watch: {
    prices: {
      handler() {
        this.calSkeY();
        this.calAvgRotate();
        this.pricesAdapter();
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.xh-lottery {
  .wheel-main {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #66ccff;
    position: relative;
    overflow: hidden;
  }

  .price-list {
    &-item {
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 50%;
      transform-origin: 0% 100%;
      transform: rotate(0deg) skewY(-60deg);

      .text {
        position: absolute;
        left: -100%;
        width: 200%;
        height: 200%;
        text-align: center;
        transform: skewY(60deg) rotate(15deg);
        padding-top: 20px;
      }

      &:nth-child(2n) {
        background: #fff;
      }

      &:nth-child(2n + 1) {
        background: #66ccff;
      }
    }
  }
}
</style>
