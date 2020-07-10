<template>
  <header
    :style="{
    backgroundColor: color?color:defaultColor
  }"
  >{{title}}{{color}}{{colorProp}}</header>
</template>
<script>
import { reactive } from "@vue/composition-api";
export default {
  // 父组件传递进来更改该头部组件的属性值
  props: {
    // 标题
    title: String,
    // 颜色
    color: String
  },
  setup(p, x) {
    window.console.log("header：setup：X：",x);
    //console.log("header：setup：X：",x);
    const state = reactive({
      // defaultColor: "red"
      defaultColor: "yellow",
      colorProp: p.color,
    });


  

    return {
      ...state,
  
    };
  }
};
</script>
<style scoped>
header {
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: white;
}
</style>