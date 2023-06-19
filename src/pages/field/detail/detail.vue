<template>
  <div class="sx-w-full sx-h-full sx-overflow-y-auto">
    <image mode="aspectFill" class="field-image sx-w-full" src="http://imgs.shuxitech.com/farm/field_img/308ea1672823981.png" />
    <div bg="#eee" class="sx-fcc sx-color-bluegray">你好</div>
    <div class="sx-bg-gradient-to-t sx-from-_wn_f39c12-ss-60 sx-via-_wn_2ecc71-cc-80 sx-to-_wn_9b59b6_70">渐变容器样式</div>
    <div class="sx-icon-btn sx-color-base" bg-_wn_eee px-10>视图按钮</div>
    <navigator url="/pages/index/index"><button type="primary">通过navigator组件跳转到index页面</button></navigator>
    <button class="btn" type="default">测试默认颜色额外添加类名</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.field-image {
  height: 360rpx;
  text-align: center;
}

.btn {
  color: $uni-color-primary;
}
</style>
