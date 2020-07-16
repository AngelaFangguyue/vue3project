<template>
  <div>
    <!--<button @click="increment">Count is: {{ count }}, double is: {{ double }}</button>-->
    <!-- <div>toRefs函数可以将 `reactive()` 创建出来的响应式对象，转换为普通的对象，只不过，这个对象上的每个属性节点，都是 `ref()` 类型的响应式数据，配合 `v-model` 指令能完成数据的双向绑定，在开发中非常高效。</div>
     <button @click="increment">Count is: {{ state.count }}, double is: {{ state.double }}</button>
     <br />-->
    <div>{{message}}</div>
    <div class="message">{{changeMessage}}</div>
    <button @click="handleMessage">Bless God</button>
  </div>
</template>

<script>
import {
  reactive,
  computed,
  watchEffect,
  watch,
  ref,
} from "@vue/composition-api"; //toRefs } from "@vue/composition-api";
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count + 2)
    });

    //也可以使用ref去定义一个变量
    let message = ref("have no girlfriend");
    let changeMessage = ref("click the bottom btn will have a girlfriend!");
    watchEffect(() => {
      changeMessage.value = message.value;
    });
    watch(message, (newVal, oldVal) => {
      window.console.log("观察message的新值和旧值newVal和oldVal:",newVal,oldVal);
      changeMessage.value = newVal;
    });

    // method
    const handleMessage = function() {
      message.value = "lied to you";
    };

    function increment() {
      state.count++;
    }

    return {
      state,
      //...toRefs(state),
      increment,
      message,
      handleMessage,
      changeMessage
    };
  }
};
</script>
