<template>
  <div>
    <span>vue3.0</span>
    <button @click="increment">Count is: {{ state.count }}, double is: {{ state.double }}</button>
  </div>
</template>

<script>
import {
  reactive,
  watch,
  toRefs,
  computed,
  watchEffect,
  ref
} from "@vue/composition-api";
export default {
  setup() {
    const state = reactive({
      count: 12,
      a: 1,
      watchCount: 0,
      watchCount1: 1,
      double: computed(() => state.count + 2)
    });

    function increment() {
      state.count++;
    }

    watchEffect(
      () => {
        window.console.log("watchEffect", state.count, state.a);
      },
      {
        onTrack() {
          window.console.log("onTrack调用"); // 当反应性属性或ref作为依赖项被跟踪时
        },
        onTrigger() {
          window.console.log("ontrigger调用"); // 当观察程序回调由依赖项的变异触发时
        }
      }
    );
    watch(
      () => {
        return [state.watchCount, state.watchCount1];
      },
      (val, prev) => {
        window.console.log(val, prev);
      }
    );

    setTimeout(() => {
      state.watchCount++;
    }, 1000);
    const addRef = () => {
      state.count++;
    };
    return {
      // 将代理对象转换为纯对象。并对其每个key做包装，包装为ref
      ...toRefs(state),
      addRef,
      increment
    };
  }
};
</script>

<style scoped></style>
