<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-zhuye",
  success: "icon-Group-",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-xianshi_jinggaotianchong",
  info: "icon-fl-xinxi",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-set_about_hov",
  weixin: "icon-weixin-copy",
  mail: "icon-youxiang",
  github: "icon-github",
  qq: "icon-QQ-circle-fill",
  arrowUp: "icon-tubiaozhizuo-",
  arrowDown: "icon-iconfonticonfonti2",
  empty: "icon-empty",
  chat: "icon-liuyan",
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2437707_y1kvdx8tst.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
