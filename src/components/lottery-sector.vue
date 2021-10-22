<template>
  <div :style="outerCss" class="lottery-sector">
    <div :style="inner1Css" class="lottery-sector-inner1"></div>
    <div :style="inner2Css" class="lottery-sector-inner2">
      <span :style="textCss" class="lottery-sector-inner2-text">谢谢参与</span>
    </div>
  </div>
</template>

<script>
import { getPx } from "./utils";
export default {
  props: {
    radius: {
      type: [Number, String],
      default: "100px",
    },
    size: {
      type: [Number, String],
      default: 0.25,
    },
    text: String,
  },
  computed: {
    radiusPx() {
      return getPx(this.radius);
    },
    outerCss() {
      return {
        width: this.radiusPx,
        height: this.radiusPx,
      };
    },
    inner1Css() {
      return {
        width: this.radiusPx,
        height: this.radiusPx,
      };
    },
    inner2Css() {
      return {
        width: this.radiusPx,
        height: getPx(parseFloat(this.radius) * 2),
        left: getPx(-parseFloat(this.radiusPx)),
        transform: `rotate(${360 * this.size}deg)`,
        borderRadius: `${this.radiusPx} 0 0 ${this.radiusPx}`,
      };
    },
    textCss() {
      return {
        transform: `rotate(-${(360 * this.size) / 2}deg) translate(-50%,-50%)`,
        // 宽度 = r * \sin{ 360 * this.size }
        width: getPx(parseFloat(this.radius) * Math.sin(Math.PI * this.size)),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.lottery-sector {
  position: relative;
  overflow: hidden;
  background: #66ccff;

  &-inner1 {
    position: absolute;
    z-index: 10;
    background: #ffeab1;
  }

  &-inner2 {
    transform-origin: right center;
    position: absolute;
    top: 0;
    z-index: 11;
    background: purple;

    &-text {
      color: #fff;
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
    }
  }
}
</style>
