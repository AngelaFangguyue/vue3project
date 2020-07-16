<template>
  <div class="hello">
  <div>测试watch和watchEffect</div>
    <div>{{message}}</div>
    <div class="message">{{changeMessage}}</div>
    <button @click="handleMessage">Bless God</button>
  </div>
</template>


<script>
import { ref,watch,watchEffect} from "@vue/composition-api" //,watchEffect } from "@vue/composition-api"

export default {

    setup() {
        let message = ref('have no girlfriend')
        let changeMessage = ref('click the bottom btn will have a girlfriend!')
        
        // simple effect
        watchEffect(()=> {
          changeMessage.value = message.value  
        })//
        
        watch(message,(newVal,oldVal) => {
          changeMessage.value = newVal
          window.console.log("oldVal:",oldVal);
        })
        
        // method
        const handleMessage = function(){
          message.value =  'lied to you'
        }
        return {
          message,
          handleMessage,
          changeMessage
        }
    }
}
</script>

