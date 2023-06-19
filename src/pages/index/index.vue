<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="text-red-600 text-3xl">Tailwind CSS</text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
});
</script>

<style lang="postcss" scoped>
// 你好呀
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  // 你好
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
